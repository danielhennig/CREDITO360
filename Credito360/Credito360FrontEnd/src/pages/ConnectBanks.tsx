
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Shield, 
  CheckCircle, 
  Clock,
  ExternalLink,
  Loader2
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ConnectBanks = () => {
  const [connectingBank, setConnectingBank] = useState<string | null>(null);
  const [connectedBanks, setConnectedBanks] = useState<string[]>([]);
  const { toast } = useToast();

  const availableBanks = [
    {
      id: 'bb',
      name: 'Banco do Brasil',
      logo: '🏛️',
      color: 'bg-yellow-500',
      status: 'available'
    },
    {
      id: 'caixa',
      name: 'Caixa Econômica Federal',
      logo: '🏦',
      color: 'bg-blue-600',
      status: 'available'
    },
    {
      id: 'nubank',
      name: 'Nubank',
      logo: '💜',
      color: 'bg-purple-500',
      status: 'connected'
    },
    {
      id: 'itau',
      name: 'Itaú Unibanco',
      logo: '🏢',
      color: 'bg-orange-500',
      status: 'available'
    },
    {
      id: 'inter',
      name: 'Banco Inter',
      logo: '🧡',
      color: 'bg-orange-600',
      status: 'available'
    },
    {
      id: 'bradesco',
      name: 'Bradesco',
      logo: '🔴',
      color: 'bg-red-600',
      status: 'available'
    },
    {
      id: 'santander',
      name: 'Santander',
      logo: '🔴',
      color: 'bg-red-500',
      status: 'available'
    },
    {
      id: 'c6',
      name: 'C6 Bank',
      logo: '⚫',
      color: 'bg-gray-800',
      status: 'available'
    }
  ];

  const handleConnectBank = async (bankId: string, bankName: string) => {
    setConnectingBank(bankId);
    
    try {
      // Simular redirecionamento e processo de autorização
      toast({
        title: "Redirecionando...",
        description: `Você será redirecionado para o ambiente seguro do ${bankName}`,
      });

      // Simular delay do processo de autorização
      setTimeout(() => {
        toast({
          title: "Processando autorização...",
          description: "Aguarde enquanto verificamos suas credenciais",
        });
        
        setTimeout(() => {
          setConnectedBanks(prev => [...prev, bankId]);
          setConnectingBank(null);
          
          toast({
            title: "Banco conectado com sucesso!",
            description: `${bankName} foi conectado à sua conta`,
          });

          // Simular dados recebidos
          const mockBankData = {
            bankId,
            bankName,
            accountBalance: Math.floor(Math.random() * 50000) + 5000,
            lastTransactions: [
              { date: '2024-01-15', description: 'Transferência recebida', amount: 2500 },
              { date: '2024-01-10', description: 'Pagamento cartão', amount: -450 }
            ],
            connectedAt: new Date().toISOString()
          };

          // Salvar dados simulados
          const existingData = JSON.parse(localStorage.getItem('connectedBanksData') || '[]');
          existingData.push(mockBankData);
          localStorage.setItem('connectedBanksData', JSON.stringify(existingData));
          
        }, 3000);
      }, 2000);

    } catch (error) {
      setConnectingBank(null);
      toast({
        title: "Erro na conexão",
        description: "Tente novamente em alguns instantes",
        variant: "destructive",
      });
    }
  };

  const isConnected = (bankId: string) => {
    return connectedBanks.includes(bankId) || availableBanks.find(b => b.id === bankId)?.status === 'connected';
  };

  const isConnecting = (bankId: string) => {
    return connectingBank === bankId;
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Conecte suas contas bancárias
        </h1>
        <p className="text-lg text-gray-600">
          Use o Open Finance para conectar seus bancos de forma segura e obter melhores ofertas
        </p>
      </div>

      {/* Benefícios da Conexão */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-green-50">
        <CardContent className="p-8">
          <div className="text-center mb-6">
            <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Conexão Segura via Open Finance
            </h3>
            <p className="text-gray-600">
              Regulamentado pelo Banco Central, seus dados estão sempre protegidos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Melhores taxas</h4>
              <p className="text-sm text-gray-600">
                Análise mais precisa resulta em ofertas com taxas melhores
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Dados seguros</h4>
              <p className="text-sm text-gray-600">
                Criptografia de ponta a ponta e conformidade com a LGPD
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Aprovação rápida</h4>
              <p className="text-sm text-gray-600">
                Histórico completo acelera a análise e aprovação
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Bancos */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Bancos Disponíveis</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableBanks.map((bank) => (
            <Card key={bank.id} className={`border-0 shadow-lg transition-shadow hover:shadow-xl ${
              isConnected(bank.id) ? 'ring-2 ring-green-200' : ''
            }`}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 ${bank.color} rounded-lg flex items-center justify-center text-2xl`}>
                    {bank.logo}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{bank.name}</h3>
                    {isConnected(bank.id) && (
                      <Badge className="bg-green-100 text-green-800 border-green-200 mt-1">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Conectado
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  {isConnected(bank.id) ? (
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full" disabled>
                        <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                        Conectado
                      </Button>
                      <p className="text-xs text-gray-500 text-center">
                        Dados sendo sincronizados automaticamente
                      </p>
                    </div>
                  ) : isConnecting(bank.id) ? (
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full" disabled>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Conectando...
                      </Button>
                      <p className="text-xs text-gray-500 text-center">
                        Processando autorização
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Button 
                        onClick={() => handleConnectBank(bank.id, bank.name)}
                        className="w-full"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Conectar
                      </Button>
                      <p className="text-xs text-gray-500 text-center">
                        Redirecionamento seguro
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Status de Conexões */}
      {(connectedBanks.length > 0 || availableBanks.some(b => b.status === 'connected')) && (
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Suas Conexões Ativas</CardTitle>
            <CardDescription>
              Bancos conectados à sua conta do Crédito360
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {availableBanks
                .filter(bank => isConnected(bank.id))
                .map((bank) => (
                  <div key={bank.id} className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${bank.color} rounded-lg flex items-center justify-center text-lg`}>
                        {bank.logo}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{bank.name}</p>
                        <p className="text-sm text-gray-600">Última sincronização: agora</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      Ativo
                    </Badge>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Aviso de Segurança */}
      <Card className="border-0 bg-blue-50 shadow-sm">
        <CardContent className="p-6">
          <div className="flex items-start space-x-3">
            <Shield className="h-6 w-6 text-blue-600 mt-1" />
            <div>
              <h4 className="font-medium text-blue-900 mb-2">Segurança e Privacidade</h4>
              <div className="text-sm text-blue-800 space-y-1">
                <p>• Seus dados são criptografados e nunca armazenados sem sua autorização</p>
                <p>• Você pode revogar o acesso a qualquer momento nas configurações</p>
                <p>• Utilizamos apenas APIs oficiais regulamentadas pelo Banco Central</p>
                <p>• Conformidade total com LGPD e regulamentações do Open Finance</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConnectBanks;
