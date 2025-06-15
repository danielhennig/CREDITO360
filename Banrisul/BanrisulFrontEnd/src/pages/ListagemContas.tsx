
import React, { useEffect, useState } from 'react';
import { listarContas, Conta } from '../services/banrisulApi';
import { useBanrisul } from '../contexts/BanrisulContext';
import { useToast } from '../hooks/use-toast';
import Loading from '../components/Loading';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Badge } from '../components/ui/badge';
import { Building2, RefreshCw } from 'lucide-react';

const ListagemContas: React.FC = () => {
  const [contas, setContas] = useState<Conta[]>([]);
  const [loading, setLoading] = useState(false);
  const { setContaSelecionada } = useBanrisul();
  const { toast } = useToast();

  const carregarContas = async () => {
    setLoading(true);
    try {
      const dados = await listarContas();
      setContas(dados);
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.response?.data?.message || "Erro ao carregar contas",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarContas();
  }, []);

  const formatarSaldo = (valor: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);
  };

  const selecionarConta = (conta: Conta) => {
    setContaSelecionada(conta);
    toast({
      title: "Conta selecionada",
      description: `Conta ${conta.numeroConta} de ${conta.nome}`,
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-96">
        <Loading size="lg" text="Carregando contas..." />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Building2 className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Contas Banrisul</h1>
            <p className="text-gray-600">Gerencie todas as contas cadastradas</p>
          </div>
        </div>
        <Button onClick={carregarContas} variant="outline" className="flex items-center space-x-2">
          <RefreshCw className="h-4 w-4" />
          <span>Atualizar</span>
        </Button>
      </div>

      <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Lista de Contas</span>
            <Badge variant="secondary" className="text-lg px-3 py-1">
              {contas.length} contas
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {contas.length === 0 ? (
            <div className="text-center py-12">
              <Building2 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhuma conta encontrada</h3>
              <p className="text-gray-600">Cadastre uma nova conta para começar</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-semibold">Número da Conta</TableHead>
                    <TableHead className="font-semibold">Nome</TableHead>
                    <TableHead className="font-semibold">E-mail</TableHead>
                    <TableHead className="font-semibold text-right">Saldo</TableHead>
                    <TableHead className="font-semibold text-center">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contas.map((conta) => (
                    <TableRow key={conta.numeroConta} className="hover:bg-blue-50/50 transition-colors">
                      <TableCell className="font-mono font-medium">
                        {conta.numeroConta}
                      </TableCell>
                      <TableCell className="font-medium">{conta.nome}</TableCell>
                      <TableCell className="text-gray-600">{conta.email}</TableCell>
                      <TableCell className="text-right">
                        <Badge
                          variant={conta.saldo >= 0 ? "default" : "destructive"}
                          className="font-mono text-sm"
                        >
                          {formatarSaldo(conta.saldo)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Button
                          onClick={() => selecionarConta(conta)}
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          Selecionar
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ListagemContas;
