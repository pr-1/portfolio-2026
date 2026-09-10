const TONE_CLASSES = {
  teal: "border-teal/30 text-teal",
  amber: "border-amber/30 text-amber",
  muted: "border-hairline text-muted",
};

export default function Chip({ children, tone = "teal" }) {
  return (
    <span className={`inline-block text-[13px] font-mono px-2.5 py-1 rounded-full border ${TONE_CLASSES[tone]}`}>
      {children}
    </span>
  );
}
