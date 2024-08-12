import "./App.css";
import { About, Layout, Hero, Navigation, Impact, Footer } from "./components";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <div className="relative z-0 bg-primary font-display h-screen">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navigation />
            <Hero />
            <About />
            <Impact />
            <Projects />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
