// Mock data para o Finaview

export interface Transaction {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
  type: 'income' | 'expense';
}

export interface Budget {
  category: string;
  allocated: number;
  spent: number;
  percentage: number;
}

export interface Goal {
  id: string;
  title: string;
  target: number;
  current: number;
  deadline: string;
  icon: string;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  earned: boolean;
  icon: string;
}

export const transactions: Transaction[] = [
  { id: '1', description: 'Salário', amount: 5500, category: 'Renda', date: '2024-01-01', type: 'income' },
  { id: '2', description: 'Aluguel', amount: -1200, category: 'Moradia', date: '2024-01-05', type: 'expense' },
  { id: '3', description: 'Supermercado', amount: -450, category: 'Alimentação', date: '2024-01-07', type: 'expense' },
  { id: '4', description: 'Netflix', amount: -45, category: 'Entretenimento', date: '2024-01-10', type: 'expense' },
  { id: '5', description: 'Freelance', amount: 800, category: 'Renda Extra', date: '2024-01-12', type: 'income' },
  { id: '6', description: 'Uber', amount: -85, category: 'Transporte', date: '2024-01-15', type: 'expense' },
  { id: '7', description: 'Academia', amount: -120, category: 'Saúde', date: '2024-01-18', type: 'expense' },
  { id: '8', description: 'Restaurante', amount: -180, category: 'Alimentação', date: '2024-01-20', type: 'expense' },
];

export const budgets: Budget[] = [
  { category: 'Alimentação', allocated: 800, spent: 630, percentage: 79 },
  { category: 'Moradia', allocated: 1200, spent: 1200, percentage: 100 },
  { category: 'Transporte', allocated: 300, spent: 85, percentage: 28 },
  { category: 'Entretenimento', allocated: 200, spent: 45, percentage: 23 },
  { category: 'Saúde', allocated: 150, spent: 120, percentage: 80 },
];

export const goals: Goal[] = [
  { id: '1', title: 'Fundo de Emergência', target: 10000, current: 6500, deadline: '2024-12-31', icon: 'shield' },
  { id: '2', title: 'Viagem Europa', target: 15000, current: 8200, deadline: '2024-06-30', icon: 'plane' },
  { id: '3', title: 'Novo Notebook', target: 5000, current: 3800, deadline: '2024-03-31', icon: 'laptop' },
];

export const badges: Badge[] = [
  { id: '1', title: 'Primeiro Passo', description: 'Cadastrou sua primeira transação', earned: true, icon: 'star' },
  { id: '2', title: 'Economista', description: 'Economizou 20% do orçamento mensal', earned: true, icon: 'trophy' },
  { id: '3', title: 'Meta Alcançada', description: 'Completou sua primeira meta financeira', earned: false, icon: 'target' },
  { id: '4', title: 'Disciplinado', description: '30 dias seguidos registrando gastos', earned: true, icon: 'calendar' },
];

export const monthlyData = [
  { month: 'Jan', income: 6300, expenses: 2080 },
  { month: 'Fev', income: 5500, expenses: 2350 },
  { month: 'Mar', income: 5800, expenses: 1980 },
  { month: 'Abr', income: 6100, expenses: 2200 },
  { month: 'Mai', income: 5500, expenses: 2100 },
  { month: 'Jun', income: 7200, expenses: 2450 },
];

export const categoryExpenses = [
  { name: 'Alimentação', value: 630, color: '#00FF00' },
  { name: 'Moradia', value: 1200, color: '#00CC00' },
  { name: 'Transporte', value: 85, color: '#00AA00' },
  { name: 'Entretenimento', value: 45, color: '#008800' },
  { name: 'Saúde', value: 120, color: '#006600' },
];

export const financialTips = [
  {
    id: '1',
    author: 'Maria Silva',
    avatar: 'MS',
    content: 'Comecei a usar a regra 50/30/20 e já economizei 30% a mais! Essencial: 50%, Desejos: 30%, Poupança: 20%',
    likes: 234,
    comments: 18,
    time: '2h atrás',
  },
  {
    id: '2',
    author: 'João Santos',
    avatar: 'JS',
    content: 'Dica: Sempre reserve pelo menos 10% da renda para investimentos de longo prazo. Seu eu do futuro agradece!',
    likes: 189,
    comments: 12,
    time: '5h atrás',
  },
  {
    id: '3',
    author: 'Ana Costa',
    avatar: 'AC',
    content: 'Cortei assinaturas que não uso e economizei R$ 200/mês. Revisem seus gastos recorrentes!',
    likes: 312,
    comments: 24,
    time: '1d atrás',
  },
];
