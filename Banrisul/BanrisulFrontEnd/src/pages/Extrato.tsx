
import React, { useState } from 'react';
import { buscarExtrato } from '../services/banrisulApi';
import { useToast } from '../hooks/use-toast';
import Loading from '../components/Loading';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { FileText, Search, ArrowUpCircle, ArrowDownCircle, Calendar } from 'lucide-react';

interface ExtratoData {
  saldo: number;
  transacoes: Array<{
    id: string;
    tipo: 'deposito' | 'saque';
    valor: number;
    data: string;
  }>;
}

const Extrato: React.FC = () => {
  const [numeroConta, setNumeroConta] = useState('');
  const [extrato, setExtrato] = useState<ExtratoData | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const buscarExtratoHandler = async () => {
    if (!numeroConta.trim()) {
      toast({
        title: "Erro",
        description: "Digite o número da conta",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    try {
      const dados = await buscarExtrato(numeroConta);
      setExtrato(dados);
      
      if (!dados.transacoes || dados.transacoes.length === 0) {
        toast({
          title: "Informação",
          description: "Nenhuma transação encontrada para esta conta",
        });
      }
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.response?.data?.message || "Erro ao buscar extrato",
        variant: "destructive",
      });
      setExtrato(null);
    } finally {
      setLoading(false);
    }
  };

  const formatarData = (data: string) => {
    return new Date(data).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatarValor = (valor: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center space-x-3">
        <FileText className="h-8 w-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Extrato Bancário</h1>
          <p className="text-gray-600">Consulte o histórico de transações</p>
        </div>
      </div>

      {/* Formulário de busca */}
      <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="h-6 w-6 text-blue-600" />
            <span>Buscar Extrato</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1 space-y-2">
              <Label htmlFor="numeroConta" className="text-sm font-medium text-gray-700">
                Número da Conta
              </Label>
              <Input
                id="numeroConta"
                type="text"
                value={numeroConta}
                onChange={(e) => setNumeroConta(e.target.value)}
                placeholder="Digite o número da conta"
                className="h-12 text-base"
                disabled={loading}
                onKeyPress={(e) => e.key === 'Enter' && buscarExtratoHandler()}
              />
            </div>
            <div className="flex items-end">
              <Button
                onClick={buscarExtratoHandler}
                disabled={loading}
                className="h-12 px-6 bg-blue-600 hover:bg-blue-700"
              >
                {loading ? (
                  <Loading size="sm" />
                ) : (
                  <div className="flex items-center space-x-2">
                    <Search className="h-4 w-4" />
                    <span>Buscar</span>
                  </div>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Resultado do extrato */}
      {extrato && (
        <div className="space-y-6">
          {/* Saldo atual */}
          <Card className="shadow-xl border-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Saldo Atual</p>
                  <p className="text-3xl font-bold">
                    {formatarValor(extrato.saldo)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-blue-100 text-sm">Conta</p>
                  <p className="text-xl font-mono font-bold">{numeroConta}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lista de transações */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-6 w-6 text-blue-600" />
                  <span>Histórico de Transações</span>
                </div>
                <Badge variant="secondary" className="text-lg px-3 py-1">
                  {extrato.transacoes?.length || 0} transações
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!extrato.transacoes || extrato.transacoes.length === 0 ? (
                <div className="text-center py-12">
                  <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Nenhuma transação encontrada
                  </h3>
                  <p className="text-gray-600">
                    Esta conta ainda não possui movimentações
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {extrato.transacoes.map((transacao) => (
                    <div
                      key={transacao.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-full ${
                          transacao.tipo === 'deposito' 
                            ? 'bg-green-100 text-green-600' 
                            : 'bg-red-100 text-red-600'
                        }`}>
                          {transacao.tipo === 'deposito' ? (
                            <ArrowUpCircle className="h-5 w-5" />
                          ) : (
                            <ArrowDownCircle className="h-5 w-5" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">
                            {transacao.tipo === 'deposito' ? 'Depósito' : 'Saque'}
                          </p>
                          <p className="text-sm text-gray-600">
                            {formatarData(transacao.data)}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-lg font-bold ${
                          transacao.tipo === 'deposito' 
                            ? 'text-green-600' 
                            : 'text-red-600'
                        }`}>
                          {transacao.tipo === 'deposito' ? '+' : '-'}
                          {formatarValor(transacao.valor)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Extrato;
