/**
 * Shared header for inner pages (About, Work, Contact): ruled mono meta row, display h1, optional lede.
 * Above the fold — no AOS, so the h1 renders visible without waiting for JS.
 */
export default function PageHeader({
  label,
  meta,
  title,
  lede,
}: {
  label: string;
  meta?: React.ReactNode;
  title: React.ReactNode;
  lede?: React.ReactNode;
}) {
  return (
    <header className="pt-10 md:pt-14">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
        <span className="label">{label}</span>
        {meta && <span className="font-mono text-xs text-bone/80">{meta}</span>}
      </div>
      <h1 className="h-page max-w-5xl pt-10 md:pt-14">{title}</h1>
      {lede && <p className="lede mt-6 md:mt-8">{lede}</p>}
    </header>
  );
}
