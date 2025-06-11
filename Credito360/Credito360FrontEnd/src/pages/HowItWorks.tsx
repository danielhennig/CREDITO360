import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    CheckCircle,
    CreditCard,
    Database,
    Eye,
    Globe,
    Lock,
    Shield,
    Smartphone,
    TrendingUp,
    Users,
    Zap
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  // Scroll para o topo quando a página carregar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      number: "01",
      icon: Users,
      title: "Cadastre-se Gratuitamente",
      description: "Crie sua conta em poucos minutos com seus dados básicos. É 100% gratuito e sem compromisso.",
      details: [
        "Cadastro simples e rápido",
        "Verificação de identidade segura",
        "Sem taxas de adesão",
        "Processo 100% digital"
      ]
    },
    {
      number: "02",
      icon: Globe,
      title: "Conecte seus Bancos",
      description: "Use o Open Finance para conectar suas contas bancárias de forma segura e regulamentada.",
      details: [
        "Conexão via Open Finance do Banco Central",
        "Dados criptografados e seguros",
        "Você controla quais informações compartilhar",
        "Suporte a todos os principais bancos"
      ]
    },
    {
      number: "03",
      icon: Database,
      title: "Análise Inteligente",
      description: "Nossa IA analisa seu perfil financeiro e encontra as melhores oportunidades de crédito.",
      details: [
        "Análise de histórico bancário",
        "Avaliação de capacidade de pagamento",
        "Score personalizado",
        "Recomendações inteligentes"
      ]
    },
    {
      number: "04",
      icon: Users,
      title: "Compare e Escolha",
      description: "Receba ofertas personalizadas de múltiplas instituições e escolha a melhor para você.",
      details: [
        "Ofertas de diferentes bancos",
        "Comparação transparente de taxas",
        "Simulação de parcelas",
        "Aprovação pré-aprovada"
      ]
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "100% Seguro",
      description: "Utilizamos as mais avançadas tecnologias de segurança e seguimos todas as regulamentações do Banco Central."
    },
    {
      icon: Eye,
      title: "Rápido e Eficiente",
      description: "Todo o processo leva apenas alguns minutos, desde o cadastro até receber as ofertas de crédito."
    },
    {
      icon: TrendingUp,
      title: "Melhores Taxas",
      description: "Nossa tecnologia encontra as menores taxas do mercado, economizando dinheiro para você."
    },
    {
      icon: Smartphone,
      title: "100% Digital",
      description: "Tudo acontece online, sem necessidade de ir a agências ou imprimir documentos."
    }
  ];

  const features = [
    {
      icon: Lock,
      title: "Open Finance Seguro",
      description: "Regulamentado pelo Banco Central, seus dados são protegidos por criptografia de ponta a ponta."
    },
    {
      icon: Zap,
      title: "IA Avançada",
      description: "Algoritmos de machine learning analisam milhares de variáveis para encontrar as melhores ofertas."
    },
    {
      icon: Eye,
      title: "Transparência Total",
      description: "Todas as taxas, condições e termos são apresentados de forma clara e transparente."
    },
    {
      icon: CreditCard,
      title: "Múltiplas Opções",
      description: "Acesso a ofertas de dezenas de instituições financeiras em uma única plataforma."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Como
            <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Funciona
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Descubra como nossa plataforma revoluciona a forma de encontrar crédito, 
            usando tecnologia de ponta para conectar você às melhores oportunidades do mercado.
          </p>
        </section>

        {/* Processo Passo a Passo */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Processo Simples em 4 Passos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Do cadastro à aprovação, todo o processo é rápido, seguro e 100% digital
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Conteúdo */}
                  <div className="flex-1">
                    <Card className="border-0 shadow-lg h-full">
                      <CardContent className="p-8">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                            <Icon className="h-8 w-8 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-blue-600 mb-1">Passo {step.number}</div>
                            <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                          </div>
                        </div>
                        
                        <p className="text-lg text-gray-600 mb-6">
                          {step.description}
                        </p>
                        
                        <div className="space-y-3">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center space-x-3">
                              <CheckCircle className="h-5 w-5 text-green-500" />
                              <span className="text-gray-700">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Número do Passo */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">{step.number}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Benefícios */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que Escolher o Crédito360?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Vantagens que fazem toda a diferença na sua busca por crédito
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

        {/* Tecnologia */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Tecnologia de Ponta
              </h2>
              <p className="text-xl text-blue-100">
                Utilizamos as mais avançadas tecnologias para garantir segurança e eficiência
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-blue-100">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Rápido */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  É seguro conectar meus dados bancários?
                </h3>
                <p className="text-gray-600">
                  Sim! Utilizamos o Open Finance, regulamentado pelo Banco Central. 
                  Seus dados são criptografados e você controla quais informações compartilhar.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Quanto tempo leva para receber as ofertas?
                </h3>
                <p className="text-gray-600">
                  Após conectar seus dados, nossa IA processa as informações em poucos minutos 
                  e você recebe ofertas personalizadas quase instantaneamente.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Há algum custo para usar a plataforma?
                </h3>
                <p className="text-gray-600">
                  Não! O Crédito360 é 100% gratuito para usuários. Você não paga nada 
                  para comparar ofertas e encontrar as melhores condições de crédito.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Posso cancelar a qualquer momento?
                </h3>
                <p className="text-gray-600">
                  Sim! Você pode revogar o acesso aos seus dados a qualquer momento 
                  através das configurações da sua conta, sem qualquer custo ou penalidade.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="border-0 shadow-lg bg-gray-50">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Pronto para Começar?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Cadastre-se agora e descubra as melhores ofertas de crédito 
                personalizadas para o seu perfil em poucos minutos
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

export default HowItWorks; 