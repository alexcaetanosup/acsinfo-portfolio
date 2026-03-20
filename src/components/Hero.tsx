import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
            {/* Background Decorativo (Sutil) */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-brand-gray)_0%,_transparent_70%)] opacity-40 -z-10" />

            <div className="max-w-4xl text-center space-y-6">
                {/* <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic">
                    High-End <br />
                    <span className="text-brand-gold">Engineering</span>
                </h1> */}


                <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic">
                    Engenharia<br />
                    <span className="text-brand-gold"> de Ponta</span>
                </h1>

                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                    Especialista em arquitetura frontend e sistemas escaláveis.
                    Unindo código de alta performance com visão estratégica de infraestrutura.
                </p>

                <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-black px-10 py-4 font-bold rounded-sm hover:bg-brand-gold hover:text-white transition-all duration-300 uppercase text-sm tracking-widest">
                        Iniciar Projeto
                    </button>
                    <button className="border border-gray-700 px-10 py-4 font-bold rounded-sm hover:border-brand-gold transition-all duration-300 uppercase text-sm tracking-widest">
                        Especialidades
                    </button>
                </div>
            </div>

            {/* Indicador de Scroll */}
            <div className="absolute bottom-10 animate-bounce text-brand-gold opacity-50">
                ↓
            </div>
        </section>
    );
};

export default Hero;