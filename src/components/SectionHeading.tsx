type SectionHeadingProps = {
  label: string;
  title: string;
  body?: string;
};

export function SectionHeading({ label, title, body }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl border-t border-line pt-6 sm:pt-8">
      <p className="text-xs uppercase tracking-[0.3em] text-textSubtle">{label}</p>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-display text-text sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-textMuted sm:text-lg">
          {body}
        </p>
      ) : null}
    </div>
  );
}
