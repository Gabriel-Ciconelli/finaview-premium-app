'use client';

import { Home, TrendingUp, Target, History, Settings, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'analysis', label: 'Análise de Gastos', icon: TrendingUp },
    { id: 'planning', label: 'Planejamento', icon: Target },
    { id: 'history', label: 'Histórico', icon: History },
    { id: 'settings', label: 'Configurações', icon: Settings },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#1A1A1A] rounded-lg border border-[#00FF00]/20 hover:border-[#00FF00] transition-all"
      >
        {isOpen ? <X className="w-6 h-6 text-[#00FF00]" /> : <Menu className="w-6 h-6 text-[#00FF00]" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen w-64 bg-[#0D0D0D] border-r border-[#1A1A1A]
          flex flex-col p-6 z-40 transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Logo */}
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-[#00FF00]" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Finaview
          </h1>
          <p className="text-xs text-gray-500 mt-1">Gestão Financeira Premium</p>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-lg
                  transition-all duration-300 group
                  ${isActive 
                    ? 'bg-[#00FF00]/10 text-[#00FF00] border border-[#00FF00]/30' 
                    : 'text-gray-400 hover:text-[#00FF00] hover:bg-[#1A1A1A]'
                  }
                `}
              >
                <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="pt-6 border-t border-[#1A1A1A]">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-[#1A1A1A] hover:bg-[#252525] transition-all cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00FF00] to-[#00AA00] flex items-center justify-center font-bold">
              U
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">Usuário</p>
              <p className="text-xs text-gray-500">Premium</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
