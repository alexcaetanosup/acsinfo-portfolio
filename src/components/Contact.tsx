import React, { useEffect } from 'react';

const Contact: React.FC = () => {
    const whatsappNumber = "5515997686416";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá Alex! Vi seu site e gostaria de solicitar um orçamento de consultoria.`;

    useEffect(() => {
        const handleEscape = (e: any) => {
            if (e?.key === 'Escape') {
                const target = e.target as HTMLElement;
                if (target?.tagName !== 'INPUT' && target?.tagName !== 'TEXTAREA') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    return (
        <section id="contact" className="py-16 md:py-24 px-6 bg-[#1a1a1c]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

                {/* LADO ESQUERDO: INFORMAÇÕES - Alinhamento adaptado */}
                <div className="space-y-8 text-center md:text-left">
                    <div>
                        <h2 className="text-sm uppercase tracking-[0.3em] text-[#d4af37] font-bold mb-4">
                            Contato Direto
                        </h2>
                        <p className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                            Vamos tirar o seu <br className="hidden md:block" /> projeto do papel?
                        </p>
                    </div>

                    <div className="space-y-6 flex flex-col items-center md:items-start">
                        <div className="text-[#a8a8b3] font-light leading-relaxed max-w-md text-sm md:text-base">
                            <p>Especialista em desenvolvimento Fullstack e arquitetura de sistemas.</p>
                            <p className="mt-2 text-xs opacity-70">Baseado em Votorantim - SP.</p>
                        </div>

                        <div className="flex flex-col space-y-5 pt-4 w-full sm:w-auto">
                            <a href={whatsappUrl} target="_blank" rel="noreferrer"
                                className="text-white hover:text-[#d4af37] transition-colors flex items-center gap-3 group text-sm md:text-base justify-center md:justify-start">
                                <span className="w-8 h-[1px] bg-gray-700 group-hover:bg-[#d4af37] transition-all hidden sm:block"></span>
                                WhatsApp: (15) 99768-6416
                            </a>

                            <a href="https://github.com/alexcaetanosup/alexcaetanosup" target="_blank" rel="noreferrer"
                                className="text-white hover:text-[#d4af37] transition-colors flex items-center gap-3 group text-sm md:text-base justify-center md:justify-start">
                                <span className="w-8 h-[1px] bg-gray-700 group-hover:bg-[#d4af37] transition-all hidden sm:block"></span>
                                GitHub Professional
                            </a>
                            <a href="https://www.linkedin.com/in/alex-caetano-dos-santos/" target="_blank" rel="noreferrer"
                                className="text-white hover:text-[#d4af37] transition-colors flex items-center gap-3 group text-sm md:text-base justify-center md:justify-start">
                                <span className="w-8 h-[1px] bg-gray-700 group-hover:bg-[#d4af37] transition-all hidden sm:block"></span>
                                LinkedIn Professional
                            </a>
                        </div>
                    </div>
                </div>

                {/* LADO DIREITO: FORMULÁRIO */}
                <div className="bg-brand-deep text-white p-6 md:p-8 border border-gray-800 rounded-sm shadow-2xl">
                    <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                        <input type="hidden" name="access_key" value="bba34a22-4b8b-49ca-b0a1-9357f5445079" />
                        {/* <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_KEY} /> */}

                        <input type="hidden" name="redirect" value="https://www.acsinfo.net.br/obrigado" />
                        <input type="hidden" name="from_name" value="Site ACS Info" />
                        <input type="hidden" name="subject" value="Novo Contato de Consultoria" />

                        <div className="flex flex-col space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Nome</label>
                            <input type="text" name="name" required className="bg-transparent border-b border-gray-800 py-2 focus:border-[#d4af37] outline-none text-white transition-colors text-sm" />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Email</label>
                            <input type="email" name="email" required className="bg-transparent border-b border-gray-800 py-2 focus:border-[#d4af37] outline-none text-white transition-colors text-sm" />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Mensagem</label>
                            <textarea name="message" rows={4} required className="bg-transparent border-b border-gray-800 py-2 focus:border-[#d4af37] outline-none text-white transition-colors resize-none text-sm"></textarea>
                        </div>

                        <button type="submit" className="w-full bg-[#d4af37] py-4 font-bold uppercase text-xs tracking-[0.2em] text-black hover:bg-white transition-all active:scale-95">
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>
        </section >
    );
};

export default Contact;



// import React, { useEffect } from 'react';

// const Contact: React.FC = () => {
//     // 1. Declarar as variáveis LOGO NO INÍCIO do componente
//     const whatsappNumber = "5515997686416";
//     const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá Alex! Vi seu site e gostaria de solicitar um orçamento de consultoria.`;

//     // 2. Lógica de teclado protegida
//     useEffect(() => {
//         const handleEscape = (e: any) => {
//             if (e?.key === 'Escape') {
//                 const target = e.target as HTMLElement;
//                 if (target?.tagName !== 'INPUT' && target?.tagName !== 'TEXTAREA') {
//                     window.scrollTo({ top: 0, behavior: 'smooth' });
//                 }
//             }
//         };
//         window.addEventListener('keydown', handleEscape);
//         return () => window.removeEventListener('keydown', handleEscape);
//     }, []);

//     return (
//         <section id="contact" className="py-24 px-6 bg-[#1a1a1c]">
//             <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

//                 {/* LADO ESQUERDO: INFORMAÇÕES */}
//                 <div className="space-y-8">
//                     <div>
//                         <h2 className="text-sm uppercase tracking-[0.3em] text-[#d4af37] font-bold mb-4">
//                             Contato Direto
//                         </h2>
//                         <p className="text-4xl font-bold tracking-tight text-white leading-tight">
//                             Vamos tirar o seu <br /> projeto do papel?
//                         </p>
//                     </div>

//                     <div className="space-y-6">
//                         <div className="text-[#a8a8b3] font-light leading-relaxed max-w-md">
//                             <p>Especialista em desenvolvimento Fullstack e arquitetura de sistemas.</p>
//                             <p className="mt-2 text-xs opacity-70">Baseado em Votorantim - SP.</p>
//                         </div>

//                         <div className="flex flex-col space-y-4 pt-4">
//                             {/* O LINK QUE ESTAVA DANDO ERRO AGORA ESTÁ SEGURO */}
//                             <a href={whatsappUrl} target="_blank" rel="noreferrer"
//                                 className="text-white hover:text-[#d4af37] transition-colors flex items-center gap-3 group text-sm md:text-base">
//                                 <span className="w-8 h-[1px] bg-gray-700 group-hover:bg-[#d4af37] transition-all"></span>
//                                 WhatsApp: (15) 99768-6416
//                             </a>

//                             <a href="https://github.com/alexcaetanosup/alexcaetanosup" target="_blank" rel="noreferrer"
//                                 className="text-white hover:text-[#d4af37] transition-colors flex items-center gap-3 group text-sm md:text-base">
//                                 <span className="w-8 h-[1px] bg-gray-700 group-hover:bg-[#d4af37] transition-all"></span>
//                                 GitHub Professional
//                             </a>
//                             <a href="https://www.linkedin.com/in/alex-caetano-dos-santos/" target="_blank" rel="noreferrer"
//                                 className="text-white hover:text-[#d4af37] transition-colors flex items-center gap-3 group text-sm md:text-base">
//                                 <span className="w-8 h-[1px] bg-gray-700 group-hover:bg-[#d4af37] transition-all"></span>
//                                 LinkedIn Professional
//                             </a>
//                         </div>
//                     </div>
//                 </div>

//                 <div className=" bg-brand-deep text-white p-8 border border-gray-800 rounded-sm shadow-2xl">
//                     <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
//                         <input type="hidden" name="apikey" value={import.meta.env.VITE_WEB3FORMS_KEY} />

//                         <div className="flex flex-col space-y-2 bg-brand-deep">
//                             <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Nome</label>
//                             <input type="text" name="name" required className="bg-transparent border-b border-gray-800 py-2 focus:border-[#d4af37] outline-none text-white transition-colors" />
//                         </div>

//                         <div className="flex flex-col space-y-2">
//                             <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Email</label>
//                             <input type="email" name="email" required className="bg-transparent border-b border-gray-800 py-2 focus:border-[#d4af37] outline-none text-white transition-colors" />
//                         </div>

//                         <div className="flex flex-col space-y-2">
//                             <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Mensagem</label>
//                             <textarea name="message" rows={4} required className="bg-transparent border-b border-gray-800 py-2 focus:border-[#d4af37] outline-none text-white transition-colors resize-none"></textarea>
//                         </div>

//                         <button type="submit" className="w-full bg-[#d4af37] py-4 font-bold uppercase text-xs tracking-[0.2em] text-black hover:bg-white transition-all">
//                             Enviar Mensagem
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </section >
//     );
// };

// export default Contact;


