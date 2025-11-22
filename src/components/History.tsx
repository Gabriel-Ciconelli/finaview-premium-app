'use client';

import { Search, Filter, ArrowUpRight, ArrowDownRight, Calendar } from 'lucide-react';
import { transactions } from '@/lib/mockData';

export default function History() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Histórico de Transações
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Acompanhe todas as suas movimentações</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Buscar transações..."
            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#252525] rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-all"
          />
        </div>
        <button className="px-6 py-3 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#252525] rounded-lg text-gray-600 dark:text-gray-400 hover:border-blue-500 hover:text-blue-500 transition-all flex items-center gap-2 justify-center">
          <Filter className="w-5 h-5" />
          Filtros
        </button>
        <button className="px-6 py-3 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#252525] rounded-lg text-gray-600 dark:text-gray-400 hover:border-blue-500 hover:text-blue-500 transition-all flex items-center gap-2 justify-center">
          <Calendar className="w-5 h-5" />
          Período
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gradient-to-br dark:from-[#1A1A1A] dark:to-[#0D0D0D] border border-blue-500/30 rounded-xl p-4 shadow-lg">
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Total de Transações</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {transactions.length}
          </p>
        </div>
        <div className="bg-white dark:bg-gradient-to-br dark:from-[#1A1A1A] dark:to-[#0D0D0D] border border-gray-200 dark:border-[#252525] rounded-xl p-4 shadow-lg">
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Receitas</p>
          <p className="text-2xl font-bold text-blue-500" style={{ fontFamily: 'Poppins, sans-serif' }}>
            R$ {transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0).toLocaleString('pt-BR')}
          </p>
        </div>
        <div className="bg-white dark:bg-gradient-to-br dark:from-[#1A1A1A] dark:to-[#0D0D0D] border border-gray-200 dark:border-[#252525] rounded-xl p-4 shadow-lg">
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Despesas</p>
          <p className="text-2xl font-bold text-red-500" style={{ fontFamily: 'Poppins, sans-serif' }}>
            R$ {Math.abs(transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0)).toLocaleString('pt-BR')}
          </p>
        </div>
      </div>

      {/* Transactions List */}
      <div className="bg-white dark:bg-gradient-to-br dark:from-[#1A1A1A] dark:to-[#0D0D0D] border border-gray-200 dark:border-[#252525] rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-[#252525]">
                <th className="text-left p-4 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Data
                </th>
                <th className="text-left p-4 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Descrição
                </th>
                <th className="text-left p-4 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Categoria
                </th>
                <th className="text-right p-4 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Valor
                </th>
                <th className="text-center p-4 text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                  Tipo
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr
                  key={transaction.id}
                  className={`
                    border-b border-gray-200 dark:border-[#252525] hover:bg-gray-50 dark:hover:bg-[#1A1A1A] transition-all
                    ${index === transactions.length - 1 ? 'border-b-0' : ''}
                  `}
                >
                  <td className="p-4">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {new Date(transaction.date).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'short',
                      })}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{transaction.description}</span>
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-500 border border-blue-500/20">
                      {transaction.category}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <span
                      className={`text-sm font-semibold ${
                        transaction.type === 'income' ? 'text-blue-500' : 'text-red-500'
                      }`}
                    >
                      {transaction.type === 'income' ? '+' : ''}R$ {Math.abs(transaction.amount).toLocaleString('pt-BR')}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex justify-center">
                      {transaction.type === 'income' ? (
                        <div className="p-1.5 bg-blue-500/10 rounded-lg">
                          <ArrowUpRight className="w-4 h-4 text-blue-500" />
                        </div>
                      ) : (
                        <div className="p-1.5 bg-red-500/10 rounded-lg">
                          <ArrowDownRight className="w-4 h-4 text-red-500" />
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Mostrando <span className="font-medium text-gray-900 dark:text-white">1-{transactions.length}</span> de{' '}
          <span className="font-medium text-gray-900 dark:text-white">{transactions.length}</span> transações
        </p>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#252525] rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:border-blue-500 hover:text-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed" disabled>
            Anterior
          </button>
          <button className="px-4 py-2 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#252525] rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:border-blue-500 hover:text-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed" disabled>
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
}
