import { Bell, Search } from "lucide-react";

export function Header() {
  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200/50 flex items-center justify-between px-8 z-10 sticky top-0">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          Chào buổi sáng, Đức! <span className="text-2xl">👋</span>
        </h2>
        <p className="text-sm text-slate-500 mt-0.5">
          Đây là tổng quan học tập của bạn
        </p>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Tìm kiếm thông tin..." 
            className="w-64 pl-10 pr-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all"
          />
        </div>
        <button className="relative p-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 transition-colors shadow-sm text-slate-600">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500 border-2 border-white flex items-center justify-center text-[9px] font-bold text-white translate-x-1/3 -translate-y-1/3">
            3
          </span>
        </button>
      </div>
    </header>
  );
}
