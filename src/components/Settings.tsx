'use client';

import { User, Bell, Lock, Palette, Globe, Mail, Shield, LogOut } from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Configurações
        </h2>
        <p className="text-gray-600 dark:text-gray-400">Personalize sua experiência</p>
      </div>

      {/* Profile Section */}
      <div className="bg-white dark:bg-gradient-to-br dark:from-[#1A1A1A] dark:to-[#0D0D0D] border border-gray-200 dark:border-[#252525] rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <User className="w-5 h-5 text-blue-500" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Perfil
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-2xl font-bold text-white">
            U
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Nome Completo</label>
              <input
                type="text"
                defaultValue="Usuário Premium"
                className="w-full px-4 py-2 bg-gray-50 dark:bg-[#0D0D0D] border border-gray-200 dark:border-[#252525] rounded-lg text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Email</label>
              <input
                type="email"
                defaultValue="usuario@finaview.com"
                className="w-full px-4 py-2 bg-gray-50 dark:bg-[#0D0D0D] border border-gray-200 dark:border-[#252525] rounded-lg text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none transition-all"
              />
            </div>
          </div>
        </div>

        <button className="mt-6 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
          Salvar Alterações
        </button>
      </div>

      {/* Notifications */}
      <div className="bg-white dark:bg-gradient-to-br dark:from-[#1A1A1A] dark:to-[#0D0D0D] border border-gray-200 dark:border-[#252525] rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <Bell className="w-5 h-5 text-blue-500" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Notificações
          </h3>
        </div>

        <div className="space-y-4">
          {[
            { label: 'Alertas de orçamento', description: 'Receba avisos quando atingir limites' },
            { label: 'Metas alcançadas', description: 'Notificações sobre progresso de metas' },
            { label: 'Dicas financeiras', description: 'Receba insights personalizados' },
            { label: 'Resumo mensal', description: 'Relatório automático no fim do mês' },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-[#0D0D0D] border border-gray-200 dark:border-[#252525] rounded-lg hover:border-blue-500/30 transition-all">
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">{item.label}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{item.description}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked={index < 2} />
                <div className="w-11 h-6 bg-gray-200 dark:bg-[#252525] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-blue-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Security */}
      <div className="bg-white dark:bg-gradient-to-br dark:from-[#1A1A1A] dark:to-[#0D0D0D] border border-gray-200 dark:border-[#252525] rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <Lock className="w-5 h-5 text-blue-500" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Segurança
          </h3>
        </div>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-[#0D0D0D] border border-gray-200 dark:border-[#252525] rounded-lg hover:border-blue-500 hover:bg-gray-100 dark:hover:bg-[#1A1A1A] transition-all text-left group">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-500 transition-all" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Alterar Senha</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Última alteração há 3 meses</p>
              </div>
            </div>
            <span className="text-gray-600 dark:text-gray-400 group-hover:text-blue-500 transition-all">→</span>
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-[#0D0D0D] border border-gray-200 dark:border-[#252525] rounded-lg hover:border-blue-500 hover:bg-gray-100 dark:hover:bg-[#1A1A1A] transition-all text-left group">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-500 transition-all" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Autenticação em Dois Fatores</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Adicione uma camada extra de segurança</p>
              </div>
            </div>
            <span className="text-gray-600 dark:text-gray-400 group-hover:text-blue-500 transition-all">→</span>
          </button>
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-white dark:bg-gradient-to-br dark:from-[#1A1A1A] dark:to-[#0D0D0D] border border-gray-200 dark:border-[#252525] rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <Palette className="w-5 h-5 text-blue-500" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Preferências
          </h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Moeda</label>
            <select className="w-full px-4 py-2 bg-gray-50 dark:bg-[#0D0D0D] border border-gray-200 dark:border-[#252525] rounded-lg text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none transition-all">
              <option>BRL - Real Brasileiro</option>
              <option>USD - Dólar Americano</option>
              <option>EUR - Euro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Idioma</label>
            <select className="w-full px-4 py-2 bg-gray-50 dark:bg-[#0D0D0D] border border-gray-200 dark:border-[#252525] rounded-lg text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none transition-all">
              <option>Português (BR)</option>
              <option>English (US)</option>
              <option>Español</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Formato de Data</label>
            <select className="w-full px-4 py-2 bg-gray-50 dark:bg-[#0D0D0D] border border-gray-200 dark:border-[#252525] rounded-lg text-gray-900 dark:text-white focus:border-blue-500 focus:outline-none transition-all">
              <option>DD/MM/YYYY</option>
              <option>MM/DD/YYYY</option>
              <option>YYYY-MM-DD</option>
            </select>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Zona de Perigo
        </h3>
        <div className="space-y-3">
          <button className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-[#0D0D0D] border border-red-500/30 rounded-lg hover:border-red-500 hover:bg-red-500/5 transition-all text-left group">
            <div className="flex items-center gap-3">
              <LogOut className="w-5 h-5 text-red-500" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Sair da Conta</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Desconectar de todos os dispositivos</p>
              </div>
            </div>
            <span className="text-red-500">→</span>
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-[#0D0D0D] border border-red-500/30 rounded-lg hover:border-red-500 hover:bg-red-500/5 transition-all text-left group">
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-red-500" />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Excluir Conta</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Ação permanente e irreversível</p>
              </div>
            </div>
            <span className="text-red-500">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
