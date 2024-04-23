import { BaseComponentProps } from "@/models/component.model"
import clsx from "clsx"
import { FC } from "react"
import { Art } from "./Art"
import { Title } from "./Title/Title"

interface SectionProps extends BaseComponentProps {
    title: string
    description?: string
}

export const Section: FC<SectionProps> = ({ title, description, ...props }) => {
    return (
        <section 
            className={
                clsx("flex flex-col gap-1")
            }
            {...props}
        >
            <header className="flex items-center gap-1">
                <Title className="[text-shadow:0px_0px_4px_rgb(105,105,105)]">{title}</Title>
                <span className="self-center pt-[0.24rem] text-zinc-400 text-xs">{description}</span>
            </header>
            <div className="flex gap-2">
                {
                    Array(20).fill(null).map((_, key) => (
                        <Art key={key} />

                    ))
                }
            </div>
        </section>
    )
}