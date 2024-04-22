import { BaseComponentType } from "@/models/component.model"
import { Art } from "./Art"
import { Title } from "./Title/Title"

export const Section: BaseComponentType = (props) => {
    return (
        <section className="flex flex-col gap-1">
            <header className="flex items-center gap-1">
                <Title>Trending</Title>
            </header>
            <div className="flex gap-2">
                {
                    Array(20).fill(null).map((_, key) => (
                        <Art key={key}/>

                    ))
                }
            </div>
        </section>
    )
}