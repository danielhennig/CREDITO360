import React, { useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { CheckCircle, ExternalLink, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ConnectBanks = () => {
  const [connectingBank, setConnectingBank] = useState<string | null>(null);
  const [connectedBanks, setConnectedBanks] = useState<string[]>([]);
  const [credentials, setCredentials] = useState<{ [key: string]: { numeroConta: string; senha: string } }>({});
  const { toast } = useToast();

  const availableBanks = [
    { id: 'itau', name: 'Itaú', logo: '🏢', color: 'bg-orange-500' },
    { id: 'sicredi', name: 'Sicredi', logo: '🏛️', color: 'bg-yellow-500' },
    { id: 'banrisul', name: 'Banrisul', logo: '🏦', color: 'bg-blue-600' },
    { id: 'mercado-pago', name: 'Mercado Pago', logo: '🧡', color: 'bg-orange-600' }
  ];

  const handleInputChange = (bankId: string, field: 'numeroConta' | 'senha', value: string) => {
    setCredentials((prev) => ({
      ...prev,
      [bankId]: {
        ...prev[bankId],
        [field]: value
      }
    }));
  };

  const handleConnectBank = async (bankId: string, bankName: string) => {
    const cred = credentials[bankId];
    if (!cred?.numeroConta || !cred?.senha) {
      toast({
        title: 'Campos obrigatórios',
        description: `Informe o número da conta e senha para conectar ao ${bankName}`,
        variant: 'destructive'
      });
      return;
    }

    setConnectingBank(bankId);
    try {
      const response = await axios.post(`http://localhost:3000/credito360/conectar/${bankId}`, {
        numeroConta: cred.numeroConta,
        senha: cred.senha
      });

      const bankData = {
        bankId,
        bankName,
        ...response.data,
        connectedAt: new Date().toISOString()
      };

      const existingData = JSON.parse(localStorage.getItem('connectedBanksData') || '[]');
      localStorage.setItem('connectedBanksData', JSON.stringify([...existingData, bankData]));

      setConnectedBanks((prev) => [...prev, bankId]);
      toast({
        title: `${bankName} conectado com sucesso!`,
        description: 'Dados salvos localmente para análise.'
      });
    } catch (err) {
      toast({
        title: `Erro ao conectar com ${bankName}`,
        description: 'Verifique as credenciais e tente novamente.',
        variant: 'destructive'
      });
    } finally {
      setConnectingBank(null);
    }
  };

  const isConnected = (bankId: string) => connectedBanks.includes(bankId);
  const isConnecting = (bankId: string) => connectingBank === bankId;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 text-center">Conecte suas Contas</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableBanks.map((bank) => (
          <Card key={bank.id} className="border-0 shadow-md">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 ${bank.color} rounded-lg flex items-center justify-center text-2xl`}>
                  {bank.logo}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{bank.name}</h3>
                  {isConnected(bank.id) && (
                    <Badge className="bg-green-100 text-green-800 border-green-200 mt-1">
                      <CheckCircle className="h-3 w-3 mr-1" /> Conectado
                    </Badge>
                  )}
                </div>
              </div>

              {!isConnected(bank.id) && (
                <>
                  <Input
                    type="text"
                    placeholder="Número da Conta"
                    value={credentials[bank.id]?.numeroConta || ''}
                    onChange={(e) => handleInputChange(bank.id, 'numeroConta', e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder="Senha"
                    value={credentials[bank.id]?.senha || ''}
                    onChange={(e) => handleInputChange(bank.id, 'senha', e.target.value)}
                  />
                </>
              )}

              {isConnected(bank.id) ? (
                <Button variant="outline" className="w-full" disabled>
                  <CheckCircle className="mr-2 h-4 w-4" /> Conectado
                </Button>
              ) : isConnecting(bank.id) ? (
                <Button variant="outline" className="w-full" disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Conectando...
                </Button>
              ) : (
                <Button onClick={() => handleConnectBank(bank.id, bank.name)} className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" /> Conectar
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ConnectBanks;
