import { Section } from "@/components/ui/Section"

const HomePage = () => {
    return (<div className="flex flex-col gap-2">
        <Section
            title="Trending"
            description="Most popular this week"
        />
        <Section
            title="This week's unicorns"
            description="Most selled this week"
        />
    </div>
    )
}

export default HomePage