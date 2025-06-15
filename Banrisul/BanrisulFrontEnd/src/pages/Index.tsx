
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listarContas, Conta } from '../services/banrisulApi';
import { useBanrisul } from '../contexts/BanrisulContext';
import { useToast } from '../hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  Building2, 
  Users, 
  DollarSign, 
  FileText, 
  CreditCard, 
  Shield, 
  ArrowRight, 
  TrendingUp,
  Wallet
} from 'lucide-react';

const Index = () => {
  const [contas, setContas] = useState<Conta[]>([]);
  const [stats, setStats] = useState({
    totalContas: 0,
    saldoTotal: 0,
    mediaContas: 0,
  });
  const { contaSelecionada } = useBanrisul();
  const { toast } = useToast();

  useEffect(() => {
    carregarDashboard();
  }, []);

  const carregarDashboard = async () => {
    try {
      const dados = await listarContas();
      setContas(dados);
      
      const totalContas = dados.length;
      const saldoTotal = dados.reduce((acc, conta) => acc + conta.saldo, 0);
      const mediaContas = totalContas > 0 ? saldoTotal / totalContas : 0;
      
      setStats({ totalContas, saldoTotal, mediaContas });
    } catch (error) {
      console.error('Erro ao carregar dashboard:', error);
    }
  };

  const formatarValor = (valor: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);
  };

  const navigation = [
    {
      name: 'Cadastrar Conta',
      description: 'Registre uma nova conta bancária',
      href: '/cadastro',
      icon: Users,
      color: 'blue',
    },
    {
      name: 'Gerenciar Contas',
      description: 'Visualize e selecione contas existentes',
      href: '/contas',
      icon: Building2,
      color: 'indigo',
    },
    {
      name: 'Transações',
      description: 'Realize depósitos e saques',
      href: '/transacoes',
      icon: DollarSign,
      color: 'green',
    },
    {
      name: 'Extrato Bancário',
      description: 'Consulte o histórico de movimentações',
      href: '/extrato',
      icon: FileText,
      color: 'blue',
    },
    {
      name: 'Ofertas de Crédito',
      description: 'Gerencie ofertas e recomendações',
      href: '/ofertas',
      icon: CreditCard,
      color: 'purple',
    },
    {
      name: 'Consentimentos',
      description: 'Controle permissões de acesso',
      href: '/consentimentos',
      icon: Shield,
      color: 'green',
    },
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
    indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
    green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
    purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
            <Building2 className="h-10 w-10 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900">BANCO360 - Banrisul</h1>
            <p className="text-xl text-gray-600">Sistema Bancário Completo</p>
          </div>
        </div>
        
        {contaSelecionada && (
          <Card className="max-w-md mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Conta Selecionada</p>
                  <p className="font-bold text-lg">{contaSelecionada.nome}</p>
                  <p className="text-blue-100 text-sm font-mono">{contaSelecionada.numeroConta}</p>
                </div>
                <div className="text-right">
                  <p className="text-blue-100 text-sm">Saldo</p>
                  <p className="font-bold text-xl">{formatarValor(contaSelecionada.saldo)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100 text-sm font-medium">Total de Contas</p>
                <p className="text-3xl font-bold">{stats.totalContas}</p>
              </div>
              <Users className="h-10 w-10 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0 shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium">Saldo Total</p>
                <p className="text-2xl font-bold">{formatarValor(stats.saldoTotal)}</p>
              </div>
              <Wallet className="h-10 w-10 text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white border-0 shadow-xl">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm font-medium">Saldo Médio</p>
                <p className="text-2xl font-bold">{formatarValor(stats.mediaContas)}</p>
              </div>
              <TrendingUp className="h-10 w-10 text-purple-200" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.name} to={item.href} className="group">
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${colorClasses[item.color as keyof typeof colorClasses]} shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Recent Accounts */}
      {contas.length > 0 && (
        <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Contas Recentes</span>
              <Link to="/contas">
                <Button variant="outline" size="sm">
                  Ver Todas
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {contas.slice(0, 5).map((conta) => (
                <div key={conta.numeroConta} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <Building2 className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{conta.nome}</p>
                      <p className="text-sm text-gray-500 font-mono">{conta.numeroConta}</p>
                    </div>
                  </div>
                  <Badge
                    variant={conta.saldo >= 0 ? "default" : "destructive"}
                    className="font-mono"
                  >
                    {formatarValor(conta.saldo)}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Index;
