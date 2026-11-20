/**
 * Editorial section heading used on every page:
 * ruled mono row ([index] LABEL ……… meta), big display h2, optional description + action on the right (lg) or below.
 * Pass `id` and point the parent <section aria-labelledby> at it.
 */
export default function SectionTitle({
  id,
  index,
  label,
  children,
  description,
  action,
}: {
  id?: string;
  index?: string;
  label: string;
  children: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div data-aos="fade-up" className="mb-10 md:mb-14">
      <div className="mb-8 flex items-center gap-3 border-b border-line pb-4">
        {index && <span className="font-mono text-xs text-lime">[{index}]</span>}
        <span className="label">{label}</span>
      </div>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <h2 id={id} className="h-section max-w-3xl">
          {children}
        </h2>
        {(description || action) && (
          <div className="flex max-w-md flex-col items-start gap-5 lg:items-end lg:text-right">
            {description && <p className="leading-relaxed text-bone/70">{description}</p>}
            {action}
          </div>
        )}
      </div>
    </div>
  );
}
