import { useEffect } from 'react';
import Contact from './components/Contact';
import Expertise from './components/Expertise';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import { VisitorCounter } from './components/VisitorCounter';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
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
    <div className="min-h-screen bg-brand-dark overflow-x-hidden">
      <Header />
      <main className="relative">
        <section id="home" className="w-full">
          <Hero />
        </section>

        <section id="servicos" className="w-full px-4 md:px-0">
          <Services />
        </section>

        <section id="portfolio" className="w-full px-4 md:px-0">
          <Portfolio />
        </section>

        <section id="expertise" className="w-full px-4 md:px-0">
          <Expertise />
        </section>

        <section id="contato" className="w-full px-4 md:px-0">
          <Contact />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <VisitorCounter />
    </div>
  );
}

export default App;


// import { useEffect } from 'react';
// import Contact from './components/Contact';
// import Expertise from './components/Expertise';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Portfolio from './components/Portfolio';
// import Services from './components/Services';
// import WhatsAppButton from './components/WhatsAppButton';
// 0

// function App() {
//   useEffect(() => {
//     const handleEsc = (event: KeyboardEvent) => {
//       if (event.key === 'Escape') {
//         // Verifica se não está digitando em um input para não atrapalhar o usuário
//         const target = event.target as HTMLElement;
//         if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
//           window.scrollTo({ top: 0, behavior: 'smooth' });
//         }
//       }
//     };

//     window.addEventListener('keydown', handleEsc);
//     return () => window.removeEventListener('keydown', handleEsc);
//   }, []);
//   return (
//     <div className="min-h-screen">
//       <Header />
//       <main>
//         {/* Adicionei os IDs explicitamente nas seções */}
//         <section id="home">
//           <Hero />
//         </section>

//         <section id="servicos">
//           <Services />
//         </section>

//         <section id="portfolio">
//           <Portfolio />
//         </section>

//         <section id="expertise">
//           <Expertise />
//         </section>

//         <section id="contato">
//           <Contact />
//         </section>
//       </main>
//       <Footer />
//       <WhatsAppButton />
//     </div>
//   );
// }

// export default App;




