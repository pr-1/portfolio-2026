import Section from "./Section";
import Chip from "./Chip";
import { PROJECTS } from "../data/portfolio";

export default function Projects() {
  return (
    <Section id="work" eyebrow="Selected work" title="Two products, built end to end.">
      <div className="space-y-6">
        {PROJECTS.map((p) => (
          <div
            key={p.name}
            className="grid md:grid-cols-[0.4fr,1fr] gap-5 md:gap-10 border border-hairline rounded-2xl p-5 sm:p-7 md:p-9 bg-panel"
          >
            <div>
              <h3 className="font-serif text-2xl text-paper">{p.name}</h3>
              <p className={`mt-1 text-sm ${p.accent === "teal" ? "text-teal" : "text-amber"}`}>{p.tagline}</p>
            </div>
            <div>
              <p className="text-muted leading-relaxed">{p.desc}</p>
              <p className="mt-4 text-paper/90 leading-relaxed">{p.owned}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <Chip key={t} tone={p.accent}>
                    {t}
                  </Chip>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
