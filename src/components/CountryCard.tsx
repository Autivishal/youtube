import { useState } from 'react';
import type { LiveCountry } from '../hooks/usePopulationTicker';

interface CountryCardProps {
    country: LiveCountry;
    dataType?: 'population' | 'gdp';
    dynamicRank?: number;
}

export const CountryCard = ({ country, dataType = 'population', dynamicRank }: CountryCardProps) => {
    const [imgError, setImgError] = useState(false);

    const formatNumber = (num: number) => {
        return num.toLocaleString('en-US');
    };

    const flagUrl = `https://flagcdn.com/w40/${country.code}.png`;
    const staticRank = dataType === 'gdp' ? country.gdpRank : country.rank;
    const displayRank = dynamicRank ?? staticRank;

    // Highlight styles
    let bgStyle = '';
    let textStyle = 'text-gray-900';

    if (dataType === 'population') {
        if (country.popPulsing) {
            bgStyle = 'bg-emerald-50/60';
            textStyle = 'text-emerald-600';
        }
    } else {
        if (country.gdpDirection === 'up') {
            bgStyle = 'bg-emerald-50/60';
            textStyle = 'text-emerald-600';
        } else if (country.gdpDirection === 'down') {
            bgStyle = 'bg-red-50/60';
            textStyle = 'text-red-600';
        }
    }

    return (
        <div
            className={`flex items-center justify-between py-[1px] px-0.5 sm:py-1 sm:px-2 rounded transition-all duration-200 border border-transparent hover:border-gray-200 hover:bg-gray-50 leading-none ${bgStyle}`}
        >
            {/* Left side: Rank + Flag + Name */}
            <div className="flex items-center gap-0.5 sm:gap-2 min-w-0 flex-1">
                <span className="w-3.5 sm:w-5 text-[8px] sm:text-xs font-bold text-gray-400 font-mono text-right flex-shrink-0">
                    {displayRank}
                </span>

                <div className="w-3 h-2 sm:w-5 sm:h-3.5 flex-shrink-0 flex items-center justify-center overflow-hidden rounded-[1px] border border-gray-200 bg-gray-100">
                    {!imgError ? (
                        <img
                            src={flagUrl}
                            alt={`${country.name} flag`}
                            className="w-full h-full object-cover"
                            onError={() => setImgError(true)}
                            loading="lazy"
                        />
                    ) : (
                        <span className="text-[8px] sm:text-xs leading-none">{country.flagEmoji}</span>
                    )}
                </div>

                <span className="text-[8px] xs:text-[9px] sm:text-xs font-bold text-gray-800 tracking-tight truncate max-w-[40px] xs:max-w-[60px] sm:max-w-[130px] leading-tight">
                    {country.name}
                </span>
            </div>

            {/* Right side: Live Population or Live GDP Count */}
            <div className="text-right flex-shrink-0 pl-0.5">
                <span
                    className={`text-[7.5px] xs:text-[8.5px] sm:text-xs font-black font-mono tracking-tighter transition-colors duration-150 leading-tight ${textStyle}`}
                >
                    {dataType === 'population'
                        ? formatNumber(country.currentPopulation)
                        : `$${formatNumber(country.currentGDP)}`}
                </span>
            </div>
        </div>
    );
};
