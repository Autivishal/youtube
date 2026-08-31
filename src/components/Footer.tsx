import { useState, useEffect } from 'react';
import { ShieldCheck, Clock, RefreshCw } from 'lucide-react';

export const Footer = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <footer className="w-full bg-slate-900 text-gray-300 py-1 px-2 sm:py-2 sm:px-4 border-t border-slate-800 select-none flex-shrink-0 mt-0">
            <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-1 sm:gap-4 text-[8px] sm:text-xs">
                <div className="flex items-center gap-1 text-gray-400">
                    <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
                    <span className="truncate max-w-[120px] xs:max-w-[200px] sm:max-w-none">UN Demographic Algorithm</span>
                </div>

                <div className="flex items-center gap-1 font-mono bg-slate-800 px-1.5 py-0.5 sm:px-3 sm:py-1 rounded border border-slate-700 flex-shrink-0">
                    <Clock className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-red-500 animate-pulse" />
                    <span className="text-gray-200 font-bold text-[8px] sm:text-xs">{currentTime}</span>
                    <span className="text-[7px] sm:text-[10px] text-emerald-400 font-semibold uppercase">● LIVE</span>
                </div>

                <div className="flex items-center gap-2 text-gray-400 flex-shrink-0">
                    <span className="hidden xs:flex items-center gap-1">
                        <RefreshCw className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400 animate-spin" /> Live Ticker
                    </span>
                    <span className="text-[8px] sm:text-xs">© 2026</span>
                </div>
            </div>
        </footer>
    );
};
