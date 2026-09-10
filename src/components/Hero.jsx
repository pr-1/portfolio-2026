import SignalLine from "./SignalLine";
import { PROFILE } from "../data/portfolio";

export default function Hero() {
  return (
    <div id="top" className="max-w-5xl mx-auto px-5 sm:px-6 md:px-10 pt-10 sm:pt-16 md:pt-24 pb-10">
      <div className="max-w-2xl">
        <div className="flex items-center gap-2 mb-6 text-sm text-muted font-mono">
          <span className="w-2 h-2 rounded-full bg-blue live-dot"></span>
          {PROFILE.status}
        </div>

        <h1 className="font-serif text-[2.1rem] leading-[1.12] xs:text-4xl sm:text-5xl md:text-[3.4rem] md:leading-[1.06] text-paper break-words">
          {PROFILE.headline}
        </h1>

        <p className="mt-6 text-base sm:text-lg text-muted max-w-lg leading-relaxed">{PROFILE.subhead}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href={`mailto:${PROFILE.email}`}
            className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-blue text-ink text-xs sm:text-sm font-medium hover:bg-paper transition-colors break-all sm:break-normal"
          >
            {PROFILE.email}
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-hairline text-xs sm:text-sm text-paper hover:border-blue hover:text-blue transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-hairline text-xs sm:text-sm text-paper hover:border-blue hover:text-blue transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>

        <div className="mt-10">
          <SignalLine />
        </div>
      </div>
    </div>
  );
}
