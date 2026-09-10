export default function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`max-w-5xl mx-auto px-5 sm:px-6 md:px-10 py-14 sm:py-20 md:py-28 ${className}`}>
      {(eyebrow || title) && (
        <div className="mb-10 sm:mb-12 md:mb-16">
          {eyebrow && <p className="text-teal font-mono text-sm mb-3">{eyebrow}</p>}
          {title && (
            <h2 className="font-serif text-2xl sm:text-3xl md:text-[2.6rem] leading-tight text-paper max-w-xl break-words">
              {title}
            </h2>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
