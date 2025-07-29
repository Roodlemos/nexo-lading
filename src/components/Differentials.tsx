import React from "react";
import { Shield, Zap, Users, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const mainDifferentials = [
  {
    icon: Shield,
    title: "Segurança Absoluta",
    desc: "Análises que garantem 100% de conformidade com normas técnicas e regulamentações do setor elétrico",
    highlight: "99.9% Precisão"
  },
  {
    icon: Zap,
    title: "Velocidade Inteligente",
    desc: "Entregas até 40% mais rápidas utilizando automação e metodologias otimizadas",
    highlight: "40% + Rápido"
  },
  {
    icon: Users,
    title: "Expertise Comprovada",
    desc: "Time com mais de 15 anos de experiência em projetos de grande porte no Brasil",
    highlight: "+500 Projetos"
  }
];

export default function Differentials() {
  const { t } = useLanguage();

  return (
    <section
      id="diferenciais"
      className="relative w-full bg-gradient-to-b from-white via-gray-50 to-blue-50/20 py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-blue-100/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-gradient-to-l from-slate-100/40 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            O que nos torna únicos
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent">
              Diferenciais que
            </span>
            <br />
            <span className="text-blue-600">transformam projetos</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Combinamos expertise técnica, tecnologia de ponta e metodologias inovadoras para entregar estudos elétricos que superam expectativas
          </p>
        </div>

        {/* Main Differentials - Cards Horizontais */}
        <div className="space-y-8">
          {mainDifferentials.map((diff, index) => (
            <div
              key={index}
              className={`group flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content Side */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-slate-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <diff.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                    {diff.highlight}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{diff.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">{diff.desc}</p>
                  <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all duration-300">
                    Saiba mais
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Visual Side */}
              <div className="flex-1">
                <div className="relative">
                  <div className="w-full h-80 bg-gradient-to-br from-slate-100 to-blue-100 rounded-3xl p-8 shadow-xl">
                    <div className="w-full h-full bg-white rounded-2xl shadow-inner flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-slate-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <diff.icon className="w-12 h-12 text-white" />
                        </div>
                        <div className="text-sm text-gray-500">Visualização do diferencial</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 blur-xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
