import React from 'react';

const Expertise: React.FC = () => {
    return (
        <section className="py-20 bg-[#0a0a0a] border-y border-white/5">
            <div className="max-w-6xl mx-auto px-6">
                {/* Título da Seção */}
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-sm uppercase tracking-[0.3em] text-[#007BFF] font-bold mb-2">Especialistas</h2>
                    <p className="text-3xl font-bold text-white">Engenharia e Dados em Sincronia.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Card Seu (Alex) */}
                    <div className="p-8 rounded-sm border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent hover:border-[#007BFF]/30 transition-all">
                        <h3 className="text-2xl font-bold text-white mb-1">Alex Caetano</h3>
                        <p className="text-[#007BFF] text-xs uppercase tracking-widest mb-4 font-bold">Fullstack & Infra Tech</p>
                        <p className="text-gray-400 font-light leading-relaxed text-sm">
                            Especialista em arquitetura de sistemas e infraestrutura de redes. Garanto que a base tecnológica do seu projeto seja sólida, segura e escalável.
                        </p>
                    </div>

                    {/* Card do Analista de BI */}
                    <div className="p-8 rounded-sm border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent hover:border-[#007BFF]/30 transition-all">
                        <h3 className="text-2xl font-bold text-white mb-1">Larissa Recco</h3>
                        <p className="text-[#007BFF] text-xs uppercase tracking-widest mb-4 font-bold">Data Intelligence Specialist</p>
                        <p className="text-gray-400 font-light leading-relaxed text-sm">
                            Estrategista de BI focado em transformar dados brutos em decisões de lucro. Especialista em Dashboards executivos e análise de KPIs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Expertise;