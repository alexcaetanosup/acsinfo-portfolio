import React from 'react';

interface ServiceItem {
    title: string;
    description: string;
    tags: string[];
}

const services: ServiceItem[] = [
    {
        title: "Fullstack Engineering",
        description: "Desenvolvimento de sistemas robustos e interfaces de alta performance (React/Native). Do frontend ao backend com foco em escalabilidade.",
        tags: ["TypeScript", "React", "Node.js", "Expo"]
    },
    {
        title: "Infra & Cloud Aware",
        description: "Estruturação de ambientes seguros e otimizados. Garantindo que sua aplicação suporte o tráfego real com performance e segurança.",
        tags: ["Redes", "Performance", "Cloud", "CI/CD"]
    },
    {
        title: "Data Intelligence (BI)",
        description: "Transformação de dados brutos em decisões estratégicas. Dashboards inteligentes e análise de KPIs para o crescimento do seu negócio.",
        tags: ["Dashboards", "KPIs", "Data Viz", "Estratégia"]
    }
];

const Services: React.FC = () => {
    return (
        <section className="py-16 md:py-24 px-6 bg-[#1a1a1c]">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 md:mb-16">
                    <h2 className="text-sm uppercase tracking-[0.3em] text-brand-gold font-bold mb-4">
                        Especialidades
                    </h2>
                    <p className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                        Soluções técnicas para <br className="hidden md:block" /> problemas complexos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-brand-deep group p-6 md:p-8 border border-gray-900 bg-brand-dark/50 hover:border-brand-gold/50 transition-all duration-500 rounded-sm"
                        >
                            <h3 className="text-lg md:text-xl font-bold mb-4 group-hover:text-brand-gold transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {service.tags.map((tag) => (
                                    <span key={tag} className="text-[9px] md:text-[10px] uppercase tracking-widest border border-gray-800 px-2 py-1 text-gray-500">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;



// import React from 'react';

// // Tipagem para os itens de serviço
// interface ServiceItem {
//     title: string;
//     description: string;
//     tags: string[];
// }

// const services: ServiceItem[] = [
//     {
//         title: "Fullstack Engineering",
//         description: "Desenvolvimento de sistemas robustos e interfaces de alta performance (React/Native). Do frontend ao backend com foco em escalabilidade.",
//         tags: ["TypeScript", "React", "Node.js", "Expo"]
//     },
//     {
//         title: "Infra & Cloud Aware",
//         description: "Estruturação de ambientes seguros e otimizados. Garantindo que sua aplicação suporte o tráfego real com performance e segurança.",
//         tags: ["Redes", "Performance", "Cloud", "CI/CD"]
//     },
//     {
//         title: "Data Intelligence (BI)",
//         description: "Transformação de dados brutos em decisões estratégicas. Dashboards inteligentes e análise de KPIs para o crescimento do seu negócio.",
//         tags: ["Dashboards", "KPIs", "Data Viz", "Estratégia"]
//     }
// ];

// const Services: React.FC = () => {

//     return (
//         <section className="py-24 px-6 bg-[#1a1a1c]">
//             <div className="max-w-6xl mx-auto">
//                 <div className="mb-16">
//                     <h2 className="text-sm uppercase tracking-[0.3em] text-brand-gold font-bold mb-4">
//                         Especialidades
//                     </h2>
//                     <p className="text-3xl md:text-5xl font-bold tracking-tight">
//                         Soluções técnicas para <br /> problemas complexos.
//                     </p>
//                 </div>

//                 <div className=" grid md:grid-cols-3 gap-8">
//                     {services.map((service, index) => (
//                         <div
//                             key={index}
//                             className=" bg-brand-deep group p-8 border border-gray-900 bg-brand-dark/50 hover:border-brand-gold/50 transition-all duration-500 rounded-sm"
//                         >
//                             <h3 className="text-xl font-bold mb-4 group-hover:text-brand-gold transition-colors">
//                                 {service.title}
//                             </h3>
//                             <p className="text-gray-400 font-light leading-relaxed mb-6">
//                                 {service.description}
//                             </p>
//                             <div className="flex flex-wrap gap-2">
//                                 {service.tags.map((tag) => (
//                                     <span key={tag} className="text-[10px] uppercase tracking-widest border border-gray-800 px-2 py-1 text-gray-500">
//                                         {tag}
//                                     </span>
//                                 ))}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Services;