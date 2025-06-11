import FloatingChatButton from '@/components/FloatingChatButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    ArrowRight,
    CheckCircle,
    Shield,
    Star,
    TrendingUp,
    Users
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Seguro e Regulamentado',
      description: 'Utilizamos o Open Finance do Banco Central para acessar seus dados com total segurança'
    },
    {
      icon: TrendingUp,
      title: 'Melhores Taxas',
      description: 'Compare ofertas de diferentes instituições e encontre as menores taxas do mercado'
    },
    {
      icon: Users,
      title: 'Análise Personalizada',
      description: 'Nossa IA analisa seu perfil para encontrar as ofertas mais adequadas para você'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Santos',
      role: 'Empresária',
      content: 'Consegui um empréstimo com taxa 40% menor que meu banco oferecia. Incrível!',
      rating: 5
    },
    {
      name: 'João Silva',
      role: 'Autônomo',
      content: 'Processo simples e rápido. Em 5 minutos já tinha várias propostas de crédito.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      role: 'Comerciante',
      content: 'A análise de IA me ajudou a entender melhor meu perfil financeiro.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="transition-transform duration-300 hover:scale-110">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent cursor-pointer">
                Crédito360
              </div>
            </Link>
            <div className="space-x-4">
              <Button variant="ghost" asChild>
                <Link to="/login">Entrar</Link>
              </Button>
              <Button asChild>
                <Link to="/cadastro">Criar Conta</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              O Futuro do
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Crédito Digital
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Conecte seus dados bancários via Open Finance e descubra as melhores ofertas de crédito 
              personalizadas para seu perfil com nossa tecnologia de IA.
            </p>
            <div className="space-x-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                <Link to="/cadastro">
                  Começar Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="#beneficios">Saiba Mais</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher o Crédito360?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Revolucionamos a forma como você encontra crédito, usando a tecnologia mais avançada do mercado
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
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

      {/* Open Finance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Open Finance: 
                <span className="block text-blue-600">Seus dados, seu controle</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                O Open Finance é uma regulamentação do Banco Central que permite compartilhar 
                seus dados bancários de forma segura e controlada para obter melhores serviços financeiros.
              </p>
              
              <div className="space-y-4">
                {[
                  'Dados criptografados e seguros',
                  'Você controla quais informações compartilhar',
                  'Análise mais precisa do seu perfil',
                  'Ofertas personalizadas e melhores taxas'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Como Funciona?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <p className="font-semibold">Conecte seus bancos</p>
                      <p className="text-blue-100 text-sm">Via Open Finance, de forma segura</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <p className="font-semibold">Análise inteligente</p>
                      <p className="text-blue-100 text-sm">Nossa IA analisa seu perfil</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <p className="font-semibold">Ofertas personalizadas</p>
                      <p className="text-blue-100 text-sm">Receba as melhores propostas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
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
            Pronto para encontrar o crédito ideal?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Cadastre-se agora e tenha acesso às melhores ofertas do mercado em poucos minutos
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
            <Link to="/cadastro">
              Criar Conta Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-4">
                Crédito360
              </div>
              <p className="text-gray-400">
                Conectando você às melhores oportunidades de crédito do mercado.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/como-funciona" className="hover:text-white transition-colors">Como funciona</Link></li>
                <li><Link to="/seguranca" className="hover:text-white transition-colors">Segurança</Link></li>
                <li><Link to="/parceiros" className="hover:text-white transition-colors">Parceiros</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/sobre-nos" className="hover:text-white transition-colors">Sobre nós</Link></li>
                <li><Link to="/carreiras" className="hover:text-white transition-colors">Carreiras</Link></li>
                <li><Link to="/imprensa" className="hover:text-white transition-colors">Imprensa</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/central-ajuda" className="hover:text-white transition-colors">Central de Ajuda</Link></li>
                <li><Link to="/contato" className="hover:text-white transition-colors">Contato</Link></li>
                <li><Link to="/status" className="hover:text-white transition-colors">Status</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Crédito360. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termos de Uso
              </Link>
              <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </footer>
      
      <FloatingChatButton />
    </div>
  );
};

export default Home;
