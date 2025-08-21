import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CaseStudyMindMate from "./pages/MindMate";
import CaseStudyExperience from "./pages/Experience";
import CaseStudyBitWallet from "./pages/BitWallet";
import CaseStudyElevate from "./pages/Elevate";
import CaseStudyDLS from "./pages/DLS";
import CaseStudyLeeds from "./pages/Leeds";
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
          <Route path="/case-study/MindMate" element={<CaseStudyMindMate />} />
          <Route path="/case-study/Experience" element={<CaseStudyExperience />} />
          <Route path="/case-study/BitWallet" element={<CaseStudyBitWallet />} />
          <Route path="/case-study/Elevate" element={<CaseStudyElevate />} />
          <Route path="/case-study/DLS" element={<CaseStudyDLS />} />
          <Route path="/case-study/Leeds" element={<CaseStudyLeeds />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
