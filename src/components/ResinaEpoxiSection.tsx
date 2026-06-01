import { useState, useEffect } from 'react';
import { ExternalLink, X, FileText, BookOpen, Droplets, ChevronRight, Play } from 'lucide-react';
import VideoModal from './VideoModal';

interface Viscosity {
  name: string;
  fichaTecnicaUrl: string;
}

interface ResinaCard {
  name: string;
  image: string;
  manualUrl: string;
  viscosities: Viscosity[];
}

interface ResinaEpoxiSectionProps {
  title: string;
  products: ResinaCard[];
  bgColor?: string;
}

export default function ResinaEpoxiSection({
  title,
  products,
  bgColor = 'bg-hazzin-surface',
}: ResinaEpoxiSectionProps) {
  const [openCard, setOpenCard] = useState<number | null>(null);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    if (openCard === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenCard(null);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [openCard]);

  return (
    <section className={`relative overflow-hidden py-16 sm:py-20 lg:py-24 ${bgColor}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-[80%] max-w-[640px]"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(11,26,46,0.18), transparent)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[280px] w-[680px] rounded-full"
        style={{
          background:
            'radial-gradient(closest-side, rgba(96,165,250,0.12), transparent 70%)',
        }}
      />

      <div className="relative mx-auto w-full max-w-site px-5 sm:px-6 lg:px-16">
        <div className="mx-auto max-w-3xl text-center mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-hazzin-navy-deep/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-hazzin-navy-deep/70 shadow-sm">
            <Droplets size={12} />
            Sistema modular
          </span>
          <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-hazzin-navy-deep leading-[1.05] tracking-[-0.025em]">
            {title}
          </h2>
          <p className="mt-5 text-[15.5px] sm:text-base leading-[1.7] text-hazzin-ink/65 max-w-[58ch] mx-auto">
            Quatro espessuras combinadas com três viscosidades. Selecione o endurecedor da sua aplicação e acesse a ficha técnica e o guia de uso.
          </p>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              aria-label="Assistir vídeo: como funciona o sistema de resinas Hazzin"
              className="group/play relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white border border-hazzin-navy-deep/10 pl-2 pr-6 py-2 text-[13.5px] font-bold text-hazzin-navy-deep shadow-[0_4px_18px_-6px_rgba(11,26,46,0.15)] hover:shadow-[0_10px_28px_-10px_rgba(59,130,246,0.4)] hover:-translate-y-[1px] transition-all duration-300"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full p-[1.5px] opacity-0 transition-opacity duration-500 group-hover/play:opacity-100"
                style={{
                  background:
                    'linear-gradient(135deg, #93C5FD 0%, #3B82F6 50%, #1E40AF 100%)',
                  WebkitMask:
                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
              <span
                className="relative flex h-9 w-9 items-center justify-center rounded-full text-white shadow-inner transition-transform duration-300 group-hover/play:scale-105"
                style={{
                  background:
                    'linear-gradient(135deg, #0B1A2E 0%, #050D1A 100%)',
                  boxShadow:
                    '0 6px 16px -6px rgba(11,26,46,0.55), inset 0 1px 0 rgba(255,255,255,0.1)',
                }}
              >
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover/play:opacity-100"
                  style={{
                    background:
                      'radial-gradient(circle at 30% 30%, rgba(96,165,250,0.45), transparent 60%)',
                  }}
                />
                <Play
                  size={13}
                  fill="currentColor"
                  className="relative translate-x-[1px]"
                />
              </span>
              <span className="relative">Assistir explicação do sistema</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <article
              key={index}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-white border border-hazzin-mist/60 hover:border-hazzin-navy-deep/15 shadow-[0_4px_24px_-8px_rgba(11,26,46,0.08)] hover:shadow-[0_12px_40px_-12px_rgba(11,26,46,0.18)] transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="relative overflow-hidden bg-white">
                <span className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-hazzin-navy-deep/[0.06] px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.18em] text-hazzin-navy-deep/70">
                  Endurecedor
                </span>
                <div className="aspect-square w-full flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="p-5 pt-4 flex flex-col gap-3 border-t border-hazzin-mist/50 flex-1">
                <div>
                  <h3 className="font-display text-[17px] font-bold text-hazzin-navy-deep leading-snug tracking-[-0.015em]">
                    {product.name}
                  </h3>
                  <p className="mt-1.5 text-[12px] text-hazzin-ink/55">
                    {product.viscosities.length}{' '}
                    {product.viscosities.length === 1
                      ? 'viscosidade'
                      : 'viscosidades'}
                  </p>
                </div>

                <div className="flex flex-col gap-2.5 mt-auto">
                  <button
                    type="button"
                    onClick={() => setOpenCard(index)}
                    style={{
                      background:
                        'linear-gradient(135deg, #0B1A2E 0%, #050D1A 100%)',
                      boxShadow:
                        '0 8px 20px -10px rgba(11,26,46,0.55), inset 0 1px 0 rgba(255,255,255,0.08)',
                    }}
                    className="group/fbtn relative inline-flex w-full items-center justify-between gap-2 overflow-hidden rounded-xl px-4 py-3.5 text-[13px] font-bold text-white transition-all duration-300 hover:-translate-y-[1px]"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover/fbtn:opacity-100"
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(96,165,250,0.18), transparent 60%)',
                      }}
                    />
                    <span className="relative flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/10">
                        <FileText size={13} />
                      </span>
                      Ficha Técnica
                    </span>
                    <ChevronRight
                      size={16}
                      className="relative opacity-70 transition-transform duration-300 group-hover/fbtn:translate-x-0.5 group-hover/fbtn:opacity-100"
                    />
                  </button>

                  <a
                    href={product.manualUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/gbtn relative inline-flex w-full items-center justify-between gap-2 overflow-hidden rounded-xl bg-white px-4 py-3.5 text-[13px] font-bold text-hazzin-navy-deep transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_10px_24px_-12px_rgba(59,130,246,0.35)]"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-xl p-[1.5px]"
                      style={{
                        background:
                          'linear-gradient(135deg, #DBEAFE 0%, #93C5FD 50%, #60A5FA 100%)',
                        WebkitMask:
                          'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                      }}
                    />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 rounded-xl p-[1.5px] opacity-0 transition-opacity duration-500 group-hover/gbtn:opacity-100"
                      style={{
                        background:
                          'linear-gradient(135deg, #93C5FD 0%, #3B82F6 50%, #1E40AF 100%)',
                        WebkitMask:
                          'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                      }}
                    />
                    <span className="relative flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-hazzin-blue-faint text-hazzin-navy-deep transition-colors duration-300 group-hover/gbtn:bg-hazzin-blue-700 group-hover/gbtn:text-white">
                        <BookOpen size={13} />
                      </span>
                      Guia de Uso
                    </span>
                    <ChevronRight
                      size={16}
                      className="relative text-hazzin-navy-deep/40 transition-all duration-300 group-hover/gbtn:translate-x-0.5 group-hover/gbtn:text-hazzin-navy-deep"
                    />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {openCard !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="ficha-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setOpenCard(null)}
        >
          <div className="absolute inset-0 bg-hazzin-navy-deep/70 backdrop-blur-md" />
          <div
            className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-gradient-to-br from-hazzin-navy-deep to-hazzin-navy p-8">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(96,165,250,0.25),_transparent_60%)]"
              />
              <button
                type="button"
                onClick={() => setOpenCard(null)}
                aria-label="Fechar"
                className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
              <span className="relative inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
                <FileText size={11} />
                Ficha Técnica
              </span>
              <h3
                id="ficha-modal-title"
                className="relative mt-4 font-display text-2xl font-bold text-white leading-tight"
              >
                {products[openCard].name}
              </h3>
              <p className="relative mt-2 text-[13px] text-white/65">
                Selecione a viscosidade da resina HR
              </p>
            </div>

            <div className="p-6 space-y-3">
              {products[openCard].viscosities.map((v, i) => (
                <a
                  key={i}
                  href={v.fichaTecnicaUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/v relative block rounded-2xl bg-white transition-all duration-500 ease-out-expo hover:-translate-y-[2px] hover:shadow-[0_14px_32px_-12px_rgba(59,130,246,0.45)]"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-hazzin-navy-deep/[0.08] transition-opacity duration-500 group-hover/v:opacity-0"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl p-[2px] opacity-0 transition-opacity duration-500 group-hover/v:opacity-100"
                    style={{
                      background:
                        'linear-gradient(135deg, #93C5FD 0%, #3B82F6 45%, #1E40AF 100%)',
                      WebkitMask:
                        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-hazzin-blue-faint/0 via-hazzin-blue-faint/0 to-hazzin-blue-faint/40 opacity-0 transition-opacity duration-500 group-hover/v:opacity-100"
                  />

                  <span className="relative z-10 flex items-center justify-between gap-3 px-5 py-4 text-hazzin-navy-deep">
                    <span className="flex items-center gap-3">
                      <span
                        aria-hidden
                        className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-hazzin-blue-faint transition-all duration-500 group-hover/v:bg-transparent"
                      >
                        <span
                          aria-hidden
                          className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover/v:opacity-100"
                          style={{
                            background:
                              'linear-gradient(135deg, #60A5FA, #2563EB)',
                            boxShadow:
                              '0 8px 22px -8px rgba(59,130,246,0.6), inset 0 1px 0 rgba(255,255,255,0.35)',
                          }}
                        />
                        <Droplets
                          size={16}
                          className="relative z-10 text-hazzin-navy-deep transition-colors duration-500 group-hover/v:text-white"
                        />
                      </span>
                      <span className="text-left font-bold text-[14px] leading-tight tracking-[-0.011em]">
                        {v.name}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className="flex h-8 w-8 items-center justify-center rounded-full text-hazzin-navy-deep/40 transition-all duration-500 group-hover/v:bg-hazzin-navy-deep group-hover/v:text-white group-hover/v:translate-x-0.5"
                    >
                      <ExternalLink size={14} />
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  );
}
