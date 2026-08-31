import { useState } from 'react';
import { Volume2, VolumeX, Check, Bell } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { LiveWorldStats } from '../hooks/usePopulationTicker';

interface HeaderProps {
    worldStats: LiveWorldStats;
    soundEnabled: boolean;
    onToggleSound: () => void;
    dataType: 'population' | 'gdp';
    onToggleDataType: () => void;
}

export const Header = ({
    worldStats,
    soundEnabled,
    onToggleSound,
    dataType,
    onToggleDataType,
}: HeaderProps) => {
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = () => {
        if (!subscribed) {
            setSubscribed(true);
            confetti({
                particleCount: 80,
                spread: 70,
                origin: { y: 0.2 },
                colors: ['#ff0000', '#ffffff', '#22c55e'],
            });
        } else {
            setSubscribed(false);
        }
    };

    const formatNumber = (num: number) => {
        return num.toLocaleString('en-US');
    };

    return (
        <header className="w-full bg-white text-gray-900 border-b border-gray-200 px-1.5 sm:px-4 py-1 sm:py-3 shadow-xs select-none flex-shrink-0">
            <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-1.5 sm:gap-6">

                {/* TODAY / GDP Stats Box (Left Side on both Mobile & Desktop) */}
                <div className="flex flex-col items-start min-w-[85px] sm:min-w-[200px] flex-shrink-0 pl-2.5 sm:pl-6">
                    <h3 className="text-[8px] sm:text-xs font-black tracking-widest text-gray-500 uppercase mb-0 sm:mb-1">
                        {dataType === 'population' ? 'TODAY' : 'GLOBAL GDP'}
                    </h3>

                    <div className="flex flex-col items-start space-y-0 sm:space-y-1">
                        {dataType === 'population' ? (
                            <>
                                <div>
                                    <span className="text-[8px] sm:text-[11px] font-semibold text-gray-500 block leading-tight">
                                        Births today
                                    </span>
                                    <span className="text-[10px] sm:text-lg font-black text-gray-900 tracking-tight font-mono leading-tight">
                                        {formatNumber(worldStats.birthsToday)}
                                    </span>
                                </div>

                                <div>
                                    <span className="text-[8px] sm:text-[11px] font-semibold text-gray-500 block leading-tight">
                                        Deaths today
                                    </span>
                                    <span className="text-[10px] sm:text-lg font-black text-gray-900 tracking-tight font-mono leading-tight">
                                        {formatNumber(worldStats.deathsToday)}
                                    </span>
                                </div>

                                <div>
                                    <span className="text-[8px] sm:text-[11px] font-semibold text-gray-500 block leading-tight">
                                        Growth today
                                    </span>
                                    <span className="text-[10px] sm:text-lg font-black text-gray-900 tracking-tight font-mono leading-tight">
                                        {formatNumber(worldStats.growthToday)}
                                    </span>
                                </div>
                            </>
                        ) : (
                            <>
                                <div>
                                    <span className="text-[8px] sm:text-[11px] font-semibold text-gray-500 block leading-tight">
                                        Added Today
                                    </span>
                                    <span className="text-[10px] sm:text-lg font-black text-emerald-600 tracking-tight font-mono leading-tight">
                                        +${formatNumber(worldStats.gdpAddedToday)}
                                    </span>
                                </div>

                                <div>
                                    <span className="text-[8px] sm:text-[11px] font-semibold text-gray-500 block leading-tight">
                                        Growth / sec
                                    </span>
                                    <span className="text-[10px] sm:text-lg font-black text-emerald-600 tracking-tight font-mono leading-tight">
                                        +${formatNumber(worldStats.gdpGrowthPerSecWorld)}/s
                                    </span>
                                </div>

                                <div>
                                    <span className="text-[8px] sm:text-[11px] font-semibold text-gray-500 block leading-tight">
                                        Est. Total GDP
                                    </span>
                                    <span className="text-[10px] sm:text-lg font-black text-gray-900 tracking-tight font-mono leading-tight">
                                        $108.5 Trillion
                                    </span>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* Vertical Divider */}
                <div className="w-px h-14 sm:h-28 bg-gray-200 flex-shrink-0" />

                {/* Current World Population or GDP & Controls (Right Side) */}
                <div className="flex-1 flex flex-col items-center justify-center text-center pl-0.5 sm:pl-0">
                    <h1 className="text-[10px] sm:text-xl md:text-2xl font-bold text-gray-600 tracking-tight mb-0">
                        {dataType === 'population' ? 'Current World Population' : 'Current World GDP (Nominal)'}
                    </h1>

                    <div className="text-sm xs:text-base sm:text-4xl md:text-5xl font-black tracking-tight font-mono my-0 sm:my-1 text-slate-800 leading-tight">
                        {dataType === 'population' ? formatNumber(worldStats.worldPopulation) : `$${formatNumber(worldStats.worldGDP)}`}
                    </div>

                    {/* Action Bar (Globe Mode Toggle Button, LIVE badge, SUBSCRIBE, Mute) */}
                    <div className="flex items-center justify-center flex-wrap gap-0.5 sm:gap-2 mt-0.5">
                        <button
                            onClick={onToggleDataType}
                            title={`Click to switch to ${dataType === 'population' ? 'GDP Mode' : 'Population Mode'}`}
                            className={`flex items-center gap-1 px-1.5 sm:px-2.5 py-0.5 rounded border text-[8px] sm:text-xs font-black uppercase tracking-wider transition-all duration-200 shadow-xs active:scale-95 cursor-pointer ${dataType === 'gdp'
                                ? 'bg-amber-500 text-white border-amber-600 hover:bg-amber-600'
                                : 'bg-rose-500 text-white border-rose-600 hover:bg-rose-600 shadow-rose-500/20'
                                }`}
                        >
                            <span className="text-[10px] sm:text-xs">🌐</span>
                            <span>{dataType === 'population' ? 'POPULATION' : 'GDP ($)'}</span>
                        </button>

                        {/* Premium YouTube Live Broadcast Badge */}
                        <div className="relative flex items-center gap-1 bg-red-600 text-white font-black text-[8px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-md shadow-red-500/40 uppercase tracking-widest border border-red-500/80">
                            <span className="relative flex h-2 w-2 items-center justify-center">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white shadow-xs" />
                            </span>
                            <span className="drop-shadow-xs font-black">LIVE</span>
                        </div>

                        {/* YouTube Metallic Light Sweep & Ringing Bell Subscribe Button */}
                        <button
                            onClick={handleSubscribe}
                            className={`relative overflow-hidden flex items-center gap-1 text-[8px] sm:text-xs font-black px-2.5 sm:px-4 py-0.5 sm:py-1 rounded-full uppercase tracking-wider transition-all duration-300 shadow-md active:scale-95 cursor-pointer ${subscribed
                                ? 'bg-gray-200 text-gray-700 hover:bg-gray-300 ring-1 ring-gray-300'
                                : 'bg-red-600 hover:bg-red-700 text-white hover:shadow-red-500/40 hover:scale-105'
                                }`}
                        >
                            {/* Shimmer Light Sweep Overlay */}
                            {!subscribed && (
                                <span className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-sweep pointer-events-none" />
                            )}

                            {subscribed ? (
                                <>
                                    <Check className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-emerald-600" />
                                    <span>SUBSCRIBED</span>
                                </>
                            ) : (
                                <>
                                    <Bell className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-current animate-bell-ring text-yellow-300" />
                                    <span className="font-black tracking-wider text-white">SUBSCRIBE</span>
                                </>
                            )}
                        </button>

                        <button
                            onClick={onToggleSound}
                            title={soundEnabled ? "Mute Ticker" : "Sound Ticker"}
                            className={`p-0.5 sm:p-1 rounded border text-[9px] flex items-center gap-0.5 ${soundEnabled ? 'bg-emerald-50 text-emerald-700 border-emerald-300' : 'bg-gray-50 text-gray-500 border-gray-200'
                                }`}
                        >
                            {soundEnabled ? <Volume2 className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" /> : <VolumeX className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />}
                        </button>
                    </div>
                </div>

            </div>
        </header>
    );
};
