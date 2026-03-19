import React from 'react';

// Tipagem para os itens de serviço
interface ServiceItem {
    title: string;
    description: string;
    tags: string[];
}

const services: ServiceItem[] = [
    {
        title: "Web & Mobile Development",
        description: "Criação de interfaces de alta fidelidade e performance utilizando React e React Native. Foco total em experiência do usuário e código limpo.",
        tags: ["TypeScript", "React", "Vue", "Expo"]
    },
    {
        title: "Software Architecture",
        description: "Estruturação de projetos escaláveis, escolha de stack eficiente e organização de componentes para manutenção a longo prazo.",
        tags: ["Design Patterns", "Clean Code", "Performance"]
    },
    {
        title: "Full-Cycle Delivery",
        description: "Desenvolvimento consciente: do frontend à entrega final, garantindo que a aplicação esteja pronta para ambientes de produção reais.",
        tags: ["CI/CD", "Cloud Aware", "Optimization"]
    }
];

const Services: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-brand-black">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-sm uppercase tracking-[0.3em] text-brand-gold font-bold mb-4">
                        Especialidades
                    </h2>
                    <p className="text-3xl md:text-5xl font-bold tracking-tight">
                        Soluções técnicas para <br /> problemas complexos.
                    </p>
                </div>

                <div className=" grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className=" bg-brand-deep group p-8 border border-gray-900 bg-brand-dark/50 hover:border-brand-gold/50 transition-all duration-500 rounded-sm"
                        >
                            <h3 className="text-xl font-bold mb-4 group-hover:text-brand-gold transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 font-light leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {service.tags.map((tag) => (
                                    <span key={tag} className="text-[10px] uppercase tracking-widest border border-gray-800 px-2 py-1 text-gray-500">
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