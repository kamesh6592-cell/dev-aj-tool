'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { AnimatedBlobs } from "@/components/animated-blobs"

export default function AuthCallback() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const supabase = createClient()
        
        // Check if this is an error callback
        const hashParams = new URLSearchParams(window.location.hash.substring(1))
        const errorDescription = hashParams.get('error_description')
        
        if (errorDescription) {
          setError(errorDescription)
          setTimeout(() => router.push('/auth'), 2000)
          return
        }

        // For OAuth providers, Supabase handles the session automatically
        // Just check if we have a session now
        const { data: { session } } = await supabase.auth.getSession()
        
        if (session) {
          router.push('/')
          router.refresh()
        } else {
          // If no session after callback, redirect to auth
          router.push('/auth')
        }
      } catch (error: any) {
        console.error('Error during auth callback:', error)
        setError(error.message || 'Authentication failed')
        setTimeout(() => router.push('/auth'), 2000)
      }
    }

    handleCallback()
  }, [router])

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-neutral-950 z-1 relative">
      <div className="background__noisy" />
      <div className="relative max-w-4xl py-10 flex items-center justify-center w-full">
        <div className="max-w-lg mx-auto !rounded-2xl !p-0 !bg-white !border-neutral-100 min-w-xs text-center overflow-hidden ring-[8px] ring-white/20">
          <header className={`p-6 border-b ${error ? 'bg-red-50 border-red-200/60' : 'bg-neutral-50 border-neutral-200/60'}`}>
            <div className="flex items-center justify-center -space-x-4 mb-3">
              <div className={`size-9 rounded-full shadow-2xs flex items-center justify-center text-xl opacity-50 ${error ? 'bg-red-200' : 'bg-pink-200'}`}>
                {error ? '❌' : '🚀'}
              </div>
              <div className={`size-11 rounded-full shadow-2xl flex items-center justify-center text-2xl z-2 ${error ? 'bg-red-300' : 'bg-amber-200'}`}>
                {error ? '⚠️' : '👋'}
              </div>
              <div className={`size-9 rounded-full shadow-2xs flex items-center justify-center text-xl opacity-50 ${error ? 'bg-red-200' : 'bg-sky-200'}`}>
                {error ? '❌' : '🙌'}
              </div>
            </div>
            <p className="text-xl font-semibold text-neutral-950">
              {error ? 'Authentication Failed' : 'Authentication Complete!'}
            </p>
            <p className="text-sm text-neutral-500 mt-1.5">
              {error ? error : 'Redirecting you to TOMO...'}
            </p>
          </header>
          <main className="space-y-4 p-6">
            <p className="text-xs text-neutral-500">
              {error ? 'Redirecting back to login...' : 'Please wait while we complete your login...'}
            </p>
          </main>
        </div>
        <AnimatedBlobs />
      </div>
    </div>
  )
}
