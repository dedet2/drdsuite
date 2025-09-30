import { lazy, Suspense } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Skeleton } from "@/components/ui/skeleton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccessibilityToolbar from "@/components/AccessibilityToolbar";

// Lazy load all route components for better code splitting
const Home = lazy(() => import("@/pages/Home"));
const Incluu = lazy(() => import("@/pages/Incluu"));
const DrDede = lazy(() => import("@/pages/DrDede"));
const TEDx = lazy(() => import("@/pages/TEDx"));
const Speaking = lazy(() => import("@/pages/Speaking"));
const Admin = lazy(() => import("@/pages/Admin"));
const Consulting = lazy(() => import("@/pages/Consulting"));
const Contact = lazy(() => import("@/pages/Contact"));
const Retreat = lazy(() => import("@/pages/Retreat"));
const Stories = lazy(() => import("@/pages/Stories"));
const CaseStudies = lazy(() => import("@/pages/CaseStudies"));
const Testimonials = lazy(() => import("@/pages/Testimonials"));
const LuxuryWellness = lazy(() => import("@/pages/LuxuryWellness"));
const DisabilityAdvocacy = lazy(() => import("@/pages/DisabilityAdvocacy"));
const Privacy = lazy(() => import("@/pages/Privacy"));
const Terms = lazy(() => import("@/pages/Terms"));
const Resources = lazy(() => import("@/pages/Resources"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// Loading component for lazy-loaded routes
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="space-y-4 w-full max-w-2xl px-4">
        <Skeleton className="h-12 w-3/4 mx-auto" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-5/6 mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <Skeleton className="h-40" />
          <Skeleton className="h-40" />
        </div>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
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
        <Route path="/resources" component={Resources} />
        <Route path="/stories" component={Stories} />
        <Route path="/case-studies" component={CaseStudies} />
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/luxury-wellness" component={LuxuryWellness} />
        <Route path="/disability-advocacy" component={DisabilityAdvocacy} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
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
