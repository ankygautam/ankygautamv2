import { capabilities, projects } from './data/portfolio';
import { HeroMeshBackground } from './components/HeroMeshBackground';
import { ProjectCard } from './components/ProjectCard';
import { Reveal } from './components/Reveal';
import { SectionHeading } from './components/SectionHeading';

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Contact', href: '#contact' },
];

function App() {
  return (
    <div className="min-h-screen bg-canvas text-text">
      <div className="pointer-events-none fixed inset-0 bg-grain opacity-60" />
      <div className="relative mx-auto max-w-[1440px] px-5 pb-16 sm:px-8 lg:px-12">
        <header className="sticky top-0 z-20 -mx-5 border-b border-white/5 bg-[rgba(9,9,9,0.88)] px-5 backdrop-blur-xl sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
          <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="#top"
              className="font-display text-sm uppercase tracking-[0.34em] text-text"
            >
              Ankur Gautam
            </a>
            <nav
              aria-label="Primary"
              className="w-full sm:w-auto"
            >
              <ul className="flex w-full items-center gap-2 overflow-x-auto rounded-full border border-white/10 bg-[rgba(255,255,255,0.035)] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl text-sm text-textMuted sm:w-auto">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="inline-flex h-10 items-center rounded-full border border-transparent px-5 text-sm font-medium tracking-[0.01em] transition-all duration-300 hover:-translate-y-px hover:border-white/12 hover:bg-white/[0.08] hover:text-text focus-visible:border-white/20 focus-visible:bg-white/[0.08] focus-visible:text-text focus-visible:outline-none"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        <main
          id="top"
          className="space-y-28 pt-0 sm:space-y-32"
        >
          <section className="relative min-h-[72vh] overflow-hidden py-4 sm:py-8">
            <HeroMeshBackground />
            <div className="relative z-10 grid gap-16 lg:grid-cols-[minmax(0,1fr)] lg:items-end">
              <Reveal className="max-w-5xl">
                <p className="text-sm uppercase tracking-[0.32em] text-textSubtle">
                  Creative Technologist / Building Modern Products
                </p>
                <h1 className="mt-6 max-w-5xl font-display text-[3.5rem] font-semibold leading-[0.92] tracking-display text-text sm:text-[5.5rem] lg:text-[7.5rem]">
                  Building polished digital products with frontend craft and Codex.
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-textMuted sm:text-xl">
                  I turn product complexity into clear systems, polished interfaces, and intentional
                  digital experiences built with both design thinking and execution in mind.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a
                    href="#work"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.06] px-6 text-sm font-medium text-text transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                  >
                    Selected work
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-transparent px-2 text-sm font-medium text-textMuted transition-colors duration-300 hover:text-text"
                  >
                    Let&apos;s build something precise
                  </a>
                </div>
              </Reveal>
            </div>
          </section>

          <section
            id="work"
            className="scroll-mt-28 space-y-10"
          >
            <SectionHeading
              label="Selected Work"
              title="A focused body of work shaped by clarity, utility, and atmosphere."
              body="Each concept balances product thinking with cinematic presentation, using restraint as a design tool rather than decoration."
            />
            <div className="space-y-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </section>

          <section
            id="about"
            className="scroll-mt-28 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]"
          >
            <Reveal>
              <SectionHeading
                label="About"
                title="I work best where product ambition needs shape, sharpness, and composure."
                body="My practice sits between product design, interaction systems, and frontend craft. I care about visual restraint, durable logic, and interfaces that feel confident without asking for attention."
              />
            </Reveal>
            <Reveal delay={140}>
              <div className="grid gap-4">
                {[
                  ['Experience', 'End-to-end product work across concept, system design, prototyping, and launch refinement.'],
                  ['Strengths', 'Narrative hierarchy, reduction, interaction details, design systems, and translating ambiguity into structure.'],
                  ['Approach', 'Listen closely, edit aggressively, prototype early, and keep the work anchored in both business and user reality.'],
                ].map(([title, copy]) => (
                  <div
                    key={title}
                    className="rounded-[1.75rem] border border-line bg-panel/70 p-6"
                  >
                    <p className="text-xs uppercase tracking-[0.28em] text-textSubtle">{title}</p>
                    <p className="mt-4 text-base leading-7 text-textMuted">{copy}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>

          <section
            id="capabilities"
            className="scroll-mt-28 space-y-10"
          >
            <Reveal>
              <SectionHeading
                label="Capabilities"
                title="Built for teams that want both strategic taste and hands-on delivery."
              />
            </Reveal>
            <div className="grid gap-px overflow-hidden rounded-[2rem] border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
              {capabilities.map((item, index) => (
                <Reveal
                  key={item}
                  delay={index * 90}
                >
                  <div className="h-full bg-panel px-5 py-8 transition-colors duration-300 hover:bg-panelSoft">
                    <p className="text-sm uppercase tracking-[0.24em] text-textSubtle">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <p className="mt-10 font-display text-2xl font-medium tracking-display text-text">
                      {item}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="scroll-mt-28 pb-12"
          >
            <Reveal>
              <div className="rounded-[2.25rem] border border-line bg-[rgba(17,17,17,0.85)] px-6 py-10 shadow-panel sm:px-10 sm:py-14">
                <p className="text-xs uppercase tracking-[0.3em] text-textSubtle">Contact</p>
                <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
                  <div>
                    <h2 className="max-w-3xl font-display text-4xl font-semibold tracking-display text-text sm:text-5xl md:text-6xl">
                      Building a product, platform, or new direction?
                    </h2>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-textMuted">
                      I partner with teams that want digital work to feel thoughtful, assured, and
                      genuinely well made.
                    </p>
                  </div>
                  <div className="space-y-3 text-sm text-textMuted">
                    <a
                      href="mailto:ankurgautam@live.com"
                      className="flex items-center justify-between rounded-full border border-white/10 px-5 py-4 transition-all duration-300 hover:border-white/20 hover:bg-white/5 hover:text-text"
                    >
                      <span>Email</span>
                      <span>ankurgautam@live.com</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ankur-gautam-/"
                      rel="noreferrer"
                      target="_blank"
                      className="flex items-center justify-between rounded-full border border-white/10 px-5 py-4 transition-all duration-300 hover:border-white/20 hover:bg-white/5 hover:text-text"
                    >
                      <span>LinkedIn</span>
                      <span>@ankur-gautam-</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
