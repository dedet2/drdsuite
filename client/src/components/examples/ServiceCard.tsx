import ServiceCard from '../ServiceCard';
import { Shield, Users, Zap } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <div className="grid md:grid-cols-3 gap-6 p-8">
      <ServiceCard
        title="AI Governance"
        description="Compliance systems that scale with your business"
        features={[
          "Risk assessment frameworks",
          "Regulatory compliance audits",
          "Policy development & implementation",
          "Team training & workshops"
        ]}
        icon={Shield}
        cta={{
          text: "Learn More",
          action: () => console.log('AI Governance clicked')
        }}
      />
      
      <ServiceCard
        title="Accessibility Systems"
        description="Inclusive design that opens new markets"
        features={[
          "WCAG 2.2 compliance audits",
          "Assistive technology integration",
          "User experience optimization",
          "Accessibility training programs"
        ]}
        icon={Users}
        cta={{
          text: "Get Started",
          action: () => console.log('Accessibility clicked')
        }}
        highlighted={true}
      />
      
      <ServiceCard
        title="Growth Strategy"
        description="ROI-focused implementation roadmaps"
        features={[
          "Market opportunity analysis",
          "Implementation planning",
          "Performance metrics & KPIs",
          "Ongoing optimization support"
        ]}
        icon={Zap}
        cta={{
          text: "Schedule Call",
          action: () => console.log('Growth Strategy clicked')
        }}
      />
    </div>
  );
}