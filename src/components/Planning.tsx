'use client';

import { Target, Plus, TrendingUp, Calendar } from 'lucide-react';
import { goals } from '@/lib/mockData';

export default function Planning() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Planejamento Financeiro
          </h2>
          <p className="text-gray-400">Defina e acompanhe suas metas</p>
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-[#00FF00] to-[#00AA00] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00FF00]/50 transition-all duration-300 flex items-center gap-2 w-fit">
          <Plus className="w-5 h-5" />
          Nova Meta
        </button>
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {goals.map((goal) => {
          const progress = (goal.current / goal.target) * 100;
          const remaining = goal.target - goal.current;
          const daysRemaining = Math.ceil(
            (new Date(goal.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
          );

          return (
            <div
              key={goal.id}
              className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#252525] rounded-2xl p-6 hover:border-[#00FF00]/50 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#00FF00]/10 rounded-xl group-hover:bg-[#00FF00]/20 transition-all">
                    <Target className="w-6 h-6 text-[#00FF00]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {goal.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      <Calendar className="w-3 h-3 inline mr-1" />
                      {daysRemaining} dias restantes
                    </p>
                  </div>
                </div>
                <span className="text-2xl">{goal.icon === 'shield' ? '🛡️' : goal.icon === 'plane' ? '✈️' : '💻'}</span>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Progresso</span>
                  <span className="text-sm font-semibold text-[#00FF00]">{progress.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-[#1A1A1A] rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-[#00FF00] to-[#00AA00] h-3 rounded-full transition-all duration-500 relative overflow-hidden"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-[#0D0D0D] border border-[#252525] rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-1">Atual</p>
                  <p className="text-lg font-bold text-white">R$ {goal.current.toLocaleString('pt-BR')}</p>
                </div>
                <div className="bg-[#0D0D0D] border border-[#252525] rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-1">Meta</p>
                  <p className="text-lg font-bold text-[#00FF00]">R$ {goal.target.toLocaleString('pt-BR')}</p>
                </div>
              </div>

              {/* Remaining */}
              <div className="bg-[#00FF00]/5 border border-[#00FF00]/20 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Faltam</span>
                  <span className="text-sm font-semibold text-[#00FF00]">R$ {remaining.toLocaleString('pt-BR')}</span>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full mt-4 py-2 bg-[#1A1A1A] border border-[#252525] rounded-lg text-sm text-gray-400 hover:border-[#00FF00] hover:text-[#00FF00] transition-all">
                Adicionar Valor
              </button>
            </div>
          );
        })}
      </div>

      {/* Monthly Savings Plan */}
      <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#252525] rounded-2xl p-6 hover:border-[#00FF00]/30 transition-all duration-300">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-[#00FF00]/10 rounded-lg">
            <TrendingUp className="w-5 h-5 text-[#00FF00]" />
          </div>
          <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Plano de Poupança Mensal
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#0D0D0D] border border-[#252525] rounded-xl p-4 hover:border-[#00FF00]/50 transition-all">
            <div className="text-2xl mb-2">🎯</div>
            <h4 className="text-sm font-medium text-white mb-2">Meta Mensal</h4>
            <p className="text-2xl font-bold text-[#00FF00]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              R$ 1.500
            </p>
            <p className="text-xs text-gray-400 mt-2">20% da renda</p>
          </div>

          <div className="bg-[#0D0D0D] border border-[#252525] rounded-xl p-4 hover:border-[#00FF00]/50 transition-all">
            <div className="text-2xl mb-2">💰</div>
            <h4 className="text-sm font-medium text-white mb-2">Economizado</h4>
            <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              R$ 1.220
            </p>
            <p className="text-xs text-gray-400 mt-2">81% da meta</p>
          </div>

          <div className="bg-[#0D0D0D] border border-[#252525] rounded-xl p-4 hover:border-[#00FF00]/50 transition-all">
            <div className="text-2xl mb-2">📅</div>
            <h4 className="text-sm font-medium text-white mb-2">Dias Restantes</h4>
            <p className="text-2xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              12
            </p>
            <p className="text-xs text-gray-400 mt-2">Até fim do mês</p>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-gradient-to-br from-[#00FF00]/10 to-[#0D0D0D] border border-[#00FF00]/30 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          💡 Dicas para Alcançar suas Metas
        </h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#00FF00]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-[#00FF00] text-xs font-bold">1</span>
            </div>
            <p className="text-sm text-gray-300">
              Configure transferências automáticas para suas metas assim que receber seu salário
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#00FF00]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-[#00FF00] text-xs font-bold">2</span>
            </div>
            <p className="text-sm text-gray-300">
              Revise suas metas trimestralmente e ajuste conforme necessário
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-[#00FF00]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-[#00FF00] text-xs font-bold">3</span>
            </div>
            <p className="text-sm text-gray-300">
              Comemore pequenas vitórias - cada 25% alcançado é um marco importante!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
