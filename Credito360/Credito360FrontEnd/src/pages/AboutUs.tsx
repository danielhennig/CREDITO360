import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Eye,
    Heart,
    Lightbulb,
    Shield,
    Target,
    Users
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  // Scroll para o topo quando a página carregar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: Shield,
      title: "Segurança",
      description: "Protegemos seus dados com a mais alta tecnologia de criptografia e seguimos rigorosamente as normas da LGPD e Open Finance."
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Utilizamos inteligência artificial e machine learning para oferecer as melhores soluções de crédito personalizadas."
    },
    {
      icon: Heart,
      title: "Transparência",
      description: "Acreditamos em relações transparentes, sem taxas ocultas ou surpresas desagradáveis."
    },
    {
      icon: Users,
      title: "Foco no Cliente",
      description: "Cada decisão que tomamos tem o cliente no centro, buscando sempre a melhor experiência possível."
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Fundação",
      description: "Nascemos com a missão de democratizar o acesso ao crédito no Brasil"
    },
    {
      year: "2024",
      title: "Lançamento da Plataforma",
      description: "Lançamos nossa plataforma de crédito inteligente com tecnologia de IA"
    },
    {
      year: "2024",
      title: "Parcerias Estratégicas",
      description: "Firmamos parcerias com as principais instituições financeiras do país"
    },
    {
      year: "2024",
      title: "Expansão",
      description: "Expandimos nossos serviços para todo o território nacional"
    }
  ];

  const team = [
    {
      name: "Ana Silva",
      role: "CEO & Fundadora",
      description: "15 anos de experiência no mercado financeiro, ex-executiva de grandes bancos."
    },
    {
      name: "Carlos Santos",
      role: "CTO",
      description: "Especialista em IA e machine learning, PhD em Ciência da Computação."
    },
    {
      name: "Maria Oliveira",
      role: "Head de Produto",
      description: "Expert em UX/UI e produtos financeiros digitais."
    },
    {
      name: "João Costa",
      role: "Head de Compliance",
      description: "Especialista em regulamentações financeiras e proteção de dados."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Nossa
            <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              História
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Nascemos com o propósito de revolucionar o mercado de crédito no Brasil, 
            conectando pessoas às melhores oportunidades financeiras através da tecnologia.
          </p>
        </section>

        {/* Missão, Visão e Valores */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Democratizar o acesso ao crédito no Brasil, oferecendo soluções 
                  inteligentes e personalizadas que conectam pessoas às melhores 
                  oportunidades financeiras do mercado.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ser a principal plataforma de crédito inteligente do Brasil, 
                  reconhecida pela inovação, transparência e pela capacidade de 
                  transformar vidas através do acesso facilitado ao crédito.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Transparência, inovação, segurança e foco no cliente são os 
                  pilares que guiam todas as nossas decisões e moldam nossa 
                  cultura organizacional.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Nossa História */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Jornada
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Desde nossa fundação, temos trabalhado incansavelmente para transformar 
              o mercado de crédito brasileiro
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">{milestone.year}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Nossos Valores */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Os princípios que nos guiam em nossa missão de transformar o mercado de crédito
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {value.title}
                        </h3>
                        <p className="text-gray-600">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Nossa Equipe */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Equipe
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profissionais experientes e apaixonados por tecnologia e inovação financeira
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Números */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nossos Números
              </h2>
              <p className="text-xl text-blue-100">
                Resultados que demonstram nosso impacto no mercado
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">50K+</div>
                <p className="text-blue-100">Usuários Ativos</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">R$ 100M+</div>
                <p className="text-blue-100">Crédito Facilitado</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <p className="text-blue-100">Parceiros Financeiros</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <p className="text-blue-100">Satisfação dos Clientes</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="border-0 shadow-lg bg-gray-50">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Faça Parte da Nossa História
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Junte-se a milhares de brasileiros que já descobriram as melhores 
                oportunidades de crédito com o Crédito360
              </p>
              <div className="space-x-4">
                <Button size="lg" asChild>
                  <Link to="/cadastro">
                    Criar Conta Gratuita
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/">
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

export default AboutUs; 