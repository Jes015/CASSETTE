'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export const useOnPageLoad = (callback: () => void) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    callback()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams])
}