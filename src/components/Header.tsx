import { useState } from 'react';
import { Volume2, VolumeX, MessageSquare, Play, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { LiveWorldStats } from '../hooks/usePopulationTicker';

interface HeaderProps {
    worldStats: LiveWorldStats;
    soundEnabled: boolean;
    onToggleSound: () => void;
    onToggleChat: () => void;
    isChatOpen: boolean;
}

export const Header = ({
    worldStats,
    soundEnabled,
    onToggleSound,
    onToggleChat,
    isChatOpen,
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

                {/* TODAY Stats Box (Left Side on both Mobile & Desktop) */}
                <div className="flex flex-col items-start min-w-[85px] sm:min-w-[200px] flex-shrink-0">
                    <h3 className="text-[8px] sm:text-xs font-black tracking-widest text-gray-500 uppercase mb-0 sm:mb-1">
                        TODAY
                    </h3>

                    <div className="flex flex-col items-start space-y-0 sm:space-y-1">
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
                    </div>
                </div>

                {/* Vertical Divider */}
                <div className="w-px h-14 sm:h-28 bg-gray-200 flex-shrink-0" />

                {/* Current World Population & Controls (Right Side) */}
                <div className="flex-1 flex flex-col items-center justify-center text-center pl-0.5 sm:pl-0">
                    <h1 className="text-[10px] sm:text-xl md:text-2xl font-bold text-gray-600 tracking-tight mb-0">
                        Current World Population
                    </h1>

                    <div className="text-sm xs:text-base sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight font-mono my-0 sm:my-1 text-slate-800 leading-tight">
                        {formatNumber(worldStats.worldPopulation)}
                    </div>

                    {/* Action Bar (Avatar, LIVE badge, SUBSCRIBE) */}
                    <div className="flex items-center justify-center flex-wrap gap-0.5 sm:gap-2 mt-0.5">
                        <div className="w-4 h-4 sm:w-7 sm:h-7 rounded-full bg-slate-900 flex items-center justify-center border sm:border-2 border-red-500 shadow-xs overflow-hidden flex-shrink-0">
                            <span className="text-[8px] sm:text-xs font-bold text-white">🌐</span>
                        </div>

                        <div className="flex items-center gap-0.5 bg-red-600 text-white font-black text-[8px] sm:text-xs px-1 sm:px-2.5 py-0.5 rounded shadow-xs uppercase tracking-wider animate-pulse">
                            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white animate-ping" />
                            <span>LIVE</span>
                        </div>

                        <button
                            onClick={handleSubscribe}
                            className={`flex items-center gap-0.5 text-[8px] sm:text-xs font-black px-1.5 sm:px-3 py-0.5 rounded uppercase tracking-wider transition-all duration-200 shadow-xs active:scale-95 ${subscribed
                                ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                : 'bg-red-600 hover:bg-red-700 text-white'
                                }`}
                        >
                            {subscribed ? (
                                <>
                                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                    <span>SUBSCRIBED</span>
                                </>
                            ) : (
                                <>
                                    <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />
                                    <span>SUBSCRIBE</span>
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

                        <button
                            onClick={onToggleChat}
                            title="Toggle Live Chat"
                            className={`p-0.5 sm:p-1 rounded border text-[9px] flex items-center gap-0.5 ${isChatOpen ? 'bg-blue-50 text-blue-700 border-blue-300' : 'bg-gray-50 text-gray-500 border-gray-200'
                                }`}
                        >
                            <MessageSquare className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" />
                        </button>
                    </div>
                </div>

            </div>
        </header>
    );
};
