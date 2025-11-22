'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Dashboard from '@/components/Dashboard';
import Analysis from '@/components/Analysis';
import Planning from '@/components/Planning';
import History from '@/components/History';
import Settings from '@/components/Settings';
import SocialFeed from '@/components/SocialFeed';
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
    <div className="flex min-h-screen bg-[#0D0D0D]">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-8 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          {renderContent()}

          {/* Social Feed Section - Visible on Dashboard */}
          {activeTab === 'dashboard' && (
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#00FF00]/10 rounded-lg">
                  <MessageSquare className="w-5 h-5 text-[#00FF00]" />
                </div>
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
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
