import { BaseComponentType } from "@/models/component.model"
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import { Content, Group, Icon, Label, Portal, Root, ScrollDownButton, ScrollUpButton, SelectItem, Separator, Trigger, Value, Viewport } from '@radix-ui/react-select'

export const Select: BaseComponentType = (props) => {
    return (
        <Root>
            <Trigger
                className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
                aria-label="Food"
            >
                <Value placeholder="Select a fruit…" />
                <Icon className="text-violet11">
                    <ChevronDownIcon />
                </Icon>
            </Trigger>
            <Portal>
                <Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                    <ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                        <ChevronUpIcon />
                    </ScrollUpButton>
                    <Viewport className="p-[5px]">
                        <Group>
                            <Label className="px-[25px] text-xs leading-[25px] text-mauve11">
                                Fruits
                            </Label>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </Group>

                        <Separator className="h-[1px] bg-violet6 m-[5px]" />

                        <Group>
                            <Label className="px-[25px] text-xs leading-[25px] text-mauve11">
                                Vegetables
                            </Label>
                            <SelectItem value="aubergine">Aubergine</SelectItem>
                            <SelectItem value="broccoli">Broccoli</SelectItem>
                            <SelectItem value="carrot" disabled>
                                Carrot
                            </SelectItem>
                            <SelectItem value="courgette">Courgette</SelectItem>
                            <SelectItem value="leek">Leek</SelectItem>
                        </Group>

                        <Separator className="h-[1px] bg-violet6 m-[5px]" />

                        <Group>
                            <Label className="px-[25px] text-xs leading-[25px] text-mauve11">
                                Meat
                            </Label>
                            <SelectItem value="beef">Beef</SelectItem>
                            <SelectItem value="chicken">Chicken</SelectItem>
                            <SelectItem value="lamb">Lamb</SelectItem>
                            <SelectItem value="pork">Pork</SelectItem>
                        </Group>
                    </Viewport>
                    <ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                        <ChevronDownIcon />
                    </ScrollDownButton>
                </Content>
            </Portal>
        </Root>
    )
}