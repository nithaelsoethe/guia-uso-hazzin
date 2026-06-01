import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToGuides = () => {
    document.getElementById('guias')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-white pt-32 pb-24 min-h-screen flex items-center"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-hazzin-surface"
      />
      <div className="relative mx-auto w-full max-w-site px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-hazzin-navy-deep/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-hazzin-navy-deep/70 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-hazzin-field-green/60 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-hazzin-field-green" />
              </span>
              Guia técnico oficial
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-hazzin-navy-deep leading-[1.04] tracking-[-0.038em]">
              Guia de uso
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #050D1A 0%, #1F4D08 35%, #37870E 70%, #5AB81F 100%)',
                }}
              >
                Produtos Hazzin
              </span>
            </h1>

            <p className="max-w-[58ch] text-[16.5px] sm:text-lg leading-[1.7] text-hazzin-ink/70">
              Fichas técnicas e manuais de aplicação dos sistemas epóxi Hazzin. Todas as informações necessárias para aplicar nossos produtos com a performance que você espera.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={scrollToGuides}
                style={{
                  background: 'linear-gradient(to bottom, #37870E, #2d6f0c)',
                  boxShadow: '0 0 40px rgba(55,135,14,0.5), inset 0 1px 0 rgba(255,255,255,0.25)',
                }}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-3.5 text-[14px] font-bold text-white ring-2 ring-hazzin-field-green/40 hover:-translate-y-0.5 hover:pr-12 transition-all duration-500 ease-out-expo"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                <span className="relative z-10">Acessar guias técnicos</span>
                <span className="arrow-circle absolute right-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-white text-hazzin-field-green rotate-[-45deg] opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={14} strokeWidth={2.5} />
                </span>
              </button>
            </div>
          </div>

          <div className="relative animate-slide-in-right flex justify-center lg:justify-end">
            <img
              src="/hero-produtos.webp"
              alt="Produtos Hazzin"
              className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
