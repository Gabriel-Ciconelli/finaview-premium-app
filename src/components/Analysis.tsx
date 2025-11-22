'use client';

import { TrendingDown, Calendar, Filter } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Cell } from 'recharts';
import { budgets, categoryExpenses } from '@/lib/mockData';

export default function Analysis() {
  const weeklyData = [
    { day: 'Seg', amount: 120 },
    { day: 'Ter', amount: 85 },
    { day: 'Qua', amount: 200 },
    { day: 'Qui', amount: 150 },
    { day: 'Sex', amount: 320 },
    { day: 'Sáb', amount: 180 },
    { day: 'Dom', amount: 95 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Análise de Gastos
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Entenda para onde vai seu dinheiro</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white dark:bg-[#1A1A1A] border border-gray-300 dark:border-[#252525] rounded-lg text-sm text-gray-700 dark:text-gray-400 hover:border-blue-500 hover:text-blue-500 transition-all flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Este mês
          </button>
          <button className="px-4 py-2 bg-white dark:bg-[#1A1A1A] border border-gray-300 dark:border-[#252525] rounded-lg text-sm text-gray-700 dark:text-gray-400 hover:border-blue-500 hover:text-blue-500 transition-all flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filtros
          </button>
        </div>
      </div>

      {/* Weekly Spending Trend */}
      <div className="bg-white dark:bg-gradient-to-br dark:from-[#1A1A1A] dark:to-[#0D0D0D] border border-gray-200 dark:border-[#252525] rounded-2xl p-6 hover:border-blue-500/50 dark:hover:border-blue-500/30 transition-all duration-300 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <TrendingDown className="w-5 h-5 text-blue-500" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Gastos Semanais
          </h3>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-[#1A1A1A]" />
            <XAxis dataKey="day" stroke="#9ca3af" className="dark:stroke-[#666]" style={{ fontSize: '12px' }} />
            <YAxis stroke="#9ca3af" className="dark:stroke-[#666]" style={{ fontSize: '12px' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #3b82f6',
                borderRadius: '8px',
                color: '#111',
              }}
              wrapperClassName="dark:[&>div]:!bg-[#1A1A1A] dark:[&>div]:!text-white"
            />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ fill: '#3b82f6', r: 6 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Budget Overview */}
      <div className="bg-white dark:bg-gradient-to-br dark:from-[#1A1A1A] dark:to-[#0D0D0D] border border-gray-200 dark:border-[#252525] rounded-2xl p-6 hover:border-blue-500/50 dark:hover:border-blue-500/30 transition-all duration-300 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Orçamento por Categoria
        </h3>
        <div className="space-y-4">
          {budgets.map((budget) => (
            <div key={budget.category} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900 dark:text-white">{budget.category}</span>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    R$ {budget.spent.toLocaleString('pt-BR')} / R$ {budget.allocated.toLocaleString('pt-BR')}
                  </span>
                  <span
                    className={`text-xs font-medium ${
                      budget.percentage > 90 ? 'text-red-500' : budget.percentage > 70 ? 'text-yellow-500' : 'text-blue-500'
                    }`}
                  >
                    {budget.percentage}%
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-200 dark:bg-[#1A1A1A] rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    budget.percentage > 90
                      ? 'bg-gradient-to-r from-red-500 to-red-600'
                      : budget.percentage > 70
                      ? 'bg-gradient-to-r from-yellow-500 to-yellow-600'
                      : 'bg-gradient-to-r from-blue-500 to-blue-600'
                  }`}
                  style={{ width: `${budget.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="bg-white dark:bg-gradient-to-br dark:from-[#1A1A1A] dark:to-[#0D0D0D] border border-gray-200 dark:border-[#252525] rounded-2xl p-6 hover:border-blue-500/50 dark:hover:border-blue-500/30 transition-all duration-300 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Detalhamento por Categoria
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={categoryExpenses} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-[#1A1A1A]" />
            <XAxis type="number" stroke="#9ca3af" className="dark:stroke-[#666]" style={{ fontSize: '12px' }} />
            <YAxis dataKey="name" type="category" stroke="#9ca3af" className="dark:stroke-[#666]" style={{ fontSize: '12px' }} width={120} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #3b82f6',
                borderRadius: '8px',
                color: '#111',
              }}
              wrapperClassName="dark:[&>div]:!bg-[#1A1A1A] dark:[&>div]:!text-white"
            />
            <Bar dataKey="value" radius={[0, 8, 8, 0]}>
              {categoryExpenses.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 dark:bg-gradient-to-br dark:from-blue-500/10 dark:to-[#0D0D0D] border border-blue-200 dark:border-blue-500/30 rounded-2xl p-6">
          <div className="text-3xl mb-2">💡</div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Insight Positivo</h4>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Você gastou 15% menos em transporte este mês. Continue assim!
          </p>
        </div>
        <div className="bg-yellow-50 dark:bg-gradient-to-br dark:from-yellow-500/10 dark:to-[#0D0D0D] border border-yellow-200 dark:border-yellow-500/30 rounded-2xl p-6">
          <div className="text-3xl mb-2">⚠️</div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Atenção</h4>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Gastos com alimentação estão próximos do limite. Considere ajustar.
          </p>
        </div>
        <div className="bg-red-50 dark:bg-gradient-to-br dark:from-red-500/10 dark:to-[#0D0D0D] border border-red-200 dark:border-red-500/30 rounded-2xl p-6">
          <div className="text-3xl mb-2">🚨</div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Alerta</h4>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Orçamento de moradia atingiu 100%. Revise seus gastos fixos.
          </p>
        </div>
      </div>
    </div>
  );
}
