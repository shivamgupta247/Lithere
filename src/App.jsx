import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Science from './components/Science';
import Ingredients from './components/Ingredients';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-midnight min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Science />
        <Ingredients />
        <Benefits />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
