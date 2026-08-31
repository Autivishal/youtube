interface BannerProps {
    dataType?: 'population' | 'gdp';
}

export const Banner = ({ dataType = 'population' }: BannerProps) => {
    return (
        <div className="w-full bg-slate-50 border-b border-gray-200 py-0.5 sm:py-1.5 px-2 select-none text-center flex-shrink-0">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
                <div className={`w-full max-w-4xl text-white font-black text-[10px] sm:text-sm py-0.5 sm:py-1 px-3 rounded-md sm:rounded-xl shadow-xs uppercase tracking-wider border flex items-center justify-center gap-1.5 transition-colors duration-300 ${dataType === 'gdp' ? 'bg-amber-600 border-amber-500' : 'bg-red-600 border-red-500'
                    }`}>
                    <span>🔥</span>
                    <span>
                        {dataType === 'population'
                            ? 'TOP 40 LARGEST COUNTRIES BY POPULATION (LIVE)'
                            : 'TOP 40 LARGEST COUNTRIES BY GDP (LIVE)'}
                    </span>
                    <span>🔥</span>
                </div>
            </div>
        </div>
    );
};
