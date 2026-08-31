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
        <footer className="w-full bg-slate-900 text-gray-300 py-6 px-4 border-t border-slate-800 select-none mt-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-2 text-gray-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Real-time demographic estimation algorithm based on UN World Population Prospects.</span>
                </div>

                <div className="flex items-center gap-2 font-mono bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                    <Clock className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                    <span className="text-gray-200 font-bold">{currentTime}</span>
                    <span className="text-[10px] text-emerald-400 font-semibold uppercase">● LIVE TICK</span>
                </div>

                <div className="flex items-center gap-3 text-gray-400">
                    <span className="flex items-center gap-1">
                        <RefreshCw className="w-3 h-3 text-blue-400 animate-spin" /> Live Ticker
                    </span>
                    <span>© 2026 World Population Stream</span>
                </div>
            </div>
        </footer>
    );
};
