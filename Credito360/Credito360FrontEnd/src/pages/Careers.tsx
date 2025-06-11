import PageFooter from '@/components/PageFooter';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    Briefcase,
    Clock,
    Coffee,
    Gamepad2,
    GraduationCap,
    Heart,
    Mail,
    MapPin,
    Target,
    X,
    Zap
} from 'lucide-react';
import { useEffect, useState } from 'react';

const Careers = () => {
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string>('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setShowApplicationModal(true);
  };

  const closeModal = () => {
    setShowApplicationModal(false);
    setSelectedJob('');
  };

  const jobOpenings = [
    {
      title: 'Desenvolvedor Full Stack Senior',
      department: 'Tecnologia',
      location: 'São Paulo, SP',
      type: 'CLT',
      description: 'Buscamos um desenvolvedor experiente em React, Node.js e TypeScript para liderar projetos de inovação em fintech.',
      requirements: ['5+ anos de experiência', 'React/TypeScript', 'Node.js', 'Banco de dados', 'APIs REST']
    },
    {
      title: 'Analista de Dados Pleno',
      department: 'Data Science',
      location: 'Remote',
      type: 'CLT',
      description: 'Profissional para análise de dados financeiros e desenvolvimento de modelos de IA para análise de crédito.',
      requirements: ['Python/R', 'SQL avançado', 'Machine Learning', 'Estatística', 'Power BI/Tableau']
    },
    {
      title: 'Product Manager',
      department: 'Produto',
      location: 'São Paulo, SP',
      type: 'CLT',
      description: 'Liderar a estratégia e desenvolvimento de produtos digitais inovadores no setor financeiro.',
      requirements: ['Experiência em fintech', 'Metodologias ágeis', 'UX/UI básico', 'Análise de mercado', 'Liderança']
    },
    {
      title: 'Especialista em Compliance',
      department: 'Compliance',
      location: 'São Paulo, SP',
      type: 'CLT',
      description: 'Garantir conformidade com regulamentações do Banco Central e LGPD em produtos financeiros.',
      requirements: ['Direito/Economia', 'Regulamentação financeira', 'LGPD', 'Open Finance', 'Auditoria']
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'PJ',
      description: 'Criar experiências digitais excepcionais para produtos financeiros complexos.',
      requirements: ['Figma/Sketch', 'Design System', 'Prototipagem', 'User Research', 'Portfolio sólido']
    },
    {
      title: 'Analista de Marketing Digital',
      department: 'Marketing',
      location: 'São Paulo, SP',
      type: 'CLT',
      description: 'Desenvolver estratégias de marketing digital para aquisição e retenção de clientes.',
      requirements: ['Google Ads/Facebook Ads', 'SEO/SEM', 'Analytics', 'Growth Hacking', 'Fintech experience']
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Plano de Saúde Premium',
      description: 'Cobertura completa para você e sua família'
    },
    {
      icon: GraduationCap,
      title: 'Desenvolvimento Contínuo',
      description: 'Cursos, certificações e conferências pagas pela empresa'
    },
    {
      icon: Coffee,
      title: 'Flexibilidade',
      description: 'Horário flexível e trabalho remoto/híbrido'
    },
    {
      icon: Gamepad2,
      title: 'Ambiente Descontraído',
      description: 'Videogame, mesa de ping-pong e happy hours'
    },
    {
      icon: Zap,
      title: 'Stock Options',
      description: 'Participe do crescimento da empresa'
    },
    {
      icon: Target,
      title: 'Metas Claras',
      description: 'OKRs transparentes e feedback constante'
    }
  ];

  const values = [
    {
      title: 'Inovação',
      description: 'Sempre buscamos formas melhores de resolver problemas complexos'
    },
    {
      title: 'Transparência',
      description: 'Comunicação aberta e honesta em todos os níveis'
    },
    {
      title: 'Colaboração',
      description: 'Trabalhamos juntos para alcançar objetivos comuns'
    },
    {
      title: 'Excelência',
      description: 'Comprometimento com a qualidade em tudo que fazemos'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Construa o Futuro
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              do Crédito Digital
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Junte-se à nossa equipe e ajude a revolucionar o mercado financeiro brasileiro 
            com tecnologia de ponta e inovação.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <a href="#vagas">Ver Vagas Abertas</a>
          </Button>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Cultura
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Acreditamos que pessoas felizes e motivadas criam produtos excepcionais
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefícios e Vantagens
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferecemos um pacote completo de benefícios para nossos colaboradores
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="vagas" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vagas Abertas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Encontre a oportunidade perfeita para sua carreira
            </p>
          </div>
          
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {job.department}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-6 mb-4 text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4" />
                          <span>Presencial/Híbrido</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{job.description}</p>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Requisitos:</h4>
                        <div className="flex flex-wrap gap-2">
                          {job.requirements.map((req, reqIndex) => (
                            <span key={reqIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 lg:mt-0 lg:ml-8">
                      <Button 
                        className="w-full lg:w-auto" 
                        onClick={() => handleApplyClick(job.title)}
                      >
                        Candidatar-se
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Não encontrou a vaga ideal?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Envie seu currículo e entraremos em contato quando surgir uma oportunidade que combine com seu perfil
          </p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-blue-50"
            onClick={() => handleApplyClick('Cadastro Geral')}
          >
            Cadastrar Currículo
          </Button>
        </div>
      </section>

      <PageFooter />

      {/* Application Modal */}
      {showApplicationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Candidatura para {selectedJob}
              </h3>
              
              <p className="text-gray-600 mb-6">
                Para se candidatar a esta vaga, envie seu currículo para:
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800 font-semibold text-lg">
                  credito360@credito.com
                </p>
              </div>
              
              <p className="text-sm text-gray-500 mb-6">
                No assunto do email, mencione a vaga "{selectedJob}" e inclua uma breve apresentação junto com seu currículo em anexo.
              </p>
              
              <div className="flex gap-3">
                <Button 
                  onClick={closeModal}
                  variant="outline" 
                  className="flex-1"
                >
                  Fechar
                </Button>
                <Button 
                  className="flex-1"
                  onClick={() => {
                    window.open(`mailto:credito360@credito.com?subject=Candidatura - ${selectedJob}`, '_blank');
                    closeModal();
                  }}
                >
                  Abrir Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers; 