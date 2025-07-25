// src/components/ui/tooltip.tsx
import * as React from "react"
import { cn } from "@/lib/utils"

export function TooltipProvider({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}

export interface TooltipProps {
    children: React.ReactNode
    content?: string
}

export function Tooltip({ children, content }: TooltipProps) {
    return <>{children}</>
}

export function TooltipTrigger({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}

export function TooltipContent({ children }: { children: React.ReactNode }) {
    return <>{children}</>
}