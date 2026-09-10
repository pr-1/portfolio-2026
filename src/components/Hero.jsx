import SignalLine from "./SignalLine";
import { PROFILE } from "../data/portfolio";
import princePhoto from "../assets/prince.jpg";

export default function Hero() {
  return (
    <div id="top" className="max-w-5xl mx-auto px-5 sm:px-6 md:px-10 pt-10 sm:pt-16 md:pt-24 pb-10">
      <div className="grid md:grid-cols-[1.15fr,0.85fr] gap-10 md:gap-8 items-start">
        <div>
          <div className="flex items-center gap-2 mb-6 text-sm text-muted font-mono">
            <span className="w-2 h-2 rounded-full bg-teal live-dot"></span>
            {PROFILE.status}
          </div>

          <h1 className="font-serif text-[2.1rem] leading-[1.12] xs:text-4xl sm:text-5xl md:text-[3.4rem] md:leading-[1.06] text-paper break-words">
            {PROFILE.headline}
          </h1>

          <p className="mt-6 text-base sm:text-lg text-muted max-w-lg leading-relaxed">{PROFILE.subhead}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href={`mailto:${PROFILE.email}`}
              className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-teal text-ink text-xs sm:text-sm font-medium hover:bg-paper transition-colors break-all sm:break-normal"
            >
              {PROFILE.email}
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-hairline text-xs sm:text-sm text-paper hover:border-teal hover:text-teal transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-hairline text-xs sm:text-sm text-paper hover:border-teal hover:text-teal transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>

          <div className="mt-10">
            <SignalLine />
          </div>
        </div>

        <div className="justify-self-center md:justify-self-end w-full">
          <div className="relative w-44 xs:w-52 sm:w-64 md:w-full md:max-w-[280px] mx-auto md:mx-0">
            <div className="absolute -inset-3 border border-hairline rounded-[2rem] pointer-events-none"></div>
            <div className="rounded-[1.75rem] overflow-hidden border border-hairline bg-panel aspect-[3/4]">
              <img src={princePhoto} alt="Portrait of Prince Srivastava" className="w-full h-full object-cover duotone" />
            </div>
            <div className="mt-4 flex items-center justify-between text-xs font-mono text-muted px-1">
              <span>{PROFILE.location}</span>
              <span className="flex items-center gap-1.5 text-teal">
                <span className="w-1.5 h-1.5 rounded-full bg-teal live-dot"></span>
                online
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
