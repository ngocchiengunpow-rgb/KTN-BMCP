import { FileText, Plus, UploadCloud, MoreVertical, Search, Filter } from "lucide-react";

export default function MasterDocumentsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Quản lý tài liệu</h1>
          <p className="text-slate-500 mt-1">Tải lên và quản lý giáo trình, tài liệu tham khảo cho sinh viên.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-xl font-medium hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-sm">
            <UploadCloud className="h-4 w-4" />
            Tải lên hàng loạt
          </button>
          <button className="bg-[#003366] text-white px-4 py-2 rounded-xl font-medium hover:bg-blue-900 transition-colors flex items-center gap-2 shadow-md">
            <Plus className="h-4 w-4" />
            Thêm tài liệu mới
          </button>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Tìm kiếm tài liệu..." 
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all shadow-sm"
          />
        </div>
        <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl font-medium hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-sm">
          <Filter className="h-4 w-4" />
          Lọc theo môn học
        </button>
      </div>

      {/* Documents List */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs uppercase tracking-wider font-semibold">
                <th className="px-6 py-4">Tên tài liệu</th>
                <th className="px-6 py-4">Môn học</th>
                <th className="px-6 py-4">Loại</th>
                <th className="px-6 py-4">Ngày tải lên</th>
                <th className="px-6 py-4">Kích thước</th>
                <th className="px-6 py-4 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mockDocuments.map((doc, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${doc.iconBg}`}>
                        <FileText className={`h-5 w-5 ${doc.iconColor}`} />
                      </div>
                      <span className="font-medium text-slate-900">{doc.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600 text-sm">{doc.subject}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200">
                      {doc.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500 text-sm">{doc.date}</td>
                  <td className="px-6 py-4 text-slate-500 text-sm">{doc.size}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const mockDocuments = [
  { name: "Giáo trình Kinh tế vi mô", subject: "Kinh tế học", type: "PDF", date: "12/05/2026", size: "4.2 MB", iconBg: "bg-red-50", iconColor: "text-red-600" },
  { name: "Bài giảng Tối ưu hóa chuỗi cung ứng", subject: "Logistics", type: "PPTX", date: "10/05/2026", size: "12.5 MB", iconBg: "bg-orange-50", iconColor: "text-orange-600" },
  { name: "Tài liệu ôn tập giữa kỳ", subject: "Quản trị chiến lược", type: "DOCX", date: "08/05/2026", size: "1.1 MB", iconBg: "bg-blue-50", iconColor: "text-blue-600" },
  { name: "Báo cáo thường niên Vingroup 2025", subject: "Phân tích tài chính", type: "PDF", date: "05/05/2026", size: "8.7 MB", iconBg: "bg-red-50", iconColor: "text-red-600" },
];
