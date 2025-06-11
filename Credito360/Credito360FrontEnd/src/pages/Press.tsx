import PageFooter from '@/components/PageFooter';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    Award,
    Calendar,
    Download,
    ExternalLink,
    FileText,
    Image,
    Mail,
    Phone,
    X
} from 'lucide-react';
import { useEffect, useState } from 'react';

const Press = () => {
  const [selectedRelease, setSelectedRelease] = useState<any>(null);
  const [showReleaseModal, setShowReleaseModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleReadMore = (release: any) => {
    setSelectedRelease(release);
    setShowReleaseModal(true);
  };

  const closeModal = () => {
    setShowReleaseModal(false);
    setSelectedRelease(null);
  };

  const pressReleases = [
    {
      date: '15 de Dezembro, 2024',
      title: 'Crédito360 Facilita R$ 100 Milhões em Crédito Digital em Primeiro Ano',
      summary: 'Plataforma de fintech alcança marco histórico conectando mais de 50 mil usuários a instituições financeiras parceiras.',
      category: 'Milestone',
      fullContent: `
        <p><strong>São Paulo, 15 de dezembro de 2024</strong> - A Crédito360, plataforma inovadora de crédito digital, anuncia que facilitou mais de R$ 100 milhões em operações de crédito em seu primeiro ano de operação, conectando mais de 50 mil usuários a uma rede de mais de 200 instituições financeiras parceiras.</p>
        
        <p>Este marco histórico representa um crescimento exponencial da plataforma, que utiliza tecnologia de Inteligência Artificial e integração com o Open Finance do Banco Central para oferecer as melhores condições de crédito do mercado aos seus usuários.</p>
        
        <p><strong>Principais conquistas em 2024:</strong></p>
        <ul>
          <li>R$ 100+ milhões em crédito facilitado</li>
          <li>50.000+ usuários ativos na plataforma</li>
          <li>200+ parceiros financeiros</li>
          <li>98% de índice de satisfação dos clientes</li>
          <li>80% de redução no tempo de análise comparado ao processo tradicional</li>
        </ul>
        
        <p>"Estamos extremamente orgulhosos deste resultado. Nossa missão sempre foi democratizar o acesso ao crédito no Brasil, e estes números mostram que estamos no caminho certo", afirma Ana Silva, CEO da Crédito360.</p>
        
        <p>A empresa planeja expandir suas operações em 2025, com foco no mercado de pessoa jurídica e novas parcerias estratégicas com instituições financeiras de todo o país.</p>
      `
    },
    {
      date: '28 de Novembro, 2024',
      title: 'Parceria Estratégica com Sicredi Expande Acesso ao Crédito no Sul do Brasil',
      summary: 'Nova parceria oferece condições especiais para cooperados e amplia portfólio de produtos financeiros.',
      category: 'Parceria',
      fullContent: `
        <p><strong>Porto Alegre, 28 de novembro de 2024</strong> - A Crédito360 anuncia uma parceria estratégica com o Sicredi, uma das maiores cooperativas de crédito do Brasil, para expandir o acesso ao crédito na região Sul do país.</p>
        
        <p>A parceria permitirá que os mais de 5 milhões de cooperados do Sicredi tenham acesso às soluções inovadoras da Crédito360, incluindo análise de crédito por IA e comparação de ofertas em tempo real.</p>
        
        <p><strong>Benefícios da parceria:</strong></p>
        <ul>
          <li>Condições especiais para cooperados do Sicredi</li>
          <li>Taxas preferenciais em produtos de crédito</li>
          <li>Processo 100% digital e simplificado</li>
          <li>Análise de crédito em tempo real</li>
          <li>Atendimento personalizado</li>
        </ul>
        
        <p>"Esta parceria representa um marco importante em nossa estratégia de expansão regional. O Sicredi compartilha nossos valores de inovação e proximidade com o cliente", comenta Carlos Santos, CTO da Crédito360.</p>
        
        <p>A integração entre as plataformas estará disponível a partir de janeiro de 2025, oferecendo uma experiência ainda mais completa aos usuários da região Sul.</p>
      `
    },
    {
      date: '10 de Outubro, 2024',
      title: 'Crédito360 Lança Tecnologia de IA para Análise de Risco de Crédito',
      summary: 'Inovação reduz tempo de análise em 80% e aumenta precisão na avaliação de perfil financeiro dos usuários.',
      category: 'Tecnologia',
      fullContent: `
        <p><strong>São Paulo, 10 de outubro de 2024</strong> - A Crédito360 lança sua nova tecnologia proprietária de Inteligência Artificial para análise de risco de crédito, revolucionando a forma como as instituições financeiras avaliam o perfil dos solicitantes.</p>
        
        <p>A nova solução, desenvolvida internamente pela equipe de Data Science da empresa, utiliza algoritmos avançados de machine learning para analisar mais de 200 variáveis financeiras em tempo real.</p>
        
        <p><strong>Principais inovações da tecnologia:</strong></p>
        <ul>
          <li>Redução de 80% no tempo de análise de crédito</li>
          <li>Aumento de 35% na precisão da avaliação de risco</li>
          <li>Análise de mais de 200 variáveis financeiras</li>
          <li>Integração completa com Open Finance</li>
          <li>Detecção automática de fraudes</li>
          <li>Personalização de ofertas por perfil</li>
        </ul>
        
        <p>"Nossa IA representa um salto tecnológico significativo no mercado de crédito brasileiro. Conseguimos oferecer análises mais precisas e rápidas, beneficiando tanto usuários quanto instituições parceiras", explica Maria Oliveira, Head of Product da Crédito360.</p>
        
        <p>A tecnologia já está em operação e tem contribuído para o aumento significativo na aprovação de crédito para perfis antes considerados de alto risco.</p>
      `
    },
    {
      date: '22 de Setembro, 2024',
      title: 'Expansão para Mercado de Pessoa Jurídica com Foco em PMEs',
      summary: 'Plataforma agora oferece soluções de crédito personalizadas para pequenas e médias empresas.',
      category: 'Produto',
      fullContent: `
        <p><strong>São Paulo, 22 de setembro de 2024</strong> - A Crédito360 anuncia sua expansão para o mercado de pessoa jurídica, lançando soluções especializadas para pequenas e médias empresas (PMEs) brasileiras.</p>
        
        <p>A nova linha de produtos foi desenvolvida especificamente para atender às necessidades de capital de giro, investimento e expansão das PMEs, que representam 99% das empresas brasileiras.</p>
        
        <p><strong>Produtos para PMEs:</strong></p>
        <ul>
          <li>Capital de Giro com taxas a partir de 1,2% ao mês</li>
          <li>Financiamento de equipamentos e maquinário</li>
          <li>Antecipação de recebíveis</li>
          <li>Crédito para expansão e novos negócios</li>
          <li>Linhas de crédito pré-aprovadas</li>
          <li>Consultoria financeira especializada</li>
        </ul>
        
        <p>"As PMEs são o motor da economia brasileira e merecem acesso facilitado ao crédito. Nossa plataforma oferece soluções ágeis e personalizadas para cada tipo de negócio", afirma João Costa, Head of Compliance da Crédito360.</p>
        
        <p>A empresa projeta facilitar R$ 50 milhões em crédito para PMEs até o final de 2024, contribuindo para o crescimento e desenvolvimento do setor empresarial brasileiro.</p>
      `
    },
    {
      date: '05 de Agosto, 2024',
      title: 'Certificação ISO 27001 Reforça Compromisso com Segurança de Dados',
      summary: 'Crédito360 obtém certificação internacional de segurança da informação, garantindo máxima proteção aos usuários.',
      category: 'Segurança',
      fullContent: `
        <p><strong>São Paulo, 05 de agosto de 2024</strong> - A Crédito360 anuncia a obtenção da certificação ISO 27001, padrão internacional de segurança da informação, reforçando seu compromisso com a proteção de dados dos usuários.</p>
        
        <p>A certificação, concedida pela Bureau Veritas, atesta que a empresa atende aos mais rigorosos padrões internacionais de segurança cibernética e gestão de informações.</p>
        
        <p><strong>Medidas de segurança implementadas:</strong></p>
        <ul>
          <li>Criptografia AES-256 para todos os dados</li>
          <li>Autenticação multifator obrigatória</li>
          <li>Monitoramento 24/7 de atividades suspeitas</li>
          <li>Backup automático em múltiplas localizações</li>
          <li>Testes de penetração mensais</li>
          <li>Treinamento contínuo da equipe em segurança</li>
          <li>Conformidade total com LGPD</li>
        </ul>
        
        <p>"A segurança dos dados dos nossos usuários é nossa prioridade máxima. Esta certificação comprova nosso compromisso em manter os mais altos padrões de proteção", destaca o CISO da Crédito360.</p>
        
        <p>A empresa também anuncia investimentos de R$ 2 milhões em infraestrutura de segurança para 2025, incluindo implementação de tecnologias de inteligência artificial para detecção de fraudes.</p>
      `
    }
  ];

  const mediaKit = [
    {
      type: 'Logo Principal',
      description: 'Logo oficial da Crédito360 em alta resolução',
      format: 'PNG, SVG',
      size: '2.1 MB'
    },
    {
      type: 'Logos Variações',
      description: 'Versões horizontal, vertical e monocromática',
      format: 'PNG, SVG',
      size: '5.8 MB'
    },
    {
      type: 'Fotos da Equipe',
      description: 'Fotos profissionais dos executivos e equipe',
      format: 'JPG',
      size: '12.3 MB'
    },
    {
      type: 'Screenshots da Plataforma',
      description: 'Capturas de tela da interface do usuário',
      format: 'PNG',
      size: '8.7 MB'
    },
    {
      type: 'Infográficos',
      description: 'Dados e estatísticas da empresa',
      format: 'PNG, PDF',
      size: '4.2 MB'
    }
  ];

  const companyStats = [
    {
      number: '50K+',
      label: 'Usuários Ativos',
      description: 'Pessoas físicas e jurídicas'
    },
    {
      number: 'R$ 100M+',
      label: 'Crédito Facilitado',
      description: 'Volume total processado'
    },
    {
      number: '200+',
      label: 'Parceiros Financeiros',
      description: 'Bancos e instituições'
    },
    {
      number: '98%',
      label: 'Satisfação',
      description: 'Índice de satisfação dos clientes'
    },
    {
      number: '80%',
      label: 'Redução no Tempo',
      description: 'Comparado ao processo tradicional'
    },
    {
      number: '15+',
      label: 'Prêmios',
      description: 'Reconhecimentos do setor'
    }
  ];

  const awards = [
    {
      year: '2024',
      title: 'Melhor Fintech de Crédito',
      organization: 'Prêmio Fintech Brasil',
      description: 'Reconhecimento pela inovação em tecnologia financeira'
    },
    {
      year: '2024',
      title: 'Startup do Ano - Categoria Fintech',
      organization: 'ABSTARTUPS',
      description: 'Destaque no ecossistema de startups brasileiro'
    },
    {
      year: '2024',
      title: 'Certificação ISO 27001',
      organization: 'Bureau Veritas',
      description: 'Padrão internacional de segurança da informação'
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
            Sala de
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Imprensa
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Recursos, notícias e informações para jornalistas e profissionais de mídia 
            interessados na revolução do crédito digital no Brasil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <Download className="mr-2 h-5 w-5" />
              Kit de Mídia
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Mail className="mr-2 h-5 w-5" />
              Contato Imprensa
            </Button>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Crédito360 em Números
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dados atualizados sobre o impacto da nossa plataforma no mercado financeiro brasileiro
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyStats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</h3>
                  <p className="text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comunicados à Imprensa
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Últimas notícias e anúncios oficiais da Crédito360
            </p>
          </div>
          
          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                          {release.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="h-4 w-4 mr-2" />
                          {release.date}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{release.title}</h3>
                      <p className="text-gray-700 mb-4">{release.summary}</p>
                    </div>
                    
                    <div className="mt-6 lg:mt-0 lg:ml-8">
                      <Button 
                        variant="outline" 
                        className="w-full lg:w-auto"
                        onClick={() => handleReadMore(release)}
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        Ler Mais
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Prêmios e Reconhecimentos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Reconhecimentos que validam nossa excelência e inovação no mercado
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{award.year}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{award.title}</h3>
                  <p className="text-blue-600 font-medium mb-3">{award.organization}</p>
                  <p className="text-gray-600 text-sm">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kit de Mídia
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Recursos visuais e materiais para uso editorial
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaKit.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                      <Image className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-sm text-gray-500">{item.size}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.type}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <p className="text-blue-600 text-sm font-medium mb-4">{item.format}</p>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Contato para Imprensa
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Para entrevistas, informações adicionais ou esclarecimentos, entre em contato conosco
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 rounded-lg p-6">
              <Mail className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-blue-100">imprensa@credito360.com</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <Phone className="h-8 w-8 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Telefone</h3>
              <p className="text-blue-100">(11) 3000-3600</p>
            </div>
          </div>
          
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <ExternalLink className="mr-2 h-5 w-5" />
            Agendar Entrevista
          </Button>
        </div>
      </section>

      <PageFooter />

      {/* Press Release Modal */}
      {showReleaseModal && selectedRelease && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-start">
              <div className="flex-1 pr-4">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {selectedRelease.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {selectedRelease.date}
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {selectedRelease.title}
                </h2>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 p-2"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div 
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: selectedRelease.fullContent }}
              />
              
              <div className="mt-8 pt-6 border-t">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={closeModal} variant="outline" className="flex-1">
                    Fechar
                  </Button>
                  <Button className="flex-1">
                    <Download className="mr-2 h-4 w-4" />
                    Baixar PDF
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Press; 