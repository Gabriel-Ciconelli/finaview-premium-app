'use client';

import { useState } from 'react';
import { ChevronDown, BarChart3, TrendingUp, Shield, Sparkles, Check, Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Dashboard Intuitivo',
      description: 'Visualize todas as suas finanças em um só lugar com gráficos claros e interativos.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Análise de Gastos',
      description: 'Entenda para onde seu dinheiro está indo com análises detalhadas e insights inteligentes.'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Planejamento Eficiente',
      description: 'Crie metas financeiras e acompanhe seu progresso em tempo real.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Segurança dos Dados',
      description: 'Seus dados financeiros protegidos com criptografia de ponta a ponta.'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Empreendedora',
      text: 'O Finaview transformou completamente a forma como gerencio minhas finanças. Agora tenho controle total!'
    },
    {
      name: 'João Santos',
      role: 'Freelancer',
      text: 'Finalmente consigo visualizar meus gastos de forma clara. Recomendo para todos!'
    },
    {
      name: 'Ana Costa',
      role: 'Estudante',
      text: 'Simples, intuitivo e eficiente. Perfeito para quem está começando a organizar as finanças.'
    }
  ];

  const plans = [
    {
      name: 'Gratuito',
      price: 'R$ 0',
      period: '/mês',
      features: [
        'Dashboard básico',
        'Até 50 transações/mês',
        'Análise simples de gastos',
        'Suporte por email'
      ],
      highlighted: false
    },
    {
      name: 'Premium',
      price: 'R$ 29,90',
      period: '/mês',
      features: [
        'Dashboard completo',
        'Transações ilimitadas',
        'Análise avançada com IA',
        'Planejamento financeiro',
        'Suporte prioritário',
        'Exportação de relatórios'
      ],
      highlighted: true
    },
    {
      name: 'VIP',
      price: 'R$ 59,90',
      period: '/mês',
      features: [
        'Tudo do Premium',
        'Consultoria financeira mensal',
        'Alertas personalizados',
        'Integração com bancos',
        'Suporte 24/7',
        'Acesso antecipado a novos recursos'
      ],
      highlighted: false
    }
  ];

  const faqs = [
    {
      question: 'Como funciona o período de teste gratuito?',
      answer: 'Você pode usar o plano gratuito indefinidamente. Para planos pagos, oferecemos 7 dias de teste grátis sem necessidade de cartão de crédito.'
    },
    {
      question: 'Meus dados estão seguros?',
      answer: 'Sim! Utilizamos criptografia de ponta a ponta e seguimos as melhores práticas de segurança. Seus dados nunca são compartilhados com terceiros.'
    },
    {
      question: 'Posso cancelar a qualquer momento?',
      answer: 'Sim, você pode cancelar sua assinatura a qualquer momento sem taxas ou multas. Seu acesso continuará até o fim do período pago.'
    },
    {
      question: 'O Finaview funciona em dispositivos móveis?',
      answer: 'Sim! Nossa plataforma é totalmente responsiva e funciona perfeitamente em smartphones, tablets e desktops.'
    },
    {
      question: 'Posso mudar de plano depois?',
      answer: 'Claro! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças entram em vigor imediatamente.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-[#00FF00]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#00FF00] to-[#00CC00] rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-[#0D0D0D]" />
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Finaview
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="/app">
                <button className="px-6 py-2 text-sm font-medium text-white hover:text-[#00FF00] transition-colors">
                  Login
                </button>
              </Link>
              <Link href="/app">
                <button className="px-6 py-2 text-sm font-medium bg-[#00FF00] text-[#0D0D0D] rounded-lg hover:bg-[#00CC00] transition-all hover:scale-105">
                  Experimente Grátis
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-[#00FF00] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-[#00FF00]/10">
              <div className="flex flex-col gap-2">
                <Link href="/app">
                  <button className="w-full px-6 py-2 text-sm font-medium text-white hover:text-[#00FF00] transition-colors text-left">
                    Login
                  </button>
                </Link>
                <Link href="/app">
                  <button className="w-full px-6 py-2 text-sm font-medium bg-[#00FF00] text-[#0D0D0D] rounded-lg hover:bg-[#00CC00] transition-all">
                    Experimente Grátis
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00FF00] to-[#00CC00] bg-clip-text text-transparent"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Transforme Suas Finanças com Finaview
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Organização e Planejamento Financeiro ao Seu Alcance.
          </p>
          <Link href="/app">
            <button className="px-8 py-4 text-lg font-medium bg-[#00FF00] text-[#0D0D0D] rounded-lg hover:bg-[#00CC00] transition-all hover:scale-105 shadow-lg shadow-[#00FF00]/20">
              Comece Agora
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]/50">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Funcionalidades Principais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-[#1A1A1A] rounded-xl border border-[#00FF00]/10 hover:border-[#00FF00]/30 transition-all hover:scale-105 cursor-pointer group"
              >
                <div className="w-16 h-16 bg-[#00FF00]/10 rounded-lg flex items-center justify-center mb-4 text-[#00FF00] group-hover:bg-[#00FF00]/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            O Que Nossos Usuários Dizem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-[#1A1A1A] rounded-xl border border-[#00FF00]/10 hover:border-[#00FF00]/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00FF00] to-[#00CC00] rounded-full flex items-center justify-center text-[#0D0D0D] font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic" style={{ fontFamily: 'Inter, sans-serif' }}>
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]/50">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-center mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Escolha Seu Plano
          </h2>
          <p className="text-center text-gray-400 mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>
            Comece grátis e faça upgrade quando precisar
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl border transition-all hover:scale-105 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-[#00FF00]/10 to-[#00CC00]/5 border-[#00FF00] shadow-lg shadow-[#00FF00]/20'
                    : 'bg-[#1A1A1A] border-[#00FF00]/10 hover:border-[#00FF00]/30'
                }`}
              >
                {plan.highlighted && (
                  <div className="inline-block px-3 py-1 bg-[#00FF00] text-[#0D0D0D] text-xs font-bold rounded-full mb-4">
                    MAIS POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-[#00FF00]">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#00FF00] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link href="/app">
                  <button
                    className={`w-full py-3 rounded-lg font-medium transition-all ${
                      plan.highlighted
                        ? 'bg-[#00FF00] text-[#0D0D0D] hover:bg-[#00CC00]'
                        : 'bg-[#1A1A1A] text-white border border-[#00FF00]/30 hover:bg-[#00FF00]/10'
                    }`}
                  >
                    Escolha este plano
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl sm:text-4xl font-bold mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Não perca tempo! Organize suas finanças hoje mesmo.
          </h2>
          <p className="text-lg text-gray-400 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            Junte-se a milhares de usuários que já transformaram suas vidas financeiras
          </p>
          <Link href="/app">
            <button className="px-8 py-4 text-lg font-medium bg-[#00FF00] text-[#0D0D0D] rounded-lg hover:bg-[#00CC00] transition-all hover:scale-105 shadow-lg shadow-[#00FF00]/20">
              Experimente Grátis
            </button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0D0D0D]/50">
        <div className="max-w-3xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Perguntas Frequentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] rounded-xl border border-[#00FF00]/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#00FF00]/5 transition-colors"
                >
                  <span className="font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#00FF00] transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[#00FF00]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-[#00FF00] to-[#00CC00] rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-[#0D0D0D]" />
                </div>
                <span className="text-xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Finaview
                </span>
              </div>
              <p className="text-sm text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                Transformando a forma como você gerencia suas finanças.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Produto
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#00FF00] transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-[#00FF00] transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-[#00FF00] transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Empresa
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#00FF00] transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-[#00FF00] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#00FF00] transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Legal
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#00FF00] transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-[#00FF00] transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[#00FF00]/10 text-center text-sm text-gray-400">
            <p>© 2024 Finaview. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
