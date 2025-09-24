import Hero from '../Hero';

export default function HeroExample() {
  return (
    <Hero
      title="AI Governance"
      subtitle="Accessible Futures"
      description="Systems design for compliance, access, and growth. Built from embodied expertise."
      primaryCta={{
        text: "Work With Me",
        action: () => console.log('Primary CTA clicked')
      }}
      secondaryCta={{
        text: "Watch TEDx",
        action: () => console.log('Secondary CTA clicked')
      }}
    />
  );
}