export type Project = {
  title: string;
  category: string;
  summary: string;
  year: string;
  metrics: string[];
  href?: string;
  footerNote?: string;
  visual?: 'default' | '3xample' | 'signature' | 'studioflow';
  visualEyebrow?: string;
  supportTitle?: string;
  supportItems?: string[];
  palette: {
    base: string;
    glow: string;
    accent: string;
  };
};

export const projects: Project[] = [
  {
    title: '3xample.ca',
    category: 'Creative Tool / UI Animation Playground',
    summary:
      'A lightweight browser-based motion lab for testing interface animations, tuning timing values, and exporting reusable CSS for real product work.',
    year: '2026',
    metrics: ['Live preview', 'Timing controls', 'CSS output'],
    href: 'https://3xample.ca',
    visual: '3xample',
    palette: {
      base: '#0a1120',
      glow: 'rgba(96, 165, 250, 0.22)',
      accent: '#87d7ff',
    },
  },
  {
    title: 'Signature Tattooz',
    category: 'Studio Brand / Booking Experience',
    summary:
      'Designed as a fast, scalable studio platform using React, TypeScript, Tailwind CSS, and Vite, with Firebase supporting bookings, content updates, and admin workflows.',
    year: '2026',
    metrics: ['Gallery showcase', 'Consult-first booking', 'Artist-led identity'],
    href: 'https://signaturetattooz.com/',
    footerNote:
      'Editorial minimalism meets luxury tattoo studio branding, with cinematic depth and restrained motion.',
    visual: 'signature',
    palette: {
      base: '#160f0f',
      glow: 'rgba(183, 145, 96, 0.16)',
      accent: '#d4a16a',
    },
  },
  {
    title: 'StudioFlow',
    category: 'Service Studio OS',
    summary:
      'A modern operations platform built for service studios to manage bookings, clients, deposits, and artist workflow in one calm, premium interface.',
    year: '2024',
    metrics: ['Scheduling system', 'Studio operations', 'Frontend concepting'],
    href: 'https://ankygautam.github.io/studioflow/',
    visual: 'studioflow',
    visualEyebrow: 'Case study',
    supportTitle: 'Main features',
    supportItems: ['Live calendar', 'Client CRM', 'Consent + payments'],
    palette: {
      base: '#0d1218',
      glow: 'rgba(143, 208, 199, 0.14)',
      accent: '#8fd0c7',
    },
  },
];

export const capabilities = [
  'Product design',
  'UI/UX systems',
  'Systems thinking',
  'Interactive prototyping',
  'Frontend craft',
];
