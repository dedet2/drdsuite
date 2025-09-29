import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  cta: {
    text: string;
    action: () => void;
  };
  highlighted?: boolean;
}

export default function ServiceCard({
  title,
  description,
  features,
  icon: Icon,
  cta,
  highlighted = false
}: ServiceCardProps) {
  return (
    <Card 
      className={`h-full hover-elevate transition-all duration-300 ${
        highlighted ? 'ring-2 ring-primary/20 bg-primary/5' : ''
      }`}
      data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <CardHeader className="text-center pb-4">
        <div className={`w-16 h-16 mx-auto rounded-lg flex items-center justify-center mb-4 ${
          highlighted ? 'bg-primary text-primary-foreground' : 'bg-muted'
        }`}>
          <Icon className="w-8 h-8" />
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full"
          variant={highlighted ? 'default' : 'outline'}
          onClick={cta.action}
          data-testid={`button-${title.toLowerCase().replace(/\s+/g, '-')}-cta`}
        >
          {cta.text}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
}