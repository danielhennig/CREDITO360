import LiveChat from '@/components/LiveChat';
import PageFooter from '@/components/PageFooter';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    BookOpen,
    ChevronDown,
    ChevronUp,
    CreditCard,
    Download,
    FileText,
    HelpCircle,
    Mail,
    MessageCircle,
    Phone,
    Settings,
    Shield,
    Users,
    Video
} from 'lucide-react';
import { useEffect, useState } from 'react';

const HelpCenter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const openChat = () => {
    setIsChatOpen(true);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  const categories = [
    { id: 'all', name: 'Todas as Categorias', icon: HelpCircle },
    { id: 'account', name: 'Conta e Cadastro', icon: Users },
    { id: 'credit', name: 'Crédito e Empréstimos', icon: CreditCard },
    { id: 'security', name: 'Segurança', icon: Shield },
    { id: 'technical', name: 'Problemas Técnicos', icon: Settings }
  ];

  const faqs = [
    {
      category: 'account',
      question: 'Como criar uma conta na Crédito360?',
      answer: 'Para criar sua conta, clique em "Criar Conta" no topo da página, preencha seus dados pessoais, confirme seu email e telefone. O processo leva apenas alguns minutos e é 100% digital.'
    },
    {
      category: 'account',
      question: 'Esqueci minha senha, como recuperar?',
      answer: 'Na tela de login, clique em "Esqueci minha senha", digite seu email cadastrado e você receberá um link para redefinir sua senha. O link é válido por 24 horas.'
    },
    {
      category: 'account',
      question: 'Como atualizar meus dados pessoais?',
      answer: 'Acesse "Minha Conta" no menu principal, clique em "Dados Pessoais" e edite as informações necessárias. Algumas alterações podem exigir nova verificação de documentos.'
    },
    {
      category: 'credit',
      question: 'Como funciona a análise de crédito?',
      answer: 'Nossa IA analisa mais de 200 variáveis do seu perfil financeiro através do Open Finance. O processo é automático e leva apenas alguns minutos para gerar ofertas personalizadas.'
    },
    {
      category: 'credit',
      question: 'Quais documentos preciso para solicitar crédito?',
      answer: 'Você precisa de CPF, RG ou CNH, comprovante de renda e residência. Para alguns produtos, podem ser solicitados documentos adicionais como extratos bancários.'
    },
    {
      category: 'credit',
      question: 'Qual o prazo para aprovação do crédito?',
      answer: 'A análise é feita em tempo real. Após enviar a documentação completa, você recebe o resultado em até 24 horas. A liberação do valor aprovado ocorre em até 2 dias úteis.'
    },
    {
      category: 'credit',
      question: 'Posso quitar meu empréstimo antecipadamente?',
      answer: 'Sim! Você pode quitar antecipadamente sem multas. Inclusive, há desconto nos juros proporcionais ao tempo antecipado. Consulte as condições na sua área do cliente.'
    },
    {
      category: 'security',
      question: 'Meus dados estão seguros na plataforma?',
      answer: 'Sim! Utilizamos criptografia AES-256, certificação ISO 27001 e somos 100% conformes com a LGPD. Seus dados são protegidos pelos mais altos padrões de segurança.'
    },
    {
      category: 'security',
      question: 'O que é Open Finance e é seguro?',
      answer: 'Open Finance é uma regulamentação do Banco Central que permite compartilhar dados bancários de forma segura. Você controla quais informações compartilhar e pode revogar o acesso a qualquer momento.'
    },
    {
      category: 'security',
      question: 'Como ativar a autenticação em duas etapas?',
      answer: 'Vá em "Minha Conta" > "Segurança" > "Autenticação em Duas Etapas". Você pode usar SMS ou aplicativo autenticador. Recomendamos ativar para maior segurança.'
    },
    {
      category: 'technical',
      question: 'O aplicativo não está funcionando, o que fazer?',
      answer: 'Primeiro, verifique sua conexão com a internet. Tente fechar e abrir o app novamente. Se persistir, desinstale e reinstale o aplicativo ou entre em contato conosco.'
    },
    {
      category: 'technical',
      question: 'Não consigo fazer login, o que pode ser?',
      answer: 'Verifique se está usando o email e senha corretos. Certifique-se de que o Caps Lock não está ativado. Se ainda não conseguir, use a opção "Esqueci minha senha".'
    },
    {
      category: 'technical',
      question: 'A página não carrega completamente',
      answer: 'Limpe o cache do seu navegador, desative extensões temporariamente ou tente usar outro navegador. Se o problema persistir, entre em contato com nosso suporte.'
    }
  ];

  const guides = [
    {
      title: 'Guia Completo: Como Solicitar seu Primeiro Empréstimo',
      description: 'Passo a passo detalhado para solicitar crédito pela primeira vez',
      icon: BookOpen,
      duration: '5 min de leitura'
    },
    {
      title: 'Entendendo o Open Finance',
      description: 'Tudo sobre como funciona e como protege seus dados',
      icon: Shield,
      duration: '3 min de leitura'
    },
    {
      title: 'Dicas para Melhorar seu Score de Crédito',
      description: 'Estratégias para aumentar suas chances de aprovação',
      icon: CreditCard,
      duration: '7 min de leitura'
    },
    {
      title: 'Configurações de Segurança Recomendadas',
      description: 'Como proteger sua conta com as melhores práticas',
      icon: Settings,
      duration: '4 min de leitura'
    }
  ];

  const contactOptions = [
    {
      title: 'Chat ao Vivo',
      description: 'Fale conosco em tempo real',
      icon: MessageCircle,
      availability: 'Seg-Sex: 8h às 18h',
      action: 'Iniciar Chat'
    },
    {
      title: 'WhatsApp',
      description: '(11) 99999-3600',
      icon: Phone,
      availability: 'Seg-Sex: 8h às 20h',
      action: 'Enviar Mensagem'
    },
    {
      title: 'Email',
      description: 'suporte@credito360.com',
      icon: Mail,
      availability: 'Resposta em até 24h',
      action: 'Enviar Email'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <PageHeader />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Central de
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Ajuda
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Encontre respostas rápidas para suas dúvidas ou entre em contato com nossa equipe de suporte especializada.
          </p>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
                    <p className="text-gray-600 mb-2">{option.description}</p>
                    <p className="text-sm text-gray-500 mb-4">{option.availability}</p>
                    <Button size="sm" className="w-full" onClick={openChat}>
                      {option.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Encontre respostas para as dúvidas mais comuns
            </p>
          </div>
          
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nenhuma pergunta encontrada
              </h3>
              <p className="text-gray-600">
                Tente usar outros termos de busca ou entre em contato conosco
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Guias e Tutoriais
            </h2>
            <p className="text-xl text-gray-600">
              Aprenda a usar a plataforma com nossos guias detalhados
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {guides.map((guide, index) => {
              const Icon = guide.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{guide.title}</h3>
                        <p className="text-gray-600 mb-4">{guide.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{guide.duration}</span>
                          <Button variant="outline" size="sm">
                            <FileText className="mr-2 h-4 w-4" />
                            Ler Guia
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tutoriais em Vídeo
            </h2>
            <p className="text-xl text-gray-600">
              Aprenda visualmente com nossos vídeos explicativos
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Como criar sua conta', duration: '2:30' },
              { title: 'Solicitando seu primeiro empréstimo', duration: '4:15' },
              { title: 'Configurando segurança da conta', duration: '3:45' }
            ].map((video, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center mb-4">
                    <Video className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{video.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{video.duration}</span>
                    <Button size="sm">
                      Assistir
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ainda precisa de ajuda?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Nossa equipe de suporte está pronta para ajudar você com qualquer dúvida
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" onClick={openChat}>
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar com Suporte
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Download className="mr-2 h-5 w-5" />
              Baixar Manual PDF
            </Button>
          </div>
        </div>
      </section>

      <PageFooter />
      
      <LiveChat isOpen={isChatOpen} onClose={closeChat} />
    </div>
  );
};

export default HelpCenter; 