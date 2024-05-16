import { Button } from "@/components/ui/Button/Button"
import { BaseComponentType } from "@/models/component.model"
import { LicenseType, licensesNames } from "@/models/licenses.model"
import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons"
import clsx from "clsx"
import { useLicensesSection } from "./hooks/useLicensesSection"

export const LicensesSection: BaseComponentType = (props) => {
    const { changeLicense, currentLicense } = useLicensesSection()

    const handleOnClickToChangeLicense = (licenseName: LicenseType) => () => {
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
                        Object.entries(licensesNames).map(([_, value]) => {
                            return (
                                <Button
                                    key={value}
                                    className={clsx(
                                        "text-[0.7rem] px-4 py-1 font-semibold !rounded-full",
                                        currentLicense === value && '!bg-bg-tertiary hover:!bg-bg-tertiary'
                                    )}
                                    onClick={handleOnClickToChangeLicense(value)}
                                >
                                    {value}
                                </Button>
                            )
                        })
                    }
                </div>
                <ul className="grid grid-cols-5 font-semibold text-[0.72rem] gap-1">
                    <li className="flex items-center gap-1">
                        <CheckCircledIcon className="text-green-300" />
                        <span>Stems</span>
                    </li>
                    <li className="flex items-center gap-1">
                        <CrossCircledIcon className="text-red-300" />
                        <span>Radio listenings</span>
                    </li>
                    <li className="flex items-center gap-1">
                        <CheckCircledIcon className="text-green-300" />
                        <span>Stems</span>
                    </li>
                    <li className="flex items-center gap-1">
                        <CrossCircledIcon className="text-red-300" />
                        <span>Radio listenings</span>
                    </li>
                    <li className="flex items-center gap-1">
                        <CheckCircledIcon className="text-green-300" />
                        <span>Stems</span>
                    </li>
                    <li className="flex items-center gap-1">
                        <CrossCircledIcon className="text-red-300" />
                        <span>Radio listenings</span>
                    </li>
                    <li className="flex items-center gap-1">
                        <CheckCircledIcon className="text-green-300" />
                        <span>Stems</span>
                    </li>
                    <li className="flex items-center gap-1">
                        <CrossCircledIcon className="text-red-300" />
                        <span>Radio listenings</span>
                    </li>
                    <li className="flex items-center gap-1">
                        <CrossCircledIcon className="text-red-300" />
                        <span>Radio listenings</span>
                    </li>
                    <li className="flex items-center gap-1">
                        <CheckCircledIcon className="text-green-300" />
                        <span>Stems</span>
                    </li>
                    <li className="flex items-center gap-1">
                        <CrossCircledIcon className="text-red-300" />
                        <span>Radio listenings</span>
                    </li>
                    <li className="flex items-center gap-1">
                        <CrossCircledIcon className="text-red-300" />
                        <span>Radio listenings</span>
                    </li>
                    <li className="flex items-center gap-1">
                        <CheckCircledIcon className="text-green-300" />
                        <span>Stems</span>
                    </li>
                    <li className="flex items-center gap-1">
                        <CrossCircledIcon className="text-red-300" />
                        <span>Radio listenings</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}