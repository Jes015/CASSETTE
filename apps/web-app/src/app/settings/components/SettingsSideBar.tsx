'use client'
import { Section } from "@/components/ui/Section/Section"
import { useRouting } from "@/hooks/useRouting"
import { BaseComponentType } from "@/models/component.model"
import { frontRoutes } from "@/models/routes.model"
import { IconBrush, IconCash, IconHome } from "@tabler/icons-react"
import { SettingsLayoutLink } from "./SettingsLayoutLink"

const settingsRoutes = [
    {
        ...frontRoutes.static.settings.subRoutes.home,
        icon: IconHome
    },
    {
        ...frontRoutes.static.settings.subRoutes.artist,
        icon: IconBrush
    },
    {
        ...frontRoutes.static.settings.subRoutes.payments,
        icon: IconCash
    }
]


export const SettingsSideBar: BaseComponentType = (props) => {
    const { currentPathname } = useRouting()
    
    return (
        <Section
            type="secondary"
            className="gap-0 self-start"
        >
            <Section.Header
                title="Settings"
                type="secondary"
            />
            <Section.Content
                className="w-full flex flex-col gap-[0.2rem] p-1"
            >
                {
                    (settingsRoutes.map((settingRoute) => (
                        <SettingsLayoutLink route={settingRoute} key={settingRoute.path} currentPage={currentPathname === settingRoute.path}>
                            <settingRoute.icon className="text" width={18} height={18} />
                            <span>{settingRoute.name}</span>
                        </SettingsLayoutLink>
                    )))
                }
            </Section.Content>
        </Section>
    )
}