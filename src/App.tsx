import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    /* Remova qualquer classe 'bg-black' que possa estar aqui */
    <div className="min-h-screen bg-[#1a1a1c] selection:bg-[#d4af37] selection:text-black scroll-smooth">
      <Header />

      <main>
        {/* O ID aqui deve bater com o href='#home' do menu */}
        <section id="home">
          <Hero />
        </section>

        {/* O ID aqui deve bater com o href='#services' do menu */}
        <section id="services">
          <Services />
        </section>

        {/* O ID aqui deve bater com o href='#contact' do menu */}
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;