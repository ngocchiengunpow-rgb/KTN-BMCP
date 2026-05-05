"use client";

import { useState, useRef, useEffect, useMemo } from 'react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { MessageSquare, X, Send, Paperclip, Loader2, Maximize2, MoreVertical } from 'lucide-react';
import { ChatMessage } from '@/components/ui/ChatMessage';

interface AIChatWidgetProps {
  courseId: string;
  courseName: string;
}

export function AIChatWidget({ courseId, courseName }: AIChatWidgetProps) {
  const [isOpen, setIsOpen] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState("");
  
  // Setup custom transport to pass api endpoint and body
  const transport = useMemo(() => new DefaultChatTransport({
    api: '/api/chat',
    body: { courseId, courseName },
  }), [courseId, courseName]);

  const { messages, sendMessage, status } = useChat({ transport });

  const isLoading = status === 'submitted' || status === 'streaming';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() && !fileInputRef.current?.files?.length) return;
    
    const text = input;
    const files = fileInputRef.current?.files;
    
    setInput('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    
    await sendMessage({
      text,
      files: files && files.length > 0 ? Array.from(files) as any : undefined,
    });
  };

  const handleSuggestionClick = (text: string) => {
    sendMessage({ text });
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 h-14 w-14 bg-[#003366] text-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-900 transition-all z-50 hover:scale-105 active:scale-95 ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      <div className={`fixed bottom-6 right-6 w-[380px] h-[550px] max-h-[85vh] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 flex flex-col transition-all duration-300 z-50 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
        <div className="p-4 flex items-center justify-between border-b border-slate-100">
            <div className="flex items-center gap-2">
            <div className="bg-red-600 rounded-full h-6 w-6 flex items-center justify-center text-[10px] text-white font-bold">
              AI
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Trợ lý AI VMU</h3>
            <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-1.5 py-0.5 rounded-md">Beta</span>
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <button onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-slate-50 rounded-md transition-colors">
              <span className="block w-3 h-0.5 bg-slate-400 rounded-full" />
            </button>
            <button className="p-1.5 hover:bg-slate-50 rounded-md transition-colors">
              <Maximize2 className="h-4 w-4" />
            </button>
            <button className="p-1.5 hover:bg-slate-50 rounded-md transition-colors">
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 scroll-smooth">
          <div className="flex w-full gap-3 justify-start mb-6">
            <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-full bg-red-600 text-white text-[10px] font-bold mt-1">
              AI
            </div>
            <div className="flex flex-col space-y-2 text-sm max-w-[85%] items-start">
              <div className="px-4 py-3 bg-slate-50 text-slate-800 rounded-2xl rounded-tl-sm border border-slate-100">
                <p>Chào Đức! 👋</p>
                <p className="mt-1">Mình có thể giúp gì cho việc học của bạn hôm nay?</p>
              </div>
              <span className="text-[10px] text-slate-400 ml-1">10:30 SA</span>
            </div>
          </div>

          {messages.length === 0 && (
            <div className="space-y-2 mt-4 ml-11">
              <SuggestionChip text="Mình nên học môn gì vào học kỳ tới?" onClick={() => handleSuggestionClick("Mình nên học môn gì vào học kỳ tới?")} />
              <SuggestionChip text="Cách tính điểm trung bình (GPA) như thế nào?" onClick={() => handleSuggestionClick("Cách tính điểm trung bình (GPA) như thế nào?")} />
              <SuggestionChip text="Tìm hiểu về các chương trình trao đổi sinh viên" onClick={() => handleSuggestionClick("Tìm hiểu về các chương trình trao đổi sinh viên")} />
            </div>
          )}

          {messages.map((m) => (
            <ChatMessage key={m.id} message={m} />
          ))}
          
          {isLoading && (
            <div className="flex items-center gap-2 text-slate-400 text-xs p-4">
              <Loader2 className="h-3.5 w-3.5 animate-spin" /> AI đang suy nghĩ...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 bg-white border-t border-slate-100 rounded-b-2xl">
          <form onSubmit={handleSubmit} className="flex gap-2 items-center">
            <input type="file" ref={fileInputRef} className="hidden" accept="image/*,.pdf" multiple />
            <button type="button" onClick={() => fileInputRef.current?.click()} className="p-2 text-slate-400 hover:text-blue-600 transition-colors shrink-0">
              <Paperclip className="h-5 w-5" />
            </button>
            <input
              type="text"
              className="flex-1 bg-transparent border-none focus:ring-0 px-2 text-sm text-slate-700 placeholder:text-slate-400"
              placeholder="Nhập câu hỏi của bạn..."
              value={input}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              disabled={isLoading || (!input?.trim() && !fileInputRef.current?.files?.length)}
              className="p-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shrink-0 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
            >
              <Send className="h-4 w-4 ml-0.5" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

function SuggestionChip({ text, onClick }: { text: string, onClick: () => void }) {
  return (
    <button 
      type="button"
      onClick={onClick}
      className="block text-left text-xs text-blue-600 bg-blue-50/50 hover:bg-blue-50 border border-blue-100 px-4 py-2.5 rounded-full transition-colors font-medium mb-2 w-max max-w-full truncate"
    >
      {text}
    </button>
  );
}
