import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";

import Index from "./pages/Index";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Sitemap from "./pages/Sitemap";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import About from "./pages/About";
import Team from "./pages/Team";
import Regulation from "./pages/Regulation";
import LunchMenu from "./pages/LunchMenu";
import DressCode from "./pages/DressCode";
import ClassSchedules from "./pages/ClassSchedules";
import SchoolBooks from "./pages/SchoolBooks";
import AcademicCalendar from "./pages/AcademicCalendar";
import Extracurricular from "./pages/Extracurricular";
import Inovar from "./pages/Inovar";
import Admission from "./pages/Admission";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/eramos-um-website-portal">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            
            {/* School routes */}
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/regulation" element={<Regulation />} />
            
            {/* Daily Life routes */}
            <Route path="/lunch-menu" element={<LunchMenu />} />
            <Route path="/dress-code" element={<DressCode />} />
            <Route path="/class-schedules" element={<ClassSchedules />} />
            <Route path="/school-books" element={<SchoolBooks />} />
            <Route path="/academic-calendar" element={<AcademicCalendar />} />
            
            {/* Programs & Services routes */}
            <Route path="/extracurricular" element={<Extracurricular />} />
            <Route path="/inovar" element={<Inovar />} />
            
            {/* Admission route */}
            <Route path="/admission" element={<Admission />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
