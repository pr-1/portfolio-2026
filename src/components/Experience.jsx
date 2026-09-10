import Section from "./Section";
import Chip from "./Chip";
import { EXPERIENCE } from "../data/portfolio";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Career" title="Where the work has happened.">
      <div className="relative pl-6 sm:pl-8 md:pl-10">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-hairline"></div>
        <div className="space-y-12 sm:space-y-14">
          {EXPERIENCE.map((e) => (
            <div key={e.org} className="relative">
              <span className="absolute -left-6 sm:-left-8 md:-left-10 top-1.5 w-[15px] h-[15px] rounded-full bg-ink border-2 border-teal"></span>
              <p className="font-mono text-xs text-muted mb-2">{e.period}</p>
              <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-paper break-words">
                {e.role} <span className="text-muted">· {e.org}</span>
              </h3>
              <p className="text-sm text-muted mt-1">{e.place}</p>
              <p className="mt-4 text-paper/90 leading-relaxed max-w-2xl">{e.summary}</p>
              <ul className="mt-4 space-y-2 max-w-2xl">
                {e.points.map((pt) => (
                  <li key={pt} className="text-muted text-[15px] leading-relaxed flex gap-3">
                    <span className="text-teal mt-2 shrink-0">—</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {e.tags.map((t) => (
                  <Chip key={t} tone="muted">
                    {t}
                  </Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
