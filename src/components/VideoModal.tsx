import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VTURB_ACCOUNT = '586ef3d7-9ca1-473f-a3eb-d98b7c6d0df6';
const VTURB_PLAYER_ID = '6973b7ea129676566b3beb40';

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const sdkId = 'vturb-sdk';
    if (!document.getElementById(sdkId)) {
      const s = document.createElement('script');
      s.id = sdkId;
      s.src = 'https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js';
      s.async = true;
      document.head.appendChild(s);
    }

    const iframe = iframeRef.current;
    if (iframe) {
      const src = `https://scripts.converteai.net/${VTURB_ACCOUNT}/players/${VTURB_PLAYER_ID}/v4/embed.html${location.search || '?'}&vl=${encodeURIComponent(location.href)}`;
      iframe.src = src;
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Vídeo do sistema de resinas Hazzin"
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-hazzin-navy-deep/80 backdrop-blur-md" />

      <div
        className="relative w-full max-w-[420px] animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar vídeo"
          className="absolute -top-12 right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/85 hover:bg-white/20 hover:text-white backdrop-blur-md transition-colors"
        >
          <X size={20} />
        </button>

        <div
          className="relative w-full rounded-2xl overflow-hidden bg-black shadow-2xl"
          style={{ aspectRatio: '9 / 16' }}
        >
          <iframe
            ref={iframeRef}
            id={`ifr_${VTURB_PLAYER_ID}`}
            title="Sistema de resinas Hazzin"
            allowFullScreen
            referrerPolicy="origin"
            src="about:blank"
            className="absolute inset-0 h-full w-full"
            style={{ border: 0 }}
          />
        </div>
      </div>
    </div>
  );
}
