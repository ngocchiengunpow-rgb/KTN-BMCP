import Link from "next/link";
import { 
  LayoutDashboard, BookOpen, GraduationCap, Calendar, BarChart3, 
  Users, Folder, Bell, User, Settings, LogOut, Anchor
} from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-[280px] bg-white border-r border-slate-200 h-screen flex flex-col flex-shrink-0">
      {/* Logo Area */}
      <div className="h-20 flex items-center px-6">
        <div className="flex items-center gap-3">
          <div className="bg-red-600 rounded-full p-1.5 flex items-center justify-center">
            <Anchor className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-red-600 tracking-tight leading-tight uppercase">
              Vietnam Maritime<br />University
            </h1>
          </div>
        </div>
      </div>

      <div className="px-4 py-2">
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://api.dicebear.com/7.x/notionists/svg?seed=Duc" 
            alt="Duc" 
            className="h-10 w-10 rounded-full bg-white border border-slate-200" 
          />
          <div>
            <p className="text-sm font-semibold text-slate-900">Nguyễn Minh Đức</p>
            <p className="text-[11px] text-slate-500">Mã SV: 60K61.12345</p>
            <div className="mt-1 inline-flex items-center bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full text-[10px] font-semibold border border-blue-100">
              Kinh tế
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-0.5">
        <NavItem icon={<LayoutDashboard />} label="Bảng điều khiển" active />
        <NavItem icon={<BookOpen />} label="Chương trình học" />
        <NavItem icon={<GraduationCap />} label="Các môn học" />
        <NavItem icon={<Calendar />} label="Lịch trình" />
        <NavItem icon={<BarChart3 />} label="Bảng điểm" />
        <NavItem icon={<Users />} label="Cố vấn học tập" />
        <NavItem icon={<Folder />} label="Tài liệu" />
        <NavItem icon={<Bell />} label="Thông báo" />
        <NavItem icon={<User />} label="Hồ sơ" />
        <NavItem icon={<Settings />} label="Cài đặt" />
      </div>

      <div className="p-4 border-t border-slate-100">
        <button className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-slate-600 w-full hover:bg-slate-50 rounded-xl transition-colors">
          <LogOut className="h-5 w-5" />
          Đăng xuất
        </button>

        <div className="mt-4 bg-[#003366] rounded-2xl p-5 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h4 className="font-semibold text-sm mb-1">Cơ hội trao đổi</h4>
            <p className="text-xs text-blue-100 mb-3 opacity-90">
              Khám phá các chương trình toàn cầu.
            </p>
            <button className="text-xs border border-white/30 bg-white/10 hover:bg-white/20 transition-colors rounded-lg px-3 py-1.5 font-medium">
              Tìm hiểu thêm
            </button>
          </div>
          {/* Decorative pattern for VMU */}
          <Anchor className="absolute -bottom-4 -right-4 h-24 w-24 text-white opacity-10 -rotate-12" />
        </div>
      </div>
    </aside>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <Link 
      href="#"
      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
        active 
          ? "bg-blue-50/80 text-blue-600" 
          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
      }`}
    >
      <div className={`h-5 w-5 ${active ? "text-blue-600" : "text-slate-400"}`}>
        {icon}
      </div>
      {label}
    </Link>
  );
}
