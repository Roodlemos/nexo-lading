import React from "react";
import { Award, Users, TrendingUp, CheckCircle, Star, Zap } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const qualities = [
  {
    icon: CheckCircle,
    title: "Excelência Técnica",
    desc: "Padrões internacionais de qualidade",
  },
  {
    icon: Star,
    title: "Inovação Constante",
    desc: "Tecnologias de ponta aplicadas",
  },
  {
    icon: Zap,
    title: "Agilidade na Entrega",
    desc: "Prazos rigorosamente cumpridos",
  },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="quem-somos"
      className="relative w-full bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-16 sm:py-20 lg:py-28 overflow-x-clip"
    >
      {/* BG decorativo, nunca ocupa o centro */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[-10%] w-60 h-60 bg-primary-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-[10%] right-[-8%] w-44 h-44 bg-accent-100 rounded-full blur-2xl opacity-20" />
      </div>

      <div className="relative max-w-6xl mx-auto w-full flex flex-col items-center z-10 px-8 sm:px-12 lg:px-16 xl:px-25">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-neutral-800 via-primary-700 to-neutral-800 bg-clip-text text-transparent mb-4">
            {t("about.title")}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed px-4">
            {t("about.subtitle")}
          </p>
        </div>

        {/* Main grid: em telas <lg empilha, em desktop são duas colunas */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Lado Texto & Qualidades */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/40">
              <h3 className="flex items-center text-xl sm:text-2xl font-bold text-neutral-800 mb-6">
                <span className="w-1 h-6 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full mr-4" />
                {t("about.excellence.title")}
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed">
                <p>{t("about.excellence.desc1")}</p>
                <p>{t("about.excellence.desc2")}</p>
              </div>
            </div>

            {/* Qualidades em linha (mobile: empilha) - degradês alterados */}
            <div className="flex flex-col sm:flex-row gap-6">
              {qualities.map((q, i) => (
                <div
                  key={i}
                  className="flex-1 min-w-0 flex flex-col items-center bg-gradient-to-br from-blue-50 via-slate-50 to-gray-100 backdrop-blur-md border border-blue-200/60 rounded-xl px-6 py-6 shadow-md text-center"
                >
                  <div className="inline-flex items-center justify-center mb-3 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 via-slate-700 to-gray-700 shadow">
                    <q.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="font-semibold text-slate-800 text-sm mb-2">{q.title}</div>
                  <div className="text-xs text-slate-600 leading-relaxed">{q.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Imagem & Nossa Missão */}
          <div className="flex flex-col gap-8 lg:pl-8">
            {/* Imagem horizontal */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=80"
                alt="Equipe Nexo Estudos Elétricos"
                className="aspect-[4/3] object-cover w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 right-4">
                <div className="bg-accent-500 text-white px-4 py-2 rounded-xl shadow text-xs font-bold border border-accent-400/20">
                  
                </div>
              </div>
            </div>

            {/* Nossa Missão - degradê escuro harmonizado com azul e cinza */}
            <div className="bg-gradient-to-br from-slate-800 via-blue-900 to-gray-900 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-800/40 text-center lg:text-left">
              <div className="flex items-center gap-3 justify-center lg:justify-start mb-4">
                <span className="w-2 h-2 bg-blue-400 rounded-full" />
                <span className="uppercase font-bold tracking-wide text-blue-300 text-xs">
                  Nossa Missão
                </span>
                <span className="w-2 h-2 bg-slate-400 rounded-full" />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold mb-3 text-white leading-relaxed">
                Fornecer soluções em estudos elétricos com excelência técnica, inovação e compromisso com a sustentabilidade.
              </h4>
              <p className="text-base text-slate-200 leading-relaxed">
                Acreditamos no desenvolvimento responsável do setor elétrico, com foco em qualidade, ética e atendimento personalizado para nossos clientes em todo o Brasil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
