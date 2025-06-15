
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3004/banrisul';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Conta {
  numeroConta: string;
  nome: string;
  cpf: string;
  email: string;
  saldo: number;
}

export interface Transacao {
  id: string;
  numeroConta: string;
  tipo: 'deposito' | 'saque';
  valor: number;
  data: string;
}

export interface OfertaCredito {
  id: string;
  nome: string;
  descricao: string;
  taxaJuros: number;
  numeroParcelas: number;
  valor: number;
  scoreMinimo: number;
}

export interface Consentimento {
  id: string;
  contaId: string;
  escopo: string;
  validade: string;
  dataConsentimento: string;
}

// Contas
export const criarConta = async (dados: {
  nome: string;
  cpf: string;
  email: string;
  senha: string;
}) => {
  const response = await api.post('/contas', dados);
  return response.data;
};

export const listarContas = async (): Promise<Conta[]> => {
  const response = await api.get('/contas');
  return response.data;
};

// Transações
export const criarTransacao = async (dados: {
  numeroConta: string;
  tipo: 'deposito' | 'saque';
  valor: number;
}) => {
  const response = await api.post('/transacoes', dados);
  return response.data;
};

export const buscarExtrato = async (numeroConta: string) => {
  const response = await api.get(`/transacoes/${numeroConta}`);
  return response.data;
};

// Ofertas de Crédito
export const listarOfertas = async (): Promise<OfertaCredito[]> => {
  const response = await api.get('/ofertas');
  return response.data;
};

export const criarOferta = async (dados: {
  nome: string;
  descricao: string;
  taxaJuros: number;
  numeroParcelas: number;
  valor: number;
  scoreMinimo: number;
}) => {
  const response = await api.post('/ofertas', dados);
  return response.data;
};

export const atualizarOferta = async (id: string, dados: Partial<OfertaCredito>) => {
  const response = await api.put(`/ofertas/${id}`, dados);
  return response.data;
};

export const excluirOferta = async (id: string) => {
  const response = await api.delete(`/ofertas/${id}`);
  return response.data;
};

export const buscarOfertasRecomendadas = async (score: number): Promise<OfertaCredito[]> => {
  const response = await api.get(`/ofertas/recomendadas/${score}`);
  return response.data;
};

// Consentimentos
export const listarConsentimentos = async (contaId: string): Promise<Consentimento[]> => {
  const response = await api.get(`/consentimentos?contaId=${contaId}`);
  return response.data;
};

export const criarConsentimento = async (dados: {
  contaId: string;
  escopo: string;
  validade: string;
}) => {
  const response = await api.post('/consentimentos', dados);
  return response.data;
};
