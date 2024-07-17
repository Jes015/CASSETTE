import { BaseComponentType } from "@/models/ui/component.model"
import { ContextMenuItem as DefaultContextMenuItem } from "@radix-ui/react-context-menu"

export const ContextMenuItem: BaseComponentType = ({ children, onClick, ...props }) => {
    return (
        <DefaultContextMenuItem
            className="group text-[13px] leading-none text-violet11 rounded-[3px] p-4 flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1 hover:bg-bg-primary/25"
            onClick={onClick}
        >
            {children}
        </DefaultContextMenuItem>
    )
}