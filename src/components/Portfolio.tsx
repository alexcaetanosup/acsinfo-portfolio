import {
    Code2,
    Cpu,
    ExternalLink,
    Globe
} from 'lucide-react';
import React from 'react';

const projects = [
    {
        title: "Sistema Integrado de CRM",
        category: "Fullstack / Health Tech",
        description: "Arquitetura escalável para gestão de clínicas com monitoramento em tempo real.",
        tags: ["React", "Node.js", "PostgreSQL"],
        image: "/assets/medical-preview.jpg",
        icon: <Globe size={18} />,
        color: "blue"
    },
    {
        title: "Landing Page Interativa",
        category: "Landing Pag",
        description: "Arquitetura moderna com foco em performance, acessibilidade e design Premium Dark",
        tags: ["React 19", "Tailwind v4", "Vite", "OKLCH"],
        image: "/assets/landingPage.jpg",
        icon: <Cpu size={18} />,
        color: "purple"
    },
    {
        title: "Dashboard Power BI Premium",
        category: "Data Analytics",
        description: "Visualização estratégica de KPIs com ETL automatizado e design dark mode.",
        tags: ["Power BI", "SQL", "DAX"],
        image: "/assets/dashboard-bi.jpg",
        icon: <Code2 size={18} />,
        color: "emerald"
    }
];

const Portfolio: React.FC = () => {
    return (
        <section id="portfolio" className="py-16 md:py-24 bg-black text-white px-6 border-t border-white/5 font-sans">
            <div className="max-w-7xl mx-auto">

                <div className="mb-12 md:mb-16 space-y-4">
                    <h2 className="text-sm font-black text-blue-500 uppercase tracking-[0.5em] animate-pulse">
                        // OUTPUT_PROJECTS
                    </h2>
                    <h3 className="text-3xl md:text-6xl font-black uppercase italic leading-tight">
                        Portfólio <span className="text-gray-700">Técnico</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col bg-[#161616] rounded-3xl border border-white/10 overflow-hidden hover:border-blue-500/40 hover:bg-[#1c1c1c] transition-all duration-500 shadow-2xl"
                        >
                            {/* ÁREA DA MÍDIA - Altura adaptada para mobile */}
                            <div className="relative h-48 sm:h-56 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent z-10" />
                            </div>

                            {/* CONTEÚDO */}
                            <div className="p-6 md:p-6 space-y-4 flex-1 flex flex-col">

                                <div className="space-y-2">
                                    <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                                        {project.category}
                                    </span>
                                    <h4 className="text-xl font-black uppercase italic text-white group-hover:text-blue-300 transition-colors leading-tight">
                                        {project.title}
                                    </h4>
                                    <p className="text-gray-400 text-[12px] leading-relaxed font-medium">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tecnologias */}
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tags.map((tag, tIndex) => (
                                        <span
                                            key={tIndex}
                                            className="text-[9px] font-bold px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 uppercase"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Ações - Empurra para baixo */}
                                <div className="pt-6 mt-auto flex gap-6 border-t border-white/5">
                                    <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-400 hover:text-white transition-colors">
                                        <ExternalLink size={14} /> Link
                                    </button>
                                    <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-300 hover:text-white transition-colors">
                                        <Code2 size={14} /> Source
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;


// import {
//     Code2,
//     Cpu,
//     ExternalLink,
//     Globe
// } from 'lucide-react';
// import React from 'react';

// const projects = [
//     {
//         title: "Sistema Integrado de CRM",
//         category: "Fullstack / Health Tech",
//         description: "Arquitetura escalável para gestão de clínicas com monitoramento em tempo real.",
//         tags: ["React", "Node.js", "PostgreSQL"],
//         // image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
//         image: "/assets/medical-preview.jpg",
//         icon: <Globe size={18} />,
//         color: "blue"
//     },
//     {
//         title: "Landing Page Interativa",
//         category: "Landing Pag",
//         description: "Arquitetura moderna com foco em performance, acessibilidade e design Premium Dark",
//         tags: ["React 19", "Tailwind v4", "Vite", "OKLCH"],
//         image: "/assets/landingPage.jpg",
//         icon: <Cpu size={18} />,
//         color: "purple"
//     },
//     {
//         title: "Dashboard Power BI Premium",
//         category: "Data Analytics",
//         description: "Visualização estratégica de KPIs com ETL automatizado e design dark mode.",
//         tags: ["Power BI", "SQL", "DAX"],
//         image: "/assets/dashboard-bi.jpg",
//         // image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800",
//         icon: <Code2 size={18} />,
//         color: "emerald"
//     }
// ];

// const Portfolio: React.FC = () => {
//     return (
//         <section id="portfolio" className="py-24 bg-black text-white px-6 border-t border-white/5 font-sans">
//             <div className="max-w-7xl mx-auto">

//                 <div className="mb-16 space-y-4">
//                     <h2 className="text-sm font-black text-blue-500 uppercase tracking-[0.5em] animate-pulse">
//             // OUTPUT_PROJECTS
//                     </h2>
//                     <h3 className="text-4xl md:text-6xl font-black uppercase italic">
//                         Portfólio <span className="text-gray-700">Técnico</span>
//                     </h3>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//                     {projects.map((project, index) => (
//                         // ... (mantenha o restante igual)

//                         <div
//                             key={index}
//                             className="group relative flex flex-col bg-[#161616] rounded-3xl border border-white/10 overflow-hidden hover:border-blue-500/40 hover:bg-[#1c1c1c] transition-all duration-500 shadow-2xl"
//                         >
//                             {/* ÁREA DA MÍDIA */}
//                             <div className="relative h-56 overflow-hidden">
//                                 {/* Ajustamos a opacidade para a imagem aparecer mais (de 60% para 80%) */}
//                                 <img
//                                     src={project.image}
//                                     alt={project.title}
//                                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent z-10" />
//                             </div>

//                             {/* CONTEÚDO */}
//                             <div className="p-8 space-y-6">
//                                 <div className="space-y-2">
//                                     {/* Sugestão: Use cores vivas nas categorias */}
//                                     <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
//                                         {project.category}
//                                     </span>
//                                     <h4 className="text-xl font-black uppercase italic text-white group-hover:text-blue-300 transition-colors">
//                                         {project.title}
//                                     </h4>
//                                     <p className="text-gray-400 text-[12px] leading-relaxed font-medium">
//                                         {project.description}
//                                     </p>
//                                 </div>

//                                 {/* Tecnologias com badges mais visíveis */}
//                                 <div className="flex flex-wrap gap-2">
//                                     {project.tags.map((tag, tIndex) => (
//                                         <span
//                                             key={tIndex}
//                                             className="text-[9px] font-bold px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 uppercase"
//                                         >
//                                             {tag}
//                                         </span>
//                                     ))}
//                                 </div>

//                                 {/* Ações */}
//                                 <div className="pt-6 flex gap-6 border-t border-white/5">
//                                     {/* Botões agora com texto branco para melhor leitura */}
//                                     <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-400 hover:text-white transition-colors">
//                                         <ExternalLink size={14} /> Link
//                                     </button>
//                                     <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-300 hover:text-white transition-colors">
//                                         <Code2 size={14} /> Source
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Portfolio;




