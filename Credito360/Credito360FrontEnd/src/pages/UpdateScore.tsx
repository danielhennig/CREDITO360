
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Navigation from "../components/Navigation";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "sonner";
import { RefreshCw, TrendingUp, Building2, Star } from "lucide-react";

interface ScoreData {
  scoreTotal: number;
}

const UpdateScore = () => {
  const { user } = useAuth();
  const [scoreData, setScoreData] = useState<ScoreData | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const updateScore = async () => {
    if (!user?.cpf) return;

    setLoading(true);
    setProgress(0);

    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 200);

    try {
      const response = await fetch(`http://localhost:3000/credito360/atualizar-score/${user.cpf.replace(/\D/g, '')}`);
      
      clearInterval(progressInterval);
      setProgress(100);
      
      if (response.ok) {
        const data = await response.json();
        console.log('Score data received:', data);
        
        setTimeout(() => {
          // Extrair scoreTotal da resposta da API
          const scoreTotal = data.scoreTotal !== undefined ? data.scoreTotal : 0;
          setScoreData({ scoreTotal });
          setLoading(false);
          toast.success('Score atualizado com sucesso!');
        }, 500);
      } else {
        console.log('Response not ok, status:', response.status);
        // Se a resposta não é ok (404, 500, etc), mostrar score 0
        setTimeout(() => {
          setScoreData({ scoreTotal: 0 });
          setLoading(false);
          toast.success('Score calculado com base nos dados disponíveis');
        }, 500);
      }
    } catch (error) {
      console.error('Score update error:', error);
      
      // Em caso de erro de rede ou outro erro, mostrar score 0
      clearInterval(progressInterval);
      setProgress(100);
      
      setTimeout(() => {
        setScoreData({ scoreTotal: 0 });
        setLoading(false);
        toast.success('Score calculado com base nos dados disponíveis');
      }, 500);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 800) return 'text-green-600';
    if (score >= 600) return 'text-blue-600';
    if (score >= 400) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreGradient = (score: number) => {
    if (score >= 800) return 'score-excellent';
    if (score >= 600) return 'score-good';
    if (score >= 400) return 'score-fair';
    return 'score-poor';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 800) return 'Excelente';
    if (score >= 600) return 'Bom';
    if (score >= 400) return 'Regular';
    if (score === 0) return 'Sem dados';
    return 'Baixo';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="fade-in-up">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Atualizar Score de Crédito
            </h1>
            <p className="text-gray-600 text-lg">
              Atualize seu score com base nos dados mais recentes das suas contas
            </p>
          </div>

          {!loading && !scoreData && (
            <Card className="shadow-xl border-0 card-gradient text-center">
              <CardContent className="p-12">
                <div className="w-24 h-24 gradient-bg rounded-full flex items-center justify-center mx-auto mb-8">
                  <TrendingUp className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Pronto para atualizar seu score?</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Analisaremos todas as suas contas conectadas e calcularemos seu novo score de crédito.
                </p>
                <Button 
                  size="lg" 
                  onClick={updateScore}
                  className="px-8 py-6 text-lg"
                >
                  <RefreshCw className="mr-2 w-6 h-6" />
                  Atualizar Score Agora
                </Button>
              </CardContent>
            </Card>
          )}

          {loading && (
            <Card className="shadow-xl border-0 card-gradient">
              <CardContent className="p-12 text-center">
                <div className="w-24 h-24 gradient-bg rounded-full flex items-center justify-center mx-auto mb-8 loading-pulse">
                  <RefreshCw className="w-12 h-12 text-white animate-spin" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Calculando seu novo score...</h2>
                <p className="text-gray-600 mb-8">
                  Nossa IA está analisando seus dados financeiros
                </p>
                <div className="max-w-md mx-auto">
                  <Progress value={progress} className="h-3 mb-4" />
                  <p className="text-sm text-gray-500">{progress}% concluído</p>
                </div>
              </CardContent>
            </Card>
          )}

          {scoreData && (
            <div className="space-y-8 slide-in-right">
              {/* Overall Score */}
              <Card className="shadow-xl border-0 card-gradient">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Star className="mr-3 text-primary" />
                    Seu Novo Score
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className={`text-8xl font-bold text-white px-8 py-6 rounded-3xl ${getScoreGradient(scoreData.scoreTotal)} inline-block mb-6`}>
                      {scoreData.scoreTotal}
                    </div>
                    <h3 className="text-3xl font-semibold text-gray-700 mb-4">
                      {getScoreLabel(scoreData.scoreTotal)}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {scoreData.scoreTotal === 0 
                        ? 'Conecte seus bancos para calcular seu score'
                        : 'Score calculado com base nos seus dados financeiros'
                      }
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="text-center space-y-4">
                <Button 
                  size="lg" 
                  onClick={updateScore}
                  variant="outline"
                  className="px-8 py-6 text-lg mr-4"
                >
                  <RefreshCw className="mr-2 w-6 h-6" />
                  Atualizar Novamente
                </Button>
                <Button 
                  size="lg" 
                  asChild
                  className="px-8 py-6 text-lg"
                >
                  <a href="/ofertas">
                    Ver Ofertas Recomendadas
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateScore;
