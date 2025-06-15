
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Conta } from '../services/banrisulApi';

interface BanrisulContextData {
  contaSelecionada: Conta | null;
  setContaSelecionada: (conta: Conta | null) => void;
  contas: Conta[];
  setContas: (contas: Conta[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  saldoAtual: number;
  setSaldoAtual: (saldo: number) => void;
}

const BanrisulContext = createContext<BanrisulContextData>({} as BanrisulContextData);

export const useBanrisul = () => {
  const context = useContext(BanrisulContext);
  if (!context) {
    throw new Error('useBanrisul deve ser usado dentro de um BanrisulProvider');
  }
  return context;
};

export const BanrisulProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [contaSelecionada, setContaSelecionada] = useState<Conta | null>(null);
  const [contas, setContas] = useState<Conta[]>([]);
  const [loading, setLoading] = useState(false);
  const [saldoAtual, setSaldoAtual] = useState(0);

  useEffect(() => {
    if (contaSelecionada) {
      setSaldoAtual(contaSelecionada.saldo);
    }
  }, [contaSelecionada]);

  return (
    <BanrisulContext.Provider
      value={{
        contaSelecionada,
        setContaSelecionada,
        contas,
        setContas,
        loading,
        setLoading,
        saldoAtual,
        setSaldoAtual,
      }}
    >
      {children}
    </BanrisulContext.Provider>
  );
};
