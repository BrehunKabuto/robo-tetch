import type { ReactNode } from 'react'

interface PastelCardProps {
  children: ReactNode
  className?: string
  tone?: 'mint' | 'sage' | 'pistachio'
}

const toneClasses = {
  mint: 'border-[#c4e6d2] bg-white/85 hover:border-[#74c69d] hover:shadow-[0_14px_34px_-14px_rgba(45,106,79,0.22)]',
  sage: 'border-[#cde2d4] bg-[#f8fcfa]/90 hover:border-[#52b788] hover:shadow-[0_14px_34px_-14px_rgba(45,106,79,0.2)]',
  pistachio: 'border-[#d6e8c8] bg-[#fbfdf8]/90 hover:border-[#74c69d] hover:shadow-[0_14px_34px_-14px_rgba(64,145,108,0.2)]',
}

export function PastelCard({ children, className = '', tone = 'mint' }: PastelCardProps) {
  return (
    <div
      className={`group rounded-2xl border backdrop-blur-md p-6 transition-all duration-300 shadow-[0_6px_24px_-12px_rgba(27,67,50,0.1)] ${toneClasses[tone]} ${className}`}
    >
      {children}
    </div>
  )
}
