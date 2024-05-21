import { useState } from "react"
import { LanguageType, languageNames } from "../models/settingsLanguageInput.model"


export const useSettingsLanguageInput = () => {
    const [themeStatus, setThemeStatus] = useState<LanguageType>(languageNames.English)

    const changeThemeStatus = (newLanguage: LanguageType) => {
        setThemeStatus(newLanguage)
    }

    return { themeStatus, changeThemeStatus }
}