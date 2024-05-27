import { LayoutType } from "@/models/page.model"

const AuthLayout: LayoutType = ({ children }) => {
    return (
        <div
            className="flex items-center justify-center w-full h-full"
        >
            {children}
        </div>
    )
}

export default AuthLayout