'use client'
import { RoundedPlaySong } from "@/components/feat/RoundedPlaySong/RoundedPlaySong"
import { SongActions } from "@/components/feat/SongActions/SongActions"
import { Badge } from "@/components/ui/Badge"
import { PartialSectionType, Section } from "@/components/ui/Section/Section"
import { Table } from "@/components/ui/Table/Table"
import { Title } from "@/components/ui/Title/Title"
import { IconPlus } from "@tabler/icons-react"
import clsx from "clsx"

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
                    "flex gap-2 !border-0",
                    className
                )
            }
            type="tertiary"
            {...props}
        >
            <Section.Content
                className="flex flex-col p-2"
            >
                <div className="inline-flex flex-grow items-start">
                    <RoundedPlaySong size="big" />
                    <div
                        className="flex flex-grow flex-col gap-2"
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
                            className="flex items-center self-end gap-2"
                        >
                            <SongActions
                                size="big"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <Table>
                        <Table.Header>
                            <Table.Row>
                                <Table.Column>aaa</Table.Column>
                                <Table.Column>aaa</Table.Column>
                                <Table.Column>aaa</Table.Column>
                                <Table.Column>aaa</Table.Column>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row
                                className="bg-blue-400"
                            >
                                <Table.Column>aaaa</Table.Column>
                                <Table.Column>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Table.Column>
                                <Table.Column>aaaa</Table.Column>
                                <Table.Column>aaaa</Table.Column>
                            </Table.Row>
                            <Table.Row>
                                <Table.Column>aaaa</Table.Column>
                                <Table.Column>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Table.Column>
                                <Table.Column>aaaa</Table.Column>
                                <Table.Column>aaaa</Table.Column>
                            </Table.Row>
                            <Table.Row>
                                <Table.Column>aaaa</Table.Column>
                                <Table.Column>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Table.Column>
                                <Table.Column>aaaa</Table.Column>
                                <Table.Column>aaaa</Table.Column>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </Section.Content>
        </Section>
    )
}