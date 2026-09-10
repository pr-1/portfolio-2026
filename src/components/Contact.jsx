import Section from "./Section";
import { PROFILE } from "../data/portfolio";

export default function Contact() {
  return (
    <Section id="contact" className="!pb-16">
      <div className="border border-hairline rounded-2xl bg-panel p-6 sm:p-9 md:p-14 text-center">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-paper max-w-lg mx-auto break-words">
          Building something that needs to feel instant? Let's talk.
        </h2>
        <p className="mt-4 text-muted max-w-md mx-auto text-sm sm:text-base">
          Open to full-stack and mobile roles, and to projects that live or die by real-time state.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
          <a
            href={`mailto:${PROFILE.email}`}
            className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-blue text-ink text-xs sm:text-sm font-medium hover:bg-paper transition-colors break-all sm:break-normal"
          >
            {PROFILE.email}
          </a>
          <a
            href={`tel:${PROFILE.phoneHref}`}
            className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-hairline text-xs sm:text-sm text-paper hover:border-blue hover:text-blue transition-colors"
          >
            {PROFILE.phone}
          </a>
        </div>
      </div>

      <footer className="mt-14 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted font-mono">
        <span>© {new Date().getFullYear()} {PROFILE.name}</span>
        <span className="flex gap-5">
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-blue">
            {PROFILE.githubLabel}
          </a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue">
            {PROFILE.linkedinLabel}
          </a>
        </span>
      </footer>
    </Section>
  );
}
