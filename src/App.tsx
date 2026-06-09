import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Simulator from "./pages/Simulator";
import Results from "./pages/Results";
import PERIndependants from "./pages/PERIndependants";
import RetraiteDirigeants from "./pages/RetraiteDirigeants";
import Prevoyance from "./pages/Prevoyance";
import Crypto from "./pages/Crypto";
import ETF from "./pages/ETF";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import CGU from "./pages/CGU";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppWidget from "./components/WhatsAppWidget";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/simulateur" element={<Simulator />} />
          <Route path="/resultats" element={<Results />} />
          <Route path="/per-independants" element={<PERIndependants />} />
          <Route path="/retraite-dirigeants" element={<RetraiteDirigeants />} />
          <Route path="/prevoyance" element={<Prevoyance />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/etf" element={<ETF />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/cgu" element={<CGU />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
