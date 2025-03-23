
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import ExamSelection from "./pages/ExamSelection";
import ExamTaking from "./pages/ExamTaking";
import Results from "./pages/Results";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import StudyGuides from "./pages/StudyGuides";
import ExamTips from "./pages/ExamTips";
import Flashcards from "./pages/Flashcards";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/exams" element={<ExamSelection />} />
            <Route path="/exam/:examId" element={<ExamTaking />} />
            <Route path="/results" element={<Results />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/guides" element={<StudyGuides />} />
            <Route path="/tips" element={<ExamTips />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
