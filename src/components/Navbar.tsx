import React, { useState } from 'react';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { label: 'Home', href: '#home' },
        { label: 'Serviços', href: '#servicos' }, // Ajustado para bater com o ID no App.tsx
        { label: 'Experiência', href: '#expertise' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Contato', href: '#contato' },
    ];

    return (
        <>
            {/* Botão Trigger - Fixo no topo direito */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
                className="fixed top-4 right-4 md:top-6 md:right-6 z-50 bg-brand-gold p-3 rounded-sm shadow-xl hover:scale-110 active:scale-95 transition-transform cursor-pointer"
            >
                <div className="space-y-1.5">
                    <span className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
            </button>

            {/* Overlay Escuro */}
            <div
                className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Menu Retrátil (Sidebar) - Adaptado para Mobile/Tablet */}
            <nav className={`fixed top-0 right-0 h-full w-[85%] sm:w-[400px] md:max-w-[450px] bg-brand-dark border-l border-gray-800 z-45 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full p-8 md:p-12 justify-center">
                    <span className="text-brand-gold text-[10px] md:text-xs tracking-[0.5em] uppercase mb-8 opacity-50">Navegação</span>

                    <ul className="space-y-6 md:space-y-8">
                        {menuItems.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-2xl md:text-4xl font-bold hover:text-brand-gold transition-colors tracking-tighter block"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto pt-10 border-t border-gray-900">
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-loose">
                            Votorantim - SP<br />
                            Consultoria Técnica Sênior
                        </p>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;




// import React, { useState } from 'react';

// const Navbar: React.FC = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const menuItems = [
//         { label: 'Home', href: '#home' },
//         { label: 'Serviços', href: '#services' },
//         { label: 'Experiência', href: '#experience' },
//         { Label: 'Expertise', href: '#expertise' },
//         { label: 'Contato', href: '#contact' },
//     ];

//     return (
//         <>
//             {/* Botão Trigger - Fixo no topo direito */}
//             <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="fixed top-6 right-6 z-50 bg-brand-gold p-3 rounded-sm shadow-xl hover:scale-110 transition-transform cursor-pointer"
//             >
//                 <div className="space-y-1.5">
//                     <span className={`block h-0.5 w-6 bg-black transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
//                     <span className={`block h-0.5 w-6 bg-black transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
//                     <span className={`block h-0.5 w-6 bg-black transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
//                 </div>
//             </button>

//             {/* Overlay Escuro */}
//             <div
//                 className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
//                 onClick={() => setIsOpen(false)}
//             />

//             {/* Menu Retrátil (Sidebar) */}
//             <nav className={`fixed top-0 right-0 h-full w-full max-w-[300px] bg-brand-dark border-l border-gray-800 z-45 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//                 <div className="flex flex-col h-full p-12 justify-center">
//                     <span className="text-brand-gold text-xs tracking-[0.5em] uppercase mb-8 opacity-50">Navigation</span>

//                     <ul className="space-y-8">
//                         {menuItems.map((item) => (
//                             <li key={item.label}>
//                                 <a
//                                     href={item.href}
//                                     onClick={() => setIsOpen(false)}
//                                     className="text-3xl font-bold hover:text-brand-gold transition-colors tracking-tighter"
//                                 >
//                                     {item.label}
//                                 </a>
//                             </li>
//                         ))}
//                     </ul>

//                     <div className="mt-auto pt-10 border-t border-gray-900">
//                         <p className="text-[10px] text-gray-600 uppercase tracking-widest leading-loose">
//                             Votorantim - SP<br />
//                             Consultoria Técnica Sênior
//                         </p>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     );
// };

// export default Navbar;