import { Paragraph } from "@/components/ui/Paragraph/Paragraph"
import { Section } from "@/components/ui/Section/Section"
import { Title } from "@/components/ui/Title/Title"
import { PageType } from "@/models/page.model"
import { SettingsThemeInput } from "./components/settingInputs/SettingsLanguageInput/SettingsLanguageInput"
import { SettingsLanguageInput } from "./components/settingInputs/SettingsThemeInput/SettingsThemeInput"

const SettingsHomePage: PageType = (props) => {
    return (
        <Section
            type="secondary"
            className="gap-0 flex-grow"
        >
            <Section.Header
                title="Home"
                type="secondary"
                description="Basic settings of the UI"
            />
            <Section.Content
                className="w-full flex gap-[0.2rem] p-1"
            >
                <section className="px-2">
                    <header>
                        <Title>General</Title>
                        <Paragraph as="quaternary">Color, design and theme settings</Paragraph>
                    </header>
                    <div className="flex flex-col gap-2 pt-2">
                        <SettingsThemeInput />
                        <SettingsLanguageInput />
                    </div>
                </section>
            </Section.Content>
        </Section>
    )
}

export default SettingsHomePage