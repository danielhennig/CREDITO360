
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Zap, TrendingUp, Users, Star, CheckCircle } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C360</span>
            </div>
            <h1 className="text-xl font-bold gradient-text">Crédito360</h1>
          </div>
          <div className="space-x-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Entrar</Link>
            </Button>
            <Button asChild>
              <Link to="/cadastro">Criar Conta</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Marketplace de{" "}
              <span className="gradient-text">Crédito Inteligente</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Conecte suas contas bancárias via Open Finance, visualize seu score 
              calculado por IA e receba ofertas de crédito personalizadas.
            </p>
            <div className="space-x-4">
              <Button size="lg" asChild className="px-8 py-6 text-lg">
                <Link to="/cadastro">Começar Agora</Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Por que escolher o Crédito360?</h2>
            <p className="text-xl text-gray-600">
              Revolucionamos a forma como você acessa crédito
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bank-card card-gradient border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Segurança Total</h3>
                <p className="text-gray-600">
                  Conectamos suas contas com a máxima segurança usando Open Finance,
                  seguindo todas as regulamentações do Banco Central.
                </p>
              </CardContent>
            </Card>

            <Card className="bank-card card-gradient border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">IA Avançada</h3>
                <p className="text-gray-600">
                  Nossa inteligência artificial analisa seu perfil financeiro e
                  calcula seu score de crédito em tempo real.
                </p>
              </CardContent>
            </Card>

            <Card className="bank-card card-gradient border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Ofertas Personalizadas</h3>
                <p className="text-gray-600">
                  Receba ofertas de crédito que realmente fazem sentido para
                  seu perfil, com as melhores taxas do mercado.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Como Funciona</h2>
            <p className="text-xl text-gray-600">
              Em apenas 3 passos simples você tem acesso ao melhor do mercado de crédito
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-4">Conecte suas Contas</h3>
              <p className="text-gray-600">
                Conecte suas contas bancárias de forma segura via Open Finance
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-4">Calcule seu Score</h3>
              <p className="text-gray-600">
                Nossa IA analisa seus dados e calcula seu score de crédito personalizado
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-4">Receba Ofertas</h3>
              <p className="text-gray-600">
                Acesse ofertas de crédito personalizadas e escolha a melhor para você
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Consegui o melhor empréstimo da minha vida com taxas incríveis. 
                  O processo foi super rápido e transparente."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    M
                  </div>
                  <div>
                    <p className="font-semibold">Maria Silva</p>
                    <p className="text-sm text-gray-500">Empresária</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "A inteligência artificial do Crédito360 encontrou ofertas que 
                  eu nem sabia que existiam. Economizei muito!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    J
                  </div>
                  <div>
                    <p className="font-semibold">João Santos</p>
                    <p className="text-sm text-gray-500">Freelancer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Segurança e transparência em primeiro lugar. Me senti 
                  confiante em conectar todas as minhas contas."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    A
                  </div>
                  <div>
                    <p className="font-semibold">Ana Costa</p>
                    <p className="text-sm text-gray-500">Consultora</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C360</span>
                </div>
                <h3 className="text-xl font-bold">Crédito360</h3>
              </div>
              <p className="text-gray-400">
                O marketplace de crédito mais inteligente do Brasil.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Como funciona</li>
                <li>Segurança</li>
                <li>Preços</li>
                <li>API</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Sobre nós</li>
                <li>Carreiras</li>
                <li>Imprensa</li>
                <li>Contato</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Central de Ajuda</li>
                <li>Documentação</li>
                <li>Termos de Uso</li>
                <li>Privacidade</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Crédito360. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
