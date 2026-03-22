import { Project } from '../data/portfolio';
import { Reveal } from './Reveal';

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Reveal
      className="group"
      delay={index * 120}
    >
      <article className="grid overflow-hidden rounded-[2rem] border border-line bg-panel/90 shadow-panel lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative hidden min-h-[320px] overflow-hidden border-b border-line bg-panelSoft p-6 sm:block sm:p-8 lg:min-h-[420px] lg:border-b-0 lg:border-r">
          {project.visual === '3xample' ? (
            <ThreeXampleVisual project={project} />
          ) : project.visual === 'signature' ? (
            <SignatureVisual project={project} />
          ) : project.visual === 'studioflow' ? (
            <StudioFlowVisual project={project} />
          ) : (
            <DefaultVisual project={project} />
          )}
        </div>
        <div className="flex flex-col justify-between p-6 sm:p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-textSubtle">{project.category}</p>
            <h3 className="mt-4 font-display text-3xl font-semibold tracking-display text-text sm:text-[2.35rem]">
              {project.title}
            </h3>
            <p className="mt-5 max-w-xl text-base leading-7 text-textMuted">{project.summary}</p>
          </div>
          <div className="mt-10 flex flex-col items-start gap-4 border-t border-line pt-5 text-sm text-textMuted sm:flex-row sm:items-center sm:justify-between">
            <span>{project.footerNote ?? 'Intentional systems, reduced to essentials.'}</span>
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-full items-center justify-center rounded-full border border-white/12 px-5 text-text transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/5 sm:w-auto"
                style={{ color: project.palette.accent }}
              >
                Visit
              </a>
            ) : (
              <span
                className="inline-flex h-11 w-full items-center justify-center rounded-full border border-white/12 px-5 text-text transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/5 sm:w-auto"
                style={{ color: project.palette.accent }}
              >
                Visit
              </span>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function DefaultVisual({ project }: { project: Project }) {
  return (
    <>
      <div
        className="absolute inset-0 opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, ${project.palette.glow}, transparent 35%),
            linear-gradient(135deg, ${project.palette.base}, #090909 82%)
          `,
        }}
      />
      <div className="absolute inset-5 rounded-[1.5rem] border border-white/10" />
      <div className="absolute left-8 top-8 h-20 w-20 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm" />
      <div className="absolute bottom-8 left-8 right-8 rounded-[1.5rem] border border-white/10 bg-black/20 p-5 backdrop-blur-sm">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-white/50">
          <span>Case study</span>
          <span>{project.year}</span>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div
              key={metric}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80"
            >
              {metric}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-[12%] top-[18%] h-[42%] w-[34%] rounded-[2rem] border border-white/10 bg-black/20 backdrop-blur-md transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:translate-x-1">
        <div className="m-4 h-2 rounded-full bg-white/15" />
        <div className="mx-4 mt-6 h-[42%] rounded-[1.4rem] border border-white/10 bg-white/5" />
        <div className="mx-4 mt-4 grid grid-cols-2 gap-3">
          <div className="h-16 rounded-2xl bg-white/5" />
          <div className="h-16 rounded-2xl bg-white/10" />
        </div>
      </div>
    </>
  );
}

function ThreeXampleVisual({ project }: { project: Project }) {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(96,165,250,0.28),transparent_18%),radial-gradient(circle_at_86%_20%,rgba(125,211,252,0.12),transparent_22%),linear-gradient(160deg,#0f1524_0%,#090b11_68%,#070809_100%)]" />
      <div className="absolute left-[8%] top-[10%] h-40 w-40 rounded-full bg-sky-300/8 blur-3xl transition-transform duration-700 ease-out group-hover:scale-110" />
      <div className="absolute right-[14%] top-[18%] h-32 w-32 rounded-full bg-cyan-200/6 blur-3xl transition-transform duration-700 ease-out group-hover:translate-y-2" />
      <div className="absolute inset-7 rounded-[1.9rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-start justify-between gap-4 px-2">
          <div className="text-[11px] uppercase tracking-[0.32em] text-white/34">
            Interactive motion lab
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/40 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-300/80" />
            Motion system
          </div>
        </div>

        <div className="relative mt-6 flex-1">
          <div className="absolute left-0 top-4 hidden h-[76%] w-[132px] rounded-[1.7rem] bg-[linear-gradient(180deg,rgba(9,13,24,0.96),rgba(9,11,18,0.88))] p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] md:block">
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/38">Playground</p>
            <div className="mt-4 space-y-3">
              {['Entrance', 'Emphasis', 'Exit', 'Hover'].map((label, itemIndex) => (
                <div
                  key={label}
                  className={`rounded-[1.35rem] border px-3 py-3 text-sm transition-transform duration-500 ${
                    itemIndex === 0
                      ? 'border-sky-300/28 bg-sky-400/12 text-sky-100 group-hover:-translate-y-0.5'
                      : 'border-white/10 bg-white/[0.03] text-white/68'
                  }`}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto h-full min-h-[300px] max-w-[740px] md:pl-[126px]">
            <div className="absolute left-[10%] top-[12%] h-[70%] w-[60%] rounded-[2rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(254,254,255,0.99),rgba(241,245,249,0.97))] p-4 shadow-[0_24px_90px_rgba(0,0,0,0.28)] transition-transform duration-700 ease-out group-hover:-translate-y-1 sm:p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Live Preview
                  </p>
                </div>
                <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-medium text-slate-600">
                  CSS ready
                </div>
              </div>

              <div className="mt-4 rounded-[1.65rem] border border-slate-200 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.14),transparent_36%),linear-gradient(180deg,rgba(248,250,252,0.98),rgba(239,244,249,0.96))] p-4">
                <div className="rounded-[1.45rem] border border-slate-200 bg-white p-4 shadow-[0_14px_30px_rgba(15,23,42,0.08)] transition-transform duration-700 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold text-blue-700">Preview card</p>
                      <p className="mt-1 text-base font-semibold tracking-tight text-slate-950 sm:text-lg">
                        3xample motion demo
                      </p>
                    </div>
                    <div className="h-10 w-10 rounded-2xl bg-slate-950" />
                  </div>
                  <p className="mt-4 max-w-[26ch] text-xs leading-6 text-slate-600 sm:text-sm">
                    Test the motion, tune the values, and carry the result into the interface.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-semibold text-blue-700">
                      Fade Up
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-semibold text-slate-700">
                      Live
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-semibold text-slate-700">
                      CSS
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3 overflow-hidden rounded-[1.35rem] bg-[#03081c] px-4 py-3 font-mono text-[10px] text-slate-400 shadow-[0_18px_44px_rgba(2,6,23,0.25),inset_0_0_0_1px_rgba(255,255,255,0.06)] sm:text-[11px]">
                <span className="text-slate-600">@keyframes</span>
                <span className="truncate text-slate-300">three-xample-fade-up</span>
                <span className="hidden text-slate-500 sm:inline">animation: 650ms ease-out both;</span>
              </div>
            </div>

            <div className="absolute bottom-[11%] right-[4%] top-[18%] z-20 hidden w-[27%] min-w-[190px] overflow-hidden rounded-[1.6rem] border border-slate-200/85 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,247,251,0.96))] p-4 shadow-[0_26px_60px_rgba(15,23,42,0.18)] transition-transform duration-700 ease-out group-hover:translate-y-1 group-hover:rotate-[1deg] lg:block">
              <div className="flex h-full flex-col">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Controls
                </p>
                <div className="h-7 w-7 rounded-full border border-slate-200 bg-slate-50" />
              </div>
              <h4 className="mt-2 text-base font-semibold text-slate-950 xl:text-lg">Adjust settings</h4>
              <div className="mt-3 space-y-1.5">
                {[
                  ['Duration', '650ms', '72%'],
                  ['Delay', '0ms', '18%'],
                  ['Easing', 'ease-out', '60%'],
                  ['Count', '1', '38%'],
                ].map(([label, value, width]) => (
                  <div key={label}>
                    <div className="mb-1 flex items-center justify-between text-[10px] font-medium text-slate-600 xl:text-[11px]">
                      <span>{label}</span>
                      <span>{value}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-200 xl:h-2">
                      <div
                        className="h-1.5 rounded-full bg-blue-600 xl:h-2"
                        style={{ width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-auto space-y-2 pt-2">
                <div className="rounded-full bg-slate-950 px-4 py-2 text-center text-sm font-semibold text-white">
                  Replay
                </div>
                <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-center text-sm font-semibold text-slate-700">
                  Reset
                </div>
              </div>
              </div>
            </div>

            <div className="absolute bottom-[14%] right-[10%] hidden rounded-[1.45rem] bg-[rgba(19,22,34,0.94)] px-4 py-4 text-white/80 shadow-[0_18px_44px_rgba(0,0,0,0.26),inset_0_0_0_1px_rgba(255,255,255,0.08)] transition-transform duration-700 ease-out group-hover:-translate-y-1 xl:block">
              <p className="text-[10px] uppercase tracking-[0.28em] text-white/38">Workflow</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px]"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute left-[24%] top-[1%] z-40 hidden items-center gap-2 rounded-full bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-white/46 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] md:flex">
              <span className="h-2 w-2 rounded-full bg-sky-300/80" />
              Browser-based
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-end justify-between px-2 text-[11px] uppercase tracking-[0.28em] text-white/34">
          <span>3xample cover</span>
          <span>{project.year}</span>
        </div>
      </div>
    </>
  );
}

function SignatureVisual({ project }: { project: Project }) {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(183,145,96,0.16),transparent_18%),linear-gradient(160deg,#110b0b_0%,#17100f_38%,#090909_100%)]" />
      <div className="absolute inset-8 rounded-[1.9rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.005))]" />
      <div className="absolute right-[9%] top-[8%] h-24 w-24 rounded-full bg-[rgba(183,145,96,0.10)] blur-3xl" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-start justify-between gap-4 px-2">
          <div className="text-[11px] uppercase tracking-[0.32em] text-white/34">
            Studio identity
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/40 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[rgba(212,161,106,0.92)]" />
            Custom artwork
          </div>
        </div>

        <div className="relative mt-4 flex-1">
          <div className="relative mx-auto h-full min-h-[300px] max-w-[660px]">
            <div className="absolute left-[6%] top-[6%] h-[52%] w-[50%] overflow-hidden rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(0,0,0,0.18),rgba(0,0,0,0.48))] p-4 shadow-[0_22px_60px_rgba(0,0,0,0.26)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_36%),linear-gradient(180deg,rgba(24,16,14,0.28),rgba(9,9,9,0.14))]" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-white/42">Artist</p>
                    <h4 className="mt-4 font-display text-[1.45rem] uppercase leading-[0.92] tracking-[0.08em] text-[#f1e7d5] sm:text-[1.72rem]">
                      Nitin Gautam
                    </h4>
                    <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-[rgba(212,161,106,0.72)]">
                      Expert tattooist
                    </p>
                  </div>
                  <div className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-white/40">
                    Hoshiarpur
                  </div>
                </div>

              </div>
            </div>

            <div className="absolute left-[6%] top-[64%] w-[50%] rounded-[1.25rem] border border-[rgba(212,161,106,0.16)] bg-[linear-gradient(180deg,rgba(183,145,96,0.10),rgba(255,255,255,0.02))] px-4 py-3.5">
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/38">Tattoo School</p>
              <p className="mt-3 max-w-[42ch] text-[12px] leading-6 text-white/72">
                Begin your journey as a tattoo artist with focused training in hygiene, discipline,
                and technical precision.
              </p>
            </div>

            <div className="absolute right-[6%] top-[6%] h-[25%] w-[36%] rounded-[1.5rem] border border-white/10 bg-[rgba(14,11,10,0.88)] p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.24)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-white/38">Tattoo gallery</p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.24em] text-[rgba(212,161,106,0.7)]">
                    Featured work
                  </p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] text-white/52">
                  Curated
                </div>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                  '/projects/signature/clock-eye.jpg',
                  '/projects/signature/lion-crown.jpg',
                  '/projects/signature/shiv-half-face.jpg',
                ].map((src, imageIndex) => (
                  <div
                    key={src}
                    className="relative h-14 overflow-hidden rounded-[0.85rem] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
                  >
                    <img
                      src={src}
                      alt={`Signature Tattooz gallery preview ${imageIndex + 1}`}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.28))]" />
                  </div>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Realism', 'Blackwork', 'Custom'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <a
                href="https://www.instagram.com/signaturetattooz"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex rounded-full border border-[rgba(212,161,106,0.22)] bg-[rgba(212,161,106,0.10)] px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-[rgba(245,238,226,0.82)] transition-colors duration-300 hover:bg-[rgba(212,161,106,0.16)]"
              >
                Instagram
              </a>
            </div>

          </div>
        </div>

        <div className="mt-2 flex items-end justify-end px-2 text-[11px] uppercase tracking-[0.28em] text-white/34">
          <span>{project.year}</span>
        </div>
      </div>
    </>
  );
}

function StudioFlowVisual({ project }: { project: Project }) {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.45),transparent_28%),linear-gradient(160deg,#f4efe9_0%,#eef4f1_52%,#e7ece9_100%)]" />
      <div className="absolute inset-7 rounded-[1.9rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(255,255,255,0.35))]" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-start justify-between gap-4 px-2">
          <div className="text-[11px] uppercase tracking-[0.32em] text-slate-500">Studio OS</div>
          <div className="hidden items-center gap-2 rounded-full border border-slate-300/80 bg-white/65 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-500 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8fd0c7]" />
            Operations home
          </div>
        </div>

        <div className="relative mt-4 flex-1">
          <div className="mx-auto grid min-h-[258px] max-w-[590px] items-start gap-2.5 lg:grid-cols-[1.01fr_0.92fr]">
            <div className="rounded-[1.45rem] border border-slate-200 bg-white/92 p-3.5 shadow-[0_24px_60px_rgba(32,26,23,0.08)]">
              <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">StudioFlow</p>
              <h4 className="mt-2.5 max-w-[10ch] font-display text-[1.55rem] leading-[1.02] text-slate-950 sm:text-[1.78rem]">
                Run bookings, clients, consent, and payments from one studio OS.
              </h4>
              <p className="mt-3 max-w-[31ch] text-xs leading-5 text-slate-600">
                Built for tattoo, salon, barber, piercing, beauty, and wellness teams that need
                cleaner operations without generic spa software.
              </p>

              <div className="mt-3.5 grid gap-2 sm:grid-cols-2">
                {['Admin', 'Staff / Artist', 'Receptionist', 'Customer'].map((role) => (
                  <div
                    key={role}
                    className="rounded-[0.95rem] border border-stone-200 bg-stone-100/70 px-3 py-2.5"
                  >
                    <p className="font-display text-[0.95rem] text-slate-950">{role}</p>
                    <p className="mt-1 text-[11px] leading-4.5 text-slate-600">Tailored workflows and visibility.</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-[1.4rem] border border-slate-200 bg-white/90 p-3.5 shadow-[0_18px_48px_rgba(15,23,40,0.06)]">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500">Operations home</p>
                    <p className="mt-1.5 font-display text-[1.2rem] leading-[1.05] text-slate-950">
                      Studio dashboard
                    </p>
                  </div>
                  <div className="rounded-[1rem] border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[10px] text-slate-600">
                    Peak demand 12 PM - 3 PM
                  </div>
                </div>

                <div className="mt-3 grid gap-2 sm:grid-cols-3">
                  {[
                    ['Today bookings', '28'],
                    ['Pending deposits', '$790'],
                    ['Signed waivers', '94%'],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-[0.85rem] border border-slate-200 bg-slate-50/80 px-2.5 py-2.5"
                    >
                      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">{label}</p>
                      <p className="mt-1.5 font-display text-[1rem] text-slate-950">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-3 flex h-16 items-end gap-1.5 rounded-[1rem] bg-slate-50 px-2.5 pb-2.5">
                  {[62, 72, 84, 78, 95, 100, 86].map((height, index) => (
                    <div
                      key={height}
                      className="flex-1 rounded-[0.7rem] bg-[linear-gradient(180deg,#a9c8f3_0%,#8fd0c7_100%)] shadow-[0_10px_24px_rgba(143,208,199,0.2)]"
                      style={{ height: `${height}%`, opacity: index === 5 ? 1 : 0.82 }}
                    />
                  ))}
                </div>
              </div>

              <div className="rounded-[1.4rem] border border-rosewood-500/10 bg-[linear-gradient(145deg,rgba(222,125,100,0.10),rgba(228,186,117,0.18))] p-3.5 shadow-[0_18px_48px_rgba(15,23,40,0.05)]">
                <p className="text-[10px] uppercase tracking-[0.24em] text-slate-600">MVP focus</p>
                <p className="mt-2 font-display text-[1rem] leading-[1.15] text-slate-950">
                  Auth, dashboards, scheduling, clients, payments, and consent.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="rounded-full border border-slate-300/70 bg-white/60 px-2.5 py-1.5 text-[10px] text-slate-700"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
