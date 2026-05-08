import Link from "next/link";
import { MessageSquare, Plus, Search, Filter, TrendingUp, Users, Clock, ThumbsUp } from "lucide-react";

export default function ForumPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Diễn đàn trao đổi</h1>
          <p className="text-slate-500 mt-1">Nơi thảo luận, đặt câu hỏi và chia sẻ kiến thức cùng giảng viên và sinh viên.</p>
        </div>
        <button className="bg-[#003366] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-blue-900 transition-colors flex items-center gap-2 shadow-md shrink-0">
          <Plus className="h-5 w-5" />
          Tạo chủ đề mới
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content: Topics List */}
        <div className="lg:col-span-3 space-y-6">
          {/* Filters & Search */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Tìm kiếm chủ đề, câu hỏi..." 
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all shadow-sm"
              />
            </div>
            <button className="bg-white border border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl font-medium hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-sm">
              <Filter className="h-4 w-4" />
              Lọc theo chuyên mục
            </button>
          </div>

          {/* Topics List */}
          <div className="space-y-4">
            {mockTopics.map((topic, idx) => (
              <Link href={`/dashboard/forum/${topic.id}`} key={topic.id}>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-[#003366]/30 hover:shadow-md transition-all group block mb-4">
                  <div className="flex items-start gap-4">
                    {/* User Avatar */}
                    <div className="shrink-0 hidden sm:block">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={`https://api.dicebear.com/7.x/notionists/svg?seed=${topic.author}`} 
                        alt={topic.author} 
                        className={`h-12 w-12 rounded-full border-2 ${topic.isLecturer ? 'border-red-200' : 'border-slate-100'} bg-slate-50`} 
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${topic.categoryColor}`}>
                          {topic.category}
                        </span>
                        {topic.isPinned && (
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-700 border border-orange-200">
                            Ghim
                          </span>
                        )}
                        <span className="text-sm text-slate-500 flex items-center gap-1.5 ml-auto">
                          <Clock className="h-3.5 w-3.5" />
                          {topic.time}
                        </span>
                      </div>
                      
                      <h3 className="font-bold text-lg text-slate-900 mb-1 group-hover:text-[#003366] transition-colors line-clamp-1">
                        {topic.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                        {topic.preview}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <span className="font-medium flex items-center gap-1">
                          <UserAvatarBadge name={topic.author} isLecturer={topic.isLecturer} />
                        </span>
                        <div className="flex items-center gap-3 ml-auto">
                          <span className="flex items-center gap-1"><ThumbsUp className="h-4 w-4" /> {topic.likes}</span>
                          <span className="flex items-center gap-1"><MessageSquare className="h-4 w-4" /> {topic.replies}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="flex justify-center pt-4">
            <button className="px-6 py-2 border border-slate-200 bg-white text-slate-600 rounded-xl font-medium hover:bg-slate-50 transition-colors">
              Tải thêm chủ đề
            </button>
          </div>
        </div>

        {/* Sidebar: Categories & Stats */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-red-500" />
              Chuyên mục nổi bật
            </h3>
            <ul className="space-y-3">
              {categories.map((cat, i) => (
                <li key={i}>
                  <Link href="#" className="flex items-center justify-between group">
                    <span className="text-sm text-slate-600 group-hover:text-[#003366] font-medium transition-colors">{cat.name}</span>
                    <span className="bg-slate-100 text-slate-500 text-xs py-0.5 px-2 rounded-full">{cat.count}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#003366] p-6 rounded-2xl text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-300" />
                Thống kê diễn đàn
              </h3>
              <div className="space-y-2 mt-4 text-sm text-blue-100">
                <div className="flex justify-between"><span>Thành viên:</span> <span className="font-semibold text-white">1,245</span></div>
                <div className="flex justify-between"><span>Chủ đề:</span> <span className="font-semibold text-white">438</span></div>
                <div className="flex justify-between"><span>Bài viết:</span> <span className="font-semibold text-white">3,102</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserAvatarBadge({ name, isLecturer }: { name: string, isLecturer?: boolean }) {
  return (
    <>
      <span className={isLecturer ? "text-red-600 font-semibold" : "text-slate-700"}>{name}</span>
      {isLecturer && (
        <span className="bg-red-100 text-red-700 text-[10px] uppercase px-1.5 py-0.5 rounded ml-1">Giảng viên</span>
      )}
    </>
  );
}

const mockTopics = [
  {
    id: 1,
    title: "Giải đáp thắc mắc bài tập lớn môn Quản trị chiến lược",
    preview: "Các em sinh viên có câu hỏi gì về cấu trúc bài tập lớn nhóm hoặc cách phân tích ma trận SWOT, PESTEL có thể đặt câu hỏi tại đây.",
    category: "Góc học tập",
    categoryColor: "bg-blue-50 text-blue-700 border-blue-200",
    author: "TS. Lê Trọng",
    isLecturer: true,
    isPinned: true,
    time: "2 giờ trước",
    likes: 24,
    replies: 15
  },
  {
    id: 2,
    title: "Xin tài liệu ôn thi môn Kinh tế vi mô",
    preview: "Chào mọi người, mình đang cần một số bộ đề thi các năm trước để ôn tập. Bạn nào có share mình với ạ. Mình cảm ơn nhiều!",
    category: "Chia sẻ tài liệu",
    categoryColor: "bg-green-50 text-green-700 border-green-200",
    author: "Nguyễn Văn A",
    isLecturer: false,
    isPinned: false,
    time: "5 giờ trước",
    likes: 8,
    replies: 3
  },
  {
    id: 3,
    title: "Cách tính điểm trung bình môn học kỳ này?",
    preview: "Cho em hỏi với trọng số điểm chuyên cần 10%, giữa kỳ 30% và cuối kỳ 60%, nếu em được 5đ giữa kỳ thì cuối kỳ cần bao nhiêu để qua môn ạ?",
    category: "Hỏi đáp chung",
    categoryColor: "bg-orange-50 text-orange-700 border-orange-200",
    author: "Trần Thị B",
    isLecturer: false,
    isPinned: false,
    time: "1 ngày trước",
    likes: 12,
    replies: 7
  },
  {
    id: 4,
    title: "Thông báo tổ chức buổi Seminar Kỹ năng mềm tuần tới",
    preview: "Phòng Công tác sinh viên trân trọng thông báo buổi hội thảo chuyên đề 'Kỹ năng giao tiếp và làm việc nhóm hiệu quả' sẽ diễn ra vào sáng Chủ Nhật này.",
    category: "Thông báo",
    categoryColor: "bg-red-50 text-red-700 border-red-200",
    author: "Phòng CTSV",
    isLecturer: true,
    isPinned: false,
    time: "2 ngày trước",
    likes: 56,
    replies: 0
  }
];

const categories = [
  { name: "Hỏi đáp chung", count: 128 },
  { name: "Góc học tập", count: 85 },
  { name: "Chia sẻ tài liệu", count: 64 },
  { name: "Thông báo", count: 42 },
  { name: "Hoạt động ngoại khóa", count: 37 },
];
