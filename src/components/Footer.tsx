import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className=" bg-brand-deep py-12 bg-brand-black border-t border-gray-900 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Lado Esquerdo: Identidade Independente */}
                <div className="text-center md:text-left space-y-1">
                    <p className="text-xs font-bold tracking-widest uppercase text-white">
                        Consultor Independente
                    </p>
                    <p className="text-[10px] text-gray-600 uppercase tracking-widest">
                        Votorantim - SP
                    </p>
                </div>

                {/* Centro: Indicador de Status (O detalhe técnico) */}
                <div className="flex items-center gap-3 border border-gray-900 px-4 py-2 rounded-full bg-brand-dark/50">
                    {/* O "LED" com animação de pulso */}
                    <div className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </div>
                    <span className="text-[11px] font-medium uppercase tracking-widest text-green-400">
                        Sistemas Online & Disponível
                    </span>
                </div>

                {/* Lado Direito: Stack e Ano */}
                <div className="text-center md:text-right">
                    <p className="text-[10px] text-gray-600 uppercase tracking-[0.2em]">
                        &copy; {new Date().getFullYear()} — Engineered with TypeScript & React
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;





// export default function Footer() {
//     return (
//         <footer className="py-12 border-t border-gray-900 text-center">
//             <p className="text-gray-500 text-sm">
//                 &copy; {new Date().getFullYear()} Specialist Consultant.
//                 Engineered with precision.
//             </p>
//         </footer>
//     );
// }