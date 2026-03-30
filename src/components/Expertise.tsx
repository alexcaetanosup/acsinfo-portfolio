import React, { useState } from 'react';
import CVModal from './CVModal';

const Expertise: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        // <section className="py-16 md:py-20 bg-[#0a0a0a] border-y border-white/5">
        //     <div className="max-w-6xl mx-auto px-6">

        <section className="py-24 md:py-40 bg-[#0a0a0a] border-y border-white/5 min-h-[80vh] flex items-center">
            <div className="max-w-6xl mx-auto px-6 w-full">

                {/* Título da Seção - Centralizado no mobile */}
                <div className="mb-10 md:mb-12 text-center md:text-left">
                    <h2 className="text-sm uppercase tracking-[0.3em] text-[#007BFF] font-bold mb-2">Especialistas</h2>
                    <p className="text-2xl md:text-3xl font-bold text-white leading-tight">Engenharia e Dados em Sincronia.</p>
                </div>

                {/* Grid Principal - 1 col mobile, 2 col desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                    {/* Card Alex */}
                    <div className="p-6 md:p-8 rounded-sm border bg-brand-deep border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent hover:border-[#007BFF]/30 transition-all flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-1">Alex Caetano</h3>
                            <p className="text-[#007BFF] text-xs uppercase tracking-widest mb-4 font-bold">Fullstack & Infra Tech</p>
                            <p className="text-gray-400 font-light leading-relaxed text-sm">
                                Especialista em arquitetura de sistemas e infraestrutura de redes. Garanto que a base tecnológica do seu projeto seja sólida, segura e escalável.
                            </p>
                        </div>

                        {/* Botão de Currículo - Largura total no mobile */}
                        <div className="mt-8 flex justify-center md:justify-start w-full">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="w-full md:w-auto px-8 py-4 border border-purple-800 text-purple-800 hover:bg-purple-800 hover:text-white transition-all rounded-sm uppercase text-xs font-bold tracking-widest active:scale-95"
                            >
                                Currículo Interativo 📄
                            </button>
                        </div>
                    </div>

                    {/* Card Larissa */}
                    <div className="p-6 md:p-8 rounded-sm border bg-brand-deep border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent hover:border-[#007BFF]/30 transition-all flex flex-col">
                        <h3 className="text-2xl font-bold text-white mb-1">Larissa Recco</h3>
                        <p className="text-[#007BFF] text-xs uppercase tracking-widest mb-4 font-bold">Data Intelligence Specialist</p>
                        <p className="text-gray-400 font-light leading-relaxed text-sm">
                            Estrategista de BI focado em transformar dados brutos em decisões de lucro. Especialista em Dashboards executivos e análise de KPIs.
                        </p>
                    </div>
                </div>
            </div>

            {/* Lógica do Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-2 md:p-4 backdrop-blur-sm">
                    <div className="relative w-full max-w-4xl flex flex-col h-[90vh] md:h-auto">
                        {/* <button
                            onClick={() => setIsModalOpen(false)}
                            className="self-end mb-2 md:mb-4 text-white hover:text-[#007BFF] font-bold text-xs tracking-widest transition-colors flex items-center gap-2 p-2"
                        >
                            FECHAR <span className="text-xl">×</span>
                        </button> */}

                        {/* Container do Flipbook adaptado */}
                        <div className="bg-[#151515] rounded-lg overflow-hidden shadow-2xl flex-1 md:flex-none">
                            <CVModal />
                        </div>
                        <div className="relative w-full max-w-4xl flex flex-col h-[90vh] md:h-auto">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="self-end mb-2 md:mb-4 text-white hover:text-[#007BFF] font-bold text-xs tracking-widest transition-colors flex items-center gap-2 p-2"
                            >
                                FECHAR <span className="text-xl">×</span>
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
};

export default Expertise;







// import React, { useState } from 'react';
// import CVModal from './CVModal';

// const Expertise: React.FC = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     return (
//         <section className="py-20 bg-[#1a1a1c] bg-[#0a0a0a] border-y border-white/5">
//             <div className="max-w-6xl mx-auto px-6">

//                 {/* Título da Seção */}
//                 <div className="mb-12 text-center md:text-left">
//                     <h2 className="text-sm uppercase tracking-[0.3em] text-[#007BFF] font-bold mb-2">Especialistas</h2>
//                     <p className="text-3xl font-bold text-white">Engenharia e Dados em Sincronia.</p>
//                 </div>

//                 {/* Grid Principal de Cards */}
//                 <div className="grid md:grid-cols-2 gap-8">

//                     {/* Card Seu (Alex) */}
//                     <div className="p-8 rounded-sm border bg-brand-deep border  border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent hover:border-[#007BFF]/30 transition-all flex flex-col justify-between">
//                         <div>
//                             <h3 className="text-2xl font-bold text-white mb-1">Alex Caetano</h3>
//                             <p className="text-[#007BFF] text-xs uppercase tracking-widest mb-4 font-bold">Fullstack & Infra Tech</p>
//                             <p className="text-gray-400 font-light leading-relaxed text-sm">
//                                 Especialista em arquitetura de sistemas e infraestrutura de redes. Garanto que a base tecnológica do seu projeto seja sólida, segura e escalável.
//                             </p>
//                         </div>

//                         {/* Botão de Currículo dentro do seu card */}
//                         <div className="mt-8 flex justify-center w-full">
//                             <button
//                                 onClick={() => setIsModalOpen(true)}
//                                 // className="px-6 py-3 color-brand-light border-blue-500    hover:text-white font-bold rounded-sm transition-all text-xs uppercase tracking-widest w-full md:w-auto"
//                                 className="px-8 py-4 border border-purple-800 text-purple-800  hover:text-white transition-all rounded-sm uppercase text-xs font-bold tracking-widest"
//                             >
//                                 Currículo Interativo 📄
//                             </button>
//                         </div>
//                     </div>

//                     {/* Card da Analista de BI (Larissa) */}
//                     <div className="p-8 rounded-sm border  bg-brand-deep border border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent hover:border-[#007BFF]/30 transition-all">
//                         <h3 className="text-2xl font-bold text-white mb-1">Larissa Recco</h3>
//                         <p className="text-[#007BFF] text-xs uppercase tracking-widest mb-4 font-bold">Data Intelligence Specialist</p>
//                         <p className="text-gray-400 font-light leading-relaxed text-sm">
//                             Estrategista de BI focado em transformar dados brutos em decisões de lucro. Especialista em Dashboards executivos e análise de KPIs.
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Lógica do Modal (Isolada do Grid) */}
//             {isModalOpen && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
//                     <div className="relative w-full max-w-4xl flex flex-col">

//                         {/* Botão para fechar o modal - Posicionado acima do conteúdo com margem segura */}
//                         <button
//                             onClick={() => setIsModalOpen(false)}
//                             className="self-end mb-4 text-white hover:text-brand-light font-bold text-sm tracking-widest transition-colors flex items-center gap-2"
//                         >
//                             FECHAR <span className="text-xl">×</span>
//                         </button>

//                         {/* O componente de flipbook */}
//                         <div className="bg-[#151515] rounded-lg overflow-hidden shadow-2xl">
//                             <CVModal />
//                         </div>

//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// };

// export default Expertise;

