import { CheckSquare, Plus, Clock, Users, Play, Edit3, Trash2 } from "lucide-react";

export default function MasterTestsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Bài kiểm tra & Luyện tập</h1>
          <p className="text-slate-500 mt-1">Tạo, quản lý và theo dõi tiến độ bài tập của sinh viên.</p>
        </div>
        <button className="bg-[#003366] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-blue-900 transition-colors flex items-center gap-2 shadow-md">
          <Plus className="h-5 w-5" />
          Tạo bài mới
        </button>
      </div>

      {/* Grid of Tests */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockTests.map((test, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className={`absolute top-0 left-0 w-1.5 h-full ${test.statusColor}`}></div>
            
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl ${test.iconBg}`}>
                  <CheckSquare className={`h-6 w-6 ${test.iconColor}`} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">{test.title}</h3>
                  <p className="text-sm text-slate-500">{test.subject}</p>
                </div>
              </div>
              <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${test.badgeClass}`}>
                {test.status}
              </span>
            </div>

            <p className="text-slate-600 text-sm mb-6 line-clamp-2">
              {test.description}
            </p>

            <div className="flex items-center gap-6 text-sm text-slate-500 mb-6">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{test.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>{test.submissions}/{test.totalStudents} đã nộp</span>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-slate-100">
              <button className="flex-1 bg-slate-50 text-slate-700 py-2 rounded-lg font-medium hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
                <Edit3 className="h-4 w-4" />
                Chỉnh sửa
              </button>
              <button className="flex-1 bg-[#003366]/5 text-[#003366] py-2 rounded-lg font-medium hover:bg-[#003366]/10 transition-colors flex items-center justify-center gap-2">
                <Play className="h-4 w-4" />
                Chấm điểm
              </button>
              <button className="px-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors flex items-center justify-center">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mockTests = [
  { 
    title: "Bài kiểm tra Giữa kỳ", 
    subject: "Kinh tế vi mô", 
    description: "Bao gồm các kiến thức từ chương 1 đến chương 5. Gồm 40 câu trắc nghiệm và 2 bài tập tự luận.",
    duration: "90 phút", 
    submissions: 85, 
    totalStudents: 120,
    status: "Đang diễn ra",
    statusColor: "bg-green-500",
    badgeClass: "bg-green-50 text-green-700 border-green-200",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  { 
    title: "Bài tập Nhóm số 1", 
    subject: "Quản trị chiến lược", 
    description: "Phân tích chiến lược cạnh tranh của một doanh nghiệp logistics tại Việt Nam.",
    duration: "1 tuần", 
    submissions: 24, 
    totalStudents: 24,
    status: "Đã kết thúc",
    statusColor: "bg-slate-400",
    badgeClass: "bg-slate-100 text-slate-700 border-slate-200",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  { 
    title: "Quiz Luyện tập: Elasticity", 
    subject: "Kinh tế vi mô", 
    description: "15 câu trắc nghiệm ngắn về độ co giãn của cung và cầu.",
    duration: "15 phút", 
    submissions: 0, 
    totalStudents: 120,
    status: "Sắp tới",
    statusColor: "bg-orange-400",
    badgeClass: "bg-orange-50 text-orange-700 border-orange-200",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600"
  },
];
