'use client'

import { useActionState } from 'react'
import { Anchor, Loader2 } from 'lucide-react'
import { login } from './actions'

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(login, null)

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#003366]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <Anchor className="absolute -bottom-20 -right-20 h-96 w-96 text-white -rotate-12" />
      </div>

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 relative z-10 mx-4">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-red-600 rounded-full p-4 mb-4 shadow-lg">
            <Anchor className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 text-center uppercase tracking-tight">
            Vietnam Maritime<br/>University
          </h1>
          <p className="text-slate-500 mt-2 text-sm text-center">
            Cổng Thông Tin Đào Tạo Sinh Viên
          </p>
        </div>

        <form action={formAction} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="username">
              Tên đăng nhập
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              placeholder="Nhập mã sinh viên"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5" htmlFor="password">
              Mật khẩu
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {state?.error && (
            <p className="text-red-500 text-sm text-center font-medium">{state.error}</p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-[#003366] text-white py-3 rounded-xl font-semibold hover:bg-blue-900 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
          >
            {isPending ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Đăng nhập'}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
          <p className="text-sm text-slate-500 mb-3">Chưa có tài khoản?</p>
          <a 
            href="https://forms.google.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full text-center border-2 border-[#003366] text-[#003366] py-2.5 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
          >
            Đăng ký tài khoản
          </a>
        </div>
      </div>
    </div>
  )
}
