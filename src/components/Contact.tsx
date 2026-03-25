import React, { useEffect } from 'react';

const Contact: React.FC = () => {
    // 1. Declarar as variáveis LOGO NO INÍCIO do componente
    const whatsappNumber = "5515997686416";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá Alex! Vi seu site e gostaria de solicitar um orçamento de consultoria.`;

    // 2. Lógica de teclado protegida
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
        <section id="contact" className="py-24 px-6 bg-[#1a1a1c]">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

                {/* LADO ESQUERDO: INFORMAÇÕES */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-sm uppercase tracking-[0.3em] text-[#d4af37] font-bold mb-4">
                            Contato Direto
                        </h2>
                        <p className="text-4xl font-bold tracking-tight text-white leading-tight">
                            Vamos tirar o seu <br /> projeto do papel?
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="text-[#a8a8b3] font-light leading-relaxed max-w-md">
                            <p>Especialista em desenvolvimento Fullstack e arquitetura de sistemas.</p>
                            <p className="mt-2 text-xs opacity-70">Baseado em Votorantim - SP.</p>
                        </div>

                        <div className="flex flex-col space-y-4 pt-4">
                            {/* O LINK QUE ESTAVA DANDO ERRO AGORA ESTÁ SEGURO */}
                            <a href={whatsappUrl} target="_blank" rel="noreferrer"
                                className="text-white hover:text-[#d4af37] transition-colors flex items-center gap-3 group text-sm md:text-base">
                                <span className="w-8 h-[1px] bg-gray-700 group-hover:bg-[#d4af37] transition-all"></span>
                                WhatsApp: (15) 99768-6416
                            </a>

                            <a href="https://github.com/alexcaetanosup/alexcaetanosup" target="_blank" rel="noreferrer"
                                className="text-white hover:text-[#d4af37] transition-colors flex items-center gap-3 group text-sm md:text-base">
                                <span className="w-8 h-[1px] bg-gray-700 group-hover:bg-[#d4af37] transition-all"></span>
                                GitHub Professional
                            </a>
                            <a href="https://www.linkedin.com/in/alex-caetano-dos-santos/" target="_blank" rel="noreferrer"
                                className="text-white hover:text-[#d4af37] transition-colors flex items-center gap-3 group text-sm md:text-base">
                                <span className="w-8 h-[1px] bg-gray-700 group-hover:bg-[#d4af37] transition-all"></span>
                                LinkedIn Professional
                            </a>
                        </div>
                    </div>
                </div>

                {/* LADO DIREITO: FORMULÁRIO */}

                {/* Mimha chave na Web3Forms: bba34a22-4b8b-49ca-b0a1-9357f5445079 */}
                {/* <form action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="bba34a22-4b8b-49ca-b0a1-9357f5445079">
                        <input type="text" name="name" required>
                            <input type="email" name="email" required>
                                <textarea name="message" required></textarea>
                                <button type="submit">Submit</button>
                            </form> */}

                <div className=" bg-brand-deep text-white p-8 border border-gray-800 rounded-sm shadow-2xl">
                    <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                        <input type="hidden" name="apikey" value={import.meta.env.VITE_WEB3FORMS_KEY} />

                        <div className="flex flex-col space-y-2 bg-brand-deep">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Nome</label>
                            <input type="text" name="name" required className="bg-transparent border-b border-gray-800 py-2 focus:border-[#d4af37] outline-none text-white transition-colors" />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Email</label>
                            <input type="email" name="email" required className="bg-transparent border-b border-gray-800 py-2 focus:border-[#d4af37] outline-none text-white transition-colors" />
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Mensagem</label>
                            <textarea name="message" rows={4} required className="bg-transparent border-b border-gray-800 py-2 focus:border-[#d4af37] outline-none text-white transition-colors resize-none"></textarea>
                        </div>

                        <button type="submit" className="w-full bg-[#d4af37] py-4 font-bold uppercase text-xs tracking-[0.2em] text-black hover:bg-white transition-all">
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
//     // ... suas consts de whatsapp aqui

//     // Use este useEffect EXATAMENTE assim:
//     useEffect(() => {
//         const handleEscape = (e: any) => { // O 'any' aqui é o seu melhor amigo para o deploy sair
//             if (e?.key === 'Escape') {
//                 const target = e.target as HTMLElement;
//                 if (target && target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
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

//                 {/* LADO ESQUERDO: INFORMAÇÕES E REDES */}
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
//                             <p>
//                                 Especialista em desenvolvimento Fullstack e arquitetura de sistemas.
//                             </p>
//                             <p className="mt-2">
//                                 Atendimento independente baseado em **Votorantim - SP**.
//                             </p>
//                         </div>

//                         <div className="flex flex-col space-y-4 pt-4">
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

//                 {/* LADO DIREITO: FORMULÁRIO */}
//                 <div className="bg-[#161618] text-white p-8 border border-gray-800 rounded-sm shadow-2xl">
//                     <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
//                         {/* IMPORTANTE: Substitua pela sua chave do web3forms */}
//                         <input type="hidden" name="apikey" value="SUA_CHAVE_AQUI" />
//                         <input type="hidden" name="subject" value="Nova Mensagem do Site - Consultoria Alex" />

//                         <div className="flex flex-col space-y-2">
//                             <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Nome</label>
//                             <input
//                                 type="text"
//                                 name="name"
//                                 placeholder="Como devo te chamar?"
//                                 required
//                                 className="bg-transparent border-b border-gray-800 py-2 focus:border-[#d4af37] outline-none text-white transition-colors placeholder:text-gray-700"
//                             />
//                         </div>

//                         <div className="flex flex-col space-y-2">
//                             <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Email</label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 placeholder="seu@email.com"
//                                 required
//                                 className="bg-transparent border-b border-gray-800 py-2 focus:border-[#d4af37] outline-none text-white transition-colors placeholder:text-gray-700"
//                             />
//                         </div>

//                         <div className="flex flex-col space-y-2">
//                             <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Briefing do Projeto</label>
//                             <textarea
//                                 name="message"
//                                 rows={4}
//                                 placeholder="Descreva brevemente sua necessidade..."
//                                 required
//                                 className="bg-transparent border-b border-gray-800 py-2 focus:border-[#d4af37] outline-none text-white transition-colors resize-none placeholder:text-gray-700"
//                             ></textarea>
//                         </div>

//                         <button
//                             type="submit"
//                             className="w-full bg-[#d4af37] py-4 font-bold uppercase text-xs tracking-[0.2em] text-black hover:bg-white transition-all cursor-pointer active:scale-95"
//                         >
//                             Enviar Mensagem
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Contact;

