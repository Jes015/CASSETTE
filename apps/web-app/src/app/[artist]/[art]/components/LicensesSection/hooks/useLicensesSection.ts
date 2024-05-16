import { LicenseType, licensesNames } from "@/models/licenses.model"
import { useState } from "react"

export const useLicensesSection = () => {
    const [currentLicense, setCurrentLicense] = useState<LicenseType>(licensesNames.basic)

    const changeLicense = (newLicense: LicenseType) => {
        setCurrentLicense(newLicense)
    }

    return { changeLicense, currentLicense }
}