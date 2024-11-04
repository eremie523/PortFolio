import Image from 'next/image';
import React, { ReactNode } from 'react'

type ShimmerButtonProps = {
  children: ReactNode
  ico?: ReactNode;
  className?: string;
}

const ShimmerButton = ({children, ico, className}: ShimmerButtonProps) => {
  return (
    <button className={`${className ? className : 'text-white'} inline-flex h-12 animate-shimmer items-center gap-2 justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50`}>
        {children}
        {ico}
    </button>
  )
}

export default ShimmerButton