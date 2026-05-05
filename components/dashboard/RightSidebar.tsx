import { Megaphone, Calendar as CalendarIcon, FileText, Users, Grid } from "lucide-react";

export function RightSidebar() {
  return (
    <div className="w-[300px] flex-shrink-0 flex flex-col gap-6">
      <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(0,51,102,0.06)] border border-slate-100">
        <div className="flex justify-between items-center mb-5">
          <h3 className="font-bold text-slate-900">Thông báo quan trọng</h3>
          <button className="text-xs text-blue-600 font-semibold hover:underline">Xem tất cả</button>
        </div>
        
        <div className="space-y-5">
          <div className="flex gap-3 relative">
            <div className="mt-0.5"><Megaphone className="h-4 w-4 text-red-500" /></div>
            <div>
              <div className="flex justify-between items-start">
                <h4 className="text-sm font-semibold text-slate-800">Đăng ký tín chỉ</h4>
                <span className="text-[10px] text-slate-400 font-medium">2 giờ trước</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Cổng đăng ký học kỳ hè mở vào ngày 15/05/2025.</p>
            </div>
          </div>
          
          <div className="flex gap-3 relative">
            <div className="mt-0.5"><Users className="h-4 w-4 text-green-500" /></div>
            <div>
              <div className="flex justify-between items-start">
                <h4 className="text-sm font-semibold text-slate-800">Tọa đàm chuyên đề</h4>
                <span className="text-[10px] text-slate-400 font-medium">1 ngày trước</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">"Thương mại Toàn cầu & Tương lai VN" - Dr. Alan Smith (20/05).</p>
            </div>
          </div>

          <div className="flex gap-3 relative">
            <div className="mt-0.5"><CalendarIcon className="h-4 w-4 text-red-500" /></div>
            <div>
              <div className="flex justify-between items-start">
                <h4 className="text-sm font-semibold text-slate-800">Cập nhật Lịch học</h4>
                <span className="text-[10px] text-slate-400 font-medium">2 ngày trước</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Đã công bố thời khóa biểu năm học 2025-2026.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_-3px_rgba(0,51,102,0.06)] border border-slate-100">
        <h3 className="font-bold text-slate-900 mb-5">Thao tác nhanh</h3>
        <div className="grid grid-cols-4 gap-2">
          <ActionItem icon={<Grid className="h-5 w-5 text-red-500" />} label="Đăng ký học" />
          <ActionItem icon={<CalendarIcon className="h-5 w-5 text-blue-600" />} label="Thời khóa biểu" />
          <ActionItem icon={<FileText className="h-5 w-5 text-blue-600" />} label="Xin bảng điểm" />
          <ActionItem icon={<Users className="h-5 w-5 text-red-500" />} label="Hẹn cố vấn" />
        </div>
      </div>
    </div>
  );
}

function ActionItem({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <button className="flex flex-col items-center gap-2 group">
      <div className="h-12 w-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-slate-100 group-hover:border-slate-200 transition-all shadow-sm">
        {icon}
      </div>
      <span className="text-[9px] font-semibold text-slate-600 text-center leading-tight">
        {label}
      </span>
    </button>
  );
}
