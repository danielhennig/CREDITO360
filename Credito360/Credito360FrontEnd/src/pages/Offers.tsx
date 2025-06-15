import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "../components/Navigation";
import { Percent, Calendar, DollarSign, Star, TrendingUp } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

interface Offer {
  id: string;
  nome: string;
  descricao: string;
  taxaJuros: number;
  parcelas: number;
  valor: number;
  scoreMinimo: number;
  banco: string;
  logo: string;
  tipo: 'emprestimo' | 'cartao' | 'financiamento';
  destaque?: boolean;
}

const Offers = () => {
  const { user } = useAuth();
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [userScore, setUserScore] = useState(0);

  useEffect(() => {
    if (user?.cpf) {
      loadUserScoreAndOffers();
    }
  }, [user]);

  const loadUserScoreAndOffers = async () => {
    if (!user?.cpf) return;
    
    setLoading(true);
    
    try {
      const response = await fetch(`http://localhost:3000/credito360/atualizar-score/${user.cpf.replace(/\D/g, '')}`);
      
      if (response.ok) {
        const data = await response.json();
        console.log('User score and offers data:', data);
        
        setUserScore(data.scoreTotal || 0);
        
        // Extrair ofertas de todos os bancos
        const allOffers: Offer[] = [];
        
        if (data.bancos && Array.isArray(data.bancos)) {
          data.bancos.forEach((banco: any) => {
            if (banco.ofertas && Array.isArray(banco.ofertas)) {
              banco.ofertas.forEach((oferta: any) => {
                allOffers.push({
                  id: oferta.id,
                  nome: oferta.nome,
                  descricao: oferta.descricao,
                  taxaJuros: oferta.taxaJuros,
                  parcelas: oferta.numeroParcelas || oferta.parcelas,
                  valor: oferta.valor,
                  scoreMinimo: oferta.scoreMinimo,
                  banco: banco.banco,
                  logo: getBankLogo(banco.banco),
                  tipo: getOfferType(oferta.nome),
                  destaque: oferta.scoreMinimo <= (data.scoreTotal || 0)
                });
              });
            }
          });
        }
        
        setOffers(allOffers);
      } else {
        console.log('No score data available');
        setUserScore(0);
        setOffers([]);
      }
    } catch (error) {
      console.error('Error fetching user score and offers:', error);
      setUserScore(0);
      setOffers([]);
    } finally {
      setLoading(false);
    }
  };

  const getBankLogo = (bankName: string) => {
    switch (bankName.toLowerCase()) {
      case 'banrisul': return '🏢';
      case 'itau': return '🏦';
      case 'sicredi': return '🏛️';
      case 'mercado pago': return '💳';
      default: return '🏦';
    }
  };

  const getOfferType = (offerName: string): 'emprestimo' | 'cartao' | 'financiamento' => {
    const name = offerName.toLowerCase();
    if (name.includes('cartao') || name.includes('cartão')) return 'cartao';
    if (name.includes('financiamento')) return 'financiamento';
    return 'emprestimo';
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'emprestimo': return 'Empréstimo';
      case 'cartao': return 'Cartão';
      case 'financiamento': return 'Financiamento';
      default: return type;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'emprestimo': return 'bg-blue-100 text-blue-800';
      case 'cartao': return 'bg-green-100 text-green-800';
      case 'financiamento': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Navigation />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center">
            <div className="loading-pulse w-16 h-16 gradient-bg rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600">Carregando suas ofertas personalizadas...</p>
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
              Ofertas Recomendadas
            </h1>
            <p className="text-gray-600 text-lg">
              Ofertas personalizadas baseadas no seu score de {userScore} pontos
            </p>
          </div>

          {/* Score Status */}
          <Card className="mb-8 shadow-xl border-0 card-gradient">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-16 h-16 score-good rounded-full flex items-center justify-center mr-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Seu Score: {userScore}</h3>
                    <p className="text-gray-600">
                      {userScore > 0 ? 'Você tem acesso às melhores ofertas!' : 'Conecte seus bancos para calcular seu score'}
                    </p>
                  </div>
                </div>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  {offers.length} ofertas disponíveis
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Offers Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {offers.map((offer) => (
              <Card 
                key={offer.id} 
                className={`bank-card shadow-xl border-0 card-gradient relative overflow-hidden ${
                  offer.destaque ? 'ring-2 ring-primary ring-opacity-50' : ''
                }`}
              >
                {offer.destaque && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-2 text-sm font-medium">
                    <Star className="w-4 h-4 inline mr-1" />
                    Recomendado
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <span className="text-3xl mr-3">{offer.logo}</span>
                      <div>
                        <CardTitle className="text-xl">{offer.nome}</CardTitle>
                        <p className="text-gray-600">{offer.banco}</p>
                      </div>
                    </div>
                    <Badge className={getTypeColor(offer.tipo)}>
                      {getTypeLabel(offer.tipo)}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-gray-700">{offer.descricao}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Percent className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-gray-500">Taxa de Juros</p>
                        <p className="font-semibold">{offer.taxaJuros}% a.m.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-gray-500">Parcelas</p>
                        <p className="font-semibold">até {offer.parcelas}x</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 col-span-2">
                      <DollarSign className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-gray-500">Valor Disponível</p>
                        <p className="font-semibold text-lg">{formatCurrency(offer.valor)}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Score mínimo:</strong> {offer.scoreMinimo} pontos
                      {userScore >= offer.scoreMinimo ? (
                        <span className="text-green-600 ml-2">✓ Você se qualifica!</span>
                      ) : (
                        <span className="text-red-600 ml-2">Score insuficiente</span>
                      )}
                    </p>
                  </div>
                  
                  <Button 
                    className="w-full" 
                    size="lg"
                    disabled={userScore < offer.scoreMinimo}
                  >
                    {userScore >= offer.scoreMinimo ? 'Solicitar Oferta' : 'Score Insuficiente'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {offers.length === 0 && (
            <Card className="text-center shadow-xl border-0 card-gradient">
              <CardContent className="p-12">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Star className="w-12 h-12 text-gray-400" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Nenhuma oferta disponível</h2>
                <p className="text-gray-600 mb-8">
                  Conecte mais bancos ou atualize seu score para ver ofertas personalizadas.
                </p>
                <div className="space-x-4">
                  <Button asChild>
                    <a href="/conectar">Conectar Bancos</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/atualizar-score">Atualizar Score</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Offers;
