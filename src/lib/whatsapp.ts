import type { MouseEvent } from 'react';

type Vendedora = {
  name: string;
  phone: string;
};

const VENDEDORAS: Vendedora[] = [
  { name: 'Erika', phone: '5547996221680' },
  { name: 'Priscila', phone: '5547991963518' },
];

const STORAGE_KEY = 'hazzin_wa_rotation_idx';

function readIdx(): number {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const n = raw ? parseInt(raw, 10) : 0;
    return Number.isFinite(n) && n >= 0 ? n : 0;
  } catch {
    return 0;
  }
}

function writeIdx(n: number) {
  try {
    localStorage.setItem(STORAGE_KEY, String(n % VENDEDORAS.length));
  } catch {
    // ignore
  }
}

export function peekVendedora(): Vendedora {
  return VENDEDORAS[readIdx() % VENDEDORAS.length];
}

export function consumeVendedora(): Vendedora {
  const idx = readIdx();
  const v = VENDEDORAS[idx % VENDEDORAS.length];
  writeIdx(idx + 1);
  return v;
}

export function buildWhatsAppUrl(phone: string, text: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

export function peekWhatsAppUrl(text: string) {
  return buildWhatsAppUrl(peekVendedora().phone, text);
}

export function rotatingWhatsAppHandler(text: string) {
  return (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
    e.preventDefault();
    const v = consumeVendedora();
    window.location.href = buildWhatsAppUrl(v.phone, text);
  };
}
