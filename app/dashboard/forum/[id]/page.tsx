import Link from "next/link";
import { ArrowLeft, MessageSquare, ThumbsUp, MoreHorizontal, Share2, CornerDownRight, Send } from "lucide-react";

export default async function ForumTopicPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // In a real app, fetch topic details by ID. For now, we mock it.
  const topic = {
    id,
    title: "Giải đáp thắc mắc bài tập lớn môn Quản trị chiến lược",
    category: "Góc học tập",
    content: `Chào các em sinh viên,\n\nTuần này chúng ta sẽ bắt đầu triển khai Bài tập lớn nhóm. Đây là một điểm thành phần quan trọng chiếm 30% tổng điểm môn học. Yêu cầu của bài tập là phân tích môi trường kinh doanh và đề xuất chiến lược cạnh tranh cho một doanh nghiệp thực tế.\n\nMột số lưu ý:\n- Nhóm tối đa 5 thành viên.\n- Cần áp dụng đúng mô hình SWOT và PESTEL đã học ở chương 3.\n- Hạn chót nộp bài là thứ 6 tuần sau.\n\nCác em có bất kỳ câu hỏi nào về cách chọn đề tài, cấu trúc bài làm hay khó khăn trong quá trình làm việc nhóm thì phản hồi ngay dưới bài viết này. Thầy sẽ giải đáp định kỳ vào buổi tối mỗi ngày.\n\nChúc các em làm bài tốt!`,
    author: "TS. Lê Trọng",
    authorAvatar: "Admin",
    isLecturer: true,
    time: "2 giờ trước",
    likes: 24,
    replies: [
      {
        id: 1,
        author: "Nguyễn Minh Đức",
        authorAvatar: "Duc",
        isLecturer: false,
        time: "1 giờ trước",
        content: "Dạ thưa thầy, nhóm em định chọn công ty khởi nghiệp quy mô nhỏ chưa có nhiều dữ liệu trên thị trường thì có được không ạ?",
        likes: 2
      },
      {
        id: 2,
        author: "TS. Lê Trọng",
        authorAvatar: "Admin",
        isLecturer: true,
        time: "45 phút trước",
        content: "Được em nhé, nhưng phải đảm bảo công ty đó có dữ liệu tài chính tối thiểu 2 năm gần nhất để làm phân tích. Nếu thiếu thông tin quá nhiều, bài phân tích sẽ rất sơ sài.",
        likes: 5
      },
      {
        id: 3,
        author: "Trần Mai Anh",
        authorAvatar: "Mai",
        isLecturer: false,
        time: "15 phút trước",
        content: "Thầy ơi cho em hỏi phần slide thuyết trình có bắt buộc không hay chỉ nộp bản Word thôi ạ?",
        likes: 1
      }
    ]
  };

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Navigation */}
      <Link href="/dashboard/forum" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#003366] transition-colors font-medium text-sm">
        <ArrowLeft className="h-4 w-4" />
        Quay lại diễn đàn
      </Link>

      {/* Main Topic Post */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              {topic.category}
            </span>
            <span className="text-sm text-slate-500">{topic.time}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 leading-tight">
            {topic.title}
          </h1>

          <div className="flex items-center justify-between pb-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={`https://api.dicebear.com/7.x/notionists/svg?seed=${topic.authorAvatar}`} 
                alt={topic.author} 
                className={`h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 ${topic.isLecturer ? 'border-red-200' : 'border-slate-100'} bg-slate-50`} 
              />
              <div>
                <div className="font-medium text-slate-900 flex items-center gap-2">
                  <UserAvatarBadge name={topic.author} isLecturer={topic.isLecturer} />
                </div>
                <div className="text-sm text-slate-500">Chủ đề gốc</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-50 rounded-lg transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
              <button className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-50 rounded-lg transition-colors">
                <MoreHorizontal className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="py-6 prose prose-slate max-w-none">
            {topic.content.split('\n').map((para, i) => (
              <p key={i} className="text-slate-700 leading-relaxed">{para}</p>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
            <button className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl font-medium transition-colors">
              <ThumbsUp className="h-4 w-4" />
              <span>Thích ({topic.likes})</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-xl font-medium transition-colors">
              <MessageSquare className="h-4 w-4" />
              <span>Trả lời ({topic.replies.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Replies Section */}
      <div className="space-y-6 pt-4">
        <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
          Bình luận ({topic.replies.length})
        </h3>

        {/* Reply Input Box */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6 flex gap-4">
          <div className="shrink-0 hidden sm:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={`https://api.dicebear.com/7.x/notionists/svg?seed=Duc`} 
              alt="You" 
              className="h-10 w-10 rounded-full border border-slate-200 bg-slate-50" 
            />
          </div>
          <div className="flex-1 space-y-3">
            <textarea
              placeholder="Viết câu trả lời hoặc thắc mắc của bạn..."
              rows={3}
              className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all resize-none"
            ></textarea>
            <div className="flex justify-end">
              <button className="bg-[#003366] text-white px-5 py-2 rounded-xl font-medium hover:bg-blue-900 transition-colors flex items-center gap-2 shadow-sm">
                <Send className="h-4 w-4" />
                Gửi bình luận
              </button>
            </div>
          </div>
        </div>

        {/* Reply List */}
        <div className="space-y-4">
          {topic.replies.map((reply) => (
            <div key={reply.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 sm:p-6 flex gap-4 relative overflow-hidden">
              {reply.isLecturer && (
                <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
              )}
              
              <div className="shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={`https://api.dicebear.com/7.x/notionists/svg?seed=${reply.authorAvatar}`} 
                  alt={reply.author} 
                  className={`h-10 w-10 rounded-full border-2 ${reply.isLecturer ? 'border-red-200' : 'border-slate-100'} bg-slate-50`} 
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <div className="font-medium text-sm text-slate-900 flex items-center gap-2">
                    <UserAvatarBadge name={reply.author} isLecturer={reply.isLecturer} />
                  </div>
                  <span className="text-xs text-slate-500">{reply.time}</span>
                </div>
                
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mt-2 mb-3">
                  {reply.content}
                </p>
                
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
                  <button className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                    <ThumbsUp className="h-3.5 w-3.5" />
                    Thích {reply.likes > 0 && `(${reply.likes})`}
                  </button>
                  <button className="flex items-center gap-1.5 hover:text-slate-900 transition-colors">
                    <CornerDownRight className="h-3.5 w-3.5" />
                    Phản hồi
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function UserAvatarBadge({ name, isLecturer }: { name: string, isLecturer?: boolean }) {
  return (
    <>
      <span className={isLecturer ? "text-red-600 font-bold" : "text-slate-800 font-semibold"}>{name}</span>
      {isLecturer && (
        <span className="bg-red-100 text-red-700 text-[10px] uppercase px-1.5 py-0.5 rounded ml-1">Giảng viên</span>
      )}
    </>
  );
}
