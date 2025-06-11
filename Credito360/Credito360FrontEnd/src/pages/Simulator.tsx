
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Calculator, 
  CheckCircle, 
  XCircle, 
  TrendingUp,
  ShoppingCart,
  AlertCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Simulator = () => {
  const [amount, setAmount] = useState('10000');
  const [installments, setInstallments] = useState([24]);
  const [selectedBank, setSelectedBank] = useState('');
  const [result, setResult] = useState(null);
  
  const { toast } = useToast();

  // Simular dados do usuário
  const creditProfile = JSON.parse(localStorage.getItem('creditProfile') || '{}');
  const connectedBanks = ['Banco Digital Plus', 'FinTech Inovadora']; // Mock

  const formatCurrency = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0
    }).format(Number(numbers));
  };

  const calculateSimulation = () => {
    const loanAmount = Number(amount.replace(/\D/g, ''));
    const numInstallments = installments[0];
    
    if (loanAmount < 500 || loanAmount > 100000) {
      toast({
        title: "Valor inválido",
        description: "O valor deve estar entre R$ 500 e R$ 100.000",
        variant: "destructive",
      });
      return;
    }

    // Simular cálculo baseado no perfil do usuário
    let baseRate = 3.5; // Taxa base
    
    // Ajustar taxa baseada no score
    if (creditProfile.score >= 800) baseRate = 2.0;
    else if (creditProfile.score >= 700) baseRate = 2.5;
    else if (creditProfile.score >= 600) baseRate = 3.0;
    else if (creditProfile.score >= 500) baseRate = 4.0;
    else baseRate = 5.5;

    // Calcular valores
    const monthlyRate = baseRate / 100;
    const totalAmount = loanAmount * Math.pow(1 + monthlyRate, numInstallments);
    const monthlyPayment = totalAmount / numInstallments;
    
    // Verificar compatibilidade com o perfil
    const compatible = monthlyPayment <= (creditProfile.paymentCapacity || 2500);

    setResult({
      loanAmount,
      installments: numInstallments,
      interestRate: baseRate,
      monthlyPayment,
      totalAmount,
      compatible
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Simulador de Empréstimo
        </h1>
        <p className="text-lg text-gray-600">
          Simule seu empréstimo personalizado baseado no seu perfil
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Formulário de Simulação */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calculator className="h-6 w-6 text-blue-500" />
              <span>Dados da Simulação</span>
            </CardTitle>
            <CardDescription>
              Preencha os dados para simular seu empréstimo
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="amount">Valor desejado</Label>
              <Input
                id="amount"
                value={formatCurrency(amount)}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="R$ 0,00"
                className="text-lg"
              />
              <p className="text-xs text-gray-500">
                Valor mínimo: R$ 500 | Valor máximo: R$ 100.000
              </p>
            </div>

            <div className="space-y-4">
              <Label>Número de parcelas: {installments[0]}x</Label>
              <Slider
                value={installments}
                onValueChange={setInstallments}
                max={72}
                min={6}
                step={6}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500">
                <span>6x</span>
                <span>72x</span>
              </div>
            </div>

            {connectedBanks.length > 0 && (
              <div className="space-y-2">
                <Label>Banco conectado (opcional)</Label>
                <Select value={selectedBank} onValueChange={setSelectedBank}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um banco" />
                  </SelectTrigger>
                  <SelectContent>
                    {connectedBanks.map((bank) => (
                      <SelectItem key={bank} value={bank}>
                        {bank}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <Button onClick={calculateSimulation} className="w-full" size="lg">
              Simular Proposta
            </Button>
          </CardContent>
        </Card>

        {/* Resultado da Simulação */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Resultado da Simulação</CardTitle>
            <CardDescription>
              {result ? 'Sua simulação personalizada' : 'Preencha os dados para ver o resultado'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {result ? (
              <div className="space-y-6">
                {/* Status de Compatibilidade */}
                <div className={`p-4 rounded-lg border-l-4 ${
                  result.compatible 
                    ? 'border-green-500 bg-green-50' 
                    : 'border-red-500 bg-red-50'
                }`}>
                  <div className="flex items-center space-x-2">
                    {result.compatible ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                    <span className={`font-medium ${
                      result.compatible ? 'text-green-800' : 'text-red-800'
                    }`}>
                      {result.compatible 
                        ? '✅ Você se qualifica para esta simulação!' 
                        : '❌ Valor acima da sua capacidade de pagamento'}
                    </span>
                  </div>
                  {!result.compatible && (
                    <p className="text-sm text-red-600 mt-2">
                      Sugerimos reduzir o valor ou aumentar o número de parcelas
                    </p>
                  )}
                </div>

                {/* Detalhes da Simulação */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-600 font-medium">Valor do Empréstimo</p>
                    <p className="text-2xl font-bold text-blue-800">
                      R$ {result.loanAmount.toLocaleString('pt-BR')}
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-600 font-medium">Taxa de Juros</p>
                    <p className="text-2xl font-bold text-green-800">
                      {result.interestRate.toFixed(1)}% a.m.
                    </p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-purple-600 font-medium">Valor da Parcela</p>
                    <p className="text-2xl font-bold text-purple-800">
                      R$ {result.monthlyPayment.toLocaleString('pt-BR')}
                    </p>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-sm text-orange-600 font-medium">Total a Pagar</p>
                    <p className="text-2xl font-bold text-orange-800">
                      R$ {result.totalAmount.toLocaleString('pt-BR')}
                    </p>
                  </div>
                </div>

                {/* Resumo */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Resumo da Simulação</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>• Empréstimo de R$ {result.loanAmount.toLocaleString('pt-BR')} em {result.installments} parcelas</p>
                    <p>• Parcela mensal de R$ {result.monthlyPayment.toLocaleString('pt-BR')}</p>
                    <p>• Taxa personalizada de {result.interestRate.toFixed(1)}% a.m. baseada no seu score</p>
                    <p>• Total de juros: R$ {(result.totalAmount - result.loanAmount).toLocaleString('pt-BR')}</p>
                  </div>
                </div>

                {/* Ações */}
                {result.compatible && (
                  <div className="space-y-3">
                    <Button asChild className="w-full" size="lg">
                      <Link to="/marketplace">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Ver Propostas Compatíveis
                      </Link>
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                      Encontre ofertas reais que se encaixam nesta simulação
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12">
                <Calculator className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">
                  Preencha os dados ao lado para ver sua simulação personalizada
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div className="text-left">
                      <p className="text-sm font-medium text-blue-900">
                        Simulação baseada no seu perfil
                      </p>
                      <p className="text-xs text-blue-700 mt-1">
                        Score: {creditProfile.score || 720} | 
                        Capacidade: R$ {(creditProfile.paymentCapacity || 2500).toLocaleString('pt-BR')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Dicas */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-green-50">
        <CardContent className="p-6">
          <h3 className="font-semibold text-gray-900 mb-4">💡 Dicas para uma melhor simulação</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="space-y-2">
              <p>• Considere sua capacidade de pagamento atual</p>
              <p>• Lembre-se de deixar uma margem para emergências</p>
            </div>
            <div className="space-y-2">
              <p>• Parcelas menores significam mais tempo pagando</p>
              <p>• Conectar bancos pode gerar taxas melhores</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Simulator;
