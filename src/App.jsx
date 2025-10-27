import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Community from './components/Community';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <Collections />
        <Community />
      </main>
    </div>
  );
}

export default App;
