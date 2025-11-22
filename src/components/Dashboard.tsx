'use client';

import { ArrowUpRight, ArrowDownRight, TrendingUp, Wallet, Target, PiggyBank } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { monthlyData, categoryExpenses, goals, badges } from '@/lib/mockData';

export default function Dashboard() {
  const totalIncome = 6300;
  const totalExpenses = 2080;
  const balance = totalIncome - totalExpenses;
  const savingsRate = ((balance / totalIncome) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Dashboard
        </h2>
        <p className="text-gray-400">Visão geral das suas finanças</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Balance Card */}
        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#00FF00]/30 rounded-2xl p-6 hover:border-[#00FF00] transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-[#00FF00]/10 rounded-xl group-hover:bg-[#00FF00]/20 transition-all">
              <Wallet className="w-6 h-6 text-[#00FF00]" />
            </div>
            <span className="text-xs text-gray-500 font-medium">Este mês</span>
          </div>
          <p className="text-sm text-gray-400 mb-1">Saldo Atual</p>
          <p className="text-2xl font-bold text-[#00FF00]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            R$ {balance.toLocaleString('pt-BR')}
          </p>
        </div>

        {/* Income Card */}
        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#252525] rounded-2xl p-6 hover:border-[#00FF00]/50 transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-[#00FF00]/10 rounded-xl group-hover:bg-[#00FF00]/20 transition-all">
              <ArrowUpRight className="w-6 h-6 text-[#00FF00]" />
            </div>
            <span className="text-xs text-[#00FF00] font-medium">+12%</span>
          </div>
          <p className="text-sm text-gray-400 mb-1">Receitas</p>
          <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            R$ {totalIncome.toLocaleString('pt-BR')}
          </p>
        </div>

        {/* Expenses Card */}
        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#252525] rounded-2xl p-6 hover:border-[#00FF00]/50 transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-red-500/10 rounded-xl group-hover:bg-red-500/20 transition-all">
              <ArrowDownRight className="w-6 h-6 text-red-500" />
            </div>
            <span className="text-xs text-red-500 font-medium">-8%</span>
          </div>
          <p className="text-sm text-gray-400 mb-1">Despesas</p>
          <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            R$ {totalExpenses.toLocaleString('pt-BR')}
          </p>
        </div>

        {/* Savings Rate Card */}
        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#252525] rounded-2xl p-6 hover:border-[#00FF00]/50 transition-all duration-300 group">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-[#00FF00]/10 rounded-xl group-hover:bg-[#00FF00]/20 transition-all">
              <PiggyBank className="w-6 h-6 text-[#00FF00]" />
            </div>
            <span className="text-xs text-[#00FF00] font-medium">Ótimo!</span>
          </div>
          <p className="text-sm text-gray-400 mb-1">Taxa de Poupança</p>
          <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {savingsRate}%
          </p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Overview */}
        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#252525] rounded-2xl p-6 hover:border-[#00FF00]/30 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#00FF00]/10 rounded-lg">
              <TrendingUp className="w-5 h-5 text-[#00FF00]" />
            </div>
            <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Visão Mensal
            </h3>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1A1A1A" />
              <XAxis dataKey="month" stroke="#666" style={{ fontSize: '12px' }} />
              <YAxis stroke="#666" style={{ fontSize: '12px' }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1A1A1A',
                  border: '1px solid #00FF00',
                  borderRadius: '8px',
                  color: '#fff',
                }}
              />
              <Bar dataKey="income" fill="#00FF00" radius={[8, 8, 0, 0]} />
              <Bar dataKey="expenses" fill="#FF4444" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Category Distribution */}
        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#252525] rounded-2xl p-6 hover:border-[#00FF00]/30 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#00FF00]/10 rounded-lg">
              <Target className="w-5 h-5 text-[#00FF00]" />
            </div>
            <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Gastos por Categoria
            </h3>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={categoryExpenses}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={5}
                dataKey="value"
              >
                {categoryExpenses.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1A1A1A',
                  border: '1px solid #00FF00',
                  borderRadius: '8px',
                  color: '#fff',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {categoryExpenses.map((cat) => (
              <div key={cat.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} />
                <span className="text-xs text-gray-400">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Goals Section */}
      <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#252525] rounded-2xl p-6 hover:border-[#00FF00]/30 transition-all duration-300">
        <h3 className="text-lg font-semibold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Metas Financeiras
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {goals.map((goal) => {
            const progress = (goal.current / goal.target) * 100;
            return (
              <div key={goal.id} className="bg-[#0D0D0D] border border-[#252525] rounded-xl p-4 hover:border-[#00FF00]/50 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-medium text-white">{goal.title}</h4>
                  <span className="text-xs text-gray-500">{progress.toFixed(0)}%</span>
                </div>
                <div className="w-full bg-[#1A1A1A] rounded-full h-2 mb-3">
                  <div
                    className="bg-gradient-to-r from-[#00FF00] to-[#00AA00] h-2 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">R$ {goal.current.toLocaleString('pt-BR')}</span>
                  <span className="text-[#00FF00]">R$ {goal.target.toLocaleString('pt-BR')}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Badges Section */}
      <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#252525] rounded-2xl p-6 hover:border-[#00FF00]/30 transition-all duration-300">
        <h3 className="text-lg font-semibold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Conquistas
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`
                p-4 rounded-xl border text-center transition-all duration-300
                ${badge.earned 
                  ? 'bg-[#00FF00]/10 border-[#00FF00]/30 hover:border-[#00FF00]' 
                  : 'bg-[#0D0D0D] border-[#252525] opacity-50'
                }
              `}
            >
              <div className={`text-3xl mb-2 ${badge.earned ? 'animate-pulse' : ''}`}>
                {badge.earned ? '🏆' : '🔒'}
              </div>
              <h4 className="text-sm font-medium text-white mb-1">{badge.title}</h4>
              <p className="text-xs text-gray-400">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
