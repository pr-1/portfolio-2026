import Section from "./Section";
import Chip from "./Chip";
import { STACK, EDUCATION } from "../data/portfolio";

export default function Stack() {
  return (
    <Section id="stack" eyebrow="Toolbox" title="What I reach for.">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {STACK.map((s) => (
          <div key={s.group}>
            <h3 className="text-sm text-teal font-mono mb-3">{s.group}</h3>
            <div className="flex flex-wrap gap-2">
              {s.items.map((it) => (
                <Chip key={it} tone="muted">
                  {it}
                </Chip>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-hairline pt-10">
        <h3 className="text-sm text-teal font-mono mb-3">Education</h3>
        <p className="text-paper/90">{EDUCATION.degree}</p>
        <p className="text-muted text-sm mt-1">
          {EDUCATION.school} · {EDUCATION.detail}
        </p>
      </div>
    </Section>
  );
}
