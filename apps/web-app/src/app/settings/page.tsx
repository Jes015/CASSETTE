import { Button } from "@/components/ui/Button/Button"
import { Paragraph } from "@/components/ui/Paragraph/Paragraph"
import { Section } from "@/components/ui/Section/Section"
import { Title } from "@/components/ui/Title/Title"
import { PageType } from "@/models/routing/page.model"
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
                className="w-full flex flex-col items-start px-2 gap-2 pt-1 pb-2"
            >
                <section>
                    <header>
                        <Title>General</Title>
                        <Paragraph as="quaternary">Color, design and theme settings</Paragraph>
                    </header>
                    <div className="flex flex-col gap-2 pt-2">
                        <SettingsThemeInput />
                        <SettingsLanguageInput />
                    </div>
                </section>
                <section>
                    <header>
                        <Title>Account</Title>
                        <Paragraph as="quaternary">Delete and disable account</Paragraph>
                    </header>
                    <div className="flex flex-col gap-1 pt-2">
                        <Button className="!bg-red-400/10 hover:!bg-red-400/20">Delete account</Button>
                        <Button className="!bg-yellow-400/10 hover:!bg-yellow-400/20">Disable account</Button>
                    </div>
                </section>
            </Section.Content>
        </Section>
    )
}

export default SettingsHomePage