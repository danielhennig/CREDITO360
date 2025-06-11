
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Building2, 
  TrendingDown, 
  Calendar, 
  DollarSign,
  Star,
  CheckCircle,
  Filter
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Marketplace = () => {
  const [filters, setFilters] = useState({
    maxInterestRate: [5],
    maxAmount: [50000],
    maxInstallments: [60],
    compatibleOnly: true
  });

  const { toast } = useToast();

  const mockOffers = [
    {
      id: '1',
      institutionName: 'Banco Digital Plus',
      maxAmount: 50000,
      minAmount: 1000,
      maxInstallments: 60,
      minInstallments: 6,
      interestRate: 2.5,
      rating: 4.8,
      requirements: {
        minScore: 600,
        maxRisk: 'medium' as const,
        minIncome: 3000
      },
      features: ['Aprovação rápida', 'Sem taxa de adesão', 'Primeiro pagamento em 30 dias'],
      compatible: true
    },
    {
      id: '2',
      institutionName: 'FinTech Inovadora',
      maxAmount: 30000,
      minAmount: 500,
      maxInstallments: 48,
      minInstallments: 3,
      interestRate: 3.2,
      rating: 4.6,
      requirements: {
        minScore: 550,
        maxRisk: 'medium' as const,
        minIncome: 2500
      },
      features: ['100% digital', 'Análise por IA', 'Liberação em 24h'],
      compatible: true
    },
    {
      id: '3',
      institutionName: 'Banco Tradicional SA',
      maxAmount: 100000,
      minAmount: 5000,
      maxInstallments: 72,
      minInstallments: 12,
      interestRate: 4.1,
      rating: 4.2,
      requirements: {
        minScore: 700,
        maxRisk: 'low' as const,
        minIncome: 5000
      },
      features: ['Melhor taxa para score alto', 'Conta corrente grátis', 'Relacionamento bancário'],
      compatible: false
    },
    {
      id: '4',
      institutionName: 'Crédito Fácil Ltda',
      maxAmount: 15000,
      minAmount: 300,
      maxInstallments: 36,
      minInstallments: 6,
      interestRate: 5.8,
      rating: 3.9,
      requirements: {
        minScore: 400,
        maxRisk: 'high' as const,
        minIncome: 1500
      },
      features: ['Aceita score baixo', 'Sem consulta ao SPC', 'Aprovação garantida'],
      compatible: true
    }
  ];

  const filteredOffers = mockOffers.filter(offer => {
    if (filters.compatibleOnly && !offer.compatible) return false;
    if (offer.interestRate > filters.maxInterestRate[0]) return false;
    if (offer.maxAmount < filters.maxAmount[0]) return false;
    if (offer.maxInstallments < filters.maxInstallments[0]) return false;
    return true;
  });

  const handleSimulate = (offerId: string) => {
    toast({
      title: "Simulação iniciada",
      description: "Redirecionando para a simulação personalizada...",
    });
    // Em uma implementação real, redirecionaria para o simulador com a oferta pré-selecionada
  };

  const handleContract = (offerId: string) => {
    toast({
      title: "Interesse registrado",
      description: "Você será redirecionado para o site da instituição para continuar.",
    });
    // Em uma implementação real, redirecionaria para o processo de contratação
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Marketplace de Crédito</h1>
        <p className="text-gray-600">Compare e encontre as melhores ofertas para seu perfil</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Filtros */}
        <div className="lg:col-span-1">
          <Card className="border-0 shadow-lg sticky top-6">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Filter className="h-5 w-5" />
                <span>Filtros</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Taxa de juros máxima: {filters.maxInterestRate[0]}% a.m.</Label>
                <Slider
                  value={filters.maxInterestRate}
                  onValueChange={(value) => setFilters(prev => ({ ...prev, maxInterestRate: value }))}
                  max={10}
                  min={1}
                  step={0.5}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label>Valor máximo: R$ {filters.maxAmount[0].toLocaleString('pt-BR')}</Label>
                <Slider
                  value={filters.maxAmount}
                  onValueChange={(value) => setFilters(prev => ({ ...prev, maxAmount: value }))}
                  max={100000}
                  min={1000}
                  step={1000}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label>Parcelas máximas: {filters.maxInstallments[0]}x</Label>
                <Slider
                  value={filters.maxInstallments}
                  onValueChange={(value) => setFilters(prev => ({ ...prev, maxInstallments: value }))}
                  max={72}
                  min={6}
                  step={6}
                  className="w-full"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="compatible"
                  checked={filters.compatibleOnly}
                  onCheckedChange={(checked) => setFilters(prev => ({ ...prev, compatibleOnly: checked as boolean }))}
                />
                <Label htmlFor="compatible" className="text-sm">
                  Apenas ofertas compatíveis com meu perfil
                </Label>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lista de ofertas */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              {filteredOffers.length} ofertas encontradas
            </p>
            <Badge variant="outline" className="text-sm">
              {filteredOffers.filter(o => o.compatible).length} compatíveis com seu perfil
            </Badge>
          </div>

          <div className="space-y-4">
            {filteredOffers.map((offer) => (
              <Card key={offer.id} className={`border-0 shadow-lg transition-shadow hover:shadow-xl ${
                offer.compatible ? 'ring-2 ring-green-200' : ''
              }`}>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Informações da instituição */}
                    <div className="md:col-span-1">
                      <div className="flex items-start space-x-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                          <Building2 className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{offer.institutionName}</h3>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-600">{offer.rating}</span>
                          </div>
                        </div>
                      </div>

                      {offer.compatible && (
                        <Badge className="bg-green-100 text-green-800 border-green-200">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Compatível com seu perfil
                        </Badge>
                      )}
                    </div>

                    {/* Detalhes da oferta */}
                    <div className="md:col-span-1 space-y-3">
                      <div className="flex items-center space-x-2">
                        <TrendingDown className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-600">Taxa a partir de</span>
                        <span className="font-semibold text-green-600">{offer.interestRate}% a.m.</span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-4 w-4 text-blue-500" />
                        <span className="text-sm text-gray-600">Até</span>
                        <span className="font-semibold text-blue-600">
                          R$ {offer.maxAmount.toLocaleString('pt-BR')}
                        </span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-purple-500" />
                        <span className="text-sm text-gray-600">Até</span>
                        <span className="font-semibold text-purple-600">{offer.maxInstallments}x</span>
                      </div>

                      <div className="space-y-1">
                        {offer.features.slice(0, 2).map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span className="text-xs text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Ações */}
                    <div className="md:col-span-1 flex flex-col justify-center space-y-3">
                      <Button 
                        onClick={() => handleSimulate(offer.id)}
                        className="w-full"
                        variant="outline"
                      >
                        Simular
                      </Button>
                      
                      <Button 
                        onClick={() => handleContract(offer.id)}
                        className="w-full"
                        disabled={!offer.compatible}
                      >
                        {offer.compatible ? 'Contratar' : 'Não compatível'}
                      </Button>

                      <p className="text-xs text-gray-500 text-center">
                        Score mínimo: {offer.requirements.minScore}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredOffers.length === 0 && (
            <Card className="border-0 shadow-lg">
              <CardContent className="text-center py-12">
                <Building2 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Nenhuma oferta encontrada
                </h3>
                <p className="text-gray-600 mb-4">
                  Tente ajustar os filtros para ver mais opções
                </p>
                <Button 
                  onClick={() => setFilters({
                    maxInterestRate: [10],
                    maxAmount: [100000],
                    maxInstallments: [72],
                    compatibleOnly: false
                  })}
                  variant="outline"
                >
                  Limpar filtros
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
