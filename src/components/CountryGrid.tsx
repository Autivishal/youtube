import type { LiveCountry } from '../hooks/usePopulationTicker';
import { CountryCard } from './CountryCard';

interface CountryGridProps {
    countries: LiveCountry[];
    dataType?: 'population' | 'gdp';
}

export const CountryGrid = ({ countries, dataType = 'population' }: CountryGridProps) => {
    // Real-time dynamic sort by current live values
    const sortedCountries = [...countries].sort((a, b) => {
        return dataType === 'gdp'
            ? b.currentGDP - a.currentGDP
            : b.currentPopulation - a.currentPopulation;
    });

    const leftColumn = sortedCountries.slice(0, 20);
    const rightColumn = sortedCountries.slice(20, 40);

    return (
        <section className="w-full max-w-7xl mx-auto px-1 sm:px-4 py-1 sm:py-2 flex-1 min-h-0 flex flex-col overflow-hidden">
            {/* Grid Container (2 Columns Side-by-Side on ALL Screens) */}
            <div className="grid grid-cols-2 gap-x-1 sm:gap-x-4 bg-white p-1 sm:p-3 rounded-lg sm:rounded-xl border border-gray-200/80 shadow-xs flex-1 min-h-0 overflow-hidden">
                {/* Left Column: Ranks 1 to 20 */}
                <div className="flex flex-col h-full justify-between min-h-0">
                    {leftColumn.map((country, idx) => (
                        <CountryCard key={country.code} country={country} dataType={dataType} dynamicRank={idx + 1} />
                    ))}
                </div>

                {/* Right Column: Ranks 21 to 40 */}
                <div className="flex flex-col h-full justify-between min-h-0">
                    {rightColumn.map((country, idx) => (
                        <CountryCard key={country.code} country={country} dataType={dataType} dynamicRank={idx + 21} />
                    ))}
                </div>
            </div>
        </section>
    );
};
