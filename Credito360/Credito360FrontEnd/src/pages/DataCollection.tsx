
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Database, 
  CreditCard, 
  TrendingUp, 
  CheckCircle, 
  Loader2 
} from 'lucide-react';

const DataCollection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const navigate = useNavigate();

  const steps = [
    {
      icon: Database,
      title: "Conectando com seus bancos",
      description: "Estabelecendo conexão segura via Open Finance..."
    },
    {
      icon: CreditCard,
      title: "Coletando extratos bancários",
      description: "Analisando histórico de transações dos últimos 6 meses..."
    },
    {
      icon: TrendingUp,
      title: "Calculando renda estimada",
      description: "Processando dados de entrada para estimar sua renda..."
    },
    {
      icon: CheckCircle,
      title: "Dados coletados com sucesso",
      description: "Informações processadas e prontas para análise!"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        
        // Atualizar step baseado no progresso
        const stepProgress = Math.floor(newProgress / 25);
        if (stepProgress !== currentStep && stepProgress < steps.length) {
          setCurrentStep(stepProgress);
        }
        
        if (newProgress >= 100) {
          setIsComplete(true);
          clearInterval(interval);
          
          // Simular dados coletados
          const mockData = {
            balance: 15420.50,
            averageIncome: 8500.00,
            transactions: [
              { date: '2024-01-15', description: 'Salário', amount: 8500, type: 'credit' },
              { date: '2024-01-10', description: 'Aluguel', amount: -1500, type: 'debit' },
              { date: '2024-01-08', description: 'Supermercado', amount: -450, type: 'debit' },
              { date: '2024-01-05', description: 'Freelance', amount: 2000, type: 'credit' }
            ],
            creditScore: 720,
            collectedAt: new Date().toISOString()
          };
          
          localStorage.setItem('collectedData', JSON.stringify(mockData));
          
          return 100;
        }
        
        return newProgress;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [currentStep]);

  const handleContinue = () => {
    navigate('/analise');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Coletando seus dados financeiros
        </h1>
        <p className="text-lg text-gray-600">
          Estamos processando suas informações de forma segura para criar seu perfil de crédito
        </p>
      </div>

      {/* Progress Bar */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-8">
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">
                {progress.toFixed(0)}%
              </div>
              <Progress value={progress} className="w-full h-3" />
            </div>

            {/* Current Step */}
            <div className="flex items-center justify-center space-x-4">
              {isComplete ? (
                <CheckCircle className="h-8 w-8 text-green-500" />
              ) : (
                <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
              )}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {steps[currentStep]?.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {steps[currentStep]?.description}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Steps Timeline */}
      <Card className="border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === currentStep;
              const isCompleted = index < currentStep || isComplete;
              
              return (
                <div 
                  key={index}
                  className={`flex items-center space-x-4 p-3 rounded-lg transition-colors ${
                    isActive ? 'bg-blue-50 border border-blue-200' : 
                    isCompleted ? 'bg-green-50' : 'bg-gray-50'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isActive ? 'bg-blue-500 text-white' :
                    isCompleted ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
                  }`}>
                    {isCompleted && !isActive ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      <Icon className="h-6 w-6" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className={`font-medium ${
                      isActive || isCompleted ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </h4>
                    <p className={`text-sm ${
                      isActive ? 'text-blue-600' : 
                      isCompleted ? 'text-green-600' : 'text-gray-400'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                  
                  {isActive && !isComplete && (
                    <Loader2 className="h-5 w-5 text-blue-500 animate-spin" />
                  )}
                  
                  {isCompleted && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Continue Button */}
      {isComplete && (
        <div className="text-center animate-fade-in">
          <Button onClick={handleContinue} size="lg" className="px-8">
            Continuar para análise
          </Button>
        </div>
      )}

      {/* Security Notice */}
      <Card className="border-0 bg-blue-50 shadow-sm">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <Database className="h-4 w-4 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-blue-900">Processamento seguro</p>
              <p className="text-xs text-blue-700">
                Seus dados são processados localmente e protegidos por criptografia de ponta a ponta
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataCollection;
