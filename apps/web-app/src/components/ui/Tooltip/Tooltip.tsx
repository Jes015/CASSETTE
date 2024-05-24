'use client'
import { Arrow, Content, PopperContentProps, Portal, Provider, Root, Trigger, type TooltipProps as DefaultTooltipProps } from '@radix-ui/react-tooltip'
import { FC } from "react"
import { Sheet } from '../Sheet'



interface TooltipProps extends DefaultTooltipProps {
    trigger: React.ReactNode
    content: React.ReactNode
    contentProps?: PopperContentProps
}

export const Tooltip: FC<TooltipProps> = ({ trigger, content, contentProps, ...props }) => {
    return (
        <Provider>
            <Root delayDuration={0} {...props}>
                <Trigger asChild>
                    {trigger}
                </Trigger>
                <Portal>
                    <Content sideOffset={5} {...contentProps}>
                        <Sheet className="px-2 border-border-primary/70 !z-[500000000000]">
                            {content}
                        </Sheet>
                        <Arrow className="fill-border-primary" />
                    </Content>
                </Portal>
            </Root>
        </Provider>
    )
}