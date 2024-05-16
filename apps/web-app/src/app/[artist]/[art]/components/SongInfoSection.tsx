'use client'
import { RoundedPlaySong } from "@/components/feat/RoundedPlaySong/RoundedPlaySong"
import { SongActions } from "@/components/feat/SongActions/SongActions"
import { Badge } from "@/components/ui/Badge"
import { Paragraph } from "@/components/ui/Paragraph/Paragraph"
import { PartialSectionType, Section } from "@/components/ui/Section/Section"
import { Title } from "@/components/ui/Title/Title"
import { IconPlus } from "@tabler/icons-react"
import clsx from "clsx"
import { LicensesSection } from "./LicensesSection/LicensesSection"

export const SongInfoSection: PartialSectionType = ({ className, ...props }) => {
    const isSongOwner = true

    const liked = true
    const handleOnClickToPlayArt = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
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
                        <RoundedPlaySong className="flex-shrink-0" size="big" />
                    </div>
                    <div
                        className="flex flex-grow flex-col gap-1"
                    >
                        <div className="flex justify-between items-center mt-4">
                            <div className="flex gap-2 items-center">
                                <Title as="secondary">Niaaaa</Title>
                                <div className="flex mt-1 items-start flex-shrink-0">
                                    <Badge size="big" className="">Beat</Badge>
                                </div>
                            </div>
                            <div className="flex items-center flex-shrink-0 mt-1 gap-1">
                                <Badge size="big" className="">Regueton</Badge>
                                <Badge size="big" className="">92 BPM</Badge>
                                {
                                    isSongOwner && (
                                        <Badge
                                            as="button"
                                            size="big"
                                            color="tertiary"
                                            className="!flex !self-stretch justify-center items-center cursor-pointer">
                                            <IconPlus width={14} height={14} />
                                        </Badge>
                                    )
                                }
                            </div>
                        </div>
                        <div
                            className="flex items-start justify-between pl-1 gap-2"
                        >
                            <div>
                                <Paragraph as="quaternary">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores excepturi voluptate, iste nemo ratione reiciendis provident saepe dolor libero nostrum nihil quia dicta totam odit! Saepe ducimus corporis minima incidunt.
                                </Paragraph>
                            </div>
                            <SongActions
                                size="big"
                            />
                        </div>
                    </div>
                </div>
                <LicensesSection />
            </Section.Content>
        </Section>
    )
}