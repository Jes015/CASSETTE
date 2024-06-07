import { LayoutType } from "@/models/routing/page.model"
import { SettingsSideBar } from "./components/SettingsSideBar"

const SettingsLayout: LayoutType = ({ children, ...props }) => {
    

    return (
        <div className="flex gap-4">
            <SettingsSideBar />
            {children}
        </div>
    )
}

export default SettingsLayout