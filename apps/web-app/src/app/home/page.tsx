import { Art } from "@/components/feat/Art/Art"
import { Section } from "@/components/ui/Section/Section"

const HomePage = () => {
    return (<div className="flex flex-col gap-2">
        <Section>
            <Section.Header
                title="Trending"
                description="Most popular this week"
                type="secondary"
            />
            <Section.Content>
                {
                    Array(20).fill(null).map((_, key) => (
                        <Art type="row" key={key} />

                    ))
                }
            </Section.Content>
        </Section>
        <Section>
            <Section.Header
                title="Popular"
                description="Most selled this week"
                type="secondary"
            />
            <Section.Content className="!gap-0">
                {
                    Array(20).fill(null).map((_, key) => (
                        <Art type="row" key={key} />

                    ))
                }
            </Section.Content>
        </Section>
    </div>
    )
}

export default HomePage