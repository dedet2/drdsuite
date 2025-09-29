import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccessibilityToolbar from "@/components/AccessibilityToolbar";
import Home from "@/pages/Home";
import TEDx from "@/pages/TEDx";
import Speaking from "@/pages/Speaking";
import Admin from "@/pages/Admin";
import Consulting from "@/pages/Consulting";
import Contact from "@/pages/Contact";
import Incluu from "@/pages/Incluu";
import Retreat from "@/pages/Retreat";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/tedx" component={TEDx} />
      <Route path="/speaking" component={Speaking} />
      <Route path="/admin" component={Admin} />
      <Route path="/consulting" component={Consulting} />
      <Route path="/ai-governance" component={Consulting} />
      <Route path="/contact" component={Contact} />
      <Route path="/incluu" component={Incluu} />
      <Route path="/retreat" component={Retreat} />
      {/* TODO: Add remaining pages - rar, stories */}
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
