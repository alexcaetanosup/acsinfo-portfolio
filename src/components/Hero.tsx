import { Bot, ChevronDown, MessageSquare, Send, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
    const [showProjects, setShowProjects] = useState(false);
    const [showSpecialties, setShowSpecialties] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [chatMessage, setChatMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [count, setCount] = useState(0);

    // Contador de Acessos Reais
    useEffect(() => {
        const savedVisits = localStorage.getItem('portfolio_visits');
        const currentVisits = savedVisits ? parseInt(savedVisits) + 1 : 1247;
        localStorage.setItem('portfolio_visits', currentVisits.toString());

        let start = 0;
        const duration = 2000;
        const increment = currentVisits / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= currentVisits) {
                setCount(currentVisits);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, []);

    // Envio para WhatsApp com "Delay de Pensamento"
    const handleSendMessage = () => {
        const messageTrimmed = chatMessage.trim();
        if (!messageTrimmed || isTyping) return;

        setIsTyping(true);
        setTimeout(() => {
            // LEMBRETE: Insira seu número real abaixo (55 + DDD + Número)
            const phoneNumber = "5515997686416";
            const encodedText = encodeURIComponent(`Olá Alex! Vi seu portfólio e tenho uma dúvida: ${messageTrimmed}`);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

            setIsTyping(false);
            setChatMessage('');
            setIsChatOpen(false);
        }, 1500);
    };

    return (
        <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden bg-black text-white selection:bg-blue-500/30 font-sans">

            {/* Background Estilizado */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_transparent_70%)] opacity-60 -z-10" />

            {/* Badge de Acessos */}
            <div className="absolute top-10 flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2 rounded-full backdrop-blur-md shadow-2xl animate-in fade-in duration-1000">
                <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </div>
                <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">
                    Acessos Reais: <span className="text-blue-400 tabular-nums">{count.toLocaleString()}</span>
                </span>
            </div>

            {/* CONTEÚDO CENTRAL COM ANIMAÇÃO DE ENTRADA */}
            <div className="max-w-5xl text-center z-10 space-y-8">

                {/* Título com Efeito Slide-Up e Fade */}
                <div className="space-y-2 overflow-hidden">
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase italic leading-none animate-in slide-in-from-bottom-full duration-1000 ease-out">
                        Engenharia
                    </h1>
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase italic leading-none text-blue-500 underline decoration-blue-500/20 decoration-8 underline-offset-8 animate-in slide-in-from-bottom-full duration-1000 delay-150 ease-out">
                        de Ponta
                    </h1>
                </div>

                {/* Subtítulo com Fade-In Tardio */}
                <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed animate-in fade-in duration-1000 delay-500">
                    Fullstack Developer & Técnico em Eletrônica.
                    Arquiteturas escaláveis com a precisão do hardware.
                </p>

                {/* Botões com Balões Ovais Laterais */}
                <div className="pt-12 flex flex-col sm:flex-row gap-12 justify-center items-center relative animate-in fade-in zoom-in duration-1000 delay-700">

                    {/* Botão Projetos */}
                    <div className="relative">
                        {showProjects && (
                            <div className="absolute right-full mr-12 top-1/2 -translate-y-1/2 w-[300px] h-[160px] bg-blue-900/20 border border-blue-500/30 p-8 flex flex-col justify-center shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-right-8 duration-300 z-50 rounded-[100%_/_50%] text-center">
                                <div className="absolute -right-[12px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[15px] border-l-blue-500/30"></div>
                                <h4 className="text-[11px] font-black text-blue-400 mb-2 uppercase tracking-widest">🚀 Projetos</h4>
                                <ul className="text-[10px] space-y-1 text-gray-300 list-disc list-inside">
                                    <li>Modernização de Sistemas Legados (Vue/TS/React)</li>
                                    <li>Dashboards Executivos Integrados (Power BI/SQL)</li>
                                    <li>Automação de Processos com IA e RPA (N8N/Python)</li>
                                    <li>Criação de Apps Mobile Multiplataforma (Flutter)</li>
                                </ul>
                            </div>
                        )}
                        <button
                            onMouseEnter={() => setShowProjects(true)} onMouseLeave={() => setShowProjects(false)}
                            className="px-10 py-5 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all font-black text-xs tracking-[0.2em] uppercase rounded-sm active:scale-95 shadow-lg shadow-blue-500/10"
                        >
                            Iniciar Projeto
                        </button>
                    </div>

                    {/* Botão Especialidades */}
                    <div className="relative">
                        {showSpecialties && (
                            <div className="absolute left-full ml-12 top-1/2 -translate-y-1/2 w-[300px] h-[160px] bg-purple-900/20 border border-purple-500/30 p-8 flex flex-col justify-center shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-left-8 duration-300 z-50 rounded-[100%_/_50%] text-center">
                                <div className="absolute -left-[12px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[15px] border-r-purple-500/30"></div>
                                <h4 className="text-[11px] font-black text-purple-400 mb-2 uppercase tracking-widest">🧠 Skills</h4>
                                <div className="grid grid-cols-2 gap-2 text-[10px] text-gray-400 font-mono">
                                    <li>Arquitetura Frontend Moderna</li>
                                    <li>Engenharia de Dados & BI</li>
                                    <li>Integração de Agentes IA</li>
                                    <li>Gestão de TI Crítica (Saúde)</li>
                                    <li>Infraestrutura & Redes (Unicamp)</li>
                                    <li>Automação Selenium/RPA</li>
                                </div>
                            </div>
                        )}
                        <button
                            onMouseEnter={() => setShowSpecialties(true)} onMouseLeave={() => setShowSpecialties(false)}
                            className="px-10 py-5 border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all font-black text-xs tracking-[0.2em] uppercase rounded-sm active:scale-95 shadow-lg shadow-purple-500/10"
                        >
                            Especialidades
                        </button>
                    </div>
                </div>
            </div>

            {/* CHAT IA / WHATSAPP */}
            <div className="fixed bottom-8 right-8 z-[100]">
                {isChatOpen ? (
                    <div className="w-[320px] h-[480px] bg-[#0d0d0d] border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,1)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-12 duration-500 backdrop-blur-2xl">
                        <div className="p-5 bg-blue-600 flex justify-between items-center shadow-lg text-white">
                            <div className="flex items-center gap-3 font-bold text-[10px] tracking-widest uppercase italic">
                                <Bot size={16} /> ACSInfo ASSISTANT
                            </div>
                            <button onClick={() => setIsChatOpen(false)} className="hover:rotate-90 transition-transform"><X size={20} /></button>
                        </div>
                        <div className="flex-1 p-6 overflow-y-auto text-[11px] space-y-4 text-gray-400 scrollbar-hide">
                            <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5 leading-relaxed">
                                Olá! Sou o assistente do Alex. Escreva sua dúvida e eu te levo ao WhatsApp dele.
                            </div>
                            {isTyping && (
                                <div className="flex items-center gap-2 text-blue-400 italic animate-pulse">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></span>
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                    Processando...
                                </div>
                            )}
                        </div>
                        <div className="p-4 bg-white/[0.02] border-t border-white/5 flex gap-2 items-center">
                            <input
                                value={chatMessage}
                                onChange={(e) => setChatMessage(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                                disabled={isTyping}
                                type="text"
                                placeholder={isTyping ? "Aguarde..." : "Sua dúvida aqui..."}
                                className="bg-white/5 flex-1 p-3 rounded-xl text-[10px] outline-none border border-white/10 focus:border-blue-500 transition-all text-white placeholder:text-gray-600"
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={isTyping}
                                className="bg-blue-600 p-3 rounded-xl hover:bg-blue-500 transition-all active:scale-90 text-white shadow-lg shadow-blue-600/20 disabled:opacity-50"
                            >
                                <Send size={14} />
                            </button>
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={() => setIsChatOpen(true)}
                        className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce text-white"
                    >
                        <MessageSquare size={28} />
                    </button>
                )}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 flex flex-col items-center gap-2 opacity-30 text-blue-500">
                <span className="text-[8px] uppercase tracking-[0.4em] font-black">ACSInfo</span>
                <ChevronDown className="animate-bounce" size={16} />
            </div>
        </section>
    );
};

export default Hero;


// import { Bot, ChevronDown, MessageSquare, Send, X } from 'lucide-react';
// import React, { useEffect, useState } from 'react';

// const Hero: React.FC = () => {
//     // Estados de UI
//     const [showProjects, setShowProjects] = useState(false);
//     const [showSpecialties, setShowSpecialties] = useState(false);
//     const [isChatOpen, setIsChatOpen] = useState(false);
//     const [chatMessage, setChatMessage] = useState('');
//     const [isTyping, setIsTyping] = useState(false);
//     const [count, setCount] = useState(0);

//     // Contador de Acessos com Persistência Local
//     useEffect(() => {
//         const savedVisits = localStorage.getItem('portfolio_visits');
//         const currentVisits = savedVisits ? parseInt(savedVisits) + 1 : 1247;
//         localStorage.setItem('portfolio_visits', currentVisits.toString());

//         let start = 0;
//         const duration = 2000;
//         const increment = currentVisits / (duration / 16);

//         const timer = setInterval(() => {
//             start += increment;
//             if (start >= currentVisits) {
//                 setCount(currentVisits);
//                 clearInterval(timer);
//             } else {
//                 setCount(Math.floor(start));
//             }
//         }, 16);
//         return () => clearInterval(timer);
//     }, []);

//     // Lógica de Envio com Animação de IA
//     const handleSendMessage = () => {
//         const messageTrimmed = chatMessage.trim();
//         if (!messageTrimmed || isTyping) return;

//         setIsTyping(true);

//         // Simula a IA "processando" por 1.5 segundos
//         setTimeout(() => {
//             // SUBSTITUA PELO SEU NÚMERO REAL: Apenas números!
//             const phoneNumber = "5515997686416";
//             const encodedText = encodeURIComponent(`Olá Alex! Vi seu portfólio e tenho uma dúvida: ${messageTrimmed}`);
//             const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

//             window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

//             setIsTyping(false);
//             setChatMessage('');
//             setIsChatOpen(false);
//         }, 1500);
//     };

//     return (
//         <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden bg-black text-white selection:bg-blue-500/30 font-sans">

//             {/* Efeito de Fundo */}
//             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_transparent_70%)] opacity-60 -z-10" />

//             {/* Badge de Acessos Reais */}
//             <div className="absolute top-10 flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2 rounded-full backdrop-blur-md shadow-2xl">
//                 <div className="relative flex h-2 w-2">
//                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
//                     <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
//                 </div>
//                 <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold">
//                     Acessos Reais: <span className="text-blue-400 tabular-nums">{count.toLocaleString()}</span>
//                 </span>
//             </div>

//             {/* Conteúdo Central */}
//             <div className="max-w-5xl text-center space-y-8 z-10">
//                 <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase italic leading-none">
//                     Engenharia<br />
//                     <span className="text-blue-500 underline decoration-blue-500/20 decoration-8 underline-offset-8 font-black"> de Ponta</span>
//                 </h1>

//                 <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
//                     Fullstack Developer & Técnico em Eletrônica.
//                     Unindo código de alta performance com visão estratégica de infraestrutura.
//                 </p>

//                 {/* Botões com Balões Ovais Laterais */}
//                 <div className="pt-12 flex flex-col sm:flex-row gap-12 justify-center items-center relative">

//                     <div className="relative">
//                         {showProjects && (
//                             <div className="absolute right-full mr-12 top-1/2 -translate-y-1/2 w-[320px] h-[180px] bg-blue-900/20 border border-blue-500/30 p-8 flex flex-col justify-center shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-right-8 duration-300 z-50 rounded-[100%_/_50%] text-center">
//                                 <div className="absolute -right-[12px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[15px] border-l-blue-500/30"></div>
//                                 <h4 className="text-[11px] font-black text-blue-400 mb-2 uppercase tracking-widest">🚀 Projetos</h4>
//                                 <ul className="text-[10px] space-y-1 text-gray-300 list-disc list-inside">
//                                     <li>Sistemas CRM</li>
//                                     <li>Automação RPA</li>
//                                     <li>Dashboards BI</li>
//                                 </ul>
//                             </div>
//                         )}
//                         <button
//                             onMouseEnter={() => setShowProjects(true)} onMouseLeave={() => setShowProjects(false)}
//                             className="px-10 py-5 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all font-black text-xs tracking-[0.2em] uppercase rounded-sm"
//                         >
//                             Iniciar Projeto
//                         </button>
//                     </div>

//                     <div className="relative">
//                         {showSpecialties && (
//                             <div className="absolute left-full ml-12 top-1/2 -translate-y-1/2 w-[320px] h-[180px] bg-purple-900/20 border border-purple-500/30 p-8 flex flex-col justify-center shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-left-8 duration-300 z-50 rounded-[100%_/_50%] text-center">
//                                 <div className="absolute -left-[12px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[15px] border-r-purple-500/30"></div>
//                                 <h4 className="text-[11px] font-black text-purple-400 mb-2 uppercase tracking-widest">🧠 Skills</h4>
//                                 <div className="grid grid-cols-2 gap-2 text-[9px] text-gray-400 font-mono">
//                                     <span>React/Vue</span>
//                                     <span>Node.js</span>
//                                     <span>IA Gen</span>
//                                     <span>Infra</span>
//                                 </div>
//                             </div>
//                         )}
//                         <button
//                             onMouseEnter={() => setShowSpecialties(true)} onMouseLeave={() => setShowSpecialties(false)}
//                             className="px-10 py-5 border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all font-black text-xs tracking-[0.2em] uppercase rounded-sm"
//                         >
//                             Especialidades
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Chat de IA / WhatsApp */}
//             <div className="fixed bottom-8 right-8 z-[100]">
//                 {isChatOpen ? (
//                     <div className="w-[320px] h-[480px] bg-[#0d0d0d] border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,1)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-12 duration-500 backdrop-blur-2xl">
//                         <div className="p-5 bg-blue-600 flex justify-between items-center shadow-lg text-white">
//                             <div className="flex items-center gap-3 font-bold text-[10px] tracking-widest uppercase italic">
//                                 <Bot size={16} /> ACS_ASSISTANT
//                             </div>
//                             <button onClick={() => setIsChatOpen(false)} className="hover:rotate-90 transition-transform"><X size={20} /></button>
//                         </div>

//                         <div className="flex-1 p-6 overflow-y-auto text-[11px] space-y-4 text-gray-400 scrollbar-hide">
//                             <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/5 leading-relaxed">
//                                 Olá! Sou o assistente virtual do Alex. Digite sua dúvida abaixo e eu te conectarei ao WhatsApp dele.
//                             </div>

//                             {isTyping && (
//                                 <div className="flex items-center gap-2 text-blue-400 italic animate-pulse">
//                                     <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></span>
//                                     <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
//                                     <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
//                                     Processando...
//                                 </div>
//                             )}
//                         </div>

//                         <div className="p-4 bg-white/[0.02] border-t border-white/5 flex gap-2 items-center">
//                             <input
//                                 value={chatMessage}
//                                 onChange={(e) => setChatMessage(e.target.value)}
//                                 onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
//                                 disabled={isTyping}
//                                 type="text"
//                                 placeholder={isTyping ? "Aguarde..." : "Sua dúvida aqui..."}
//                                 className="bg-white/5 flex-1 p-3 rounded-xl text-[10px] outline-none border border-white/10 focus:border-blue-500 transition-all text-white placeholder:text-gray-600 disabled:opacity-50"
//                             />
//                             <button
//                                 onClick={handleSendMessage}
//                                 disabled={isTyping}
//                                 className="bg-blue-600 p-3 rounded-xl hover:bg-blue-500 transition-all active:scale-90 text-white shadow-lg shadow-blue-600/20 disabled:grayscale"
//                             >
//                                 <Send size={14} />
//                             </button>
//                         </div>
//                     </div>
//                 ) : (
//                     <button
//                         onClick={() => setIsChatOpen(true)}
//                         className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce text-white"
//                     >
//                         <MessageSquare size={28} />
//                     </button>
//                 )}
//             </div>

//             <div className="absolute bottom-10 flex flex-col items-center gap-2 opacity-30 text-blue-500">
//                 <ChevronDown className="animate-bounce" />
//             </div>
//         </section>
//     );
// };

// export default Hero;

