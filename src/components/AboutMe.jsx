import Section from "./Section";
import { PROFILE, ABOUT } from "../data/portfolio";
import princePhoto from "../assets/prince.jpg";

const FIELDS = [
  { label: "Name", value: PROFILE.name },
  { label: "Email", value: PROFILE.email },
  { label: "Location", value: PROFILE.location },
  { label: "Status", value: PROFILE.status, accent: true },
];

export default function AboutMe() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me.">
      <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-6 md:gap-8 items-start">
        <div className="rounded-2xl overflow-hidden border border-hairline bg-panel aspect-[4/5]">
          <img src={princePhoto} alt="Portrait of Prince Srivastava" className="w-full h-full object-cover" />
        </div>

        <div className="border border-hairline rounded-2xl bg-panel p-6 sm:p-8 md:p-10">
          <div className="space-y-4">
            {ABOUT.bio.map((p) => (
              <p key={p} className="text-muted leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:gap-x-10">
            {FIELDS.map((f) => (
              <div key={f.label}>
                <p className="text-xs font-mono text-muted mb-1">{f.label}</p>
                <p className={`font-medium break-words ${f.accent ? "text-blue" : "text-paper"}`}>{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
