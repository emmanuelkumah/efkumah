import "./App.css";
import { About, Layout } from "./components";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-900 font-display">
        <Layout>
          <Hero />
          <About />
        </Layout>
      </div>
    </>
  );
}

export default App;
