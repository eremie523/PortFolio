"use client"
import React, { MouseEvent, ReactNode } from 'react'

type MagicButtonProps = {
    children: ReactNode
    ico?: ReactNode;
    position?: "left" | "right",
    className?: string,
    handleClick?: (e: MouseEvent) => void,
    type?: "button" | "submit" | "reset"
}

const MagicButton = ({children, ico, handleClick, className, position, type}: MagicButtonProps) => {
    return (
        <button className="relative inline-flex h-12 overflow-hidden w-full rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" {...handleClick && {
            onClick: handleClick,
        }}>
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${className}`}>
                {((!position || (position === 'left')) && ico) ? ico : ""}
                {children}
                {((position === 'right') && ico) ? ico : ""}
            </span>
        </button>
    )
}

export default MagicButton