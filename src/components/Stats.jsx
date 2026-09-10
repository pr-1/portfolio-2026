import { STATS } from "../data/portfolio";

export default function Stats() {
  return (
    <div className="border-y border-hairline bg-panel/40">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 md:px-10 py-12 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {STATS.map((s) => (
          <div key={s.l}>
            <div className="font-serif text-3xl md:text-4xl text-blue">{s.n}</div>
            <p className="mt-2 text-sm text-muted leading-snug">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
