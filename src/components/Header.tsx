import React from 'react';

const Header: React.FC = () => {
    return (
        // <header className="bg-brand-deep py-12 bg-transparent border-b border-white/5 px-6">
        <header className="bg-brand-deep py-12 bg-[#1a1a1c] border-b border-gray-900 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h1 className="text-xs font-bold tracking-[0.3em] uppercase text-white">Alex Caetano</h1>
                    <p className="text-[9px] text-gray-600 uppercase tracking-widest">Fullstack & Infra</p>
                </div>

                {/* <nav className="flex items-center gap-6 border border-white/10 px-6 py-2 rounded-full bg-white/5 backdrop-blur-md">
                    {["Home", "Serviços", "Portfólio", "Contato"].map((item) => (
                        <a key={item} href={`#${item.toLowerCase().replace('ó', 'o')}`}
                            className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#d4af37] transition-colors">
                            {item}
                        </a>
                    ))}
                </nav> */}

                {/* // Dentro do seu Header.tsx, na parte da navegação: */}
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
                    <a href="#contato" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#d4af37] transition-colors">
                        Contato
                    </a>
                </nav>

                <div className="hidden md:block text-right">
                    <p className="text-[10px] font-bold tracking-widest uppercase text-[#d4af37]">Votorantim - SP</p>
                </div>
            </div>
        </header>
    );
};

export default Header;




// import React from 'react';

// const Header: React.FC = () => {
//     return (
//         <header className="bg-brand-deep py-12 bg-[#1a1a1c] border-b border-gray-900 px-6">
//             <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

//                 {/* Lado Esquerdo: Marca/Nome */}
//                 <div className="text-center md:text-left space-y-1">
//                     <h1 className="text-xs font-bold tracking-[0.3em] uppercase text-white">
//                         Alex Caetano
//                     </h1>
//                     <p className="text-[10px] text-gray-600 uppercase tracking-widest">
//                         Consultoria de Software
//                     </p>
//                 </div>

//                 {/* Centro: Navegação Minimalista (Mesmo estilo do Footer) */}
//                 <nav className="flex items-center gap-8 border border-gray-900 px-6 py-2 rounded-full bg-[#121214]/50">
//                     <a href="#home" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#d4af37] transition-colors">
//                         Home
//                     </a>
//                     <a href="#services" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#d4af37] transition-colors">
//                         Serviços
//                     </a>
//                     <a href="#contact" className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#d4af37] transition-colors">
//                         Contato
//                     </a>
//                 </nav>

//                 {/* Lado Direito: Localização/Status */}
//                 <div className="text-center md:text-right flex flex-col items-center md:items-end">
//                     <p className="text-xs font-bold tracking-widest uppercase text-[#d4af37]">
//                         Votorantim - SP
//                     </p>
//                     <div className="flex items-center gap-2">
//                         <span className="relative flex h-1.5 w-1.5">
//                             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//                             <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
//                         </span>
//                         <span className="text-[9px] text-gray-600 uppercase tracking-widest">Available for Hire</span>
//                     </div>
//                 </div>

//             </div>
//         </header>
//     );
// };

// export default Header;