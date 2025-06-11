
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Shield, Lock, Eye, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Consent = () => {
  const [hasConsented, setHasConsented] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleContinue = () => {
    if (!hasConsented) {
      toast({
        title: "Consentimento necessário",
        description: "Você precisa autorizar o uso dos seus dados para continuar",
        variant: "destructive",
      });
      return;
    }

    // Simular registro do consentimento
    localStorage.setItem('userConsent', JSON.stringify({
      granted: true,
      timestamp: new Date().toISOString(),
      scope: ['transactions', 'balance', 'income'],
      validity: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString() // 1 ano
    }));

    toast({
      title: "Consentimento registrado",
      description: "Redirecionando para coleta de dados...",
    });

    setTimeout(() => {
      navigate('/coleta-dados');
    }, 1500);
  };

  const dataUsageInfo = [
    {
      icon: Eye,
      title: "Extratos bancários",
      description: "Para analisar seu histórico de transações e padrões de gastos"
    },
    {
      icon: CheckCircle,
      title: "Saldo atual",
      description: "Para verificar sua capacidade financeira atual"
    },
    {
      icon: Shield,
      title: "Dados de renda",
      description: "Para estimar sua capacidade de pagamento"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Autorização para uso de dados
        </h1>
        <p className="text-lg text-gray-600">
          Para oferecer as melhores propostas de crédito, precisamos da sua autorização 
          para acessar alguns dados financeiros via Open Finance
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Informações sobre o Open Finance */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Lock className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <CardTitle>Open Finance Seguro</CardTitle>
                <CardDescription>Regulamentado pelo Banco Central</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Dados criptografados</p>
                  <p className="text-sm text-gray-600">Todas as informações são protegidas por criptografia</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Você controla o acesso</p>
                  <p className="text-sm text-gray-600">Pode revogar a autorização a qualquer momento</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Uso específico</p>
                  <p className="text-sm text-gray-600">Dados usados apenas para análise de crédito</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dados que serão utilizados */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Dados que utilizaremos</CardTitle>
            <CardDescription>
              Informações necessárias para sua análise de crédito
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dataUsageInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <Icon className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Formulário de consentimento */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-green-50">
        <CardContent className="p-8">
          <div className="space-y-6">
            <div className="text-center">
              <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Sua autorização é importante
              </h3>
              <p className="text-gray-600">
                Ao autorizar, você nos permite acessar seus dados financeiros de forma segura 
                para encontrar as melhores ofertas de crédito para seu perfil.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 border">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="consent"
                  checked={hasConsented}
                  onCheckedChange={(checked) => setHasConsented(checked as boolean)}
                  className="mt-1"
                />
                <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                  Autorizo o <strong>Crédito360</strong> a acessar meus dados financeiros 
                  (extratos, saldo e informações de renda) através do Open Finance para 
                  análise e proposição de ofertas de crédito personalizadas. Entendo que 
                  posso revogar esta autorização a qualquer momento e que meus dados serão 
                  utilizados exclusivamente para os fins descritos acima, em conformidade 
                  com a LGPD e regulamentações do Banco Central.
                </Label>
              </div>
            </div>

            <div className="text-center">
              <Button 
                onClick={handleContinue}
                disabled={!hasConsented}
                size="lg"
                className="px-8"
              >
                {hasConsented ? 'Continuar com autorização' : 'Marque a autorização para continuar'}
              </Button>
            </div>

            <div className="text-center">
              <p className="text-xs text-gray-500">
                Esta autorização tem validade de 12 meses e pode ser revogada a qualquer momento 
                nas configurações da sua conta.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Consent;
