import { BaseComponentProps } from "@/models/component.model"
import clsx from "clsx"
import { Sheet } from "../Sheet"
import { Title } from "../Title/Title"
import { SectionContent } from "./components/SectionContent"

interface SectionProps extends BaseComponentProps {
    title: string
    description?: string
    type?: 'main' | 'secondary'
}

export const Section = ({ title, type = 'main', description, children, className, ...props }: SectionProps) => {
    return (
        <Sheet
            className={
                clsx(
                    "flex flex-col gap-1 overflow-hidden",
                    type === 'secondary' && '!p-0 !bg-bg-secondary',
                    type === 'main' && '!border-0 !bg-transparent',
                    className
                )
            }
            {...props}
        >
            {
                type === 'main' && (
                    <header className="flex items-center gap-1">
                        <Title className="[text-shadow:0px_0px_4px_rgb(105,105,105)]">{title}</Title>
                        <span className="self-center pt-[0.24rem] text-zinc-400 text-xs">{description}</span>
                    </header>
                )
            }
            {
                type === 'secondary' && (
                    <Sheet
                        className="!bg-bg-primary !justify-start"
                        border="bottom"
                        rounded="none"
                    >
                        <div
                            className="flex items-center gap-1 font-medium"
                        >
                            <span
                                className="font-semibold"
                            >
                                {title}
                            </span>
                            <span className="self-center pt-[0.24rem] text-zinc-500 text-[0.62rem] leading-3">{description}</span>
                        </div>
                    </Sheet>
                )
            }
            {children}
        </Sheet>
    )
}


Section.Content = SectionContent