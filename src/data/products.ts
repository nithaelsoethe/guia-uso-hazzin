export type Viscosity = {
  name: string;
  fichaTecnicaUrl: string;
};

export type ResinaCard = {
  name: string;
  image: string;
  manualUrl: string;
  viscosities: Viscosity[];
};

export type LinhaEpoxiCard = {
  name: string;
  image: string;
  guideUrl: string;
  manualUrl?: string;
};

export const resinaEpoxi: ResinaCard[] = [
  {
    name: 'Baixa Espessura HE2250',
    image: '/produtos/baixa-espessura.png',
    manualUrl: '',
    viscosities: [
      {
        name: 'Baixa Viscosidade (HR1020)',
        fichaTecnicaUrl:
          'https://drive.google.com/file/d/1LNnWOOq0GeS8KiDh915oTOfYNzk4tWsp/view?usp=sharing',
      },
      {
        name: 'Alta Viscosidade (HR1040)',
        fichaTecnicaUrl: '',
      },
    ],
  },
  {
    name: 'Baixa Espessura UV Plus HE1250',
    image: '/produtos/baixa-espessura-uv-plus.png',
    manualUrl: '',
    viscosities: [
      {
        name: 'Baixa Viscosidade (HR1020)',
        fichaTecnicaUrl:
          'https://drive.google.com/file/d/1xWrUxrLrVzMpTvss1-CUT8mB7fLbxqLH/view?usp=sharing',
      },
      {
        name: 'Média Viscosidade (HR1030)',
        fichaTecnicaUrl:
          'https://drive.google.com/file/d/1antlTw0TMukFZxGsYT8PeCL1c9kuR16X/view?usp=sharing',
      },
      {
        name: 'Alta Viscosidade (HR1040)',
        fichaTecnicaUrl:
          'https://drive.google.com/file/d/1Rah3Tbm_aJexLakFVRFeUFi3aL3_Gez6/view?usp=sharing',
      },
    ],
  },
  {
    name: 'Média Espessura HE2230',
    image: '/produtos/media-espessura.png',
    manualUrl: '',
    viscosities: [
      {
        name: 'Baixa Viscosidade (HR1020)',
        fichaTecnicaUrl:
          'https://drive.google.com/file/d/1cACeaJoZBdFp_m2d0eKGzxgAwMudygku/view?usp=sharing',
      },
    ],
  },
  {
    name: 'Alta Espessura UV Plus HE2240',
    image: '/produtos/alta-espessura-uv-plus.png',
    manualUrl: '',
    viscosities: [
      {
        name: 'Baixa Viscosidade (HR1020)',
        fichaTecnicaUrl:
          'https://drive.google.com/file/d/1kzIJ4SFGDgrw2dgNhFT6CzfqjUDW0Yi4/view?usp=sharing',
      },
    ],
  },
];

export const linhaEpoxi: LinhaEpoxiCard[] = [
  {
    name: 'Primer Epóxi Industrial',
    image:
      'https://i.ibb.co/yBSXKGXq/primer-epoxi-industrial-85-solida-cor-azul-3-6kg-2141-1-eed0a04bb271fbf3bc0b1ed5b5714615.webp',
    guideUrl:
      'https://drive.google.com/file/d/1pGBEVov4UhQcbUOyLqgsZVsoH88rSZ99/view?usp=sharing',
    manualUrl: '',
  },
  {
    name: 'Primer Epóxi Selador de Umidade',
    image:
      'https://i.ibb.co/C3KSMnMJ/primer-epoxi-anti-umidade-para-pisos-5kg-1709-1-6178c1acaca2368848a4c5753979c3e2.webp',
    guideUrl:
      'https://drive.google.com/file/d/15Frwohp31KSDvi70AbYtzXNVdTZTOX4R/view?usp=sharing',
    manualUrl: '',
  },
  {
    name: 'Tinta Epóxi Industrial',
    image:
      'https://i.ibb.co/rKH6mCvK/tinta-epoxi-100-solida-cor-cinza-claro-3-6kg-1665-1-068934b07d442e3bc4190dda6a15f757.webp',
    guideUrl:
      'https://drive.google.com/file/d/16Q77yWElbLiOfRkPIXnCAi7J51S4tA4E/view?usp=sharing',
    manualUrl: '',
  },
  {
    name: 'Massa Epóxi para Correção',
    image:
      'https://i.ibb.co/V0Rr2QGq/massa-epoxi-bi-componente-para-reparos-kit-com-20kg-2017-1-075c2955d010609ae86e20d0324a1889.webp',
    guideUrl:
      'https://drive.google.com/file/d/1PhaEEwy9q6rhVKufRTqf7eTcXh0VCCzH/view?usp=sharing',
    manualUrl: '',
  },
  {
    name: 'Primer Epóxi Raspado',
    image:
      'https://i.ibb.co/wh9nBLZ9/primer-epoxi-raspado-endurecedor-28kg-2101-1-8fc6b44fd0afbf525dc09f4f27160059.webp',
    guideUrl:
      'https://drive.google.com/file/d/13Jzk6zYVrTXX_D4x6TLXU85srUXeBsQ_/view?usp=sharing',
    manualUrl: '',
  },
];

export const CATEGORIES = [
  {
    slug: 'resina-epoxi',
    name: 'Resina Epóxi',
    tagline: 'Sistema modular HR + HE',
    description:
      'Quatro espessuras combinadas com três viscosidades. Escolha o endurecedor da sua aplicação e acesse fichas técnicas + guias.',
    image: '/produtos/baixa-espessura-uv-plus.png',
    badge: 'Sistema modular',
    productCount: resinaEpoxi.length,
  },
  {
    slug: 'linha-epoxi',
    name: 'Linha Epóxi Industrial',
    tagline: 'Primer · Tinta · Massa · Raspado',
    description:
      'Sistema epóxi bicomponente completo para piso industrial e comercial. Cinco produtos formulados pra trabalhar juntos.',
    image:
      'https://i.ibb.co/rKH6mCvK/tinta-epoxi-100-solida-cor-cinza-claro-3-6kg-1665-1-068934b07d442e3bc4190dda6a15f757.webp',
    badge: 'Sistema completo',
    productCount: linhaEpoxi.length,
  },
] as const;
