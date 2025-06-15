
import React, { useState, useEffect } from 'react';
import { listarConsentimentos, criarConsentimento, listarContas, Consentimento, Conta } from '../services/banrisulApi';
import { useToast } from '../hooks/use-toast';
import Loading from '../components/Loading';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Shield, Plus, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const Consentimentos: React.FC = () => {
  const [consentimentos, setConsentimentos] = useState<Consentimento[]>([]);
  const [contas, setContas] = useState<Conta[]>([]);
  const [loading, setLoading] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);
  const [contaSelecionada, setContaSelecionada] = useState('');
  const [formData, setFormData] = useState({
    contaId: '',
    escopo: '',
    validade: '',
  });
  const { toast } = useToast();

  useEffect(() => {
    carregarContas();
  }, []);

  useEffect(() => {
    if (contaSelecionada) {
      carregarConsentimentos();
    }
  }, [contaSelecionada]);

  const carregarContas = async () => {
    setLoading(true);
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
      setLoading(false);
    }
  };

  const carregarConsentimentos = async () => {
    if (!contaSelecionada) return;
    
    setLoading(true);
    try {
      const dados = await listarConsentimentos(contaSelecionada);
      setConsentimentos(dados);
    } catch (error: any) {
      toast({
        title: "Erro",
        description: "Erro ao carregar consentimentos",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.contaId || !formData.escopo || !formData.validade) {
      toast({
        title: "Erro",
        description: "Todos os campos são obrigatórios",
        variant: "destructive",
      });
      return;
    }

    const dataValidade = new Date(formData.validade);
    if (dataValidade < new Date()) {
      toast({
        title: "Erro",
        description: "A data de validade deve ser futura",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    try {
      await criarConsentimento({
        contaId: formData.contaId,
        escopo: formData.escopo,
        validade: formData.validade,
      });
      
      toast({
        title: "Sucesso!",
        description: "Consentimento criado com sucesso",
      });
      
      setFormData({ contaId: '', escopo: '', validade: '' });
      setModalAberto(false);
      
      if (contaSelecionada) {
        carregarConsentimentos();
      }
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.response?.data?.message || "Erro ao criar consentimento",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const formatarData = (data: string) => {
    return new Date(data).toLocaleDateString('pt-BR');
  };

  const verificarValidadeConsentimento = (validade: string) => {
    const dataValidade = new Date(validade);
    const hoje = new Date();
    return dataValidade > hoje;
  };

  const escoposDisponiveis = [
    { value: 'dados-bancarios', label: 'Dados Bancários' },
    { value: 'transacoes', label: 'Histórico de Transações' },
    { value: 'ofertas-credito', label: 'Ofertas de Crédito' },
    { value: 'conta-corrente', label: 'Informações da Conta Corrente' },
    { value: 'open-finance', label: 'Open Finance - Dados Completos' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Shield className="h-8 w-8 text-green-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Consentimentos</h1>
            <p className="text-gray-600">Gerencie permissões de acesso aos dados</p>
          </div>
        </div>
        
        <Dialog open={modalAberto} onOpenChange={setModalAberto}>
          <DialogTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="h-4 w-4 mr-2" />
              Novo Consentimento
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Criar Novo Consentimento</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="contaId">Conta</Label>
                <Select
                  value={formData.contaId}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, contaId: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma conta" />
                  </SelectTrigger>
                  <SelectContent>
                    {contas.map((conta) => (
                      <SelectItem key={conta.numeroConta} value={conta.numeroConta}>
                        {conta.numeroConta} - {conta.nome}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="escopo">Escopo do Consentimento</Label>
                <Select
                  value={formData.escopo}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, escopo: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o escopo" />
                  </SelectTrigger>
                  <SelectContent>
                    {escoposDisponiveis.map((escopo) => (
                      <SelectItem key={escopo.value} value={escopo.value}>
                        {escopo.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="validade">Data de Validade</Label>
                <Input
                  id="validade"
                  type="date"
                  value={formData.validade}
                  onChange={(e) => setFormData(prev => ({ ...prev, validade: e.target.value }))}
                  min={new Date().toISOString().split('T')[0]}
                  disabled={loading}
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <Button type="submit" disabled={loading} className="flex-1">
                  {loading ? <Loading size="sm" /> : 'Criar Consentimento'}
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setModalAberto(false)}
                  className="flex-1"
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Seleção de conta para consulta */}
      <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Consultar Consentimentos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1 space-y-2">
              <Label htmlFor="contaConsulta">Selecione uma conta para ver os consentimentos</Label>
              <Select
                value={contaSelecionada}
                onValueChange={setContaSelecionada}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma conta" />
                </SelectTrigger>
                <SelectContent>
                  {contas.map((conta) => (
                    <SelectItem key={conta.numeroConta} value={conta.numeroConta}>
                      {conta.numeroConta} - {conta.nome}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button
                onClick={carregarConsentimentos}
                disabled={!contaSelecionada || loading}
                variant="outline"
              >
                {loading ? <Loading size="sm" /> : 'Consultar'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de consentimentos */}
      {contaSelecionada && (
        <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Consentimentos da Conta {contaSelecionada}</span>
              <Badge variant="secondary" className="text-lg px-3 py-1">
                {consentimentos.length} consentimentos
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center py-12">
                <Loading size="lg" text="Carregando consentimentos..." />
              </div>
            ) : consentimentos.length === 0 ? (
              <div className="text-center py-12">
                <Shield className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Nenhum consentimento encontrado
                </h3>
                <p className="text-gray-600">
                  Esta conta ainda não possui consentimentos cadastrados
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {consentimentos.map((consentimento) => {
                  const valido = verificarValidadeConsentimento(consentimento.validade);
                  const escopoLabel = escoposDisponiveis.find(e => e.value === consentimento.escopo)?.label || consentimento.escopo;
                  
                  return (
                    <div
                      key={consentimento.id}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        valido
                          ? 'border-green-200 bg-green-50/50'
                          : 'border-red-200 bg-red-50/50'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            {valido ? (
                              <CheckCircle className="h-5 w-5 text-green-600" />
                            ) : (
                              <AlertCircle className="h-5 w-5 text-red-600" />
                            )}
                            <h3 className="font-semibold text-gray-900">
                              {escopoLabel}
                            </h3>
                            <Badge variant={valido ? "default" : "destructive"}>
                              {valido ? 'Válido' : 'Expirado'}
                            </Badge>
                          </div>
                          
                          <div className="space-y-1 text-sm text-gray-600">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>Criado em: {formatarData(consentimento.dataConsentimento)}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>Válido até: {formatarData(consentimento.validade)}</span>
                              </div>
                            </div>
                            <p className="text-xs bg-gray-100 p-2 rounded font-mono">
                              ID: {consentimento.id}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Consentimentos;
