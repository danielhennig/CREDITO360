
import React, { useState, useEffect } from 'react';
import { criarTransacao, listarContas, Conta } from '../services/banrisulApi';
import { useBanrisul } from '../contexts/BanrisulContext';
import { useToast } from '../hooks/use-toast';
import Loading from '../components/Loading';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { DollarSign, ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

const Transacoes: React.FC = () => {
  const [contas, setContas] = useState<Conta[]>([]);
  const [formData, setFormData] = useState({
    numeroConta: '',
    tipo: '' as 'deposito' | 'saque' | '',
    valor: '',
  });
  const [loading, setLoading] = useState(false);
  const [loadingContas, setLoadingContas] = useState(false);
  const { contaSelecionada, setSaldoAtual } = useBanrisul();
  const { toast } = useToast();

  useEffect(() => {
    carregarContas();
  }, []);

  useEffect(() => {
    if (contaSelecionada) {
      setFormData(prev => ({ ...prev, numeroConta: contaSelecionada.numeroConta }));
    }
  }, [contaSelecionada]);

  const carregarContas = async () => {
    setLoadingContas(true);
    try {
      const dados = await listarContas();
      setContas(dados);
    } catch (error: any) {
      toast({
        title: "Erro",
        description: "Erro ao carregar contas",
        variant: "destructive",
      });
    } finally {
      setLoadingContas(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.numeroConta || !formData.tipo || !formData.valor) {
      toast({
        title: "Erro",
        description: "Todos os campos são obrigatórios",
        variant: "destructive",
      });
      return;
    }

    const valor = parseFloat(formData.valor);
    if (isNaN(valor) || valor <= 0) {
      toast({
        title: "Erro",
        description: "Digite um valor válido maior que zero",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    try {
      const resultado = await criarTransacao({
        numeroConta: formData.numeroConta,
        tipo: formData.tipo,
        valor,
      });
      
      toast({
        title: "Sucesso!",
        description: `${formData.tipo === 'deposito' ? 'Depósito' : 'Saque'} realizado com sucesso`,
      });
      
      // Atualizar saldo se disponível na resposta
      if (resultado.novoSaldo !== undefined) {
        setSaldoAtual(resultado.novoSaldo);
      }
      
      // Limpar formulário
      setFormData({ numeroConta: '', tipo: '', valor: '' });
      
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.response?.data?.message || "Erro ao processar transação",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center space-x-3">
        <DollarSign className="h-8 w-8 text-green-600" />
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Transações</h1>
          <p className="text-gray-600">Realize depósitos e saques</p>
        </div>
      </div>

      <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <DollarSign className="h-6 w-6 text-green-600" />
            <span>Nova Transação</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="numeroConta" className="text-sm font-medium text-gray-700">
                Conta
              </Label>
              {loadingContas ? (
                <div className="flex justify-center py-4">
                  <Loading size="sm" text="Carregando contas..." />
                </div>
              ) : (
                <Select
                  value={formData.numeroConta}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, numeroConta: value }))}
                >
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Selecione uma conta" />
                  </SelectTrigger>
                  <SelectContent>
                    {contas.map((conta) => (
                      <SelectItem key={conta.numeroConta} value={conta.numeroConta}>
                        <div className="flex items-center justify-between w-full">
                          <span>{conta.numeroConta} - {conta.nome}</span>
                          <span className="text-sm text-gray-500 ml-2">
                            {new Intl.NumberFormat('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                            }).format(conta.saldo)}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="tipo" className="text-sm font-medium text-gray-700">
                Tipo de Transação
              </Label>
              <Select
                value={formData.tipo}
                onValueChange={(value: 'deposito' | 'saque') => setFormData(prev => ({ ...prev, tipo: value }))}
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="deposito">
                    <div className="flex items-center space-x-2">
                      <ArrowUpCircle className="h-4 w-4 text-green-600" />
                      <span>Depósito</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="saque">
                    <div className="flex items-center space-x-2">
                      <ArrowDownCircle className="h-4 w-4 text-red-600" />
                      <span>Saque</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="valor" className="text-sm font-medium text-gray-700">
                Valor
              </Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                  R$
                </span>
                <Input
                  id="valor"
                  name="valor"
                  type="number"
                  step="0.01"
                  min="0"
                  value={formData.valor}
                  onChange={(e) => setFormData(prev => ({ ...prev, valor: e.target.value }))}
                  placeholder="0,00"
                  className="h-12 text-base pl-10"
                  disabled={loading}
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className={`w-full h-12 text-base font-semibold transition-all duration-200 ${
                formData.tipo === 'deposito'
                  ? 'bg-green-600 hover:bg-green-700'
                  : formData.tipo === 'saque' 
                  ? 'bg-red-600 hover:bg-red-700'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {loading ? (
                <Loading size="sm" />
              ) : (
                <div className="flex items-center space-x-2">
                  {formData.tipo === 'deposito' && <ArrowUpCircle className="h-5 w-5" />}
                  {formData.tipo === 'saque' && <ArrowDownCircle className="h-5 w-5" />}
                  <span>
                    {formData.tipo === 'deposito' ? 'Realizar Depósito' : 
                     formData.tipo === 'saque' ? 'Realizar Saque' : 
                     'Processar Transação'}
                  </span>
                </div>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Transacoes;
