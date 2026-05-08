import { Megaphone, Send, Image as ImageIcon, Paperclip, Calendar, MoreVertical, Eye } from "lucide-react";

export default function MasterAnnouncementsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Đăng thông báo</h1>
        <p className="text-slate-500 mt-1">Gửi thông báo, tin tức mới nhất đến toàn thể sinh viên hoặc lớp học cụ thể.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Editor Form */}
        <div className="lg:col-span-2 space-y-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="title">
              Tiêu đề thông báo
            </label>
            <input
              type="text"
              id="title"
              placeholder="VD: Thông báo nghỉ học môn Kinh tế vi mô..."
              className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="target">
              Đối tượng nhận
            </label>
            <select
              id="target"
              className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all text-slate-700"
            >
              <option>Tất cả sinh viên Khoa Kinh tế</option>
              <option>Lớp 60K61</option>
              <option>Lớp 60K62</option>
              <option>Chỉ giảng viên</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="content">
              Nội dung chi tiết
            </label>
            <textarea
              id="content"
              rows={8}
              placeholder="Nhập nội dung thông báo tại đây..."
              className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all resize-none"
            ></textarea>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div className="flex gap-2">
              <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Thêm hình ảnh">
                <ImageIcon className="h-5 w-5" />
              </button>
              <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Đính kèm tệp">
                <Paperclip className="h-5 w-5" />
              </button>
            </div>
            <div className="flex gap-3">
              <button className="px-5 py-2.5 rounded-xl font-medium text-slate-600 hover:bg-slate-100 transition-colors">
                Lưu nháp
              </button>
              <button className="bg-[#003366] text-white px-6 py-2.5 rounded-xl font-medium hover:bg-blue-900 transition-colors flex items-center gap-2 shadow-md">
                <Send className="h-4 w-4" />
                Đăng thông báo
              </button>
            </div>
          </div>
        </div>

        {/* Recent Announcements */}
        <div className="space-y-6">
          <h3 className="font-bold text-lg text-slate-900">Thông báo đã đăng gần đây</h3>
          <div className="space-y-4">
            {mockAnnouncements.map((ann, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 hover:border-blue-300 transition-colors group cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg bg-slate-50 shrink-0`}>
                    <Megaphone className={`h-4 w-4 text-slate-500 group-hover:text-blue-600 transition-colors`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm leading-tight mb-1 group-hover:text-blue-600 transition-colors">{ann.title}</h4>
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {ann.date}</span>
                      <span className="flex items-center gap-1"><Eye className="h-3 w-3" /> {ann.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-2.5 text-sm font-medium text-[#003366] bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors">
            Xem tất cả thông báo
          </button>
        </div>
      </div>
    </div>
  );
}

const mockAnnouncements = [
  { title: "Thay đổi phòng học môn Quản trị chiến lược tuần 4", date: "Hôm nay, 08:30", views: 142 },
  { title: "Thông báo về việc đăng ký môn học học kỳ 2", date: "Hôm qua, 14:15", views: 856 },
  { title: "Cập nhật tài liệu tham khảo cho môn Kinh tế vi mô", date: "05/05/2026", views: 230 },
  { title: "Mời tham dự Hội thảo: Chuyển đổi số trong giáo dục", date: "01/05/2026", views: 512 },
];
