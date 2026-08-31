import { useState, useEffect, useRef } from 'react';
import { Send, X, MessageSquare, Sparkles } from 'lucide-react';

export interface ChatMessage {
    id: string;
    user: string;
    avatarColor: string;
    message: string;
    countryEmoji?: string;
    timestamp: string;
    isSuperChat?: boolean;
}

const INITIAL_MESSAGES: ChatMessage[] = [
    { id: '1', user: 'Aarav_IN', avatarColor: 'bg-orange-500', message: 'India population growing fast! 🇮🇳', countryEmoji: '🇮🇳', timestamp: 'Just now' },
    { id: '2', user: 'Carlos_BR', avatarColor: 'bg-emerald-500', message: 'Brasil top 7! 🇧🇷', countryEmoji: '🇧🇷', timestamp: 'Just now' },
    { id: '3', user: 'Emily_US', avatarColor: 'bg-blue-500', message: 'Greetings from California 🇺🇸', countryEmoji: '🇺🇸', timestamp: 'Just now' },
    { id: '4', user: 'Kenji_JP', avatarColor: 'bg-red-500', message: 'Japan stats live 🇯🇵', countryEmoji: '🇯🇵', timestamp: 'Just now' },
    { id: '5', user: 'Fatima_EG', avatarColor: 'bg-amber-500', message: 'Egypt #13 population 🇪🇬', countryEmoji: '🇪🇬', timestamp: 'Just now' },
];

const BOT_COMMENTS = [
    { user: 'Liam_UK', avatarColor: 'bg-indigo-500', message: 'UK passed 70 million! 🇬🇧', countryEmoji: '🇬🇧' },
    { user: 'Priya_IN', avatarColor: 'bg-orange-600', message: 'Comment your country! 🇮🇳', countryEmoji: '🇮🇳' },
    { user: 'Mateo_MX', avatarColor: 'bg-green-600', message: 'Viva Mexico 🇲🇽!', countryEmoji: '🇲🇽' },
    { user: 'Fatima_PK', avatarColor: 'bg-emerald-600', message: 'Pakistan 262M+ live! 🇵🇰', countryEmoji: '🇵🇰' },
    { user: 'Lucas_DE', avatarColor: 'bg-yellow-600', message: 'Germany here 🇩🇪', countryEmoji: '🇩🇪' },
    { user: 'Chioma_NG', avatarColor: 'bg-teal-600', message: 'Nigeria #6 strongest growth 🇳🇬', countryEmoji: '🇳🇬' },
    { user: 'Sophie_FR', avatarColor: 'bg-blue-600', message: 'France #23 🇫🇷', countryEmoji: '🇫🇷' },
];

interface LiveChatDrawerProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LiveChatDrawer = ({ isOpen, onClose }: LiveChatDrawerProps) => {
    const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
    const [inputValue, setInputValue] = useState('');
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomBot = BOT_COMMENTS[Math.floor(Math.random() * BOT_COMMENTS.length)];
            const newMsg: ChatMessage = {
                id: Date.now().toString(),
                user: randomBot.user,
                avatarColor: randomBot.avatarColor,
                message: randomBot.message,
                countryEmoji: randomBot.countryEmoji,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            };
            setMessages((prev) => [...prev.slice(-30), newMsg]);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMsg: ChatMessage = {
            id: Date.now().toString(),
            user: 'You',
            avatarColor: 'bg-red-600',
            message: inputValue.trim(),
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            isSuperChat: true,
        };

        setMessages((prev) => [...prev, userMsg]);
        setInputValue('');
    };

    if (!isOpen) return null;

    return (
        <aside className="fixed bottom-0 right-0 top-auto md:top-0 w-full md:w-80 lg:w-96 h-[450px] md:h-full bg-white border-t md:border-t-0 md:border-l border-gray-200 shadow-2xl z-50 flex flex-col transition-all duration-300">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-slate-900 text-white select-none">
                <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-red-500" />
                    <span className="font-bold text-sm">Top Live Chat</span>
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                </div>
                <button
                    onClick={onClose}
                    className="p-1 rounded-md hover:bg-slate-800 text-gray-400 hover:text-white transition-colors"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50/50">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex items-start gap-2.5 text-xs ${msg.isSuperChat
                                ? 'p-2.5 rounded-lg bg-red-50 border border-red-200 shadow-sm'
                                : ''
                            }`}
                    >
                        <div
                            className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-white shadow-xs ${msg.avatarColor}`}
                        >
                            {msg.user[0]}
                        </div>

                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 mb-0.5">
                                <span className="font-bold text-gray-700 truncate">{msg.user}</span>
                                {msg.isSuperChat && (
                                    <span className="inline-flex items-center gap-0.5 text-[9px] font-black bg-red-600 text-white px-1.5 py-0.2 rounded uppercase">
                                        <Sparkles className="w-2.5 h-2.5" /> YOU
                                    </span>
                                )}
                                <span className="text-[10px] text-gray-400 ml-auto">{msg.timestamp}</span>
                            </div>
                            <p className="text-gray-800 break-words font-medium">{msg.message}</p>
                        </div>
                    </div>
                ))}
                <div ref={chatEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-200">
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Comment your country or message..."
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="flex-1 px-3 py-2 text-xs bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                    />
                    <button
                        type="submit"
                        className="p-2 bg-red-600 hover:bg-red-700 active:scale-95 text-white rounded-lg transition-all shadow-sm flex items-center justify-center"
                    >
                        <Send className="w-3.5 h-3.5" />
                    </button>
                </div>
            </form>
        </aside>
    );
};
