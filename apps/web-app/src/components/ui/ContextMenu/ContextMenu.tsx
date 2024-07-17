import { BaseComponentProps } from "@/models/ui/component.model"
import { ContextMenuContent, ContextMenuPortal, Root as ContextMenuRoot, ContextMenuTrigger } from '@radix-ui/react-context-menu'
import { ContextMenuItem } from "./components/ContextMenuItem/ContextMenuItem"

interface ContextMenuProps extends BaseComponentProps {
    trigger: React.ReactNode
}

export const ContextMenu = ({ trigger, className, children }: ContextMenuProps) => {
    return (
        <ContextMenuRoot>
            <ContextMenuTrigger {...{ className }}>
                {trigger}
            </ContextMenuTrigger>
            <ContextMenuPortal>
                <ContextMenuContent
                    className="min-w-[220px] bg-bg-secondary border-2 border-border-primary/80 rounded-md overflow-hidden shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
                >
                    {children}
                </ContextMenuContent>
            </ContextMenuPortal>
        </ContextMenuRoot>
    )
}

ContextMenu.Item = ContextMenuItem