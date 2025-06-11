import {
    BancoDoBrasilLogo,
    BancoInterLogo,
    BanrisulLogo,
    BradescoLogo,
    ItauLogo,
    MercadoPagoLogo,
    NubankLogo,
    PagBankLogo,
    SantanderLogo,
    SicrediLogo
} from "@/components/BankLogos";
import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Award,
    CheckCircle,
    ChevronDown,
    ChevronUp,
    Globe,
    Handshake,
    Shield,
    Star,
    TrendingUp,
    Users
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Partners = () => {
  // Scroll para o topo quando a página carregar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Estado para controlar se mostra todos os parceiros
  const [showAllPartners, setShowAllPartners] = useState(false);

  const mainPartners = [
    {
      id: 1,
      name: "Sicredi",
      logo: SicrediLogo,
      category: "Cooperativa de Crédito",
      description: "Cooperativa financeira com mais de 100 anos, focada em relacionamento e desenvolvimento regional",
      taxaMin: "1.8%",
      taxaMax: "4.5%",
      valorMax: "800.000",
      especialidade: "Crédito Cooperativo",
      rating: 4.7,
      clientes: "5.5M+",
      color: "from-green-500 to-green-600"
    },
    {
      id: 2,
      name: "Banrisul",
      logo: BanrisulLogo,
      category: "Banco Regional",
      description: "Banco do Estado do Rio Grande do Sul, líder no desenvolvimento da região Sul",
      taxaMin: "2.1%",
      taxaMax: "5.2%",
      valorMax: "500.000",
      especialidade: "Crédito Regional",
      rating: 4.4,
      clientes: "3.2M+",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 3,
      name: "Mercado Pago",
      logo: MercadoPagoLogo,
      category: "Fintech",
      description: "Ecossistema financeiro digital do Mercado Livre, especializado em pagamentos e crédito",
      taxaMin: "2.5%",
      taxaMax: "6.8%",
      valorMax: "300.000",
      especialidade: "Pagamentos Digitais",
      rating: 4.5,
      clientes: "40M+",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 4,
      name: "Banco do Brasil",
      logo: BancoDoBrasilLogo,
      category: "Banco Público",
      description: "Maior banco público do país, líder em agronegócio e soluções financeiras para todos os segmentos",
      taxaMin: "1.7%",
      taxaMax: "5.5%",
      valorMax: "1.500.000",
      especialidade: "Crédito Rural",
      rating: 4.3,
      clientes: "70M+",
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  const allPartners = [
    // Bancos reais brasileiros com logos específicos
    {
      name: "Itaú Unibanco",
      category: "Banco Tradicional",
      especialidade: "Crédito Pessoal",
      rating: 4.5,
      logo: ItauLogo
    },
    {
      name: "Sicredi",
      category: "Cooperativa",
      especialidade: "Crédito Cooperativo",
      rating: 4.7,
      logo: SicrediLogo
    },
    {
      name: "Banco do Brasil",
      category: "Banco Público",
      especialidade: "Crédito Rural",
      rating: 4.3,
      logo: BancoDoBrasilLogo
    },
    {
      name: "Banrisul",
      category: "Banco Regional",
      especialidade: "Crédito Regional",
      rating: 4.4,
      logo: BanrisulLogo
    },
    {
      name: "Nubank",
      category: "Banco Digital",
      especialidade: "Cartão de Crédito",
      rating: 4.8,
      logo: NubankLogo
    },
    {
      name: "Santander",
      category: "Banco Tradicional",
      especialidade: "Crédito Empresarial",
      rating: 4.2,
      logo: SantanderLogo
    },
    {
      name: "Bradesco",
      category: "Banco Tradicional",
      especialidade: "Financiamento",
      rating: 4.3,
      logo: BradescoLogo
    },
    {
      name: "Banco Inter",
      category: "Banco Digital",
      especialidade: "Conta Digital",
      rating: 4.6,
      logo: BancoInterLogo
    },
    {
      name: "Mercado Pago",
      category: "Fintech",
      especialidade: "Pagamentos Digitais",
      rating: 4.5,
      logo: MercadoPagoLogo
    },
    {
      name: "PagBank",
      category: "Banco Digital",
      especialidade: "Maquininhas e Crédito",
      rating: 4.4,
      logo: PagBankLogo
    }
  ];

  // Determina quantos parceiros mostrar
  const partnersToShow = showAllPartners ? allPartners : allPartners.slice(0, 6);

  const benefits = [
    {
      icon: Shield,
      title: "Parceiros Verificados",
      description: "Todos os nossos parceiros são instituições regulamentadas pelo Banco Central"
    },
    {
      icon: TrendingUp,
      title: "Melhores Condições",
      description: "Negociamos condições especiais para usuários da nossa plataforma"
    },
    {
      icon: Users,
      title: "Atendimento Especializado",
      description: "Suporte dedicado para clientes vindos do Crédito360"
    },
    {
      icon: Award,
      title: "Qualidade Garantida",
      description: "Avaliamos constantemente a qualidade dos serviços oferecidos"
    }
  ];

  const stats = [
    {
      number: "10+",
      label: "Parceiros Ativos",
      description: "Instituições financeiras verificadas"
    },
    {
      number: "R$ 2B+",
      label: "Crédito Facilitado",
      description: "Volume total processado"
    },
    {
      number: "98%",
      label: "Aprovação",
      description: "Taxa de aprovação média"
    },
    {
      number: "24h",
      label: "Liberação",
      description: "Tempo médio de liberação"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Nossos
            <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Parceiros
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Trabalhamos com as melhores instituições financeiras do país para 
            oferecer as condições mais vantajosas de crédito para você.
          </p>
        </section>

        {/* Estatísticas */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nossa Rede de Parceiros
              </h2>
              <p className="text-xl text-blue-100">
                Números que demonstram a força da nossa parceria
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <p className="text-lg font-semibold text-blue-100 mb-1">{stat.label}</p>
                  <p className="text-sm text-blue-200">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Parceiros Principais */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Parceiros Principais
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conheça as principais instituições que oferecem as melhores condições
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mainPartners.map((partner) => {
              const Logo = partner.logo;
              return (
                <Card key={partner.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Logo className="h-16 w-16" />
                      <div className="flex-1">
                        <CardTitle className="text-xl">{partner.name}</CardTitle>
                        <p className="text-sm text-gray-500">{partner.category}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="font-semibold">{partner.rating}</span>
                        </div>
                        <p className="text-xs text-gray-500">{partner.clientes} clientes</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{partner.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">Taxa a partir de</p>
                        <p className="text-lg font-bold text-green-600">{partner.taxaMin}% a.m.</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">Valor máximo</p>
                        <p className="text-lg font-bold text-blue-600">R$ {partner.valorMax}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Especialidade</p>
                        <p className="text-sm text-gray-600">{partner.especialidade}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        Ver Ofertas
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Todos os Parceiros */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Todos os Parceiros
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Os principais bancos e fintechs do Brasil em nossa rede
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {partnersToShow.map((partner, index) => {
              const LogoComponent = partner.logo;
              return (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <LogoComponent className="h-10 w-10" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-sm">{partner.name}</h3>
                        <p className="text-xs text-gray-500">{partner.category}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{partner.especialidade}</p>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-xs font-medium">{partner.rating}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Botão para mostrar/ocultar todos os parceiros */}
          <div className="text-center">
            <Button 
              onClick={() => setShowAllPartners(!showAllPartners)}
              variant="outline"
              size="lg"
              className="min-w-[200px]"
            >
              {showAllPartners ? (
                <>
                  <ChevronUp className="mr-2 h-5 w-5" />
                  Mostrar Menos
                </>
              ) : (
                <>
                  <ChevronDown className="mr-2 h-5 w-5" />
                  Ver Todos os Parceiros ({allPartners.length})
                </>
              )}
            </Button>
          </div>
        </section>

        {/* Benefícios */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vantagens da Nossa Rede
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Por que escolher parceiros do Crédito360
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Como nos tornamos parceiros */}
        <section className="mb-16">
          <Card className="border-0 shadow-lg bg-gray-50">
            <CardContent className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Quer ser nosso parceiro?
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Se você representa uma instituição financeira e quer fazer parte 
                    da maior rede de crédito digital do Brasil, entre em contato conosco.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {[
                      'Acesso a milhares de clientes qualificados',
                      'Tecnologia de ponta para análise de crédito',
                      'Processo de integração simplificado',
                      'Suporte técnico especializado'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button size="lg" asChild>
                    <Link to="/login">
                      <Handshake className="mr-2 h-5 w-5" />
                      Tornar-se Parceiro
                    </Link>
                  </Button>
                </div>

                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Rede Nacional
                  </h3>
                  <p className="text-gray-600">
                    Presença em todos os estados brasileiros com 
                    mais de 50 parceiros ativos
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-green-50">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Encontre a Melhor Oferta
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Compare ofertas de todos os nossos parceiros e escolha 
                a que melhor se adapta ao seu perfil
              </p>
              <div className="space-x-4">
                <Button size="lg" asChild>
                  <Link to="/login">
                    Comparar Ofertas
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/login">
                    Voltar ao Início
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
      
      <PageFooter />
    </div>
  );
};

export default Partners; 