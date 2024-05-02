import { Art } from "@/components/feat/Art/Art"
import { Section } from "@/components/ui/Section/Section"

const HomePage = () => {
    return (<div className="flex flex-col gap-2">
        <Section
            title="Trending"
            description="Most popular this week"
        >
            <Section.Content>
                {
                    Array(20).fill(null).map((_, key) => (
                        <Art type="row" key={key} />

                    ))
                }
            </Section.Content>
        </Section>
        <Section
            title="This week's unicorns"
            description="Most selled this week"
        >
            <Section.Content>
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