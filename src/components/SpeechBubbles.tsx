import React from 'react';
// 1. Corrigimos a importação: Swiper e SwiperSlide vêm de 'swiper/react'
import { Swiper, SwiperSlide } from 'swiper/react';

// 2. Importamos os estilos base e dos módulos que vamos usar
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// 3. Corrigimos a importação dos módulos de 'swiper/modules'
import { EffectFlip, Navigation, Pagination } from 'swiper/modules';

const SpeechBubblesSlide: React.FC = () => {
    return (
        <div className="w-full h-full">
            <Swiper
                // 4. Injetamos os módulos necessários
                modules={[EffectFlip, Navigation, Pagination]}
                // 5. Ativamos o efeito de flip e componentes de navegação
                effect={'flip'}
                grabCursor={true}
                pagination={{ clickable: true }}
                navigation={true}
                className="mySwiper w-full h-full"
            >
                <SwiperSlide className="bg-[#151515] p-10 flex flex-col h-full border border-white/10 overflow-y-auto">
                    <h3 className="text-xl font-bold text-white mb-8">Vamos Conversar?</h3>

                    <div className="flex flex-col gap-10">
                        {/* BALÃO 1: INICIAR PROJETOS */}
                        <div className="relative bg-blue-600/10 border border-blue-500/30 p-6 rounded-3xl rounded-bl-none text-gray-200 shadow-lg">
                            <div className="absolute -left-[16px] bottom-0 w-0 h-0 border-r-[16px] border-r-blue-500/30 border-t-[16px] border-t-transparent"></div>

                            <h4 className="text-sm font-bold text-blue-400 mb-3 flex items-center gap-2">
                                🚀 <span className="uppercase tracking-wider">Iniciar Projetos</span>
                            </h4>
                            <ul className="text-[11px] leading-relaxed space-y-2 list-disc list-inside text-gray-300">
                                <li>Modernização de Sistemas Legados (Vue/TS/React)</li>
                                <li>Dashboards Executivos Integrados (Power BI/SQL)</li>
                                <li>Automação de Processos com IA e RPA (N8N/Python)</li>
                                <li>Criação de Apps Mobile Multiplataforma (Flutter)</li>
                            </ul>
                        </div>

                        {/* BALÃO 2: ESPECIALIDADES */}
                        <div className="relative bg-purple-600/10 border border-purple-500/30 p-6 rounded-3xl rounded-br-none text-gray-200 shadow-lg">
                            <div className="absolute -right-[16px] bottom-0 w-0 h-0 border-l-[16px] border-l-purple-500/30 border-t-[16px] border-t-transparent"></div>

                            <h4 className="text-sm font-bold text-purple-400 mb-3 flex items-center gap-2">
                                🧠 <span className="uppercase tracking-wider">Especialidades</span>
                            </h4>
                            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[10px] text-gray-400">
                                <p>• Arquitetura Frontend Moderna</p>
                                <p>• Engenharia de Dados & BI</p>
                                <p>• Integração de Agentes IA Gen</p>
                                <p>• Gestão de TI Crítica (Saúde)</p>
                                <p>• Infraestrutura & Redes (Unicamp)</p>
                                <p>• Automação Selenium/RPA</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Dica: Adicione mais SwiperSlide aqui para ver o efeito de Flip! */}
            </Swiper>
        </div>
    );
};

export default SpeechBubblesSlide;