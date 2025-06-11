
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Plus, 
  Search, 
  Eye, 
  Edit, 
  Trash2, 
  TrendingUp,
  Calendar,
  DollarSign,
  Users,
  MoreHorizontal
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const MyProposals = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const { toast } = useToast();

  // Mock data - em produção viria de uma API
  const mockProposals = [
    {
      id: '1',
      name: 'Crédito Pessoal Premium',
      status: 'active',
      views: 89,
      conversions: 7,
      interestRate: 2.5,
      minAmount: 5000,
      maxAmount: 50000,
      maxInstallments: 60,
      minScore: 600,
      createdAt: '2024-01-15',
      updatedAt: '2024-01-18'
    },
    {
      id: '2',
      name: 'Empréstimo Empresarial',
      status: 'active',
      views: 156,
      conversions: 5,
      interestRate: 3.2,
      minAmount: 10000,
      maxAmount: 100000,
      maxInstallments: 72,
      minScore: 700,
      createdAt: '2024-01-10',
      updatedAt: '2024-01-16'
    },
    {
      id: '3',
      name: 'Crédito Consignado',
      status: 'pending',
      views: 0,
      conversions: 0,
      interestRate: 1.8,
      minAmount: 1000,
      maxAmount: 30000,
      maxInstallments: 84,
      minScore: 500,
      createdAt: '2024-01-20',
      updatedAt: '2024-01-20'
    },
    {
      id: '4',
      name: 'Financiamento Veicular',
      status: 'inactive',
      views: 45,
      conversions: 2,
      interestRate: 1.5,
      minAmount: 20000,
      maxAmount: 200000,
      maxInstallments: 60,
      minScore: 650,
      createdAt: '2024-01-05',
      updatedAt: '2024-01-15'
    },
    {
      id: '5',
      name: 'Microcrédito Social',
      status: 'active',
      views: 234,
      conversions: 18,
      interestRate: 4.5,
      minAmount: 500,
      maxAmount: 5000,
      maxInstallments: 24,
      minScore: 400,
      createdAt: '2024-01-08',
      updatedAt: '2024-01-19'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Ativa</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Aguardando Aprovação</Badge>;
      case 'inactive':
        return <Badge variant="outline">Inativa</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const filteredProposals = mockProposals.filter(proposal => {
    const matchesSearch = proposal.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || proposal.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleToggleStatus = (proposalId: string) => {
    toast({
      title: "Status atualizado",
      description: "O status da proposta foi alterado com sucesso",
    });
  };

  const handleDeleteProposal = (proposalId: string) => {
    toast({
      title: "Proposta excluída",
      description: "A proposta foi removida do marketplace",
      variant: "destructive",
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const totalStats = {
    totalProposals: mockProposals.length,
    activeProposals: mockProposals.filter(p => p.status === 'active').length,
    totalViews: mockProposals.reduce((sum, p) => sum + p.views, 0),
    totalConversions: mockProposals.reduce((sum, p) => sum + p.conversions, 0)
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Minhas Propostas</h1>
          <p className="text-gray-600">Gerencie suas ofertas de crédito no marketplace</p>
        </div>
        <Button asChild>
          <Link to="/parceiro/criar-proposta">
            <Plus className="mr-2 h-4 w-4" />
            Nova Proposta
          </Link>
        </Button>
      </div>

      {/* Estatísticas Resumidas */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total de Propostas</p>
                <p className="text-2xl font-bold text-blue-600">{totalStats.totalProposals}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <Calendar className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Propostas Ativas</p>
                <p className="text-2xl font-bold text-green-600">{totalStats.activeProposals}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <Eye className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total de Visualizações</p>
                <p className="text-2xl font-bold text-purple-600">{totalStats.totalViews}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <Users className="h-4 w-4 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Conversões</p>
                <p className="text-2xl font-bold text-orange-600">{totalStats.totalConversions}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filtros */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar propostas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filtrar por status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Status</SelectItem>
                <SelectItem value="active">Ativas</SelectItem>
                <SelectItem value="pending">Aguardando Aprovação</SelectItem>
                <SelectItem value="inactive">Inativas</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Propostas */}
      <div className="space-y-4">
        {filteredProposals.map((proposal) => (
          <Card key={proposal.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6">
              <div className="grid lg:grid-cols-5 gap-6 items-center">
                {/* Informações da Proposta */}
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-gray-900">{proposal.name}</h3>
                    {getStatusBadge(proposal.status)}
                  </div>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>Taxa: {proposal.interestRate}% a.m.</p>
                    <p>Valor: R$ {proposal.minAmount.toLocaleString('pt-BR')} - R$ {proposal.maxAmount.toLocaleString('pt-BR')}</p>
                    <p>Até {proposal.maxInstallments}x | Score mín: {proposal.minScore}</p>
                  </div>
                </div>

                {/* Métricas */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">{proposal.views}</p>
                    <p className="text-xs text-gray-600">Visualizações</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">{proposal.conversions}</p>
                    <p className="text-xs text-gray-600">Conversões</p>
                  </div>
                </div>

                {/* Taxa de Conversão */}
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-600">
                    {proposal.views > 0 ? ((proposal.conversions / proposal.views) * 100).toFixed(1) : '0.0'}%
                  </p>
                  <p className="text-xs text-gray-600">Taxa de Conversão</p>
                </div>

                {/* Ações */}
                <div className="flex flex-col space-y-2">
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-2" />
                      Ver
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="h-4 w-4 mr-2" />
                      Editar
                    </Button>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      variant={proposal.status === 'active' ? 'destructive' : 'default'}
                      onClick={() => handleToggleStatus(proposal.id)}
                    >
                      {proposal.status === 'active' ? 'Desativar' : 'Ativar'}
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleDeleteProposal(proposal.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <p className="text-xs text-gray-500 text-center">
                    Criada em {formatDate(proposal.createdAt)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProposals.length === 0 && (
        <Card className="border-0 shadow-lg">
          <CardContent className="text-center py-12">
            <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {searchTerm || statusFilter !== 'all' 
                ? 'Nenhuma proposta encontrada' 
                : 'Nenhuma proposta criada ainda'
              }
            </h3>
            <p className="text-gray-600 mb-4">
              {searchTerm || statusFilter !== 'all'
                ? 'Tente ajustar os filtros para ver mais resultados'
                : 'Crie sua primeira proposta para começar a receber clientes'
              }
            </p>
            <Button asChild>
              <Link to="/parceiro/criar-proposta">
                <Plus className="mr-2 h-4 w-4" />
                {searchTerm || statusFilter !== 'all' ? 'Nova Proposta' : 'Criar Primeira Proposta'}
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MyProposals;
