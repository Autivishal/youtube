interface BannerProps {
    onCommentClick?: () => void;
}

export const Banner = ({ onCommentClick }: BannerProps) => {
    return (
        <div className="w-full bg-slate-50 border-b border-gray-200 py-1.5 px-2 select-none text-center">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
                <h2 className="text-[10px] sm:text-xs font-extrabold tracking-wider text-gray-500 uppercase mb-1">
                    TOP 40 LARGEST COUNTRIES BY POPULATION (LIVE)
                </h2>

                <button
                    onClick={onCommentClick}
                    className="w-full max-w-4xl bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white font-black text-xs sm:text-base py-1.5 sm:py-2.5 px-3 rounded-lg sm:rounded-xl shadow-xs transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer uppercase tracking-tight border border-red-500"
                >
                    <span>👇</span>
                    <span className="truncate">COMMENT YOUR COUNTRY IN THE CHAT!</span>
                    <span>👇</span>
                </button>
            </div>
        </div>
    );
};
