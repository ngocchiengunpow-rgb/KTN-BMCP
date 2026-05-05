import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import 'katex/dist/katex.min.css';
import { cn } from '@/lib/utils';
import { Bot, User } from 'lucide-react';
import { Message } from 'ai';

interface ChatMessageProps {
  message: Message & { data?: { attachment: string; type: string } };
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={cn("flex w-full gap-3 p-4", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-lg shadow-sm bg-indigo-600 text-white">
          <Bot className="h-5 w-5" />
        </div>
      )}
      <div className={cn("flex flex-col space-y-2 text-sm max-w-[85%]", isUser ? "items-end" : "items-start")}>
        <div className={cn("px-4 py-3 rounded-2xl overflow-hidden", isUser ? "bg-slate-100 text-slate-900 rounded-tr-sm" : "bg-white border border-slate-200 text-slate-800 rounded-tl-sm shadow-sm")}>
          <ReactMarkdown
            remarkPlugins={[remarkMath, remarkGfm]}
            rehypePlugins={[rehypeKatex]}
            className="prose prose-sm prose-slate max-w-none break-words prose-p:leading-relaxed prose-pre:p-0 prose-pre:bg-slate-900 prose-pre:text-slate-50"
          >
            {message.content}
          </ReactMarkdown>
          
          {message.data?.attachment && (
            <div className="mt-3">
              {message.data.type?.startsWith('image/') ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={message.data.attachment} alt="attachment" className="max-w-[200px] max-h-[200px] rounded-lg border object-cover shadow-sm" />
              ) : (
                <div className="flex items-center gap-2 p-2 border border-slate-200 rounded-lg bg-slate-50 text-xs font-medium text-slate-600">
                  📎 Context File Uploaded
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {isUser && (
        <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-lg shadow-sm bg-indigo-100 text-indigo-700">
          <User className="h-5 w-5" />
        </div>
      )}
    </div>
  );
}
