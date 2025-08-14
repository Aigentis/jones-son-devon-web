
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Areas from "./pages/Areas";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Gallery from "./pages/Gallery";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import AuthPage from "./pages/Auth";
import NotFound from "./pages/NotFound";

// Area pages
import Barnstaple from "./pages/areas/Barnstaple";
import Bideford from "./pages/areas/Bideford";
import Ilfracombe from "./pages/areas/Ilfracombe";
import Braunton from "./pages/areas/Braunton";
import SouthMolton from "./pages/areas/SouthMolton";
import GreatTorrington from "./pages/areas/GreatTorrington";
import Fremington from "./pages/areas/Fremington";

// Service pages
import FasciasSoffits from "./pages/services/FasciasSoffits";
import Guttering from "./pages/services/Guttering";
import Cladding from "./pages/services/Cladding";
import DryVerge from "./pages/services/DryVerge";
import FlatRoofs from "./pages/services/FlatRoofs";
import RoofCleaning from "./pages/services/RoofCleaning";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/areas" element={<Areas />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/auth" element={<AuthPage />} />
            
            {/* Area pages */}
            <Route path="/areas/barnstaple" element={<Barnstaple />} />
            <Route path="/areas/bideford" element={<Bideford />} />
            <Route path="/areas/ilfracombe" element={<Ilfracombe />} />
            <Route path="/areas/braunton" element={<Braunton />} />
            <Route path="/areas/south-molton" element={<SouthMolton />} />
            <Route path="/areas/great-torrington" element={<GreatTorrington />} />
            <Route path="/areas/fremington" element={<Fremington />} />
            
            {/* Service pages */}
            <Route path="/services/fascias-soffits" element={<FasciasSoffits />} />
            <Route path="/services/guttering" element={<Guttering />} />
            <Route path="/services/cladding" element={<Cladding />} />
            <Route path="/services/dry-verge" element={<DryVerge />} />
            <Route path="/services/flat-roofs" element={<FlatRoofs />} />
            <Route path="/services/roof-cleaning" element={<RoofCleaning />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
