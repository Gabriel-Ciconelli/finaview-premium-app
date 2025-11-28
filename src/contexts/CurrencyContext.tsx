'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Currency, defaultCurrencies } from '@/lib/currency';

interface CurrencyContextType {
  currentCurrency: Currency;
  currencies: Currency[];
  setCurrentCurrency: (currency: Currency) => void;
  addCustomCurrency: (currency: Currency) => void;
  removeCustomCurrency: (code: string) => void;
  updateCurrencyRate: (code: string, rate: number) => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currentCurrency, setCurrentCurrencyState] = useState<Currency>(defaultCurrencies[0]);
  const [currencies, setCurrencies] = useState<Currency[]>(defaultCurrencies);

  // Carregar configurações do localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCurrency = localStorage.getItem('finaview-currency');
      const savedCurrencies = localStorage.getItem('finaview-currencies');

      if (savedCurrency) {
        setCurrentCurrencyState(JSON.parse(savedCurrency));
      }
      if (savedCurrencies) {
        setCurrencies(JSON.parse(savedCurrencies));
      }
    }
  }, []);

  const setCurrentCurrency = (currency: Currency) => {
    setCurrentCurrencyState(currency);
    if (typeof window !== 'undefined') {
      localStorage.setItem('finaview-currency', JSON.stringify(currency));
    }
  };

  const addCustomCurrency = (currency: Currency) => {
    const newCurrencies = [...currencies, currency];
    setCurrencies(newCurrencies);
    if (typeof window !== 'undefined') {
      localStorage.setItem('finaview-currencies', JSON.stringify(newCurrencies));
    }
  };

  const removeCustomCurrency = (code: string) => {
    const newCurrencies = currencies.filter(c => c.code !== code);
    setCurrencies(newCurrencies);
    if (typeof window !== 'undefined') {
      localStorage.setItem('finaview-currencies', JSON.stringify(newCurrencies));
    }
    
    // Se a moeda removida era a atual, volta para BRL
    if (currentCurrency.code === code) {
      setCurrentCurrency(defaultCurrencies[0]);
    }
  };

  const updateCurrencyRate = (code: string, rate: number) => {
    const newCurrencies = currencies.map(c => 
      c.code === code ? { ...c, rate } : c
    );
    setCurrencies(newCurrencies);
    if (typeof window !== 'undefined') {
      localStorage.setItem('finaview-currencies', JSON.stringify(newCurrencies));
    }
    
    // Atualiza a moeda atual se for a que foi modificada
    if (currentCurrency.code === code) {
      setCurrentCurrency({ ...currentCurrency, rate });
    }
  };

  return (
    <CurrencyContext.Provider value={{
      currentCurrency,
      currencies,
      setCurrentCurrency,
      addCustomCurrency,
      removeCustomCurrency,
      updateCurrencyRate,
    }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
