import { useState } from 'react';
import type { LiveCountry } from '../hooks/usePopulationTicker';

interface CountryCardProps {
    country: LiveCountry;
}

export const CountryCard = ({ country }: CountryCardProps) => {
    const [imgError, setImgError] = useState(false);

    const formatNumber = (num: number) => {
        return num.toLocaleString('en-US');
    };

    const flagUrl = `https://flagcdn.com/w40/${country.code}.png`;

    return (
        <div
            className={`flex items-center justify-between py-0.5 px-0.5 sm:py-1 sm:px-2 rounded transition-all duration-200 border border-transparent hover:border-gray-200 hover:bg-gray-50 ${country.isPulsing ? 'bg-emerald-50/60' : ''
                }`}
        >
            {/* Left side: Rank + Flag + Name */}
            <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-1">
                <span className="w-3.5 sm:w-5 text-[9px] sm:text-xs font-bold text-gray-400 font-mono text-right flex-shrink-0">
                    {country.rank}
                </span>

                <div className="w-3.5 h-2.5 sm:w-5 sm:h-3.5 flex-shrink-0 flex items-center justify-center overflow-hidden rounded-[1px] border border-gray-200 bg-gray-100">
                    {!imgError ? (
                        <img
                            src={flagUrl}
                            alt={`${country.name} flag`}
                            className="w-full h-full object-cover"
                            onError={() => setImgError(true)}
                            loading="lazy"
                        />
                    ) : (
                        <span className="text-[9px] sm:text-xs leading-none">{country.flagEmoji}</span>
                    )}
                </div>

                <span className="text-[10px] sm:text-xs font-bold text-gray-800 tracking-tight truncate max-w-[50px] xs:max-w-[70px] sm:max-w-[130px]">
                    {country.name}
                </span>
            </div>

            {/* Right side: Live Population Count */}
            <div className="text-right flex-shrink-0 pl-1">
                <span
                    className={`text-[10px] sm:text-xs font-black font-mono tracking-tighter transition-colors duration-150 ${country.isPulsing ? 'text-emerald-600 scale-[1.02]' : 'text-gray-900'
                        }`}
                >
                    {formatNumber(country.currentPopulation)}
                </span>
            </div>
        </div>
    );
};
