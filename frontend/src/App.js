import { useState, useCallback } from "react";
import "@/App.css";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FounderContent from "@/components/FounderContent";

function App() {
  const [splashDone, setSplashDone] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
  }, []);

  return (
    <div className="App">
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}
      <div
        style={{
          opacity: splashDone ? 1 : 0,
          transition: "opacity 0.6s ease-out",
        }}
      >
        <Navbar />
        <main>
          <Hero showContent={splashDone} />
          <Services />
          <Portfolio />
          <Results />
          <Process />
          <FounderContent />
          <Testimonials />
          <WhyChooseUs />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
