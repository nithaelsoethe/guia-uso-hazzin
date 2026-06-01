import { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';

const ITEMS = [
  {
    q: 'Qual sistema usar pra cada espessura?',
    a: 'Use a Resina Epóxi para acabamentos transparentes em espessura controlada (mesas, balcões, tampos). Use a Linha Epóxi Industrial para piso de concreto, com primer + niveladora + tinta + verniz.',
  },
  {
    q: 'Como escolher a viscosidade da resina?',
    a: 'Baixa viscosidade (HR1020) escorre melhor e é ideal pra preencher detalhes. Média (HR1030) equilibra fluidez e estrutura. Alta (HR1040) tem mais corpo, ideal pra trabalhos verticais e mais espessos.',
  },
  {
    q: 'A ficha técnica e o guia de uso são a mesma coisa?',
    a: 'Não. A ficha técnica traz dados de formulação, dosagem, tempo de cura e parâmetros físico-químicos. O guia de uso é o passo a passo prático de aplicação, dicas e cuidados na obra.',
  },
  {
    q: 'Posso aplicar sem suporte técnico?',
    a: 'A linha Hazzin é formulada pra aplicador profissional. Recomendamos contato com nosso suporte antes da primeira aplicação — atendimento direto da fábrica, sem custo.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-hazzin-surface scroll-mt-24">
      <div className="mx-auto w-full max-w-site px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-hazzin-navy-deep/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-hazzin-navy-deep/70 shadow-sm">
              Perguntas frequentes
            </span>
            <h2 className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-hazzin-navy-deep leading-[1.05] tracking-[-0.025em]">
              Dúvidas antes de aplicar?
            </h2>
            <p className="mt-5 text-[16px] leading-[1.7] text-hazzin-ink/65 max-w-[42ch]">
              Respostas rápidas pras dúvidas mais comuns sobre sistemas, viscosidade e aplicação.
            </p>

            <a
              href={`https://wa.me/5547996221680?text=${encodeURIComponent('Olá! Tenho uma dúvida técnica sobre os sistemas Hazzin.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-hazzin-navy-deep px-5 py-3 text-[13.5px] font-bold text-white hover:bg-hazzin-navy transition-colors"
            >
              <MessageCircle size={16} />
              Falar com técnico
            </a>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {ITEMS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className={`rounded-2xl border bg-white transition-colors duration-300 ${
                    isOpen ? 'border-hazzin-navy-deep/25' : 'border-hazzin-mist/60 hover:border-hazzin-navy-deep/15'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-[16px] sm:text-[17px] font-bold text-hazzin-navy-deep leading-snug tracking-[-0.015em]">
                      {item.q}
                    </span>
                    <span
                      className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? 'bg-hazzin-navy-deep text-white rotate-180'
                          : 'bg-hazzin-surface text-hazzin-navy-deep'
                      }`}
                    >
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-out-expo ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-[14.5px] leading-[1.7] text-hazzin-ink/65 max-w-[58ch]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
