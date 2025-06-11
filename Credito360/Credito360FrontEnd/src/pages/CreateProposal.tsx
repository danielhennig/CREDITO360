
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Plus, 
  DollarSign, 
  Percent, 
  Calendar, 
  Users,
  CheckCircle,
  ArrowLeft
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CreateProposal = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    minAmount: 1000,
    maxAmount: 50000,
    minInstallments: 6,
    maxInstallments: 48,
    interestRate: 3.5,
    riskProfile: '',
    minScore: 600,
    minIncome: 3000,
    features: [],
    terms: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFeatureChange = (feature: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      features: checked 
        ? [...prev.features, feature]
        : prev.features.filter(f => f !== feature)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.description || !formData.riskProfile) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha todos os campos obrigatórios",
        variant: "destructive",
      });
      return;
    }

    // Simular criação da proposta
    const newProposal = {
      id: Date.now().toString(),
      ...formData,
      status: 'pending',
      createdAt: new Date().toISOString(),
      views: 0,
      conversions: 0
    };

    // Salvar no localStorage (simulação)
    const existingProposals = JSON.parse(localStorage.getItem('partnerProposals') || '[]');
    existingProposals.push(newProposal);
    localStorage.setItem('partnerProposals', JSON.stringify(existingProposals));

    toast({
      title: "Proposta criada com sucesso!",
      description: "Sua proposta está sendo revisada e será ativada em breve",
    });

    navigate('/parceiro/propostas');
  };

  const availableFeatures = [
    'Aprovação rápida',
    'Sem consulta ao SPC/Serasa',
    'Primeira parcela em 30 dias',
    'Sem taxa de adesão',
    'Liberação em 24h',
    'Análise por IA',
    '100% digital',
    'Pagamento antecipado sem juros',
    'Relacionamento bancário incluso',
    'Suporte 24/7'
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" onClick={() => navigate('/parceiro/dashboard')}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Criar Nova Proposta</h1>
          <p className="text-gray-600">Configure sua oferta de crédito para o marketplace</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Informações Básicas */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Informações Básicas</CardTitle>
                <CardDescription>
                  Dados principais da sua proposta de crédito
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome da Proposta *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ex: Crédito Pessoal Premium"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descrição *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Descreva os benefícios e diferenciais da sua proposta"
                    rows={4}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="minAmount">Valor Mínimo (R$)</Label>
                    <Input
                      id="minAmount"
                      name="minAmount"
                      type="number"
                      value={formData.minAmount}
                      onChange={handleInputChange}
                      min="100"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="maxAmount">Valor Máximo (R$)</Label>
                    <Input
                      id="maxAmount"
                      name="maxAmount"
                      type="number"
                      value={formData.maxAmount}
                      onChange={handleInputChange}
                      min={formData.minAmount}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="minInstallments">Parcelas Mínimas</Label>
                    <Input
                      id="minInstallments"
                      name="minInstallments"
                      type="number"
                      value={formData.minInstallments}
                      onChange={handleInputChange}
                      min="1"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="maxInstallments">Parcelas Máximas</Label>
                    <Input
                      id="maxInstallments"
                      name="maxInstallments"
                      type="number"
                      value={formData.maxInstallments}
                      onChange={handleInputChange}
                      min={formData.minInstallments}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Taxa de Juros: {formData.interestRate.toFixed(1)}% a.m.</Label>
                  <Slider
                    value={[formData.interestRate]}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, interestRate: value[0] }))}
                    max={15}
                    min={0.5}
                    step={0.1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>0.5%</span>
                    <span>15%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Critérios de Elegibilidade */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Critérios de Elegibilidade</span>
                </CardTitle>
                <CardDescription>
                  Defina o perfil dos clientes para esta proposta
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Perfil de Risco *</Label>
                  <Select value={formData.riskProfile} onValueChange={(value) => setFormData(prev => ({ ...prev, riskProfile: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o perfil de risco" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Baixo Risco</SelectItem>
                      <SelectItem value="medium">Risco Médio</SelectItem>
                      <SelectItem value="high">Alto Risco</SelectItem>
                      <SelectItem value="all">Todos os Perfis</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="minScore">Score Mínimo</Label>
                    <Input
                      id="minScore"
                      name="minScore"
                      type="number"
                      value={formData.minScore}
                      onChange={handleInputChange}
                      min="0"
                      max="1000"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="minIncome">Renda Mínima (R$)</Label>
                    <Input
                      id="minIncome"
                      name="minIncome"
                      type="number"
                      value={formData.minIncome}
                      onChange={handleInputChange}
                      min="0"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Diferenciais */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Diferenciais da Proposta</CardTitle>
                <CardDescription>
                  Selecione os benefícios que sua proposta oferece
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {availableFeatures.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <Checkbox
                        id={feature}
                        checked={formData.features.includes(feature)}
                        onCheckedChange={(checked) => handleFeatureChange(feature, checked as boolean)}
                      />
                      <Label htmlFor={feature} className="text-sm">{feature}</Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-lg sticky top-6">
              <CardHeader>
                <CardTitle>Preview da Proposta</CardTitle>
                <CardDescription>Como sua proposta aparecerá no marketplace</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                      <DollarSign className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {formData.name || 'Nome da Proposta'}
                      </h4>
                      <div className="flex items-center space-x-1">
                        <span className="text-sm text-gray-600">4.5</span>
                        <div className="text-yellow-400">★</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Percent className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Taxa a partir de</span>
                      <span className="font-semibold text-green-600">
                        {formData.interestRate.toFixed(1)}% a.m.
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-gray-600">Até</span>
                      <span className="font-semibold text-blue-600">
                        R$ {formData.maxAmount.toLocaleString('pt-BR')}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-purple-500" />
                      <span className="text-sm text-gray-600">Até</span>
                      <span className="font-semibold text-purple-600">
                        {formData.maxInstallments}x
                      </span>
                    </div>
                  </div>

                  {formData.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      <span className="text-xs text-gray-600">{feature}</span>
                    </div>
                  ))}

                  <div className="pt-2 space-y-2">
                    <Button className="w-full" size="sm" disabled>
                      Simular
                    </Button>
                    <Button className="w-full" size="sm" disabled>
                      Contratar
                    </Button>
                  </div>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg text-center">
                  <p className="text-sm text-blue-800 font-medium">
                    💡 Dica: Propostas com taxas competitivas e mais benefícios têm maior conversão
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Termos e Condições */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Termos e Condições</CardTitle>
            <CardDescription>
              Informações adicionais e termos da sua proposta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="terms">Termos Adicionais</Label>
              <Textarea
                id="terms"
                name="terms"
                value={formData.terms}
                onChange={handleInputChange}
                placeholder="Descreva termos específicos, condições especiais ou informações importantes..."
                rows={4}
              />
            </div>
          </CardContent>
        </Card>

        {/* Ações */}
        <div className="flex justify-end space-x-4">
          <Button type="button" variant="outline" onClick={() => navigate('/parceiro/dashboard')}>
            Cancelar
          </Button>
          <Button type="submit">
            <Plus className="mr-2 h-4 w-4" />
            Criar Proposta
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateProposal;
