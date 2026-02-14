import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { CorePillars } from "./components/CorePillars";
import { Services } from "./components/Services";
import { Products } from "./components/Products";
import { TechnologyStack } from "./components/TechnologyStack";
import { InvestorSection } from "./components/InvestorSection";
import { VisionRoadmap } from "./components/VisionRoadmap";
import { Leadership } from "./components/Leadership";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Add padding to account for fixed navigation */}
      <div className="pt-20">
        <Hero />
        
        <section id="about">
          <About />
        </section>
        
        <CorePillars />
        
        <section id="services">
          <Services />
        </section>
        
        <section id="products">
          <Products />
        </section>
        
        <TechnologyStack />
        
        <section id="investors">
          <InvestorSection />
        </section>
        
        <VisionRoadmap />
        
        <Leadership />
        
        <section id="contact">
          <Contact />
        </section>
        
        <Footer />
      </div>
    </div>
  );
}
