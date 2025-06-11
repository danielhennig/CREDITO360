
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  FileText, 
  TrendingUp, 
  Users, 
  DollarSign,
  Eye,
  Clock,
  CheckCircle
} from 'lucide-react';

const PartnerDashboard = () => {
  // Mock data para o dashboard do parceiro
  const mockStats = {
    totalProposals: 5,
    activeProposals: 3,
    totalViews: 245,
    conversions: 12,
    revenue: 45000
  };

  const mockProposals = [
    {
      id: '1',
      name: 'Crédito Pessoal Premium',
      status: 'active',
      views: 89,
      conversions: 7,
      interestRate: 2.5,
      maxAmount: 50000,
      createdAt: '2024-01-15'
    },
    {
      id: '2',
      name: 'Empréstimo Empresarial',
      status: 'active',
      views: 156,
      conversions: 5,
      interestRate: 3.2,
      maxAmount: 100000,
      createdAt: '2024-01-10'
    },
    {
      id: '3',
      name: 'Crédito Consignado',
      status: 'pending',
      views: 0,
      conversions: 0,
      interestRate: 1.8,
      maxAmount: 30000,
      createdAt: '2024-01-20'
    }
  ];

  const mockContracts = [
    {
      id: '1',
      clientName: 'João Silva',
      proposalName: 'Crédito Pessoal Premium',
      amount: 25000,
      status: 'approved',
      date: '2024-01-18'
    },
    {
      id: '2',
      clientName: 'Maria Santos',
      proposalName: 'Empréstimo Empresarial',
      amount: 45000,
      status: 'analyzing',
      date: '2024-01-17'
    },
    {
      id: '3',
      clientName: 'Carlos Oliveira',
      proposalName: 'Crédito Pessoal Premium',
      amount: 15000,
      status: 'approved',
      date: '2024-01-16'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Ativa</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pendente</Badge>;
      case 'inactive':
        return <Badge variant="outline">Inativa</Badge>;
      case 'approved':
        return <Badge className="bg-green-100 text-green-800">Aprovado</Badge>;
      case 'analyzing':
        return <Badge className="bg-blue-100 text-blue-800">Analisando</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard do Parceiro</h1>
          <p className="text-gray-600">Gerencie suas propostas e acompanhe resultados</p>
        </div>
        <Button asChild>
          <Link to="/parceiro/criar-proposta">
            <Plus className="mr-2 h-4 w-4" />
            Nova Proposta
          </Link>
        </Button>
      </div>

      {/* Estatísticas */}
      <div className="grid md:grid-cols-5 gap-6">
        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Propostas Ativas</CardTitle>
            <FileText className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{mockStats.activeProposals}</div>
            <p className="text-xs text-gray-600">de {mockStats.totalProposals} total</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Visualizações</CardTitle>
            <Eye className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{mockStats.totalViews}</div>
            <p className="text-xs text-gray-600">últimos 30 dias</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversões</CardTitle>
            <TrendingUp className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{mockStats.conversions}</div>
            <p className="text-xs text-gray-600">
              {((mockStats.conversions / mockStats.totalViews) * 100).toFixed(1)}% taxa
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Clientes</CardTitle>
            <Users className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">
              {mockContracts.filter(c => c.status === 'approved').length}
            </div>
            <p className="text-xs text-gray-600">contratos ativos</p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita</CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              R$ {mockStats.revenue.toLocaleString('pt-BR')}
            </div>
            <p className="text-xs text-gray-600">este mês</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Propostas Recentes */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Suas Propostas</CardTitle>
            <CardDescription>Gerencie suas ofertas de crédito</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockProposals.map((proposal) => (
                <div key={proposal.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="font-medium text-gray-900">{proposal.name}</h4>
                      {getStatusBadge(proposal.status)}
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div>Taxa: {proposal.interestRate}% a.m.</div>
                      <div>Até R$ {proposal.maxAmount.toLocaleString('pt-BR')}</div>
                      <div>{proposal.views} visualizações</div>
                      <div>{proposal.conversions} conversões</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to={`/parceiro/propostas`}>
                      <Eye className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ))}
              
              <Button variant="outline" className="w-full" asChild>
                <Link to="/parceiro/propostas">Ver todas as propostas</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contratações Recentes */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Contratações Recentes</CardTitle>
            <CardDescription>Acompanhe suas vendas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockContracts.map((contract) => (
                <div key={contract.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="font-medium text-gray-900">{contract.clientName}</h4>
                      {getStatusBadge(contract.status)}
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>{contract.proposalName}</p>
                      <p>R$ {contract.amount.toLocaleString('pt-BR')} • {contract.date}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              
              {mockContracts.length === 0 && (
                <div className="text-center py-8">
                  <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">Nenhuma contratação ainda</p>
                  <Button asChild>
                    <Link to="/parceiro/criar-proposta">Criar primeira proposta</Link>
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ações Rápidas */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-green-50">
        <CardContent className="p-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Maximize suas oportunidades
            </h3>
            <p className="text-gray-600">
              Use nossas ferramentas para aumentar suas vendas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Plus className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Criar Proposta</h4>
              <p className="text-sm text-gray-600 mb-4">
                Lance uma nova oferta no marketplace
              </p>
              <Button size="sm" asChild>
                <Link to="/parceiro/criar-proposta">Criar</Link>
              </Button>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Analytics</h4>
              <p className="text-sm text-gray-600 mb-4">
                Analise o desempenho das suas ofertas
              </p>
              <Button size="sm" variant="outline">
                Ver relatórios
              </Button>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Gerenciar</h4>
              <p className="text-sm text-gray-600 mb-4">
                Edite e otimize suas propostas
              </p>
              <Button size="sm" variant="outline" asChild>
                <Link to="/parceiro/propostas">Gerenciar</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PartnerDashboard;
