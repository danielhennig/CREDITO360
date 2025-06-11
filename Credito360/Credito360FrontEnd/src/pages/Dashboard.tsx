
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  CreditCard, 
  Bell, 
  ShoppingCart,
  Award,
  Landmark,
  Calculator,
  ArrowRight,
  DollarSign
} from 'lucide-react';

const Dashboard = () => {
  // Simular dados do usuário
  const creditProfile = JSON.parse(localStorage.getItem('creditProfile') || '{}');
  const collectedData = JSON.parse(localStorage.getItem('collectedData') || '{}');
  
  const mockNotifications = [
    {
      id: 1,
      type: 'offer',
      title: 'Nova proposta disponível!',
      description: 'Banco Digital oferece crédito com taxa de 2,5% ao mês',
      time: '2h atrás',
      urgent: true
    },
    {
      id: 2,
      type: 'score',
      title: 'Seu score foi atualizado',
      description: 'Seu score aumentou 15 pontos este mês!',
      time: '1 dia atrás',
      urgent: false
    },
    {
      id: 3,
      type: 'marketplace',
      title: 'Novas instituições no marketplace',
      description: '3 novas fintechs com ofertas competitivas',
      time: '3 dias atrás',
      urgent: false
    }
  ];

  const quickActions = [
    {
      icon: ShoppingCart,
      title: 'Marketplace',
      description: 'Ver ofertas de crédito',
      href: '/marketplace',
      color: 'bg-blue-500'
    },
    {
      icon: Calculator,
      title: 'Simulador',
      description: 'Simular empréstimo',
      href: '/simulador',
      color: 'bg-green-500'
    },
    {
      icon: Landmark,
      title: 'Conectar Bancos',
      description: 'Adicionar nova conta',
      href: '/conectar-bancos',
      color: 'bg-purple-500'
    }
  ];

  const recentTransactions = collectedData.transactions?.slice(0, 3) || [];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Bem-vindo ao seu painel financeiro personalizado</p>
      </div>

      {/* Resumo do Perfil de Crédito */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Score de Crédito</CardTitle>
            <Award className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">
              {creditProfile.score || '720'}
            </div>
            <p className="text-xs text-gray-600">
              +15 pontos este mês
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Capacidade de Pagamento</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              R$ {(creditProfile.paymentCapacity || 2500).toLocaleString('pt-BR')}
            </div>
            <p className="text-xs text-gray-600">
              Mensal estimada
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saldo Atual</CardTitle>
            <DollarSign className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">
              R$ {(collectedData.balance || 15420.50).toLocaleString('pt-BR')}
            </div>
            <p className="text-xs text-gray-600">
              Consolidado dos bancos
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Ações Rápidas */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Ações Rápidas</CardTitle>
              <CardDescription>
                Acesse rapidamente as principais funcionalidades
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {quickActions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <Link key={index} to={action.href}>
                      <div className="p-4 rounded-lg border hover:shadow-md transition-shadow cursor-pointer">
                        <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-3`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">{action.title}</h3>
                        <p className="text-sm text-gray-600">{action.description}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Extrato Resumido */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Transações Recentes</CardTitle>
              <CardDescription>
                Últimas movimentações em suas contas
              </CardDescription>
            </CardHeader>
            <CardContent>
              {recentTransactions.length > 0 ? (
                <div className="space-y-4">
                  {recentTransactions.map((transaction, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
                        }`}>
                          <CreditCard className={`h-4 w-4 ${
                            transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                          }`} />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{transaction.description}</p>
                          <p className="text-sm text-gray-600">{transaction.date}</p>
                        </div>
                      </div>
                      <div className={`font-semibold ${
                        transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transaction.type === 'credit' ? '+' : ''}R$ {Math.abs(transaction.amount).toLocaleString('pt-BR')}
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/extrato">Ver extrato completo</Link>
                  </Button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <CreditCard className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Nenhuma transação recente</p>
                  <Button asChild>
                    <Link to="/conectar-bancos">Conectar bancos</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Notificações */}
        <div className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <span>Notificações</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockNotifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className={`p-3 rounded-lg border-l-4 ${
                      notification.urgent ? 'border-red-500 bg-red-50' : 'border-blue-500 bg-blue-50'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 text-sm">
                          {notification.title}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">
                          {notification.description}
                        </p>
                      </div>
                      {notification.urgent && (
                        <Badge variant="destructive" className="text-xs">Urgente</Badge>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA para Marketplace */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-500 to-green-500 text-white">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <ShoppingCart className="h-12 w-12 mx-auto text-white/80" />
                <div>
                  <h3 className="font-semibold text-lg">Encontre seu crédito ideal</h3>
                  <p className="text-blue-100 text-sm">
                    {mockNotifications.filter(n => n.type === 'offer').length} novas ofertas disponíveis
                  </p>
                </div>
                <Button variant="secondary" className="w-full" asChild>
                  <Link to="/marketplace">
                    Ver ofertas
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
