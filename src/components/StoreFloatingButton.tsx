import { ShoppingBag, ArrowUpRight } from 'lucide-react';

const STORE_URL = 'https://hazzin.com.br';

export default function StoreFloatingButton() {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-3 z-40 flex justify-center px-3 sm:bottom-6 sm:justify-end sm:px-6 lg:px-10"
      aria-hidden={false}
    >
      <a
        href={STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Voltar para a loja virtual Hazzin"
        className="group/store pointer-events-auto relative inline-flex w-full max-w-md items-center justify-between gap-3 overflow-hidden rounded-full px-2 py-2 pl-2 pr-5 text-white shadow-[0_18px_40px_-14px_rgba(11,26,46,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_48px_-14px_rgba(11,26,46,0.7)] sm:w-auto"
        style={{
          background: 'linear-gradient(135deg, #0B1A2E 0%, #050D1A 100%)',
          boxShadow:
            '0 18px 40px -14px rgba(11,26,46,0.6), inset 0 1px 0 rgba(255,255,255,0.08)',
        }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-[1100ms] ease-out group-hover/store:translate-x-full"
        />

        <span className="relative flex items-center gap-3">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full text-white sm:h-11 sm:w-11"
            style={{
              background:
                'linear-gradient(135deg, #37870E 0%, #2D6F0C 100%)',
              boxShadow:
                '0 0 22px rgba(55,135,14,0.5), inset 0 1px 0 rgba(255,255,255,0.25)',
            }}
          >
            <ShoppingBag size={17} strokeWidth={2.2} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
              Loja Hazzin
            </span>
            <span className="text-[13.5px] sm:text-[14px] font-bold tracking-[-0.011em]">
              Voltar para a loja
            </span>
          </span>
        </span>

        <span
          aria-hidden
          className="relative flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-transform duration-300 group-hover/store:translate-x-0.5 group-hover/store:bg-white group-hover/store:text-hazzin-navy-deep"
        >
          <ArrowUpRight size={14} strokeWidth={2.4} />
        </span>
      </a>
    </div>
  );
}
