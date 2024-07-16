import "./App.css";
import { About, Layout, Hero, Navigation } from "./components";

function App() {
  return (
    <>
      <div className="relative z-0 bg-primary font-display h-screen">
        <div>
          <Navigation />
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;
