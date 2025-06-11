import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    AlertTriangle,
    Award,
    CheckCircle,
    Database,
    Eye,
    Globe,
    Key,
    Lock,
    Server,
    Shield,
    Smartphone
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Security = () => {
  // Scroll para o topo quando a página carregar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const securityFeatures = [
    {
      icon: Lock,
      title: "Criptografia de Ponta",
      description: "Todos os dados são protegidos com criptografia AES-256, o mesmo padrão usado por bancos e instituições financeiras.",
      details: [
        "Criptografia em trânsito (TLS 1.3)",
        "Criptografia em repouso (AES-256)",
        "Chaves gerenciadas por HSM",
        "Rotação automática de chaves"
      ]
    },
    {
      icon: Shield,
      title: "Conformidade Regulatória",
      description: "Seguimos rigorosamente as normas do Banco Central e LGPD para garantir a proteção dos seus dados.",
      details: [
        "Certificação ISO 27001",
        "Conformidade com LGPD",
        "Regulamentação do Banco Central",
        "Auditoria externa anual"
      ]
    },
    {
      icon: Eye,
      title: "Transparência Total",
      description: "Você tem controle total sobre seus dados e pode revogar o acesso a qualquer momento.",
      details: [
        "Consentimento explícito",
        "Revogação a qualquer momento",
        "Histórico de acessos",
        "Relatórios de uso de dados"
      ]
    },
    {
      icon: Server,
      title: "Infraestrutura Segura",
      description: "Nossa infraestrutura é hospedada em data centers certificados com múltiplas camadas de segurança.",
      details: [
        "Data centers Tier III",
        "Redundância geográfica",
        "Monitoramento 24/7",
        "Backup automático"
      ]
    }
  ];

  const certifications = [
    {
      icon: Award,
      title: "ISO 27001",
      description: "Certificação internacional para gestão de segurança da informação"
    },
    {
      icon: Shield,
      title: "SOC 2 Type II",
      description: "Auditoria de controles de segurança, disponibilidade e confidencialidade"
    },
    {
      icon: CheckCircle,
      title: "PCI DSS",
      description: "Padrão de segurança para processamento de dados de cartão"
    },
    {
      icon: Globe,
      title: "LGPD Compliant",
      description: "Conformidade total com a Lei Geral de Proteção de Dados"
    }
  ];

  const dataProtection = [
    {
      title: "Coleta Mínima",
      description: "Coletamos apenas os dados essenciais para oferecer nossos serviços"
    },
    {
      title: "Finalidade Específica",
      description: "Seus dados são usados exclusivamente para análise de crédito e ofertas personalizadas"
    },
    {
      title: "Retenção Limitada",
      description: "Mantemos seus dados apenas pelo tempo necessário, conforme regulamentação"
    },
    {
      title: "Compartilhamento Controlado",
      description: "Compartilhamos dados apenas com parceiros autorizados e com seu consentimento"
    }
  ];

  const securityMeasures = [
    {
      icon: Key,
      title: "Autenticação Multifator",
      description: "Proteção adicional com verificação em duas etapas"
    },
    {
      icon: Smartphone,
      title: "Biometria",
      description: "Acesso seguro através de impressão digital ou reconhecimento facial"
    },
    {
      icon: Database,
      title: "Tokenização",
      description: "Dados sensíveis são substituídos por tokens seguros"
    },
    {
      icon: AlertTriangle,
      title: "Detecção de Fraudes",
      description: "Monitoramento inteligente para identificar atividades suspeitas"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">Sua </span>
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Segurança
            </span>
            <span className="block text-gray-900 mt-2">é Nossa Prioridade</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Protegemos seus dados com os mais altos padrões de segurança da indústria, 
            garantindo total privacidade e conformidade regulatória.
          </p>
        </section>

        {/* Principais Recursos de Segurança */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recursos de Segurança
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tecnologias avançadas para proteger suas informações financeiras
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Certificações */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certificações e Conformidade
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Reconhecimento internacional dos nossos padrões de segurança
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {cert.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Proteção de Dados */}
        <section className="mb-16">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-green-50">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Proteção de Dados Pessoais
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Seguimos os princípios da LGPD para garantir o uso responsável dos seus dados
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {dataProtection.map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Medidas de Segurança Adicionais */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Medidas de Segurança Adicionais
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Camadas extras de proteção para sua tranquilidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityMeasures.map((measure, index) => {
              const Icon = measure.icon;
              return (
                <Card key={index} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {measure.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {measure.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Compromisso com a Segurança */}
        <section className="mb-16">
          <Card className="border-0 shadow-lg bg-gray-50">
            <CardContent className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Nosso Compromisso
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    A segurança não é apenas uma funcionalidade, é o fundamento 
                    de tudo que fazemos. Investimos continuamente em tecnologia 
                    e processos para manter seus dados seguros.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {[
                      'Monitoramento 24/7 por equipe especializada',
                      'Testes de penetração regulares',
                      'Atualizações de segurança automáticas',
                      'Treinamento contínuo da equipe',
                      'Resposta rápida a incidentes'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button size="lg" asChild>
                    <Link to="/login">
                      <Shield className="mr-2 h-5 w-5" />
                      Experimente com Segurança
                    </Link>
                  </Button>
                </div>

                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lock className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Segurança de Nível Bancário
                  </h3>
                  <p className="text-gray-600">
                    Os mesmos padrões de segurança utilizados 
                    pelos maiores bancos do mundo
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ de Segurança */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes sobre Segurança
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Esclarecemos suas principais dúvidas sobre proteção de dados
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "Como vocês protegem meus dados bancários?",
                answer: "Utilizamos criptografia AES-256 e tokenização para proteger todos os dados sensíveis. Além disso, seguimos os protocolos do Open Finance do Banco Central."
              },
              {
                question: "Quem tem acesso aos meus dados?",
                answer: "Apenas funcionários autorizados com necessidade específica têm acesso limitado aos dados, sempre com registro de auditoria completo."
              },
              {
                question: "Posso revogar o acesso aos meus dados?",
                answer: "Sim, você pode revogar o consentimento a qualquer momento através da sua conta, e todos os dados serão removidos conforme a LGPD."
              },
              {
                question: "Como vocês detectam fraudes?",
                answer: "Utilizamos inteligência artificial e machine learning para monitorar padrões suspeitos e detectar tentativas de fraude em tempo real."
              },
              {
                question: "Meus dados são vendidos para terceiros?",
                answer: "Jamais! Seus dados nunca são vendidos. Compartilhamos apenas com parceiros autorizados e somente com seu consentimento explícito."
              },
              {
                question: "O que acontece se houver um vazamento?",
                answer: "Temos um plano de resposta a incidentes que inclui notificação imediata, investigação completa e medidas corretivas conforme a LGPD."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-green-50">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Segurança que Você Pode Confiar
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Junte-se a milhares de usuários que confiam na nossa plataforma 
                para encontrar as melhores ofertas de crédito com total segurança
              </p>
              <div className="space-x-4">
                <Button size="lg" asChild>
                  <Link to="/login">
                    Começar Agora
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

export default Security; 