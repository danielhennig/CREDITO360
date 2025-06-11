
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  TrendingUp, 
  Shield, 
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { CreditProfile } from '@/types';

const Analysis = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [profile, setProfile] = useState<CreditProfile | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Simular análise de IA
    const timer = setTimeout(() => {
      const collectedData = JSON.parse(localStorage.getItem('collectedData') || '{}');
      
      // Gerar perfil baseado nos dados coletados (simulação)
      const generatedProfile: CreditProfile = {
        risk: collectedData.creditScore > 700 ? 'low' : 
              collectedData.creditScore > 500 ? 'medium' : 'high',
        score: collectedData.creditScore || 720,
        paymentCapacity: Math.floor(collectedData.averageIncome * 0.3) || 2500,
        estimatedIncome: collectedData.averageIncome || 8500
      };
      
      setProfile(generatedProfile);
      setIsAnalyzing(false);
      
      // Salvar perfil gerado
      localStorage.setItem('creditProfile', JSON.stringify(generatedProfile));
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'high': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getRiskLabel = (risk: string) => {
    switch (risk) {
      case 'low': return 'Baixo Risco';
      case 'medium': return 'Risco Médio';
      case 'high': return 'Alto Risco';
      default: return 'Não definido';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 800) return 'text-green-600';
    if (score >= 600) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (isAnalyzing) {
    return (
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Analisando seu perfil financeiro
          </h1>
          <p className="text-lg text-gray-600">
            Nossa IA está processando seus dados para criar um perfil personalizado
          </p>
        </div>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-8">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                <Brain className="h-10 w-10 text-white animate-pulse" />
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Análise em andamento...
                </h3>
                <p className="text-gray-600 mb-4">
                  Processando dados financeiros e calculando score de crédito
                </p>
                <Progress value={75} className="w-full h-3" />
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2 text-green-600">
                  <CheckCircle className="h-4 w-4" />
                  <span>Dados coletados</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-blue-600">
                  <Brain className="h-4 w-4 animate-pulse" />
                  <span>Analisando padrões</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Seu perfil de crédito está pronto!
        </h1>
        <p className="text-lg text-gray-600">
          Nossa IA analisou seus dados e criou um perfil personalizado
        </p>
      </div>

      {profile && (
        <div className="grid md:grid-cols-2 gap-8">
          {/* Score de Crédito */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center space-x-2">
                <Award className="h-6 w-6 text-yellow-500" />
                <span>Score de Crédito</span>
              </CardTitle>
              <CardDescription>Sua pontuação atual</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="w-full h-full rounded-full border-8 border-gray-200 relative">
                  <div 
                    className={`absolute inset-0 rounded-full border-8 border-transparent ${getScoreColor(profile.score).replace('text', 'border')}`}
                    style={{
                      borderTopColor: 'transparent',
                      borderRightColor: 'transparent',
                      transform: `rotate(${(profile.score / 1000) * 360}deg)`
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`text-3xl font-bold ${getScoreColor(profile.score)}`}>
                      {profile.score}
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                De 0 a 1000 pontos
              </div>
            </CardContent>
          </Card>

          {/* Perfil de Risco */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center space-x-2">
                <Shield className="h-6 w-6 text-blue-500" />
                <span>Perfil de Risco</span>
              </CardTitle>
              <CardDescription>Classificação baseada na análise</CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="flex justify-center">
                <Badge className={`${getRiskColor(profile.risk)} text-white px-4 py-2 text-base`}>
                  {getRiskLabel(profile.risk)}
                </Badge>
              </div>
              
              <div className="text-sm text-gray-600">
                {profile.risk === 'low' && "Excelente histórico financeiro"}
                {profile.risk === 'medium' && "Bom histórico com pequenas ressalvas"}
                {profile.risk === 'high' && "Histórico requer atenção especial"}
              </div>
            </CardContent>
          </Card>

          {/* Capacidade de Pagamento */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center space-x-2">
                <TrendingUp className="h-6 w-6 text-green-500" />
                <span>Capacidade de Pagamento</span>
              </CardTitle>
              <CardDescription>Valor estimado mensal</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                R$ {profile.paymentCapacity.toLocaleString('pt-BR')}
              </div>
              <div className="text-sm text-gray-600">
                Baseado em 30% da renda estimada
              </div>
            </CardContent>
          </Card>

          {/* Renda Estimada */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center space-x-2">
                <TrendingUp className="h-6 w-6 text-blue-500" />
                <span>Renda Estimada</span>
              </CardTitle>
              <CardDescription>Análise dos últimos meses</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                R$ {profile.estimatedIncome.toLocaleString('pt-BR')}
              </div>
              <div className="text-sm text-gray-600">
                Renda mensal média
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Resumo e Recomendações */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-green-50">
        <CardContent className="p-8">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Recomendações para seu perfil
            </h3>
            
            {profile?.risk === 'low' && (
              <div className="space-y-2">
                <p className="text-green-700 font-medium">🎉 Parabéns! Você tem um excelente perfil de crédito</p>
                <p className="text-gray-600">
                  Com seu score e histórico, você tem acesso às melhores taxas do mercado. 
                  Recomendamos explorar ofertas de crédito consignado e financiamentos com garantia.
                </p>
              </div>
            )}
            
            {profile?.risk === 'medium' && (
              <div className="space-y-2">
                <p className="text-yellow-700 font-medium">⚡ Você tem um bom perfil de crédito</p>
                <p className="text-gray-600">
                  Seu perfil permite acesso a boas ofertas de crédito. Considere melhorar seu score 
                  para ter acesso a taxas ainda melhores.
                </p>
              </div>
            )}
            
            {profile?.risk === 'high' && (
              <div className="space-y-2">
                <p className="text-red-700 font-medium">🔄 Vamos encontrar opções para seu perfil</p>
                <p className="text-gray-600">
                  Existem instituições especializadas em perfis como o seu. Recomendamos 
                  trabalhar na melhoria do score e considerar produtos com garantia.
                </p>
              </div>
            )}

            <Button onClick={() => navigate('/marketplace')} size="lg" className="mt-6">
              Ver propostas personalizadas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analysis;
