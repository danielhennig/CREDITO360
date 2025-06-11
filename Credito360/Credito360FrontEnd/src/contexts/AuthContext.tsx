
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '@/types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: Omit<User, 'id'> & { password: string }) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = async (email: string, password: string): Promise<boolean> => {
    console.log('Tentativa de login:', { email, password });
    
    // Simulação de login - em produção seria uma chamada para API
    const mockUsers: (User & { password: string })[] = [
      {
        id: '1',
        name: 'João Silva',
        email: 'joao@email.com',
        document: '123.456.789-00',
        type: 'PF',
        userType: 'user',
        password: '123456'
      },
      {
        id: '2',
        name: 'Empresa LTDA',
        email: 'empresa@email.com',
        document: '12.345.678/0001-90',
        type: 'PJ',
        userType: 'partner',
        companyName: 'Empresa LTDA',
        fantasyName: 'Empresa',
        password: '123456'
      }
    ];

    console.log('Usuários mock:', mockUsers);
    
    const foundUser = mockUsers.find(u => {
      console.log('Comparando:', { userEmail: u.email, inputEmail: email, userPassword: u.password, inputPassword: password });
      return u.email.toLowerCase() === email.toLowerCase() && u.password === password;
    });
    
    console.log('Usuário encontrado:', foundUser);
    
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      console.log('Login bem-sucedido:', userWithoutPassword);
      setUser(userWithoutPassword);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      return true;
    }
    
    console.log('Login falhou - credenciais inválidas');
    return false;
  };

  const register = async (userData: Omit<User, 'id'> & { password: string }): Promise<boolean> => {
    console.log('Tentativa de registro:', userData);
    
    // Simulação de registro
    const newUser: User = {
      ...userData,
      id: Date.now().toString(),
    };
    
    // Remove password do objeto final
    const { password: _, ...userWithoutPassword } = userData;
    const finalUser = { ...userWithoutPassword, id: newUser.id };
    
    console.log('Registro bem-sucedido:', finalUser);
    setUser(finalUser);
    localStorage.setItem('user', JSON.stringify(finalUser));
    return true;
  };

  const logout = () => {
    console.log('Logout realizado');
    setUser(null);
    localStorage.removeItem('user');
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
