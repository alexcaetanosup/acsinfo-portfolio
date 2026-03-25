import React, { useState } from 'react';
import CVModal from './CVModal';

const Expertise: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-20 bg-[#1a1a1c] bg-[#0a0a0a] border-y border-white/5">
            <div className="max-w-6xl mx-auto px-6">

                {/* Título da Seção */}
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-sm uppercase tracking-[0.3em] text-[#007BFF] font-bold mb-2">Especialistas</h2>
                    <p className="text-3xl font-bold text-white">Engenharia e Dados em Sincronia.</p>
                </div>

                {/* Grid Principal de Cards */}
                <div className="grid md:grid-cols-2 gap-8">

                    {/* Card Seu (Alex) */}
                    <div className="p-8 rounded-sm border bg-brand-deep border  border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent hover:border-[#007BFF]/30 transition-all flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-1">Alex Caetano</h3>
                            <p className="text-[#007BFF] text-xs uppercase tracking-widest mb-4 font-bold">Fullstack & Infra Tech</p>
                            <p className="text-gray-400 font-light leading-relaxed text-sm">
                                Especialista em arquitetura de sistemas e infraestrutura de redes. Garanto que a base tecnológica do seu projeto seja sólida, segura e escalável.
                            </p>
                        </div>

                        {/* Botão de Currículo dentro do seu card */}
                        <div className="mt-8 flex justify-center w-full">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                // className="px-6 py-3 color-brand-light border-blue-500    hover:text-white font-bold rounded-sm transition-all text-xs uppercase tracking-widest w-full md:w-auto"
                                className="px-8 py-4 border border-purple-800 text-purple-800  hover:text-white transition-all rounded-sm uppercase text-xs font-bold tracking-widest"
                            >
                                Currículo Interativo 📄
                            </button>
                        </div>
                    </div>

                    {/* Card da Analista de BI (Larissa) */}
                    <div className="p-8 rounded-sm border  bg-brand-deep border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent hover:border-[#007BFF]/30 transition-all">
                        <h3 className="text-2xl font-bold text-white mb-1">Larissa Recco</h3>
                        <p className="text-[#007BFF] text-xs uppercase tracking-widest mb-4 font-bold">Data Intelligence Specialist</p>
                        <p className="text-gray-400 font-light leading-relaxed text-sm">
                            Estrategista de BI focado em transformar dados brutos em decisões de lucro. Especialista em Dashboards executivos e análise de KPIs.
                        </p>
                    </div>
                </div>
            </div>

            {/* Lógica do Modal (Isolada do Grid) */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
                    <div className="relative w-full max-w-4xl">
                        {/* Botão para fechar o modal */}
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute -top-12 right-0 text-white hover:bg-brand-deep font-bold text-sm tracking-widest transition-colors"
                        >
                            FECHAR [X]
                        </button>
                        {/* O componente de flipbook */}
                        <div className="bg-[#151515] rounded-lg overflow-hidden shadow-2xl">
                            <CVModal />
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
};

export default Expertise;

