import { GlobalComponents } from "@/components/feat/GlobalComponents"
import { Sidebar } from "@/components/feat/Sidebar/Sidebar"
import { SongPlayer } from "@/components/feat/SongPlayer/SongPlayer"
import { setUpAxios } from "@/config/axios/axios.setup"
import clsx from "clsx"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

setUpAxios()

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {

  return (
    <html lang="en">
      <body className={clsx(inter.className, 'flex h-svh text-sm text-text-primary overflow-x-clip max-w-[1536px] m-auto')}>
        <Sidebar />
        <GlobalComponents />
        <main className="flex-grow relative p-4 select-none overflow-auto">
          <SongPlayer />
          <div className="-z-40 absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <span className="text-8xl font-bold text-text-primary/5">CASSETTE</span>
          </div>
          {children}
        </main>
      </body>
    </html>
  )
}
