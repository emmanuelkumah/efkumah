import "./App.css";
import { About, Layout, Hero, Navigation } from "./components";

function App() {
  return (
    <>
      <div className="relative z-0 bg-primary font-display h-screen">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navigation />
          <Hero />
          <About />
        </div>
      </div>
    </>
  );
}

export default App;
