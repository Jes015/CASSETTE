'use client'
import { Button } from "@/components/ui/Button/Button"
import { Paragraph } from "@/components/ui/Paragraph/Paragraph"
import { Section } from "@/components/ui/Section/Section"
import { BaseComponentType } from "@/models/ui/component.model"
import { signOutService } from "@/services/server/auth.service"
import { IconAlarm } from "@tabler/icons-react"

export const SignOutMessage: BaseComponentType = (props) => {
    return (
        <Section>
            <Section.Header
                title="Auth message"
            />
            <Section.Content className="flex flex-col items-center p-2">
                <IconAlarm width={80} height={80} className="text-zinc-300" />
                <Paragraph as="quaternary">Your session has expired, sign in again to keep cooking</Paragraph>
                <Button className="self-stretch text-xs" onClick={async () => { await signOutService('sign-in') }}>Sign in again</Button>
            </Section.Content>
        </Section>
    )
}