import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import Index from "./pages/Index";
import ExamSelection from "./pages/ExamSelection";
import ExamTaking from "./pages/ExamTaking";
import Results from "./pages/Results";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import StudyGuides from "./pages/StudyGuides";
import StudyGuideDetail from "./pages/StudyGuideDetail";
import ExamTips from "./pages/ExamTips";
import Flashcards from "./pages/Flashcards";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./pages/About";
import SampleRBTExam from "./pages/SampleRBTExam";

const LocationHandler = () => {
  const location = useLocation();
  
  useEffect(() => {
    console.log(`Route changed to: ${location.pathname}`);
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <LocationHandler />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/exams" element={<ExamSelection />} />
              <Route path="/exam/:examId" element={<ExamTaking />} />
              <Route path="/results" element={<Results />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:blogId" element={<BlogPost />} />
              <Route path="/guides" element={<StudyGuides />} />
              <Route path="/guides/:guideId" element={<StudyGuideDetail />} />
              <Route path="/tips" element={<ExamTips />} />
              <Route path="/flashcards" element={<Flashcards />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/about" element={<About />} />
              <Route path="/sample-rbt-exam" element={<SampleRBTExam />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
