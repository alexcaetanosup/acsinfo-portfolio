import React from 'react';

const projects = [
    {
        title: "Landing Page Interativa",
        desc: "Arquitetura moderna com foco em performance, acessibilidade e design Premium Dark.",
        tech: ["React 19", "Tailwind v4", "Vite", "OKLCH"],
        image: "/assets/landingPage.jpg", // Lembre-se de tirar o print e salvar com este nome
        //link: "https://github.com/alexcaetanosuporte/acsinfo" 
    },
    {
        title: "Dashboard Executivo de BI",
        desc: "Análise estratégica de KPIs de negócio e infraestrutura em tempo real.",
        tech: ["Power BI", "SQL", "BigQuery", "Data Visualization"],
        image: "/assets/dashboard-bi.jpg",
    },
    {
        title: "Sistema de Gestão Médica (CRM)",
        desc: "Plataforma CRUD para controle de pacientes e lançamentos administrativos.",
        tech: ["Fullstack", "React", "Medical Data"],
        image: "/assets/medical-preview.jpg" // A barra inicial indica a pasta public
    },
];

const Portfolio: React.FC = () => {
    return (
        <section id="portfolio" className="py-32 px-6 border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#d4af37] font-bold mb-4">Showcase</h2>
                    <p className="text-4xl font-bold text-white tracking-tighter">Sistemas em Produção</p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {projects.map((p, i) => (
                        <div key={i} className="group relative bg-brand-deep border border-white/5 rounded-lg overflow-hidden hover:border-[#d4af37]/30 transition-all duration-500">
                            {/* Imagem com Overlay */}
                            <div className="h-52 overflow-hidden relative">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-80"></div>
                            </div>

                            {/* Texto */}
                            <div className="p-8">
                                <div className="flex gap-2 mb-4">
                                    {p.tech.map(t => (
                                        <span key={t} className="text-[8px] border border-white/10 px-2 py-1 text-gray-500 uppercase tracking-widest">{t}</span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors">{p.title}</h3>
                                <p className="text-xs text-gray-500 leading-relaxed mb-6">{p.desc}</p>
                                <button className="text-[10px] uppercase tracking-widest text-[#d4af37] font-bold border-b border-[#d4af37]/0 hover:border-[#d4af37] transition-all pb-1">
                                    Explorar Projeto
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;



