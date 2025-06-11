
import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  ShoppingCart, 
  Calculator, 
  Landmark, 
  User, 
  LogOut,
  BarChart3,
  Plus,
  FileText
} from 'lucide-react';

export const Layout = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Outlet />;
  }

  const isActive = (path: string) => location.pathname === path;

  const userMenuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: Home },
    { path: '/marketplace', label: 'Marketplace', icon: ShoppingCart },
    { path: '/simulador', label: 'Simulador', icon: Calculator },
    { path: '/conectar-bancos', label: 'Conectar Bancos', icon: Landmark },
    { path: '/minha-conta', label: 'Minha Conta', icon: User },
  ];

  const partnerMenuItems = [
    { path: '/parceiro/dashboard', label: 'Dashboard', icon: BarChart3 },
    { path: '/parceiro/criar-proposta', label: 'Criar Proposta', icon: Plus },
    { path: '/parceiro/propostas', label: 'Minhas Propostas', icon: FileText },
    { path: '/minha-conta', label: 'Minha Conta', icon: User },
  ];

  const menuItems = user?.userType === 'partner' ? partnerMenuItems : userMenuItems;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Crédito360
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Olá, {user?.name}
              </span>
              <Button variant="ghost" size="sm" onClick={logout}>
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <nav className="w-64 bg-white shadow-sm min-h-screen">
          <div className="p-4">
            <div className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
