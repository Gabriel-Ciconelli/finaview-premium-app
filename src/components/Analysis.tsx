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
          <h2 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Análise de Gastos
          </h2>
          <p className="text-gray-400">Entenda para onde vai seu dinheiro</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-[#1A1A1A] border border-[#252525] rounded-lg text-sm text-gray-400 hover:border-[#00FF00] hover:text-[#00FF00] transition-all flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Este mês
          </button>
          <button className="px-4 py-2 bg-[#1A1A1A] border border-[#252525] rounded-lg text-sm text-gray-400 hover:border-[#00FF00] hover:text-[#00FF00] transition-all flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filtros
          </button>
        </div>
      </div>

      {/* Weekly Spending Trend */}
      <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#252525] rounded-2xl p-6 hover:border-[#00FF00]/30 transition-all duration-300">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-[#00FF00]/10 rounded-lg">
            <TrendingDown className="w-5 h-5 text-[#00FF00]" />
          </div>
          <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Gastos Semanais
          </h3>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1A1A1A" />
            <XAxis dataKey="day" stroke="#666" style={{ fontSize: '12px' }} />
            <YAxis stroke="#666" style={{ fontSize: '12px' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1A1A1A',
                border: '1px solid #00FF00',
                borderRadius: '8px',
                color: '#fff',
              }}
            />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#00FF00"
              strokeWidth={3}
              dot={{ fill: '#00FF00', r: 6 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Budget Overview */}
      <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#252525] rounded-2xl p-6 hover:border-[#00FF00]/30 transition-all duration-300">
        <h3 className="text-lg font-semibold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Orçamento por Categoria
        </h3>
        <div className="space-y-4">
          {budgets.map((budget) => (
            <div key={budget.category} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-white">{budget.category}</span>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-gray-400">
                    R$ {budget.spent.toLocaleString('pt-BR')} / R$ {budget.allocated.toLocaleString('pt-BR')}
                  </span>
                  <span
                    className={`text-xs font-medium ${
                      budget.percentage > 90 ? 'text-red-500' : budget.percentage > 70 ? 'text-yellow-500' : 'text-[#00FF00]'
                    }`}
                  >
                    {budget.percentage}%
                  </span>
                </div>
              </div>
              <div className="w-full bg-[#1A1A1A] rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    budget.percentage > 90
                      ? 'bg-gradient-to-r from-red-500 to-red-600'
                      : budget.percentage > 70
                      ? 'bg-gradient-to-r from-yellow-500 to-yellow-600'
                      : 'bg-gradient-to-r from-[#00FF00] to-[#00AA00]'
                  }`}
                  style={{ width: `${budget.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#252525] rounded-2xl p-6 hover:border-[#00FF00]/30 transition-all duration-300">
        <h3 className="text-lg font-semibold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Detalhamento por Categoria
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={categoryExpenses} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#1A1A1A" />
            <XAxis type="number" stroke="#666" style={{ fontSize: '12px' }} />
            <YAxis dataKey="name" type="category" stroke="#666" style={{ fontSize: '12px' }} width={120} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1A1A1A',
                border: '1px solid #00FF00',
                borderRadius: '8px',
                color: '#fff',
              }}
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
        <div className="bg-gradient-to-br from-[#00FF00]/10 to-[#0D0D0D] border border-[#00FF00]/30 rounded-2xl p-6">
          <div className="text-3xl mb-2">💡</div>
          <h4 className="text-sm font-semibold text-white mb-2">Insight Positivo</h4>
          <p className="text-xs text-gray-400">
            Você gastou 15% menos em transporte este mês. Continue assim!
          </p>
        </div>
        <div className="bg-gradient-to-br from-yellow-500/10 to-[#0D0D0D] border border-yellow-500/30 rounded-2xl p-6">
          <div className="text-3xl mb-2">⚠️</div>
          <h4 className="text-sm font-semibold text-white mb-2">Atenção</h4>
          <p className="text-xs text-gray-400">
            Gastos com alimentação estão próximos do limite. Considere ajustar.
          </p>
        </div>
        <div className="bg-gradient-to-br from-red-500/10 to-[#0D0D0D] border border-red-500/30 rounded-2xl p-6">
          <div className="text-3xl mb-2">🚨</div>
          <h4 className="text-sm font-semibold text-white mb-2">Alerta</h4>
          <p className="text-xs text-gray-400">
            Orçamento de moradia atingiu 100%. Revise seus gastos fixos.
          </p>
        </div>
      </div>
    </div>
  );
}
