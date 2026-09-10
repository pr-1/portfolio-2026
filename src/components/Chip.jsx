const TONE_CLASSES = {
  blue: "border-blue/20 bg-blue/5 text-blue",
  lavender: "border-lavender/20 bg-lavender/5 text-lavender",
  orange: "border-orange/20 bg-orange/5 text-orange",
  muted: "border-hairline text-muted",
};

export default function Chip({ children, tone = "muted" }) {
  return (
    <span className={`inline-block text-[13px] font-mono px-2.5 py-1 rounded-full border ${TONE_CLASSES[tone]}`}>
      {children}
    </span>
  );
}
