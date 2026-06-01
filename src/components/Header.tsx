import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const PAGE_LINKS = [
  { label: 'Início', to: '/', external: false },
  { label: 'Resina Epóxi', to: '/#resina-epoxi', external: false },
  { label: 'Como funciona', to: '/#como-funciona', external: false },
  { label: 'Dúvidas', to: '/#faq', external: false },
];

const WHATSAPP_URL =
  'https://wa.me/5547996221680?text=' +
  encodeURIComponent('Olá! Quero solicitar orçamento técnico Hazzin.');

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b border-white/[0.06] bg-hazzin-navy-deep transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_4px_20px_rgba(0,0,0,0.35)]' : ''
      }`}
    >
      <nav className="mx-auto flex h-20 w-full max-w-site items-center justify-between px-6 lg:px-16">
        <Link to="/" className="flex items-center" aria-label="Hazzin">
          <img
            src="/logos/logo-hazzin-transparent.webp"
            alt="Hazzin"
            width={140}
            height={36}
            className="h-8 w-auto lg:h-9"
          />
        </Link>

        <div className="hidden items-center gap-1.5 md:flex">
          {PAGE_LINKS.map((link) => {
            const isActive = !link.external && pathname === link.to;
            const cls = `relative px-4 py-2.5 text-[14px] font-medium transition-colors duration-200 after:pointer-events-none after:absolute after:left-1/2 after:bottom-1 after:h-[2px] after:w-[58%] after:-translate-x-1/2 after:origin-center after:scale-x-0 after:rounded-full after:bg-white/85 after:transition-transform after:duration-300 after:ease-out-expo hover:after:scale-x-100 focus-visible:after:scale-x-100 ${
              isActive ? 'text-white after:scale-x-100' : 'text-white/55 hover:text-white'
            }`;
            return link.external ? (
              <a key={link.label} href={link.to} target="_blank" rel="noopener noreferrer" className={cls}>
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={link.to} className={cls}>
                {link.label}
              </Link>
            );
          })}

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-hazzin-field-green to-hazzin-field-green-deep px-6 py-2.5 text-[14px] font-bold text-white ring-2 ring-hazzin-field-green/40 shadow-[0_0_28px_rgba(55,135,14,0.6),inset_0_1px_0_rgba(255,255,255,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_42px_rgba(55,135,14,0.8)]"
          >
            Solicitar orçamento
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] p-3 transition-colors hover:bg-white/[0.08] md:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className={`text-white/70 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
          >
            {open ? (
              <>
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="16" y2="17" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 top-20 z-40 bg-hazzin-navy-deep/95 backdrop-blur-xl md:hidden">
          <div className="size-full overflow-y-auto p-6 pt-4">
            <div className="flex flex-col gap-1">
              {PAGE_LINKS.map((link) => {
                const isActive = !link.external && pathname === link.to;
                const cls = `rounded-xl px-4 py-3 text-[15px] font-medium transition-colors hover:bg-white/[0.06] ${
                  isActive ? 'text-white bg-white/[0.06]' : 'text-white/60 hover:text-white'
                }`;
                return link.external ? (
                  <a key={link.label} href={link.to} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className={cls}>
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.label} to={link.to} onClick={() => setOpen(false)} className={cls}>
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <div className="mt-6 border-t border-white/[0.06] pt-6">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-b from-hazzin-field-green to-hazzin-field-green-deep px-6 py-3 text-[14px] font-bold text-white"
              >
                Solicitar orçamento
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
