import { useState } from "react"
import { ThemeType, themeNames } from "../models/settingsThemeInput.model"


export const useSettingsThemeInput = () => {
    const [themeStatus, setThemeStatus] = useState<ThemeType>(themeNames.system)

    const changeThemeStatus = (newTheme: ThemeType) => {
        setThemeStatus(newTheme)
    }

    return { themeStatus, changeThemeStatus }
}