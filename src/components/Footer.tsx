import { Instagram, Youtube, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const ANO = new Date().getFullYear();

const SOCIAIS = [
  { Icon: Instagram, href: 'https://www.instagram.com/resinashazzin/', label: 'Instagram' },
  { Icon: Youtube, href: 'https://www.youtube.com/@resinashazzin', label: 'YouTube' },
  { Icon: Facebook, href: 'https://www.facebook.com/resinashazzin', label: 'Facebook' },
];

const WA_ERIKA = '5547996221680';
const WA_PRISCILA = '5547991963518';
const WA_SAMARA = '5547996401691';

const NAV: { titulo: string; items: { label: string; href: string; internal?: boolean }[] }[] = [
  {
    titulo: 'Guias',
    items: [
      { label: 'Resina Epóxi', href: '#resina-epoxi' },
      { label: 'Como funciona', href: '#como-funciona' },
      { label: 'Dúvidas frequentes', href: '#faq' },
    ],
  },
  {
    titulo: 'Produtos Hazzin',
    items: [
      { label: 'Tinta Epóxi Industrial', href: 'https://tintaepoxi.hazzin.com.br/' },
      { label: 'Resinas Hazzin', href: 'https://hazzin.com.br/' },
    ],
  },
  {
    titulo: 'Hazzin',
    items: [
      { label: 'Início', href: 'https://hazzin.com.br/' },
      { label: 'Sobre nós', href: 'https://hazzin.com.br/sobre' },
      { label: 'Política de privacidade', href: 'https://politicadeprivacidade.hazzin.com.br/' },
      { label: 'Termos de uso', href: 'https://termosdeuso.hazzin.com.br/' },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      id="contato"
      aria-labelledby="footer-heading"
      className="relative bg-hazzin-navy-deep border-t border-white/[0.06]"
    >
      <h2 id="footer-heading" className="sr-only">
        Rodapé Hazzin
      </h2>

      <div className="mx-auto w-full max-w-site px-6 py-16 lg:px-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <img
              src="/logos/logo-hazzin-transparent.webp"
              alt="Hazzin"
              width={140}
              height={36}
              className="h-9 w-auto"
            />
            <p className="mt-6 max-w-[42ch] text-[14px] leading-[1.7] tracking-[-0.011em] text-white/70">
              Sistemas epóxi e resinas bicomponentes para piso de concreto industrial, comercial e técnico. Fábrica própria, suporte com aplicador certificado, envio direto pra todo o Brasil.
            </p>

            <div className="mt-8">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/65">
                Redes sociais
              </span>
              <div className="mt-3 flex items-center gap-3">
                {SOCIAIS.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.08] text-white/70 hover:bg-white/[0.08] hover:text-white hover:border-white/20 transition-all duration-200"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <address className="mt-8 not-italic">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/65">
                Sede e fábrica
              </span>
              <div className="mt-3 text-[13.5px] leading-[1.7] tracking-[-0.011em] text-white/70">
                Hazzin Indústria
                <br />
                R. Gertrüdes da Silva Simas, 65
                <br />
                Itaipava, Itajaí — SC
              </div>
            </address>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:col-span-5">
            {NAV.map((col) => (
              <div key={col.titulo}>
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/65">
                  {col.titulo}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.items.map((it) => (
                    <li key={`${col.titulo}-${it.label}`}>
                      {it.internal ? (
                        <Link
                          to={it.href}
                          className="text-[14px] leading-[1.5] tracking-[-0.011em] text-white/65 transition-colors duration-200 hover:text-white"
                        >
                          {it.label}
                        </Link>
                      ) : (
                        <a
                          href={it.href}
                          className="text-[14px] leading-[1.5] tracking-[-0.011em] text-white/65 transition-colors duration-200 hover:text-white"
                        >
                          {it.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/65">
              Atendimento técnico
            </h3>
            <ul className="mt-5 space-y-5">
              <li>
                <span className="text-[12px] tracking-[-0.011em] text-white/65">
                  Vendedora oficial — Erika
                </span>
                <a
                  href={`https://wa.me/${WA_ERIKA}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-[14px] font-bold leading-[1.4] tracking-[-0.011em] text-white transition-colors duration-200 hover:text-hazzin-glow-conduit"
                >
                  +55 47 99622-1680
                </a>
              </li>
              <li>
                <span className="text-[12px] tracking-[-0.011em] text-white/65">
                  Vendedora oficial — Priscila
                </span>
                <a
                  href={`https://wa.me/${WA_PRISCILA}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-[14px] font-bold leading-[1.4] tracking-[-0.011em] text-white transition-colors duration-200 hover:text-hazzin-glow-conduit"
                >
                  +55 47 99196-3518
                </a>
              </li>
              <li>
                <span className="text-[12px] tracking-[-0.011em] text-white/65">
                  Atendimento ao cliente — Samara
                </span>
                <a
                  href={`https://wa.me/${WA_SAMARA}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-[14px] font-bold leading-[1.4] tracking-[-0.011em] text-white transition-colors duration-200 hover:text-hazzin-glow-conduit"
                >
                  +55 47 99640-1691
                </a>
              </li>
              <li>
                <span className="text-[12px] tracking-[-0.011em] text-white/65">
                  E-mail comercial
                </span>
                <a
                  href="mailto:contato@hazzin.com.br"
                  className="mt-1 block text-[14px] font-bold leading-[1.4] tracking-[-0.011em] text-white transition-colors duration-200 hover:text-hazzin-glow-conduit"
                >
                  contato@hazzin.com.br
                </a>
              </li>
            </ul>

            <h3 className="mt-10 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/65">
              Operação
            </h3>
            <ul className="mt-4 space-y-2 text-[13px] leading-[1.6] tracking-[-0.011em] text-white/60">
              <li>Itajaí, SC · sede e fábrica</li>
              <li>Balneário Camboriú, SC · loja física</li>
              <li>Brasília, DF · centro de distribuição</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/[0.06] pt-8">
          <div className="flex flex-col items-start justify-between gap-4 text-[12.5px] leading-[1.5] tracking-[-0.011em] text-white/65 lg:flex-row lg:items-center">
            <span>
              © {ANO} Hazzin Indústria e Comércio de Tintas e Resinas Ltda. Todos os direitos reservados.
            </span>
            <span>CNPJ 34.668.821/0001-12</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
