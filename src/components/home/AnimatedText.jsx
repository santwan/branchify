import { Settings } from "lucide-react"; // install: npm i lucide-react

export default function AnimatedText() {
  return (
    <button
      className="flex items-center gap-2 bg-transparent animate-pulse hover:scale-105 hover:rotate-1 rounded-full border-2 cursor-pointer border-[#b36a2c] px-4 py-2 text-sm font-mono text-transparent bg-clip-text 
                 hover:from-[#1a1a1a] hover:to-[#1a1a1a] transition-all duration-300"
    >
      <Settings size={20} className="text-orange-900 dark:text-[#d1b5ff]" />
      <span className="text-transparent text-[16px] font-semibold bg-clip-text bg-linear-to-r from-[#ffaa40] to-red-500">
        Built for Developers
      </span>
      <span className="text-[#ffaa40] ml-1">›</span>
    </button>
  );
}
