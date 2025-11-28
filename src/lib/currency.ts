export interface Currency {
  code: string;
  symbol: string;
  name: string;
  rate: number; // Taxa de conversão em relação ao BRL (base)
}

export const defaultCurrencies: Currency[] = [
  { code: 'BRL', symbol: 'R$', name: 'Real Brasileiro', rate: 1 },
  { code: 'USD', symbol: '$', name: 'Dólar Americano', rate: 0.20 },
  { code: 'EUR', symbol: '€', name: 'Euro', rate: 0.18 },
  { code: 'GBP', symbol: '£', name: 'Libra Esterlina', rate: 0.16 },
  { code: 'JPY', symbol: '¥', name: 'Iene Japonês', rate: 30.5 },
  { code: 'ARS', symbol: '$', name: 'Peso Argentino', rate: 200 },
  { code: 'CLP', symbol: '$', name: 'Peso Chileno', rate: 180 },
  { code: 'MXN', symbol: '$', name: 'Peso Mexicano', rate: 3.5 },
];

export function formatCurrency(value: number, currency: Currency): string {
  return `${currency.symbol} ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function convertCurrency(value: number, fromCurrency: Currency, toCurrency: Currency): number {
  // Converte para BRL primeiro, depois para a moeda de destino
  const valueInBRL = value / fromCurrency.rate;
  return valueInBRL * toCurrency.rate;
}
