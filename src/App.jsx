import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Community from './components/Community';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(120%_120%_at_50%_-10%,#0a0a0a_0%,#000_40%,#0a0a0a_100%)] text-neutral-100 scroll-smooth">
      <div className="fixed inset-0 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]">
        <div className="absolute inset-0 opacity-30 bg-[conic-gradient(from_180deg_at_50%_50%,#7c2d12_0deg,#a16207_120deg,#7c2d12_240deg,#a16207_360deg)]" />
      </div>
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
