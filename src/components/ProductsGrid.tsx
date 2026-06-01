import { FileText, BookOpen, Layers } from 'lucide-react';

interface Product {
  name: string;
  image: string;
  guideUrl: string;
  manualUrl?: string;
}

interface ProductsGridProps {
  title: string;
  products: Product[];
  bgColor?: string;
}

export default function ProductsGrid({
  title,
  products,
  bgColor = 'bg-white',
}: ProductsGridProps) {
  return (
    <section className={`relative py-24 ${bgColor}`}>
      <div className="mx-auto w-full max-w-site px-6 lg:px-16">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-hazzin-navy-deep/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-hazzin-navy-deep/70 shadow-sm">
            <Layers size={12} />
            Sistema completo
          </span>
          <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-hazzin-navy-deep leading-[1.1] tracking-[-0.025em]">
            {title}
          </h2>
          <p className="mt-5 text-[16px] leading-[1.7] text-hazzin-ink/65 max-w-[58ch] mx-auto">
            Primer, base, massa e tinta epóxi: sistema bicomponente para piso industrial e comercial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <article
              key={index}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-white border border-hazzin-mist/60 hover:border-hazzin-navy-deep/15 shadow-[0_4px_24px_-8px_rgba(11,26,46,0.08)] hover:shadow-[0_12px_40px_-12px_rgba(11,26,46,0.18)] transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative overflow-hidden bg-gradient-to-b from-hazzin-surface to-white p-6">
                <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 rounded-full bg-hazzin-navy-deep/[0.06] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-hazzin-navy-deep/70">
                  Linha Epóxi
                </span>
                <div className="flex items-center justify-center h-72 sm:h-80">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full w-auto object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500 ease-out-expo"
                  />
                </div>
              </div>

              <div className="p-7 pt-5 flex flex-col gap-4 border-t border-hazzin-mist/50">
                <h3 className="font-display text-xl sm:text-[22px] font-bold text-hazzin-navy-deep leading-tight tracking-[-0.015em]">
                  {product.name}
                </h3>

                <div className="flex flex-col gap-3 mt-1">
                  <a
                    href={product.guideUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-hazzin-navy-deep px-6 py-3.5 text-[14px] font-bold text-white hover:bg-hazzin-navy transition-colors duration-200"
                  >
                    <FileText size={17} />
                    Ficha Técnica
                  </a>
                  <a
                    href={product.manualUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white border-2 border-hazzin-navy-deep px-6 py-3.5 text-[14px] font-bold text-hazzin-navy-deep hover:bg-hazzin-navy-deep hover:text-white transition-colors duration-200"
                  >
                    <BookOpen size={17} />
                    Guia de Uso
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
