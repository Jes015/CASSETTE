import { PlaySongButton } from "@/components/feat/PlaySongButton/PlaySongButton"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button/Button"
import { Link } from "@/components/ui/Link/Link"
import { Paragraph } from "@/components/ui/Paragraph/Paragraph"
import { Section } from "@/components/ui/Section/Section"
import { Title } from "@/components/ui/Title/Title"
import { BaseComponentType } from "@/models/component.model"
import { IconMessage2, IconPlus, IconUserPlus } from "@tabler/icons-react"
import clsx from "clsx"

export const ArtistInfoSection: BaseComponentType = ({ className, ...props }) => {
    const isProfileOwner = true
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
                                <Title as="secondary" className="pl-1">joyolababy</Title>
                                <div className="flex mt-1 gap-1 items-start flex-shrink-0">
                                    <Badge size="big" className="">Singer</Badge>
                                    <Badge size="big" className="">Producer</Badge>
                                    <Badge size="big" className="">Artist</Badge>
                                    {
                                        isProfileOwner && (
                                            <Badge
                                                as="button"
                                                size="big"
                                                styles="tertiary"
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
                            <div>
                                <Paragraph as="quaternary">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores excepturi voluptate, iste nemo ratione reiciendis provident saepe dolor libero nostrum nihil quia dicta totam odit! Saepe ducimus corporis minima incidunt.
                                </Paragraph>
                            </div>
                            <div className="flex gap-1">
                                <Button>
                                    <IconMessage2 width={18} height={18}/>
                                </Button>
                                <Button>
                                    <IconUserPlus width={18} height={18}/>
                                </Button>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <Link className="text-xs" href='/a' styles="link">Facebook</Link>
                            <Link className="text-xs" href='/a' styles="link">Instagram</Link>
                            <Link className="text-xs" href='/a' styles="link">Twitter</Link>
                            <Link className="text-xs" href='/a' styles="link">My web site</Link>
                        </div>
                    </div>
                </div>
            </Section.Content>
        </Section>
    )
}