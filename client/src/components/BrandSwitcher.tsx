import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { setBrandTheme, type BrandType, brandConfigs } from '@/lib/brand-tokens';
import { Palette } from 'lucide-react';

interface BrandSwitcherProps {
  className?: string;
}

export default function BrandSwitcher({ className }: BrandSwitcherProps) {
  const [currentBrand, setCurrentBrand] = useState<BrandType>('dede');

  const switchBrand = () => {
    const newBrand: BrandType = currentBrand === 'dede' ? 'incluu' : 'dede';
    setCurrentBrand(newBrand);
    setBrandTheme(newBrand);
    console.log(`Brand switched to ${newBrand}`);
  };

  const config = brandConfigs[currentBrand];

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={switchBrand}
      className={className}
      data-testid="button-brand-switcher"
      style={{ borderColor: config.primary }}
    >
      <Palette className="w-4 h-4 mr-2" />
      {config.name}
    </Button>
  );
}