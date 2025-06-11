
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Register = () => {
  const [userType, setUserType] = useState<'user' | 'partner'>('user');
  const [documentType, setDocumentType] = useState<'PF' | 'PJ'>('PF');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    document: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    fantasyName: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formatDocument = (value: string, type: 'PF' | 'PJ') => {
    const numbers = value.replace(/\D/g, '');
    if (type === 'PF') {
      return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else {
      return numbers.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Erro de validação",
        description: "As senhas não coincidem",
        variant: "destructive",
      });
      return false;
    }

    if (formData.password.length < 6) {
      toast({
        title: "Erro de validação",
        description: "A senha deve ter pelo menos 6 caracteres",
        variant: "destructive",
      });
      return false;
    }

    const documentLength = formData.document.replace(/\D/g, '').length;
    const expectedLength = documentType === 'PF' ? 11 : 14;
    
    if (documentLength !== expectedLength) {
      toast({
        title: "Erro de validação",
        description: `${documentType === 'PF' ? 'CPF' : 'CNPJ'} inválido`,
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);

    try {
      const userData = {
        name: documentType === 'PJ' ? formData.companyName : formData.name,
        email: formData.email,
        document: formData.document,
        type: documentType,
        userType,
        ...(documentType === 'PJ' && {
          companyName: formData.companyName,
          fantasyName: formData.fantasyName
        }),
        password: formData.password
      };

      const success = await register(userData);
      
      if (success) {
        toast({
          title: "Conta criada com sucesso!",
          description: "Você foi automaticamente logado",
        });
        navigate('/consentimento');
      }
    } catch (error) {
      toast({
        title: "Erro no cadastro",
        description: "Tente novamente em alguns instantes",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao início
          </Link>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Crédito360
          </h1>
        </div>

        <Card className="shadow-lg border-0">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Criar conta</CardTitle>
            <CardDescription>
              Preencha os dados para começar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Tipo de Usuário */}
              <div className="space-y-3">
                <Label>Tipo de conta</Label>
                <RadioGroup value={userType} onValueChange={(value: 'user' | 'partner') => setUserType(value)}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="user" id="user" />
                    <Label htmlFor="user">Usuário (buscar crédito)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="partner" id="partner" />
                    <Label htmlFor="partner">Parceiro (oferecer crédito)</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Tipo de Documento */}
              <div className="space-y-3">
                <Label>Tipo de pessoa</Label>
                <RadioGroup value={documentType} onValueChange={(value: 'PF' | 'PJ') => setDocumentType(value)}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="PF" id="PF" />
                    <Label htmlFor="PF">Pessoa Física (CPF)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="PJ" id="PJ" />
                    <Label htmlFor="PJ">Pessoa Jurídica (CNPJ)</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Campos condicionais */}
              {documentType === 'PF' ? (
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Digite seu nome completo"
                    required
                  />
                </div>
              ) : (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Razão social</Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder="Digite a razão social"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fantasyName">Nome fantasia</Label>
                    <Input
                      id="fantasyName"
                      name="fantasyName"
                      value={formData.fantasyName}
                      onChange={handleInputChange}
                      placeholder="Digite o nome fantasia"
                    />
                  </div>
                </>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="document">{documentType === 'PF' ? 'CPF' : 'CNPJ'}</Label>
                <Input
                  id="document"
                  name="document"
                  value={formatDocument(formData.document, documentType)}
                  onChange={(e) => {
                    const numbers = e.target.value.replace(/\D/g, '');
                    const maxLength = documentType === 'PF' ? 11 : 14;
                    if (numbers.length <= maxLength) {
                      setFormData(prev => ({ ...prev, document: formatDocument(numbers, documentType) }));
                    }
                  }}
                  placeholder={documentType === 'PF' ? '000.000.000-00' : '00.000.000/0000-00'}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Mínimo 6 caracteres"
                    required
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar senha</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Digite a senha novamente"
                    required
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Criando conta...' : 'Criar conta'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <div className="text-sm text-gray-600">
                Já tem uma conta?{' '}
                <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                  Fazer login
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
