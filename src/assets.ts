export const assetPaths = {
  logo: '/assets/logo.svg',
  heroLeft: '/left.webp',
  heroRight: '/right.webp',
  platformXbox: '/assets/XBOX.svg',
  platformPs5: '/assets/PS5.svg',
  platformMeta: '/assets/platform-meta.svg',
  catAll: '/assets/cat-all.svg',
  catGta6: '/assets/cat-gta6.webp',
  catPs5: '/assets/cat-ps5.webp',
  catXbox: '/assets/cat-xbox.webp',
  catVr: '/assets/cat-vr.webp',
  catRacingWheel: '/assets/cat-racing-wheel.webp',
  catBigScreen: '/assets/cat-big-screen.webp',
} as const

export const assetLabel = (path: string) => path.split('/').pop() ?? path
