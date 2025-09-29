import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Infinity, Type, Eye, RotateCcw, Settings } from 'lucide-react';

interface AccessibilityState {
  fontSize: number;
  highContrast: boolean;
  reducedMotion: boolean;
}

export default function AccessibilityToolbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilityState>({
    fontSize: 100,
    highContrast: false,
    reducedMotion: false,
  });

  const adjustFontSize = (delta: number) => {
    const newSize = Math.max(75, Math.min(150, settings.fontSize + delta));
    setSettings(prev => ({ ...prev, fontSize: newSize }));
    document.documentElement.style.fontSize = `${newSize}%`;
    console.log(`Font size adjusted to ${newSize}%`);
  };

  const toggleHighContrast = () => {
    const newContrast = !settings.highContrast;
    setSettings(prev => ({ ...prev, highContrast: newContrast }));
    document.documentElement.classList.toggle('high-contrast', newContrast);
    console.log(`High contrast ${newContrast ? 'enabled' : 'disabled'}`);
  };

  const toggleReducedMotion = () => {
    const newMotion = !settings.reducedMotion;
    setSettings(prev => ({ ...prev, reducedMotion: newMotion }));
    document.documentElement.classList.toggle('reduce-motion', newMotion);
    console.log(`Reduced motion ${newMotion ? 'enabled' : 'disabled'}`);
  };

  const resetSettings = () => {
    setSettings({ fontSize: 100, highContrast: false, reducedMotion: false });
    document.documentElement.style.fontSize = '100%';
    document.documentElement.classList.remove('high-contrast', 'reduce-motion');
    console.log('Accessibility settings reset');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <Card className="mb-4 w-80 shadow-lg">
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold flex items-center">
                <Infinity className="w-4 h-4 mr-2" />
                Accessibility
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={resetSettings}
                data-testid="button-accessibility-reset"
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>

            {/* Font Size */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Font Size ({settings.fontSize}%)</label>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => adjustFontSize(-25)}
                  disabled={settings.fontSize <= 75}
                  data-testid="button-font-decrease"
                >
                  A-
                </Button>
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all"
                    style={{ width: `${((settings.fontSize - 75) / 75) * 100}%` }}
                  />
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => adjustFontSize(25)}
                  disabled={settings.fontSize >= 150}
                  data-testid="button-font-increase"
                >
                  A+
                </Button>
              </div>
            </div>

            {/* High Contrast */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium flex items-center">
                <Eye className="w-4 h-4 mr-2" />
                High Contrast
              </label>
              <Button
                variant={settings.highContrast ? "default" : "outline"}
                size="sm"
                onClick={toggleHighContrast}
                data-testid="button-high-contrast"
              >
                {settings.highContrast ? 'On' : 'Off'}
              </Button>
            </div>

            {/* Reduced Motion */}
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium flex items-center">
                <Type className="w-4 h-4 mr-2" />
                Reduced Motion
              </label>
              <Button
                variant={settings.reducedMotion ? "default" : "outline"}
                size="sm"
                onClick={toggleReducedMotion}
                data-testid="button-reduced-motion"
              >
                {settings.reducedMotion ? 'On' : 'Off'}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Toggle Button */}
      <Button
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-shadow"
        data-testid="button-accessibility-toggle"
      >
        <Settings className="w-6 h-6" />
      </Button>
    </div>
  );
}