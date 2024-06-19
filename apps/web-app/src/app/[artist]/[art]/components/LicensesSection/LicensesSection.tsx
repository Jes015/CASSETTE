import { Button } from "@/components/ui/Button/Button"
import { BaseComponentType } from "@/models/ui/component.model"
import { IconDna, IconRadio, IconVideo, IconVinyl } from "@tabler/icons-react"
import clsx from "clsx"
import { useLicensesSection } from "./hooks/useLicensesSection"

export const LicensesSection: BaseComponentType = (props) => {
    const { changeLicense, currentLicense, licensesData } = useLicensesSection()

    const handleOnClickToChangeLicense = (licenseName: string) => () => {
        changeLicense(licenseName)
    }

    return (
        <section className="flex flex-col gap-2">
            <header>
                <h4 className="text-xs font-bold">License</h4>
            </header>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1 w-full">
                    {
                        licensesData.map((license) => {
                            return (
                                <Button
                                    key={license.name}
                                    className={clsx(
                                        "text-[0.7rem] px-4 py-1 font-semibold !rounded-full",
                                        license.name === currentLicense.name && '!bg-bg-tertiary hover:!bg-bg-tertiary'
                                    )}
                                    onClick={handleOnClickToChangeLicense(license.name)}
                                >
                                    {license.name}
                                </Button>
                            )
                        })
                    }
                </div>
                <ul className="grid grid-cols-4 font-semibold text-[0.72rem] gap-1">
                    {
                        currentLicense.includes.map((license) => (
                            <li
                                key={license.name}
                                className="flex items-center gap-1"
                            >
                                {
                                    (license.type === 'radio') && (
                                        <IconRadio className="text-zinc-200" />
                                    )
                                }
                                {
                                    (license.type === 'listening') && (
                                        <IconVinyl className="text-zinc-200" />
                                    )
                                }
                                {
                                    (license.type === 'video') && (
                                        <IconVideo className="text-zinc-200" />
                                    )
                                }
                                {
                                    (license.type === 'steams') && (
                                        <IconDna />
                                    )
                                }
                                <span className="w-fit">{license.name}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}