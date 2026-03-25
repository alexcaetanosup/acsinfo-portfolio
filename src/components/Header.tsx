import React from 'react';

// Link para o ícone do Github que o seu ambiente aceita

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-[100] bg-black/50 backdrop-blur-lg border-b border-white/5 font-sans">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* ÁREA DO LOGO (CANTO ESQUERDO) */}
                <div className="flex items-center gap-3 group">
                    {/* Ícone Estilizado do Logo Azul (adaptado para CSS) */}
                    <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600/20 to-blue-900/40 border border-blue-500/30 shadow-lg shadow-blue-500/10 transition-transform group-hover:scale-110">
                        {/* O "S" conectado central */}
                        <span className="text-xl font-black text-blue-400 italic tracking-tighter">
                            S
                        </span>
                        {/* Pequeno ponto de conexão (nodo) */}
                        <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    </div>

                    {/* Texto da Marca */}
                    <div className="flex flex-col">
                        <span className="text-xl font-black text-white tracking-tighter uppercase italic leading-none group-hover:text-blue-300 transition-colors">
                            ACS<span className="text-blue-500">Info</span>
                        </span>
                        <span className="text-[9px] font-medium text-gray-500 uppercase tracking-[0.2em] leading-tight">
                            Consultor Independente
                        </span>
                    </div>
                </div>

                <nav className="flex items-center gap-6 border border-white/10 px-6 py-2 rounded-full bg-white/5 backdrop-blur-md">
                    <a href="#home" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#d4af37] transition-colors">
                        Home
                    </a>
                    <a href="#servicos" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#d4af37] transition-colors">
                        Serviços
                    </a>
                    <a href="#portfolio" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#d4af37] transition-colors">
                        Portfólio
                    </a>
                    <a href="#expertise" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#d4af37] transition-colors">
                        Expertise
                    </a>
                    <a href="#contato" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#d4af37] transition-colors">
                        Contato
                    </a>
                    {/* <a href="/assets/curriculo-alex-caetano.pdf" target="_blank" rel="noreferrer"
                         className="text-[10px] uppercase tracking-widest border border-white/20 px-3 py-1 text-gray-400 hover:text-white hover:border-white/50 transition-all">
                         CV .PDF
                     </a> */}
                    {/* <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-all text-white shadow-lg shadow-blue-600/20">
                        <Code2 size={14} /> Soluções
                    </button> */}
                </nav>


                {/* Navegação (Opcional, mas recomendada para Header) */}
                {/* <nav className="flex items-center gap-6">
                    <a href="#portfolio" className="text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                        Portfolio
                    </a>
                    <a href="#contato" className="text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                        Contato
                    </a>
                    {/* Botão de Ação usando apenas Code2 */}
                {/* <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-all text-white shadow-lg shadow-blue-600/20">
                    <Code2 size={14} /> Soluções
                </button>
            </nav> */}
            </div>
        </header >
    );
};

export default Header;


// import React from 'react';

// const Header: React.FC = () => {
//     return (
//         // <header className="bg-brand-deep py-12 bg-transparent border-b border-white/5 px-6">
//         <header className="bg-brand-deep py-12 bg-[#1a1a1c] border-b border-gray-900 px-6">
//             <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
//                 <div className="text-center md:text-left">
//                     <h1 className="text-xs font-bold tracking-[0.3em] uppercase text-white">Alex Caetano</h1>
//                     <p className="text-[9px] text-gray-600 uppercase tracking-widest">Fullstack & Infra</p>
//                 </div>

//                 {/* <nav className="flex items-center gap-6 border border-white/10 px-6 py-2 rounded-full bg-white/5 backdrop-blur-md">
//                     {["Home", "Serviços", "Portfólio", "Contato"].map((item) => (
//                         <a key={item} href={`#${item.toLowerCase().replace('ó', 'o')}`}
//                             className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#d4af37] transition-colors">
//                             {item}
//                         </a>
//                     ))}
//                 </nav> */}

//                 {/* // Dentro do seu Header.tsx, na parte da navegação: */}
//                 <nav className="flex items-center gap-6 border border-white/10 px-6 py-2 rounded-full bg-white/5 backdrop-blur-md">
//                     <a href="#home" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#d4af37] transition-colors">
//                         Home
//                     </a>
//                     <a href="#servicos" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#d4af37] transition-colors">
//                         Serviços
//                     </a>
//                     <a href="#portfolio" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#d4af37] transition-colors">
//                         Portfólio
//                     </a>
//                     <a href="#expertise" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#d4af37] transition-colors">
//                         Expertise
//                     </a>
//                     <a href="#contato" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#d4af37] transition-colors">
//                         Contato
//                     </a>
//                     {/* <a href="/assets/curriculo-alex-caetano.pdf" target="_blank" rel="noreferrer"
//                         className="text-[10px] uppercase tracking-widest border border-white/20 px-3 py-1 text-gray-400 hover:text-white hover:border-white/50 transition-all">
//                         CV .PDF
//                     </a> */}
//                 </nav>

//                 <div className="hidden md:block text-right">
//                     <p className="text-[10px] font-bold tracking-widest uppercase text-[#d4af37]">Votorantim - SP</p>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;




