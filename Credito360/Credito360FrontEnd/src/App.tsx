import { Layout } from "@/components/Layout";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// Pages
import AboutUs from "./pages/AboutUs";
import Analysis from "./pages/Analysis";
import Careers from "./pages/Careers";
import ConnectBanks from "./pages/ConnectBanks";
import Consent from "./pages/Consent";
import Contact from "./pages/Contact";
import CreateProposal from "./pages/CreateProposal";
import Dashboard from "./pages/Dashboard";
import DataCollection from "./pages/DataCollection";
import HelpCenter from "./pages/HelpCenter";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Login from "./pages/Login";
import Marketplace from "./pages/Marketplace";
import MyAccount from "./pages/MyAccount";
import MyProposals from "./pages/MyProposals";
import NotFound from "./pages/NotFound";
import PartnerDashboard from "./pages/PartnerDashboard";
import Partners from "./pages/Partners";
import Press from "./pages/Press";
import Register from "./pages/Register";
import Security from "./pages/Security";
import Simulator from "./pages/Simulator";
import Status from "./pages/Status";

const queryClient = new QueryClient();

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? <>{children}</> : <Navigate to="/dashboard" />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre-nos" element={<AboutUs />} />
      <Route path="/como-funciona" element={<HowItWorks />} />
      <Route path="/parceiros" element={<Partners />} />
      <Route path="/seguranca" element={<Security />} />
      <Route path="/carreiras" element={<Careers />} />
      <Route path="/imprensa" element={<Press />} />
      <Route path="/central-ajuda" element={<HelpCenter />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="/status" element={<Status />} />
      <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/cadastro" element={<PublicRoute><Register /></PublicRoute>} />
      
      <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
        <Route path="consentimento" element={<Consent />} />
        <Route path="coleta-dados" element={<DataCollection />} />
        <Route path="analise" element={<Analysis />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="simulador" element={<Simulator />} />
        <Route path="conectar-bancos" element={<ConnectBanks />} />
        <Route path="minha-conta" element={<MyAccount />} />
        
        {/* Partner Routes */}
        <Route path="parceiro/dashboard" element={<PartnerDashboard />} />
        <Route path="parceiro/criar-proposta" element={<CreateProposal />} />
        <Route path="parceiro/propostas" element={<MyProposals />} />
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
