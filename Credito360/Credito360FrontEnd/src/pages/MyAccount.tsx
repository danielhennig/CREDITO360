
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { 
  User, 
  Mail, 
  FileText, 
  Shield, 
  Eye, 
  EyeOff,
  Trash2,
  Save,
  CheckCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const MyAccount = () => {
  const { user, logout } = useAuth();
  const { toast } = useToast();
  
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = () => {
    if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
      toast({
        title: "Erro de validação",
        description: "As senhas não coincidem",
        variant: "destructive",
      });
      return;
    }

    // Simular atualização
    toast({
      title: "Dados atualizados",
      description: "Suas informações foram salvas com sucesso",
    });
    
    setIsEditing(false);
    setFormData(prev => ({ 
      ...prev, 
      currentPassword: '', 
      newPassword: '', 
      confirmPassword: '' 
    }));
  };

  const handleDeleteAccount = () => {
    toast({
      title: "Conta excluída",
      description: "Sua conta foi excluída permanentemente",
      variant: "destructive",
    });
    logout();
  };

  const maskDocument = (document: string) => {
    if (document.length === 14) { // CPF
      return document.replace(/(\d{3})\d{3}(\d{3})(\d{2})/, '$1.***.***-$3');
    } else { // CNPJ
      return document.replace(/(\d{2})\d{3}\d{3}(\d{4})(\d{2})/, '$1.***.***/$2-$3');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Minha Conta</h1>
        <p className="text-gray-600">Gerencie suas informações pessoais e configurações</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Informações Pessoais */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Informações Pessoais</span>
                </div>
                {!isEditing && (
                  <Button variant="outline" onClick={() => setIsEditing(true)}>
                    Editar
                  </Button>
                )}
              </CardTitle>
              <CardDescription>
                Mantenha seus dados sempre atualizados
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    {user?.type === 'PJ' ? 'Razão Social' : 'Nome Completo'}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={!isEditing ? 'bg-gray-50' : ''}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className={!isEditing ? 'bg-gray-50' : ''}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>{user?.type === 'PJ' ? 'CNPJ' : 'CPF'}</Label>
                  <Input
                    value={maskDocument(user?.document || '')}
                    disabled
                    className="bg-gray-50"
                  />
                  <p className="text-xs text-gray-500">
                    Documento não pode ser alterado
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Tipo de Conta</Label>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">
                      {user?.userType === 'partner' ? 'Parceiro' : 'Usuário'}
                    </Badge>
                    <Badge variant="outline">
                      {user?.type === 'PJ' ? 'Pessoa Jurídica' : 'Pessoa Física'}
                    </Badge>
                  </div>
                </div>
              </div>

              {isEditing && (
                <div className="space-y-4 pt-4 border-t">
                  <h4 className="font-medium text-gray-900">Alterar Senha (opcional)</h4>
                  
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Senha Atual</Label>
                    <div className="relative">
                      <Input
                        id="currentPassword"
                        name="currentPassword"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.currentPassword}
                        onChange={handleInputChange}
                        placeholder="Digite sua senha atual"
                        className="pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">Nova Senha</Label>
                      <Input
                        id="newPassword"
                        name="newPassword"
                        type="password"
                        value={formData.newPassword}
                        onChange={handleInputChange}
                        placeholder="Mínimo 6 caracteres"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirmar Nova Senha</Label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirme a nova senha"
                      />
                    </div>
                  </div>
                </div>
              )}

              {isEditing && (
                <div className="flex space-x-3 pt-4">
                  <Button onClick={handleSaveChanges}>
                    <Save className="mr-2 h-4 w-4" />
                    Salvar Alterações
                  </Button>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Cancelar
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Zona de Perigo */}
          <Card className="border-0 shadow-lg border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-red-600">
                <Trash2 className="h-5 w-5" />
                <span>Zona de Perigo</span>
              </CardTitle>
              <CardDescription>
                Ações irreversíveis para sua conta
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-medium text-red-900 mb-2">Excluir Conta</h4>
                <p className="text-sm text-red-700 mb-4">
                  Esta ação não pode ser desfeita. Todos os seus dados serão permanentemente removidos.
                </p>
                
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" size="sm">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Excluir Conta
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Confirmar exclusão da conta</AlertDialogTitle>
                      <AlertDialogDescription>
                        Tem certeza que deseja excluir sua conta? Esta ação é irreversível e todos os seus dados serão permanentemente removidos.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction 
                        onClick={handleDeleteAccount}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        Sim, excluir conta
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Informações da Conta */}
        <div className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span>Status da Conta</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Verificação</span>
                <Badge className="bg-green-100 text-green-800">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Verificada
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Open Finance</span>
                <Badge className="bg-blue-100 text-blue-800">
                  Conectado
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">2FA</span>
                <Badge variant="outline">
                  Desativado
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5" />
                <span>Documentos</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Política de Privacidade</span>
                  <Button variant="ghost" size="sm">Ver</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Termos de Uso</span>
                  <Button variant="ghost" size="sm">Ver</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Consentimento Open Finance</span>
                  <Button variant="ghost" size="sm">Gerenciar</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-blue-50">
            <CardContent className="p-6">
              <div className="text-center space-y-3">
                <Mail className="h-8 w-8 text-blue-600 mx-auto" />
                <h4 className="font-medium text-blue-900">Suporte</h4>
                <p className="text-sm text-blue-700">
                  Precisa de ajuda? Nossa equipe está aqui para você.
                </p>
                <Button variant="outline" size="sm" className="text-blue-600 border-blue-300">
                  Entrar em contato
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
