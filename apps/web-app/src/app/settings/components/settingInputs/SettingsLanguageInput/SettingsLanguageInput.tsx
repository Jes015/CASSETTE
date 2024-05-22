'use client'
import { Sheet } from "@/components/ui/Sheet"
import { TextField } from "@/components/ui/TextField/TextField"
import { BaseComponentType } from "@/models/component.model"
import clsx from "clsx"
import { useSettingsThemeInput } from "./hooks/useSettingsThemeInput"
import { ThemeType, themeData } from "./models/settingsThemeInput.model"

export const SettingsThemeInput: BaseComponentType = (props) => {
    const { themeStatus, changeThemeStatus } = useSettingsThemeInput()

    const handleOnClickToChangeColor = (color: ThemeType) => () => {
        changeThemeStatus(color)
    }

    return (
        <TextField as="secondary">
            <TextField.Label>Theme</TextField.Label>
            <div className="flex gap-2">
                {
                    themeData.map((color) => (
                        <Sheet
                            key={color.name}
                            onClick={handleOnClickToChangeColor(color.name)}
                            className={
                                clsx(
                                    "flex-grow w-32 !p-0 flex-col cursor-pointer",
                                    themeStatus === color.name ? 'bg-bg-tertiary border-border-primary' : 'hover:bg-bg-tertiary/40'
                                )
                            }
                        >
                            <div
                                style={{
                                    backgroundColor: color.color
                                }}
                                className="h-8"
                            >

                            </div>
                            <Sheet border="top" rounded="none" className="!p-1 text-xs font-medium hover:bg-bg-tertiary !bg-transparent">
                                {color.name}
                            </Sheet>
                        </Sheet>
                    ))
                }
            </div>
        </TextField>
    )
}