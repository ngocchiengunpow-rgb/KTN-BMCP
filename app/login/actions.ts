'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(prevState: any, formData: FormData) {
  const username = formData.get('username')
  const password = formData.get('password')

  const cookieStore = await cookies()
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/',
  }

  // Master Login
  if (username === 'admin' && password === '1') {
    cookieStore.set('vmu_auth', 'true', cookieOptions)
    cookieStore.set('vmu_role', 'master', cookieOptions)
    redirect('/dashboard')
  }

  // Student Login
  if (username === '123' && password === '1') {
    cookieStore.set('vmu_auth', 'true', cookieOptions)
    cookieStore.set('vmu_role', 'student', cookieOptions)
    redirect('/dashboard')
  }

  return { error: 'Tên đăng nhập hoặc mật khẩu không đúng.' }
}

export async function logout() {
  const cookieStore = await cookies()
  cookieStore.delete('vmu_auth')
  cookieStore.delete('vmu_role')
  redirect('/login')
}
