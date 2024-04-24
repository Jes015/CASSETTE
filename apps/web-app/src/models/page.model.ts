import { FC } from "react"

export interface PageProps {
    params: Record<string, string>
    searchParams: Record<string, string>
}

export type PageType = FC<PageProps>