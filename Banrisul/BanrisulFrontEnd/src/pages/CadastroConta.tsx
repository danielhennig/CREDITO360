
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { criarConta } from '../services/banrisulApi';
import { useToast } from '../hooks/use-toast';
import Loading from '../components/Loading';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const CadastroConta: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    email: '',
    senha: '',
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.cpf || !formData.email || !formData.senha) {
      toast({
        title: "Erro",
        description: "Todos os campos são obrigatórios",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    
    try {
      await criarConta(formData);
      toast({
        title: "Sucesso!",
        description: "Conta criada com sucesso",
      });
      setFormData({ nome: '', cpf: '', email: '', senha: '' });
      navigate('/contas');
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.response?.data?.message || "Erro ao criar conta",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-3xl font-bold text-gray-900">Cadastrar Nova Conta</CardTitle>
          <CardDescription className="text-lg text-gray-600">
            Preencha os dados para criar sua conta Banrisul
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-sm font-medium text-gray-700">
                  Nome Completo
                </Label>
                <Input
                  id="nome"
                  name="nome"
                  type="text"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Digite seu nome completo"
                  className="h-12 text-base"
                  disabled={loading}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="cpf" className="text-sm font-medium text-gray-700">
                  CPF
                </Label>
                <Input
                  id="cpf"
                  name="cpf"
                  type="text"
                  value={formData.cpf}
                  onChange={handleChange}
                  placeholder="000.000.000-00"
                  className="h-12 text-base"
                  disabled={loading}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                E-mail
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className="h-12 text-base"
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="senha" className="text-sm font-medium text-gray-700">
                Senha
              </Label>
              <Input
                id="senha"
                name="senha"
                type="password"
                value={formData.senha}
                onChange={handleChange}
                placeholder="Digite sua senha"
                className="h-12 text-base"
                disabled={loading}
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 text-base font-semibold bg-blue-600 hover:bg-blue-700 transition-all duration-200"
            >
              {loading ? <Loading size="sm" /> : 'Criar Conta'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CadastroConta;
