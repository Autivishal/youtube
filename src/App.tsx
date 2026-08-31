import { useState } from 'react';
import { usePopulationTicker } from './hooks/usePopulationTicker';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { CountryGrid } from './components/CountryGrid';
import { LiveChatDrawer } from './components/LiveChatDrawer';

export function App() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const { worldStats, countries } = usePopulationTicker(soundEnabled);

  const handleToggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  const handleToggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen w-full bg-slate-100 text-slate-900 flex flex-col py-[100px] overflow-x-hidden font-sans antialiased selection:bg-red-500 selection:text-white">
      <Header
        worldStats={worldStats}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onToggleChat={handleToggleChat}
        isChatOpen={isChatOpen}
      />

      <Banner onCommentClick={() => setIsChatOpen(true)} />

      <main className="flex-1 min-h-0 flex flex-col transition-all duration-300">
        <CountryGrid countries={countries} />
      </main>

      <LiveChatDrawer isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
}

export default App;
