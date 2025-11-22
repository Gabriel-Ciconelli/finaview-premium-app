'use client';

import { User, Bell, Lock, Palette, Globe, Mail, Shield, LogOut } from 'lucide-react';

export default function Settings() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Configurações
        </h2>
        <p className="text-gray-400">Personalize sua experiência</p>
      </div>

      {/* Profile Section */}
      <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#252525] rounded-2xl p-6 hover:border-[#00FF00]/30 transition-all duration-300">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-[#00FF00]/10 rounded-lg">
            <User className="w-5 h-5 text-[#00FF00]" />
          </div>
          <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Perfil
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00FF00] to-[#00AA00] flex items-center justify-center text-2xl font-bold text-black">
            U
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Nome Completo</label>
              <input
                type="text"
                defaultValue="Usuário Premium"
                className="w-full px-4 py-2 bg-[#0D0D0D] border border-[#252525] rounded-lg text-white focus:border-[#00FF00] focus:outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Email</label>
              <input
                type="email"
                defaultValue="usuario@finaview.com"
                className="w-full px-4 py-2 bg-[#0D0D0D] border border-[#252525] rounded-lg text-white focus:border-[#00FF00] focus:outline-none transition-all"
              />
            </div>
          </div>
        </div>

        <button className="mt-6 px-6 py-2 bg-gradient-to-r from-[#00FF00] to-[#00AA00] text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00FF00]/50 transition-all duration-300">
          Salvar Alterações
        </button>
      </div>

      {/* Notifications */}
      <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#252525] rounded-2xl p-6 hover:border-[#00FF00]/30 transition-all duration-300">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-[#00FF00]/10 rounded-lg">
            <Bell className="w-5 h-5 text-[#00FF00]" />
          </div>
          <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
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
            <div key={index} className="flex items-center justify-between p-4 bg-[#0D0D0D] border border-[#252525] rounded-lg hover:border-[#00FF00]/30 transition-all">
              <div>
                <p className="text-sm font-medium text-white">{item.label}</p>
                <p className="text-xs text-gray-400 mt-1">{item.description}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked={index < 2} />
                <div className="w-11 h-6 bg-[#252525] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-[#00FF00] peer-checked:to-[#00AA00]"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Security */}
      <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#252525] rounded-2xl p-6 hover:border-[#00FF00]/30 transition-all duration-300">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-[#00FF00]/10 rounded-lg">
            <Lock className="w-5 h-5 text-[#00FF00]" />
          </div>
          <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Segurança
          </h3>
        </div>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-between p-4 bg-[#0D0D0D] border border-[#252525] rounded-lg hover:border-[#00FF00] hover:bg-[#1A1A1A] transition-all text-left group">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-gray-400 group-hover:text-[#00FF00] transition-all" />
              <div>
                <p className="text-sm font-medium text-white">Alterar Senha</p>
                <p className="text-xs text-gray-400">Última alteração há 3 meses</p>
              </div>
            </div>
            <span className="text-gray-400 group-hover:text-[#00FF00] transition-all">→</span>
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-[#0D0D0D] border border-[#252525] rounded-lg hover:border-[#00FF00] hover:bg-[#1A1A1A] transition-all text-left group">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-400 group-hover:text-[#00FF00] transition-all" />
              <div>
                <p className="text-sm font-medium text-white">Autenticação em Dois Fatores</p>
                <p className="text-xs text-gray-400">Adicione uma camada extra de segurança</p>
              </div>
            </div>
            <span className="text-gray-400 group-hover:text-[#00FF00] transition-all">→</span>
          </button>
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] border border-[#252525] rounded-2xl p-6 hover:border-[#00FF00]/30 transition-all duration-300">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-[#00FF00]/10 rounded-lg">
            <Palette className="w-5 h-5 text-[#00FF00]" />
          </div>
          <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Preferências
          </h3>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Moeda</label>
            <select className="w-full px-4 py-2 bg-[#0D0D0D] border border-[#252525] rounded-lg text-white focus:border-[#00FF00] focus:outline-none transition-all">
              <option>BRL - Real Brasileiro</option>
              <option>USD - Dólar Americano</option>
              <option>EUR - Euro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Idioma</label>
            <select className="w-full px-4 py-2 bg-[#0D0D0D] border border-[#252525] rounded-lg text-white focus:border-[#00FF00] focus:outline-none transition-all">
              <option>Português (BR)</option>
              <option>English (US)</option>
              <option>Español</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Formato de Data</label>
            <select className="w-full px-4 py-2 bg-[#0D0D0D] border border-[#252525] rounded-lg text-white focus:border-[#00FF00] focus:outline-none transition-all">
              <option>DD/MM/YYYY</option>
              <option>MM/DD/YYYY</option>
              <option>YYYY-MM-DD</option>
            </select>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-gradient-to-br from-red-500/10 to-[#0D0D0D] border border-red-500/30 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Zona de Perigo
        </h3>
        <div className="space-y-3">
          <button className="w-full flex items-center justify-between p-4 bg-[#0D0D0D] border border-red-500/30 rounded-lg hover:border-red-500 hover:bg-red-500/5 transition-all text-left group">
            <div className="flex items-center gap-3">
              <LogOut className="w-5 h-5 text-red-500" />
              <div>
                <p className="text-sm font-medium text-white">Sair da Conta</p>
                <p className="text-xs text-gray-400">Desconectar de todos os dispositivos</p>
              </div>
            </div>
            <span className="text-red-500">→</span>
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-[#0D0D0D] border border-red-500/30 rounded-lg hover:border-red-500 hover:bg-red-500/5 transition-all text-left group">
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-red-500" />
              <div>
                <p className="text-sm font-medium text-white">Excluir Conta</p>
                <p className="text-xs text-gray-400">Ação permanente e irreversível</p>
              </div>
            </div>
            <span className="text-red-500">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
