import { Activity, AlertTriangle, CheckCircle, Clock, Server, Shield, XCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import PageFooter from '../components/PageFooter';
import PageHeader from '../components/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Status = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      name: 'Plataforma Principal',
      status: 'operational',
      description: 'Sistema principal da aplicação',
      uptime: '99.98%',
      responseTime: '145ms'
    },
    {
      name: 'API de Crédito',
      status: 'operational',
      description: 'Serviços de análise e comparação',
      uptime: '99.95%',
      responseTime: '89ms'
    },
    {
      name: 'Open Finance',
      status: 'operational',
      description: 'Conexão com instituições bancárias',
      uptime: '99.92%',
      responseTime: '234ms'
    },
    {
      name: 'Sistema de Autenticação',
      status: 'operational',
      description: 'Login e segurança de usuários',
      uptime: '99.99%',
      responseTime: '67ms'
    },
    {
      name: 'Banco de Dados',
      status: 'operational',
      description: 'Armazenamento de dados',
      uptime: '99.97%',
      responseTime: '23ms'
    },
    {
      name: 'CDN e Assets',
      status: 'operational',
      description: 'Entrega de conteúdo estático',
      uptime: '99.89%',
      responseTime: '156ms'
    }
  ];

  const incidents = [
    {
      date: '2024-01-15',
      time: '14:30',
      title: 'Manutenção programada do CDN',
      description: 'Atualização dos servidores de conteúdo para melhor performance.',
      status: 'resolved',
      duration: '45 minutos',
      impact: 'Baixo'
    },
    {
      date: '2024-01-12',
      time: '09:15',
      title: 'Lentidão na API de Crédito',
      description: 'Identificada e corrigida lentidão temporária no processamento de propostas.',
      status: 'resolved',
      duration: '23 minutos',
      impact: 'Médio'
    },
    {
      date: '2024-01-08',
      time: '16:45',
      title: 'Atualização de segurança',
      description: 'Aplicação de patches de segurança nos sistemas.',
      status: 'resolved',
      duration: '1 hora 15 minutos',
      impact: 'Baixo'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'maintenance':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'down':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <CheckCircle className="h-5 w-5 text-green-500" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'operational':
        return 'Operacional';
      case 'maintenance':
        return 'Manutenção';
      case 'down':
        return 'Indisponível';
      default:
        return 'Operacional';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'text-green-600 bg-green-50';
      case 'maintenance':
        return 'text-yellow-600 bg-yellow-50';
      case 'down':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-green-600 bg-green-50';
    }
  };

  const overallStatus = services.every(service => service.status === 'operational') 
    ? 'operational' 
    : services.some(service => service.status === 'down') 
    ? 'down' 
    : 'maintenance';

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Status do Sistema
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Acompanhe em tempo real o status de todos os nossos serviços e sistemas.
          </p>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {getStatusIcon(overallStatus)}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Status Geral: {getStatusText(overallStatus)}
                    </h2>
                    <p className="text-gray-600">
                      Todos os sistemas estão funcionando normalmente
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Última atualização</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {currentTime.toLocaleTimeString('pt-BR')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* System Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <Activity className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Uptime Geral</h3>
                <p className="text-3xl font-bold text-green-600">99.96%</p>
                <p className="text-sm text-gray-500">Últimos 30 dias</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Tempo de Resposta</h3>
                <p className="text-3xl font-bold text-blue-600">127ms</p>
                <p className="text-sm text-gray-500">Média atual</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Server className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Serviços Ativos</h3>
                <p className="text-3xl font-bold text-purple-600">
                  {services.filter(s => s.status === 'operational').length}/{services.length}
                </p>
                <p className="text-sm text-gray-500">Operacionais</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Incidentes</h3>
                <p className="text-3xl font-bold text-green-600">0</p>
                <p className="text-sm text-gray-500">Últimas 24h</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Status dos Serviços</h2>
          
          <div className="space-y-4">
            {services.map((service, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(service.status)}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <p className="text-sm text-gray-500">Uptime</p>
                        <p className="font-semibold text-gray-900">{service.uptime}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500">Resposta</p>
                        <p className="font-semibold text-gray-900">{service.responseTime}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(service.status)}`}>
                        {getStatusText(service.status)}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Incidentes Recentes</h2>
          
          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{incident.title}</CardTitle>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500">
                        {incident.date} às {incident.time}
                      </span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        Resolvido
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{incident.description}</p>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Duração: </span>
                      <span className="text-gray-600">{incident.duration}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Impacto: </span>
                      <span className="text-gray-600">{incident.impact}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Status: </span>
                      <span className="text-green-600">Resolvido</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe to Updates */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Receba Atualizações</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Inscreva-se para receber notificações sobre manutenções programadas e incidentes.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="w-full md:w-auto px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Inscrever-se
            </button>
          </div>
          <p className="text-blue-100 text-sm mt-4">
            Você pode cancelar a inscrição a qualquer momento.
          </p>
        </div>
      </section>

      <PageFooter />
    </div>
  );
};

export default Status; 