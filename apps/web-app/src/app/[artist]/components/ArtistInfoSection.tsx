'use client'
import { PlaySongButton } from "@/components/feat/PlaySongButton/PlaySongButton"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button/Button"
import { Input } from "@/components/ui/Input/Input"
import { Link } from "@/components/ui/Link/Link"
import { Paragraph } from "@/components/ui/Paragraph/Paragraph"
import { Section } from "@/components/ui/Section/Section"
import TextArea from "@/components/ui/TextArea/TextArea"
import { TextField } from "@/components/ui/TextField/TextField"
import { Title } from "@/components/ui/Title/Title"
import { BaseComponentType } from "@/models/component.model"
import { IconCheck, IconEdit, IconMessage2, IconPlus, IconUserPlus, IconX } from "@tabler/icons-react"
import clsx from "clsx"
import { useState } from "react"

export const ArtistInfoSection: BaseComponentType = ({ className, ...props }) => {
    const [editMode, setEditMode] = useState(false)

    const isProfileOwner = true

    const activateEditMode = editMode && isProfileOwner

    const handleOnClickToActivateEditMode = () => {
        setEditMode((prev) => !prev)
    }

    return (
        <Section
            className={
                clsx(
                    "w-full flex gap-2 !border-0",
                    className
                )
            }
            type="tertiary"
            {...props}
        >
            <Section.Content
                className="flex flex-col p-2 flex-shrink"
            >
                <div className="inline-flex flex-grow items-start">
                    <div>
                        <PlaySongButton className="flex-shrink-0" size="big" />
                    </div>
                    <div
                        className="flex flex-grow flex-col gap-1"
                    >
                        <div className="flex justify-between items-center mt-4">
                            <div className="flex gap-2 items-center justify-between w-full">
                                {
                                    activateEditMode
                                        ?
                                        (
                                            <TextField className="h-[40px]" as="secondary">
                                                <Input defaultValue='joyolababy' size="xl" variant="transparent" className="px-1" />
                                            </TextField>
                                        )
                                        :
                                        (
                                            <Title as="secondary" className="pl-1">joyolababy</Title>
                                        )
                                }
                                <div className="flex mt-1 gap-1 items-start flex-shrink-0">
                                    {
                                        ['Singer', 'Producer', 'Artist'].map((legend) => (
                                            <Badge
                                                key={legend}
                                                size="big"
                                                className={
                                                    clsx(
                                                        activateEditMode && 'flex items-center gap-[0.2rem] pl-1 justify-between'
                                                    )
                                                }
                                            >
                                                {
                                                    activateEditMode && (
                                                        <button className="flex items-center pt-[0.1rem]">
                                                            <IconX className="text-zinc-400" width={14} height={14} />
                                                        </button>
                                                    )
                                                }
                                                <span>
                                                    {legend}
                                                </span>
                                            </Badge>
                                        ))
                                    }
                                    {
                                        activateEditMode && (
                                            <Badge
                                                as="button"
                                                size="big"
                                                variant="tertiary"
                                                className="!flex !self-stretch justify-center items-center cursor-pointer">
                                                <IconPlus width={14} height={14} />
                                            </Badge>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex items-start justify-between pl-1 gap-2"
                        >
                            <div className="w-full">
                                {
                                    activateEditMode
                                        ? (
                                            <TextArea
                                                variant="transparent"
                                                className="outline-none text-xs bg-transparent text-text-tertiary w-full h-[48px] font-medium"
                                            >
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus recusandae modi voluptates nam asperiores adipisci provident ea neque eligendi similique ab architecto, exercitationem libero tenetur enim aperiam, sed unde itaque!
                                            </TextArea>
                                        )
                                        : (
                                            <Paragraph as="quaternary" className="line-clamp-3">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores excepturi voluptate, iste nemo ratione reiciendis provident saepe dolor libero nostrum nihil quia dicta totam odit! Saepe ducimus corporis minima incidunt.
                                            </Paragraph>
                                        )
                                }
                            </div>
                            <div className="flex gap-1 flex-shrink-0">
                                {
                                    !isProfileOwner && (
                                        <>
                                            <Button>
                                                <IconMessage2 width={18} height={18} />
                                            </Button>
                                            <Button>
                                                <IconUserPlus width={18} height={18} />
                                            </Button>
                                        </>
                                    )
                                }
                                {
                                    isProfileOwner && (
                                        <>
                                            {
                                                !editMode && (
                                                    <Button onClick={handleOnClickToActivateEditMode} className="flex-shrink-0">
                                                        <IconEdit width={18} height={18} />
                                                    </Button>
                                                )
                                            }
                                            {
                                                activateEditMode && editMode && (
                                                    <>
                                                        <Button onClick={handleOnClickToActivateEditMode} className="flex-shrink-0">
                                                            <IconX width={18} height={18} />
                                                        </Button>
                                                        <Button onClick={handleOnClickToActivateEditMode} className="flex-shrink-0">
                                                            <IconCheck width={18} height={18} />
                                                        </Button>
                                                    </>
                                                )
                                            }
                                        </>
                                    )
                                }
                            </div>
                        </div>
                        <div className="flex items-center gap-1 pl-1">
                            <Link className="text-xs" href='/a' variant="link">Facebook</Link>
                            <Link className="text-xs" href='/a' variant="link">Instagram</Link>
                            <Link className="text-xs" href='/a' variant="link">Twitter</Link>
                            <Link className="text-xs" href='/a' variant="link">My web site</Link>
                        </div>
                    </div>
                </div>
            </Section.Content>
        </Section>
    )
}