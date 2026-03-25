import React from 'react';
// 1. IMPORTAÇÕES CORRETAS DOS MÓDULOS
import { EffectFlip, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// 2. IMPORTS DE CSS QUE O VITE/VERCEL EXIGEM
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CVModal: React.FC = () => {
    return (
        <div className="modal-container">
            {/* 3. O COMPONENTE COM A PROPRIEDADE MODULES */}
            <Swiper
                modules={[EffectFlip, Navigation, Pagination]}
                effect={'flip'}
                grabCursor={true}
                navigation={true}
                pagination={true}
                className="mySwiper w-full h-full"
            >
                <SwiperSlide>
                    <div className="flex justify-center items-center h-full">
                        {/* Aqui vai a imagem ou conteúdo do seu CV */}
                        <img src="/caminho-do-seu-cv-pagina1.jpg" alt="CV Pagina 1" />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex justify-center items-center h-full">
                        <img src="/caminho-do-seu-cv-pagina2.jpg" alt="CV Pagina 2" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default CVModal;


// // Imports dos componentes do Swiper
// import { EffectFlip, Navigation, Pagination } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Imports de CSS corrigidos para o Vite/Vercel
// import 'swiper/css';
// import 'swiper/css/effect-flip';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const CVModal = () => {
//     return (
//         <div className="w-full max-w-2xl mx-auto h-[550px] shadow-2xl bg-[#151515] rounded-lg overflow-hidden">
//             <Swiper
//                 effect={'flip'}
//                 grabCursor={true}
//                 navigation={true}
//                 pagination={{ clickable: true }}
//                 mousewheel={true}
//                 modules={[EffectFlip, Navigation, Pagination, Mousewheel]}
//                 className="mySwiper h-full"
//             >
//                 {/* LÂMINA 1: PERFIL & CORE STACK */}
//                 <SwiperSlide className="bg-[#151515] p-10 flex flex-col h-full border border-white/10">
//                     <div className="mb-6">
//                         <h2 className="text-3xl font-bold text-white">Alex Caetano</h2>
//                         <p className="text-white text-xs uppercase tracking-[0.2em] font-bold mt-1">Fullstack Dev & AI Specialist</p>
//                     </div>
//                     <div className="grid grid-cols-2 gap-6">
//                         <div className="space-y-4">
//                             <h4 className="text-[10px] text-gray-500 uppercase font-bold border-b  border-blue-500/20 pb-1">Main Stack</h4>
//                             <div className="flex flex-wrap gap-2">
//                                 {["React", "Vue.js", "TypeScript", "Python", "Flutter", "Tailwind"].map(t => (
//                                     <span key={t} className="text-[9px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">{t}</span>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="space-y-4">
//                             <h4 className="text-[10px] text-gray-500 uppercase font-bold border-b border-white/5 pb-1">AI & Data</h4>
//                             <div className="flex flex-wrap gap-2">
//                                 {["N8N", "Agentes IA", "Power BI", "RPA", "SQL"].map(t => (
//                                     <span key={t} className="text-[9px] bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded border border-purple-500/20">{t}</span>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                     <p className="mt-8 text-gray-400 text-xs leading-relaxed italic border-l-2 text-white pl-4">
//                         "Mais de 30 anos de expertise técnica, evoluindo da eletrônica de precisão para a arquitetura de sistemas modernos e inteligência artificial generativa."
//                     </p>
//                 </SwiperSlide>

//                 {/* LÂMINA 2: EXPERIÊNCIA RECENTE */}
//                 <SwiperSlide className="bg-[#151515] p-10 flex flex-col h-full border border-white/10 overflow-y-auto">
//                     <h3 className="text-xl font-bold text-white mb-6 underlinetext-white underline-offset-8">Trajetória Atual</h3>
//                     <div className="space-y-6">
//                         <div className="relative pl-4 border-l  border-blue-500/20">
//                             <span className="absolute -left-[5px] top-1 w-2 h-2 text-white rounded-full"></span>
//                             <h4 className="text-sm font-bold text-white">Instituto J&F <span className="text-[10px] text-gray-500 font-normal ml-2">2024 - Presente</span></h4>
//                             <p className="text-[11px] text-white uppercase font-bold">Docente em Tecnologia & IoT</p>
//                             <p className="text-gray-400 text-[11px] mt-1">Instrução técnica em React, Power BI, Python e automação de processos para novos talentos.</p>
//                         </div>
//                         <div className="relative pl-4 border-l  border-blue-500/20">
//                             <span className="absolute -left-[5px] top-1 w-2 h-2 bg-gray-500 rounded-full"></span>
//                             <h4 className="text-sm font-bold text-white">Prodemge <span className="text-[10px] text-gray-500 font-normal ml-2">2022 - 2024</span></h4>
//                             <p className="text-[11px] text-white uppercase font-bold">Desenvolvedor Frontend</p>
//                             <p className="text-gray-400 text-[11px] mt-1">Modernização de sistemas educacionais complexos (legados) utilizando Vue.js, Vuetify e TypeScript.</p>
//                         </div>
//                     </div>
//                 </SwiperSlide>

//                 {/* LÂMINA 3: LEGADO E ENGENHARIA */}
//                 <SwiperSlide className="bg-[#151515] p-10 flex flex-col h-full border border-white/10">
//                     <h3 className="text-xl font-bold text-white mb-6">Expertise Histórica</h3>
//                     <div className="grid grid-cols-1 gap-4">
//                         <div className="bg-white/[0.03] p-4 rounded border  border-blue-500/20">
//                             <h4 className="text-sm font-bold text-white">Santa Casa de Andradina</h4>
//                             <p className="text-[10px] text-gray-500 mb-2">1992 - 2010 | Analista de Sistemas Senior</p>
//                             <p className="text-[11px] text-gray-300">Liderança na implantação do sistema hospitalar HSist, reestruturação total de rede Novell/Windows e gestão de infraestrutura crítica.</p>
//                         </div>
//                         <div className="bg-white/[0.03] p-4 rounded border border-white/5">
//                             <h4 className="text-sm font-bold text-white">UNICAMP</h4>
//                             <p className="text-[10px] text-gray-500 mb-2">1987 - 2000 | Especialista Técnico</p>
//                             <p className="text-[11px] text-gray-300">Treze anos de atuação técnica em manutenção, suporte e desenvolvimento de soluções de hardware e software.</p>
//                         </div>
//                     </div>
//                 </SwiperSlide>

//                 {/* LÂMINA 4: FORMAÇÃO & CERTIFICAÇÕES 2025 */}
//                 <SwiperSlide className="bg-[#151515] p-10 flex flex-col h-full border border-white/10">
//                     <h3 className="text-xl font-bold text-white mb-4">Educação & Futuro</h3>
//                     <div className="space-y-4 flex-grow">
//                         <div>
//                             <p className="text-[10px] text-white font-bold uppercase">Acadêmico</p>
//                             <p className="text-xs text-white">MBA Gestão da Qualidade em TI <span className="text-gray-500">(2023)</span></p>
//                             <p className="text-xs text-white">Bacharelado em Economia - PUC Campinas</p>
//                         </div>
//                         <div className="bg-blue-500/5 p-4 rounded border border-blue-500/20">
//                             <p className="text-[10px] text-white font-bold uppercase mb-2">Certificações Recentes (2025)</p>
//                             <ul className="text-[11px] text-gray-300 space-y-2">
//                                 <li>🔹 **Agentes de IA:** AgentMaker / N8N (Sem Codar)</li>
//                                 <li>🔹 **Mobile:** Desenvolvimento Flutter (Extecamp Unicamp)</li>
//                                 <li>🔹 **Automação:** Python RPA & Selenium</li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="mt-auto pt-4 border-t border-white/10 text-center">
//                         <p className="text-[10px] text-gray-500 uppercase tracking-widest">Votorantim, SP | Disponível para Projetos Globais</p>
//                     </div>
//                 </SwiperSlide>
//             </Swiper>
//         </div>
//     );
// };

// export default CVModal;