'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(prevState: any, formData: FormData) {
  const username = formData.get('username')
  const password = formData.get('password')

  if (username === '123' && password === '1') {
    const cookieStore = await cookies()
    cookieStore.set('vmu_auth', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    })
    
    redirect('/dashboard')
  }

  return { error: 'Tên đăng nhập hoặc mật khẩu không đúng.' }
}
