import { useEffect } from 'react';
import Contact from './components/Contact';
import Expertise from './components/Expertise';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        // Verifica se não está digitando em um input para não atrapalhar o usuário
        const target = event.target as HTMLElement;
        if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Adicionei os IDs explicitamente nas seções */}
        <section id="home">
          <Hero />
        </section>
        <section id="expertize">
          <Expertise />
        </section>

        <section id="servicos">
          <Services />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="contato">
          <Contact />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;




// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Portifolio from './components/Portfolio';
// import Services from './components/Services';
// import WhatsAppButton from './components/WhatsAppButton';

// function App() {
//   return (
//     /* Remova qualquer classe 'bg-black' que possa estar aqui */
//     <div className="min-h-screen bg-[#1a1a1c] selection:bg-[#d4af37] selection:text-black scroll-smooth">
//       <Header />

//       <main>
//         {/* O ID aqui deve bater com o href='#home' do menu */}
//         <section id="home">
//           <Hero />
//         </section>

//         {/* O ID aqui deve bater com o href='#services' do menu */}
//         <section id="services">
//           <Services />
//         </section>

//         {/* O ID aqui deve bater com o href='#portfolio' do menu */}
//         <section id="portfolio">
//           <Portifolio />
//         </section>

//         {/* O ID aqui deve bater com o href='#contact' do menu */}
//         <section id="contact">
//           <Contact />
//         </section>
//       </main>
//       <Footer />
//       <WhatsAppButton />
//     </div>
//   );
// }

// export default App;