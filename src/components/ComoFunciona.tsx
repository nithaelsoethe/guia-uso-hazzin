import { Layers, FileText, MessageCircle } from 'lucide-react';

const PASSOS = [
  {
    n: '01',
    Icon: Layers,
    title: 'Escolha o sistema',
    desc: 'Selecione entre Resina Epóxi ou Linha Epóxi Industrial conforme sua aplicação.',
  },
  {
    n: '02',
    Icon: FileText,
    title: 'Baixe ficha + guia',
    desc: 'Acesse ficha técnica de cada viscosidade e guia de uso prático do endurecedor.',
  },
  {
    n: '03',
    Icon: MessageCircle,
    title: 'Fale com o técnico',
    desc: 'Dúvidas sobre dosagem, temperatura ou aplicação? Suporte WhatsApp direto da fábrica.',
  },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="relative py-24 sm:py-32 bg-hazzin-surface scroll-mt-24">
      <div className="mx-auto w-full max-w-site px-6 lg:px-16">
        <div className="mx-auto max-w-3xl text-center mb-14 sm:mb-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-hazzin-navy-deep/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-hazzin-navy-deep/70 shadow-sm">
            Como usar este guia
          </span>
          <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-hazzin-navy-deep leading-[1.05] tracking-[-0.025em]">
            Três passos pra aplicar bem
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PASSOS.map((p, i) => (
            <div
              key={p.n}
              className="group relative flex flex-col gap-5 rounded-3xl bg-white border border-hazzin-mist/60 p-7 sm:p-9 transition-all duration-500 hover:border-hazzin-navy-deep/15 hover:-translate-y-1 hover:shadow-[0_20px_45px_-20px_rgba(11,26,46,0.18)] animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-5xl sm:text-6xl font-extrabold text-hazzin-blue-faint leading-none tracking-[-0.04em]">
                  {p.n}
                </span>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-hazzin-navy-deep text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]">
                  <p.Icon size={22} />
                </span>
              </div>

              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-hazzin-navy-deep leading-tight tracking-[-0.015em]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.65] text-hazzin-ink/65">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
