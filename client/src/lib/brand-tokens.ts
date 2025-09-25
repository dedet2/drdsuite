export type BrandType = 'dede' | 'incluu';

export interface BrandConfig {
  primary: string;
  secondary: string;
  accent: string;
  name: string;
  tagline: string;
}

export const brandConfigs: Record<BrandType, BrandConfig> = {
  dede: {
    primary: 'hsl(var(--dede-primary))',
    secondary: 'hsl(var(--dede-secondary))',
    accent: 'hsl(var(--dede-accent))',
    name: 'Dr. Dédé',
    tagline: 'AI Governance + Accessible Futures'
  },
  incluu: {
    primary: 'hsl(var(--incluu-primary))',
    secondary: 'hsl(var(--incluu-secondary))',
    accent: 'hsl(var(--incluu-accent))',
    name: 'incluu',
    tagline: 'Responsible AI & Biometric Tech'
  }
};

export function setBrandTheme(brand: BrandType) {
  const config = brandConfigs[brand];
  const root = document.documentElement;
  
  // Set primary colors
  root.style.setProperty('--primary', brand === 'dede' ? 'var(--dede-primary)' : 'var(--incluu-primary)');
  root.style.setProperty('--ring', brand === 'dede' ? 'var(--dede-primary)' : 'var(--incluu-primary)');
  root.style.setProperty('--sidebar-primary', brand === 'dede' ? 'var(--dede-primary)' : 'var(--incluu-primary)');
  root.style.setProperty('--sidebar-ring', brand === 'dede' ? 'var(--dede-primary)' : 'var(--incluu-primary)');
  
  // Set secondary colors
  root.style.setProperty('--secondary', brand === 'dede' ? 'var(--dede-secondary)' : 'var(--incluu-secondary)');
  
  // Set accent colors
  root.style.setProperty('--accent', brand === 'dede' ? 'var(--dede-accent)' : 'var(--incluu-accent)');
  
  // Set chart colors to match brand
  root.style.setProperty('--chart-1', brand === 'dede' ? 'var(--dede-primary)' : 'var(--incluu-primary)');
  root.style.setProperty('--chart-2', brand === 'dede' ? 'var(--dede-secondary)' : 'var(--incluu-secondary)');
  root.style.setProperty('--chart-3', brand === 'dede' ? 'var(--dede-accent)' : 'var(--incluu-accent)');
}