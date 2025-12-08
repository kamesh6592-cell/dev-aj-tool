'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { AnimatedBlobs } from "@/components/animated-blobs"

export default function AuthCallback() {
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const { error } = await supabase.auth.exchangeCodeForSession(
          new URL(window.location.href).searchParams.get('code') || ''
        )
        
        if (error) throw error
        
        // Redirect to home page after successful authentication
        router.push('/')
        router.refresh()
      } catch (error) {
        console.error('Error during auth callback:', error)
        router.push('/auth?error=callback_failed')
      }
    }

    handleCallback()
  }, [router, supabase])

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-neutral-950 z-1 relative">
      <div className="background__noisy" />
      <div className="relative max-w-4xl py-10 flex items-center justify-center w-full">
        <div className="max-w-lg mx-auto !rounded-2xl !p-0 !bg-white !border-neutral-100 min-w-xs text-center overflow-hidden ring-[8px] ring-white/20">
          <header className="bg-neutral-50 p-6 border-b border-neutral-200/60">
            <div className="flex items-center justify-center -space-x-4 mb-3">
              <div className="size-9 rounded-full bg-pink-200 shadow-2xs flex items-center justify-center text-xl opacity-50">
                🚀
              </div>
              <div className="size-11 rounded-full bg-amber-200 shadow-2xl flex items-center justify-center text-2xl z-2">
                👋
              </div>
              <div className="size-9 rounded-full bg-sky-200 shadow-2xs flex items-center justify-center text-xl opacity-50">
                🙌
              </div>
            </div>
            <p className="text-xl font-semibold text-neutral-950">
              Authentication Complete!
            </p>
            <p className="text-sm text-neutral-500 mt-1.5">
              Redirecting you to TOMO...
            </p>
          </header>
          <main className="space-y-4 p-6">
            <p className="text-xs text-neutral-500">
              Please wait while we complete your login...
            </p>
          </main>
        </div>
        <AnimatedBlobs />
      </div>
    </div>
  )
}
