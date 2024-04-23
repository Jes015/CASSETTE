import { Sidebar } from "@/components/feat/Sidebar/Sidebar"
import clsx from "clsx"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'flex h-svh text-sm text-text-primary overflow-x-clip')}>
        <Sidebar />
        <main className="flex-grow relative p-4">
          <div className="-z-40 absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <span className="text-8xl font-bold text-text-primary/5">CASSETTE</span>
          </div>
          {children}
        </main>
      </body>
    </html>
  )
}
