import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Navigation from "../components/Navigation";
import { toast } from "sonner";
import { CheckCircle, AlertCircle, Building2, TrendingUp } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

interface Bank {
  id: string;
  name: string;
  logo: string;
  color: string;
  endpoint: string;
  connected: boolean;
}

const ConnectBanks = () => {
  const { user } = useAuth();
  const [banks, setBanks] = useState<Bank[]>([
    { id: 'itau', name: 'Itaú', logo: '🏦', color: 'from-orange-400 to-orange-600', endpoint: 'itau', connected: false },
    { id: 'sicredi', name: 'Sicredi', logo: '🏛️', color: 'from-green-400 to-green-600', endpoint: 'sicredi', connected: false },
    { id: 'mercadopago', name: 'Mercado Pago', logo: '💳', color: 'from-blue-400 to-blue-600', endpoint: 'mercado-pago', connected: false },
    { id: 'banrisul', name: 'Banrisul', logo: '🏢', color: 'from-red-400 to-red-600', endpoint: 'banrisul', connected: false },
  ]);

  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
  const [credentials, setCredentials] = useState({
    account: '',
    password: ''
  });
  const [connecting, setConnecting] = useState(false);

  useEffect(() => {
    loadConnectedBanks();
  }, [user]);

  const loadConnectedBanks = async () => {
    if (user?.cpf) {
      try {
        const response = await fetch(`http://localhost:3000/credito360/atualizar-score/${user.cpf.replace(/\D/g, '')}`);
        
        if (response.ok) {
          const data = await response.json();
          console.log('Connected banks data:', data);
          
          // Processar bancos conectados baseado nos dados da API
          const connectedBankNames = data.bancos ? data.bancos.map((banco: any) => banco.banco.toLowerCase()) : [];
          
          setBanks(prev => prev.map(bank => ({
            ...bank,
            connected: connectedBankNames.includes(bank.id) || connectedBankNames.includes(bank.name.toLowerCase())
          })));
        } else {
          console.log('No banks connected');
        }
      } catch (error) {
        console.error('Error fetching connected banks:', error);
      }
    }
  };

  const handleConnect = async (bank: Bank) => {
    if (!credentials.account || !credentials.password) {
      toast.error('Por favor, preencha todos os campos.');
      return;
    }

    setConnecting(true);

    try {
      const response = await fetch(`http://localhost:3000/credito360/conectar/${bank.endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          numeroConta: credentials.account,
          senha: credentials.password,
        }),
      });

      if (response.ok) {
        setBanks(prev => prev.map(b => 
          b.id === bank.id ? { ...b, connected: true } : b
        ));
        
        toast.success(`${bank.name} conectado com sucesso!`);
        setCredentials({ account: '', password: '' });
        setSelectedBank(null);
      } else {
        throw new Error('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Connection error:', error);
      toast.error(`Erro ao conectar com ${bank.name}. Verifique suas credenciais.`);
    } finally {
      setConnecting(false);
    }
  };

  const handleDisconnect = (bankId: string) => {
    setBanks(prev => prev.map(b => 
      b.id === bankId ? { ...b, connected: false } : b
    ));
    toast.success('Banco desconectado com sucesso!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="fade-in-up">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Conectar Bancos
            </h1>
            <p className="text-gray-600 text-lg">
              Conecte suas contas bancárias para calcular seu score de crédito
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {banks.map((bank) => (
              <Card key={bank.id} className="bank-card shadow-xl border-0 card-gradient relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${bank.color}`}></div>
                
                <CardHeader className="text-center pb-4">
                  <div className="text-5xl mb-3">{bank.logo}</div>
                  <CardTitle className="text-xl">{bank.name}</CardTitle>
                </CardHeader>
                
                <CardContent className="text-center">
                  {bank.connected ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-center text-green-600">
                        <CheckCircle className="w-6 h-6 mr-2" />
                        <span className="font-medium">Conectado</span>
                      </div>
                      <Button 
                        variant="outline" 
                        onClick={() => handleDisconnect(bank.id)}
                        className="w-full"
                      >
                        Desconectar
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex items-center justify-center text-gray-500">
                        <AlertCircle className="w-6 h-6 mr-2" />
                        <span className="font-medium">Desconectado</span>
                      </div>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            className="w-full"
                            onClick={() => setSelectedBank(bank)}
                          >
                            Conectar
                          </Button>
                        </DialogTrigger>
                        
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle className="flex items-center">
                              <span className="text-3xl mr-3">{bank.logo}</span>
                              Conectar {bank.name}
                            </DialogTitle>
                          </DialogHeader>
                          
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="account">Número da Conta</Label>
                              <Input
                                id="account"
                                placeholder="Digite o número da sua conta"
                                value={credentials.account}
                                onChange={(e) => setCredentials(prev => ({
                                  ...prev,
                                  account: e.target.value
                                }))}
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="password">Senha</Label>
                              <Input
                                id="password"
                                type="password"
                                placeholder="Digite sua senha"
                                value={credentials.password}
                                onChange={(e) => setCredentials(prev => ({
                                  ...prev,
                                  password: e.target.value
                                }))}
                              />
                            </div>
                            
                            <div className="bg-blue-50 p-4 rounded-lg">
                              <div className="flex items-start space-x-2">
                                <Building2 className="w-5 h-5 text-blue-600 mt-0.5" />
                                <div className="text-sm text-blue-800">
                                  <strong>Segurança Open Finance:</strong> Suas credenciais são protegidas 
                                  pelos mais altos padrões de segurança do Banco Central.
                                </div>
                              </div>
                            </div>
                            
                            <Button 
                              className="w-full" 
                              onClick={() => handleConnect(bank)}
                              disabled={connecting}
                            >
                              {connecting ? 'Conectando...' : 'Conectar Banco'}
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 shadow-xl border-0 card-gradient">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Por que conectar suas contas?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Score Preciso</h3>
                  <p className="text-gray-600">
                    Calculamos seu score baseado em dados reais das suas contas
                  </p>
                </div>
                
                <div>
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Ofertas Melhores</h3>
                  <p className="text-gray-600">
                    Receba ofertas de crédito personalizadas com melhores taxas
                  </p>
                </div>
                
                <div>
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Segurança Total</h3>
                  <p className="text-gray-600">
                    Protocolo Open Finance regulamentado pelo Banco Central
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ConnectBanks;
