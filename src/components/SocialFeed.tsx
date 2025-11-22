'use client';

import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { financialTips } from '@/lib/mockData';

export default function SocialFeed() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Feed de Dicas
        </h2>
        <p className="text-gray-600 dark:text-gray-400">Aprenda com a comunidade</p>
      </div>

      {/* Create Post */}
      <div className="bg-white dark:bg-gradient-to-br dark:from-[#1A1A1A] dark:to-[#0D0D0D] border border-gray-200 dark:border-[#252525] rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 shadow-lg">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center font-bold text-white flex-shrink-0">
            U
          </div>
          <div className="flex-1">
            <textarea
              placeholder="Compartilhe uma dica financeira..."
              className="w-full px-4 py-3 bg-gray-50 dark:bg-[#0D0D0D] border border-gray-200 dark:border-[#252525] rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none transition-all resize-none"
              rows={3}
            />
            <div className="flex justify-end mt-3">
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
                Publicar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tips Feed */}
      <div className="space-y-4">
        {financialTips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white dark:bg-gradient-to-br dark:from-[#1A1A1A] dark:to-[#0D0D0D] border border-gray-200 dark:border-[#252525] rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 shadow-lg"
          >
            {/* Author */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center font-bold text-white text-sm">
                {tip.avatar}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{tip.author}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">{tip.time}</p>
              </div>
            </div>

            {/* Content */}
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{tip.content}</p>

            {/* Actions */}
            <div className="flex items-center gap-6 pt-4 border-t border-gray-200 dark:border-[#252525]">
              <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-all group">
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{tip.likes}</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-all group">
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{tip.comments}</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-all group ml-auto">
                <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Compartilhar</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center">
        <button className="px-8 py-3 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-[#252525] rounded-lg text-gray-600 dark:text-gray-400 hover:border-blue-500 hover:text-blue-500 transition-all">
          Carregar Mais
        </button>
      </div>
    </div>
  );
}
