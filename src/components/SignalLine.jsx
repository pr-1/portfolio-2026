export default function SignalLine() {
  return (
    <svg viewBox="0 0 700 80" className="w-full h-16 md:h-20" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M2,40 C 120,10 180,70 260,40 S 420,10 500,40 S 640,70 700,38"
        fill="none"
        stroke="#E0E6F2"
        strokeWidth="1.5"
      />
      <circle r="4" fill="#3B5FE0" className="signal-node" />
    </svg>
  );
}
