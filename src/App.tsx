import { useEffect } from 'react';
import Contact from './components/Contact';
import Expertise from './components/Expertise';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import WhatsAppButton from './components/WhatsAppButton';
0

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

        <section id="servicos">
          <Services />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="expertise">
          <Expertise />
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




