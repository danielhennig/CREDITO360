
export interface User {
  id: string;
  name: string;
  email: string;
  document: string; // CPF ou CNPJ
  type: 'PF' | 'PJ';
  userType: 'user' | 'partner';
  companyName?: string;
  fantasyName?: string;
}

export interface CreditProfile {
  risk: 'low' | 'medium' | 'high';
  score: number;
  paymentCapacity: number;
  estimatedIncome: number;
}

export interface CreditOffer {
  id: string;
  institutionName: string;
  maxAmount: number;
  minAmount: number;
  maxInstallments: number;
  minInstallments: number;
  interestRate: number;
  requirements: {
    minScore: number;
    maxRisk: 'low' | 'medium' | 'high';
    minIncome: number;
  };
}

export interface SimulationResult {
  amount: number;
  installments: number;
  monthlyPayment: number;
  totalAmount: number;
  interestRate: number;
  compatible: boolean;
}
