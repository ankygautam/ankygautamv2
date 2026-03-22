import { useEffect, useRef, useState } from 'react';

type MeshPoint = {
  opacity: number;
  radius: number;
  vx: number;
  vy: number;
  x: number;
  y: number;
};

const MOBILE_BREAKPOINT = 640;
const TABLET_BREAKPOINT = 1024;

function createPoints(width: number, height: number, reducedMotion: boolean): MeshPoint[] {
  const pointCount =
    width < MOBILE_BREAKPOINT ? 11 : width < TABLET_BREAKPOINT ? 15 : 19;

  return Array.from({ length: pointCount }, () => {
    const distribution = Math.random();

    let x = width * (0.58 + Math.random() * 0.4);

    if (distribution > 0.72 && distribution <= 0.9) {
      x = width * (0.38 + Math.random() * 0.28);
    } else if (distribution > 0.9) {
      x = width * (0.2 + Math.random() * 0.12);
    }

    const speed = reducedMotion ? 0 : 0.015 + Math.random() * 0.026;

    return {
      x,
      y: height * (0.08 + Math.random() * 0.84),
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed * 0.72,
      radius: 0.85 + Math.random() * 1.25,
      opacity: 0.42 + Math.random() * 0.32,
    };
  });
}

export function HeroMeshBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const pointsRef = useRef<MeshPoint[]>([]);
  const sizeRef = useRef({ height: 0, width: 0 });
  const lastTimeRef = useRef(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const applyPreference = () => setReducedMotion(media.matches);

    applyPreference();
    media.addEventListener('change', applyPreference);

    return () => media.removeEventListener('change', applyPreference);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return undefined;
    }

    const context = canvas.getContext('2d');

    if (!context) {
      return undefined;
    }

    const resize = () => {
      const parent = canvas.parentElement;

      if (!parent) {
        return;
      }

      const width = parent.clientWidth;
      const height = parent.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      sizeRef.current = { height, width };
      pointsRef.current = createPoints(width, height, reducedMotion);
    };

    const render = (time: number) => {
      const { width, height } = sizeRef.current;

      if (!width || !height) {
        frameRef.current = window.requestAnimationFrame(render);
        return;
      }

      const delta = lastTimeRef.current ? (time - lastTimeRef.current) / 16.67 : 1;
      lastTimeRef.current = time;

      context.clearRect(0, 0, width, height);

      const points = pointsRef.current;

      for (const point of points) {
        if (!reducedMotion) {
          point.x += point.vx * delta;
          point.y += point.vy * delta;

          if (point.x < width * 0.16 || point.x > width * 1.04) {
            point.vx *= -1;
          }

          if (point.y < height * 0.04 || point.y > height * 0.96) {
            point.vy *= -1;
          }
        }
      }

      const threshold = width < MOBILE_BREAKPOINT ? 110 : 155;

      for (let i = 0; i < points.length; i += 1) {
        for (let j = i + 1; j < points.length; j += 1) {
          const first = points[i];
          const second = points[j];
          const dx = first.x - second.x;
          const dy = first.y - second.y;
          const distance = Math.hypot(dx, dy);

          if (distance > threshold) {
            continue;
          }

          const averageX = (first.x + second.x) / 2;
          const rightBias =
            averageX < width * 0.28 ? 0.14 : averageX < width * 0.52 ? 0.48 : 1;
          const alpha =
            (1 - distance / threshold) *
            0.12 *
            Math.min(first.opacity, second.opacity) *
            rightBias;

          if (alpha < 0.012) {
            continue;
          }

          context.beginPath();
          context.moveTo(first.x, first.y);
          context.lineTo(second.x, second.y);
          context.strokeStyle = `rgba(224, 229, 235, ${alpha})`;
          context.lineWidth = averageX > width * 0.55 ? 0.85 : 0.65;
          context.stroke();
        }
      }

      for (const point of points) {
        const glow = context.createRadialGradient(
          point.x,
          point.y,
          0,
          point.x,
          point.y,
          point.radius * 4,
        );

        glow.addColorStop(0, `rgba(220, 226, 232, ${0.12 * point.opacity})`);
        glow.addColorStop(1, 'rgba(220, 226, 232, 0)');

        context.beginPath();
        context.fillStyle = glow;
        context.arc(point.x, point.y, point.radius * 4, 0, Math.PI * 2);
        context.fill();

        context.beginPath();
        context.fillStyle = `rgba(228, 233, 238, ${0.46 * point.opacity})`;
        context.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        context.fill();
      }

      frameRef.current = window.requestAnimationFrame(render);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas.parentElement ?? canvas);
    resize();
    frameRef.current = window.requestAnimationFrame(render);

    return () => {
      observer.disconnect();

      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [reducedMotion]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_28%,rgba(180,180,180,0.045),transparent_24%),radial-gradient(circle_at_90%_76%,rgba(120,120,120,0.035),transparent_22%)]" />
      <div className="absolute inset-y-0 left-0 w-[58%] bg-[linear-gradient(90deg,#090909_0%,rgba(9,9,9,0.98)_54%,rgba(9,9,9,0.72)_78%,rgba(9,9,9,0)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,#090909_0%,rgba(9,9,9,0)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(9,9,9,0)_0%,rgba(9,9,9,0.92)_100%)]" />
      <div className="absolute inset-y-0 right-0 w-[18%] bg-[linear-gradient(270deg,rgba(9,9,9,0.8)_0%,rgba(9,9,9,0)_100%)]" />
    </div>
  );
}
