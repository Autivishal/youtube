import { useState } from 'react';
import { usePopulationTicker } from './hooks/usePopulationTicker';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { CountryGrid } from './components/CountryGrid';

export function App() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [dataType, setDataType] = useState<'population' | 'gdp'>('population');

  const { worldStats, countries } = usePopulationTicker(soundEnabled);

  const handleToggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  const handleToggleDataType = () => {
    setDataType((prev) => (prev === 'population' ? 'gdp' : 'population'));
  };

  return (
    <div className="min-h-screen w-full bg-slate-100 text-slate-900 flex flex-col py-[100px] overflow-x-hidden font-sans antialiased selection:bg-red-500 selection:text-white">
      <Header
        worldStats={worldStats}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        dataType={dataType}
        onToggleDataType={handleToggleDataType}
      />

      <Banner dataType={dataType} />

      <main className="flex-1 min-h-0 flex flex-col transition-all duration-300">
        <CountryGrid countries={countries} dataType={dataType} />
      </main>
    </div>
  );
}

export default App;
