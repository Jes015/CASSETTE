import { FC } from "react"

export interface PageProps {
    params: Record<string, string>
    searchParams: Record<string, string>
}

export interface LayoutProps extends PageProps {
    children?: React.ReactNode
}

export type LayoutType = FC<LayoutProps>

export type PageType = FC<PageProps>