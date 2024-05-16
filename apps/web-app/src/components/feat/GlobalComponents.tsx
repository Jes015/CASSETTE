import { BaseComponentType } from "@/models/component.model"
import { GlobalLinearLoader } from "./GlobalLinearLoader/GlobalLinearLoader"

export const GlobalComponents: BaseComponentType = (props) => {
    return (
        <>
            <GlobalLinearLoader />
        </>
    )
}