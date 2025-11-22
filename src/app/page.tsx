'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';
import Analysis from '@/components/Analysis';
import Planning from '@/components/Planning';
import History from '@/components/History';
import Settings from '@/components/Settings';
import SocialFeed from '@/components/SocialFeed';
import ThemeToggle from '@/components/ThemeToggle';
import { MessageSquare } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'analysis':
        return <Analysis />;
      case 'planning':
        return <Planning />;
      case 'history':
        return <History />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-[#0D0D0D]">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-8 overflow-x-hidden">
        {/* Theme Toggle */}
        <div className="max-w-7xl mx-auto mb-6 flex justify-end">
          <ThemeToggle />
        </div>

        <div className="max-w-7xl mx-auto">
          {renderContent()}

          {/* Social Feed Section - Visible on Dashboard */}
          {activeTab === 'dashboard' && (
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Comunidade Financeira
                </h3>
              </div>
              <SocialFeed />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
