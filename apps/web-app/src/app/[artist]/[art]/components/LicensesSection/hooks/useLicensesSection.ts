import { License, licensesData } from "@/models/logic/licenses.model"
import { useState } from "react"

export const useLicensesSection = () => {
    const [currentLicense, setCurrentLicense] = useState<License>(licensesData[0])

    const changeLicense = (newLicenseName: string) => {
        const license = licensesData.find((license) => license.name === newLicenseName)

        if (license == null) return

        setCurrentLicense(license)
    }

    return { changeLicense, currentLicense, licensesData }
}