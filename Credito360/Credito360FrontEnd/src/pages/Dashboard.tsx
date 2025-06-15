import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Navigation from "../components/Navigation";
import { CreditCard, TrendingUp, Building2, RefreshCw } from "lucide-react";

interface ConnectedBank {
  id: string;
  name: string;
  logo: string;
  connected: boolean;
  status: 'connected' | 'disconnected' | 'error';
}

const Dashboard = () => {
  const { user } = useAuth();
  const [score, setScore] = useState(0);
  const [connectedBanks, setConnectedBanks] = useState<ConnectedBank[]>([]);
  const [loading, setLoading] = useState(true);

  // Mapeamento dos bancos disponíveis
  const availableBanks = [
    { id: 'itau', name: 'Itaú', logo: '🏦', endpoint: 'itau' },
    { id: 'sicredi', name: 'Sicredi', logo: '🏛️', endpoint: 'sicredi' },
    { id: 'mercadopago', name: 'Mercado Pago', logo: '💳', endpoint: 'mercado-pago' },
    { id: 'banrisul', name: 'Banrisul', logo: '🏢', endpoint: 'banrisul' },
  ];

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    setLoading(true);
    
    // Buscar score real da API se o usuário estiver logado
    if (user?.cpf) {
      try {
        const response = await fetch(`http://localhost:3000/credito360/atualizar-score/${user.cpf.replace(/\D/g, '')}`);
        
        if (response.ok) {
          const data = await response.json();
          console.log('Dashboard score data:', data);
          const scoreTotal = data.scoreTotal !== undefined ? data.scoreTotal : 0;
          setScore(scoreTotal);
          
          // Processar bancos conectados baseado nos dados da API
          const connectedBankNames = data.bancos ? data.bancos.map((banco: any) => banco.banco.toLowerCase()) : [];
          
          const banksStatus = availableBanks.map(bank => ({
            id: bank.id,
            name: bank.name,
            logo: bank.logo,
            connected: connectedBankNames.includes(bank.id) || connectedBankNames.includes(bank.name.toLowerCase()),
            status: (connectedBankNames.includes(bank.id) || connectedBankNames.includes(bank.name.toLowerCase())) ? 'connected' as const : 'disconnected' as const
          }));
          
          setConnectedBanks(banksStatus);
        } else {
          console.log('No score data available, showing 0');
          setScore(0);
          // Se não há dados, todos os bancos estão desconectados
          const banksStatus = availableBanks.map(bank => ({
            id: bank.id,
            name: bank.name,
            logo: bank.logo,
            connected: false,
            status: 'disconnected' as const
          }));
          setConnectedBanks(banksStatus);
        }
      } catch (error) {
        console.error('Error fetching score:', error);
        setScore(0);
        // Em caso de erro, todos os bancos estão desconectados
        const banksStatus = availableBanks.map(bank => ({
          id: bank.id,
          name: bank.name,
          logo: bank.logo,
          connected: false,
          status: 'disconnected' as const
        }));
        setConnectedBanks(banksStatus);
      }
    }
    
    setLoading(false);
  };

  const getScoreColor = (score: number) => {
    if (score >= 800) return 'score-excellent';
    if (score >= 600) return 'score-good';
    if (score >= 400) return 'score-fair';
    return 'score-poor';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 800) return 'Excelente';
    if (score >= 600) return 'Bom';
    if (score >= 400) return 'Regular';
    return 'Baixo';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Navigation />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center">
            <div className="loading-pulse w-16 h-16 gradient-bg rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600">Carregando seu dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="fade-in-up">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Olá, {user?.nome.split(' ')[0]}! 👋
            </h1>
            <p className="text-gray-600 text-lg">
              CPF: {user?.cpf} | Bem-vindo ao seu painel financeiro
            </p>
          </div>

          {/* Score Card */}
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <Card className="lg:col-span-2 shadow-xl border-0 card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <TrendingUp className="mr-3 text-primary" />
                  Seu Score de Crédito
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <div className={`text-6xl font-bold text-white px-6 py-4 rounded-2xl ${getScoreColor(score)} inline-block mb-4`}>
                      {score}
                    </div>
                    <p className="text-2xl font-semibold text-gray-700">
                      {getScoreLabel(score)}
                    </p>
                    <p className="text-gray-500 mt-2">
                      {score === 0 
                        ? 'Conecte seus bancos para calcular seu score'
                        : 'Calculado com base nos seus dados financeiros'
                      }
                    </p>
                  </div>
                  <div className="text-right">
                    <Button asChild variant="outline" size="lg">
                      <Link to="/atualizar-score">
                        <RefreshCw className="mr-2 w-5 h-5" />
                        Atualizar Score
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="mr-2 text-primary" />
                  Ações Rápidas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild className="w-full" size="lg">
                  <Link to="/ofertas">
                    Ver Ofertas Recomendadas
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full" size="lg">
                  <Link to="/conectar">
                    Conectar Novo Banco
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Connected Banks */}
          <Card className="shadow-xl border-0 card-gradient">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Building2 className="mr-3 text-primary" />
                Bancos Conectados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {connectedBanks.map((bank) => (
                  <div
                    key={bank.id}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                      bank.connected 
                        ? 'border-green-200 bg-green-50' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-3">{bank.logo}</div>
                      <h3 className="font-semibold text-lg mb-2">{bank.name}</h3>
                      <div className="flex items-center justify-center">
                        {bank.connected ? (
                          <span className="text-green-600 text-sm font-medium flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            Conectado
                          </span>
                        ) : (
                          <span className="text-gray-500 text-sm font-medium flex items-center">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                            Desconectado
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Button asChild size="lg" className="px-8">
                  <Link to="/conectar">
                    Conectar Mais Bancos
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
