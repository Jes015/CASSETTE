'use client'
import { Sheet } from "@/components/ui/Sheet"
import { TextField } from "@/components/ui/TextField/TextField"
import { BaseComponentType } from "@/models/component.model"
import clsx from "clsx"
import { useSettingsLanguageInput } from "./hooks/useSettingsThemeInput"
import { LanguageType, languageNames } from "./models/settingsLanguageInput.model"

export const SettingsLanguageInput: BaseComponentType = (props) => {
    const { themeStatus, changeThemeStatus } = useSettingsLanguageInput()

    const handleOnClickToChangeColor = (color: LanguageType) => () => {
        changeThemeStatus(color)
    }

    return (
        <TextField as="secondary">
            <TextField.Label>Language</TextField.Label>
            <div className="flex gap-2">
                {
                    Object.values(languageNames).map((language) => (
                        <Sheet
                            key={language}
                            onClick={handleOnClickToChangeColor(language)}
                            className={
                                clsx(
                                    "!p-4 text-sm font-extrabold flex-col cursor-pointer",
                                    themeStatus === language ? 'bg-bg-tertiary border-border-primary' : 'hover:bg-bg-tertiary/40'
                                )
                            }
                        >
                            {language}
                        </Sheet>
                    ))
                }
            </div>
        </TextField>
    )
}