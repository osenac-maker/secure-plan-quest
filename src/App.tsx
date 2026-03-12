import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Simulator from "./pages/Simulator";
import Results from "./pages/Results";
import AdvisorDashboard from "./pages/AdvisorDashboard";
import PERIndependants from "./pages/PERIndependants";
import RetraiteDirigeants from "./pages/RetraiteDirigeants";
import Prevoyance from "./pages/Prevoyance";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/simulateur" element={<Simulator />} />
          <Route path="/resultats" element={<Results />} />
          <Route path="/conseiller" element={<AdvisorDashboard />} />
          <Route path="/per-independants" element={<PERIndependants />} />
          <Route path="/retraite-dirigeants" element={<RetraiteDirigeants />} />
          <Route path="/prevoyance" element={<Prevoyance />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
