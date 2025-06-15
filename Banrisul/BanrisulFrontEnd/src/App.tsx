
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BanrisulProvider } from "./contexts/BanrisulContext";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import CadastroConta from "./pages/CadastroConta";
import ListagemContas from "./pages/ListagemContas";
import Transacoes from "./pages/Transacoes";
import Extrato from "./pages/Extrato";
import OfertasCredito from "./pages/OfertasCredito";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BanrisulProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/cadastro" element={<CadastroConta />} />
              <Route path="/contas" element={<ListagemContas />} />
              <Route path="/transacoes" element={<Transacoes />} />
              <Route path="/extrato" element={<Extrato />} />
              <Route path="/ofertas" element={<OfertasCredito />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </BanrisulProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
