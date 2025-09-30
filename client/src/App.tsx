import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccessibilityToolbar from "@/components/AccessibilityToolbar";
import Home from "@/pages/Home";
import Incluu from "@/pages/Incluu";
import DrDede from "@/pages/DrDede";
import TEDx from "@/pages/TEDx";
import Speaking from "@/pages/Speaking";
import Admin from "@/pages/Admin";
import Consulting from "@/pages/Consulting";
import Contact from "@/pages/Contact";
import Retreat from "@/pages/Retreat";
import Stories from "@/pages/Stories";
import CaseStudies from "@/pages/CaseStudies";
import Testimonials from "@/pages/Testimonials";
import LuxuryWellness from "@/pages/LuxuryWellness";
import DisabilityAdvocacy from "@/pages/DisabilityAdvocacy";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/incluu" component={Incluu} />
      <Route path="/dr-dede" component={DrDede} />
      <Route path="/tedx" component={TEDx} />
      <Route path="/speaking" component={Speaking} />
      <Route path="/admin" component={Admin} />
      <Route path="/consulting" component={Consulting} />
      <Route path="/ai-governance" component={Consulting} />
      <Route path="/contact" component={Contact} />
      <Route path="/retreat" component={Retreat} />
      <Route path="/stories" component={Stories} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/luxury-wellness" component={LuxuryWellness} />
      <Route path="/disability-advocacy" component={DisabilityAdvocacy} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <Router />
          </main>
          <Footer />
          <AccessibilityToolbar />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
