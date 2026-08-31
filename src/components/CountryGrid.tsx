import type { LiveCountry } from '../hooks/usePopulationTicker';
import { CountryCard } from './CountryCard';

interface CountryGridProps {
    countries: LiveCountry[];
}

export const CountryGrid = ({ countries }: CountryGridProps) => {
    const leftColumn = countries.filter((c) => c.rank <= 20);
    const rightColumn = countries.filter((c) => c.rank > 20);

    return (
        <section className="w-full max-w-7xl mx-auto px-1 sm:px-4 py-2">
            {/* Grid Container (2 Columns Side-by-Side on ALL Screens) */}
            <div className="grid grid-cols-2 gap-1 sm:gap-4 bg-white p-1 sm:p-4 rounded-xl border border-gray-200/80 shadow-xs">
                {/* Left Column: Ranks 1 to 20 */}
                <div className="flex flex-col space-y-0.5 sm:space-y-1">
                    {leftColumn.map((country) => (
                        <CountryCard key={country.rank} country={country} />
                    ))}
                </div>

                {/* Right Column: Ranks 21 to 40 */}
                <div className="flex flex-col space-y-0.5 sm:space-y-1">
                    {rightColumn.map((country) => (
                        <CountryCard key={country.rank} country={country} />
                    ))}
                </div>
            </div>
        </section>
    );
};
