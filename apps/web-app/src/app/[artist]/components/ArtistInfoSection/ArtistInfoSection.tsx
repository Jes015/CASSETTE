'use client'
import { RoundedEditProfileButton } from "@/components/feat/RoundedEditProfileButton/RoundedEditProfileButton"
import { RoundedPlaySongButton } from "@/components/feat/RoundedPlaySongButton/RoundedPlaySongButton"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button/Button"
import { Input } from "@/components/ui/Input/Input"
import { MultipleInput } from "@/components/ui/MultipleInput/MultipleInput"
import { MultipleSelect } from "@/components/ui/MultipleSelect/MultipleSelect"
import { Paragraph } from "@/components/ui/Paragraph/Paragraph"
import { Section } from "@/components/ui/Section/Section"
import TextArea from "@/components/ui/TextArea/TextArea"
import { TextField } from "@/components/ui/TextField/TextField"
import { Title } from "@/components/ui/Title/Title"
import { useRouting } from "@/hooks/useRouting"
import { User, userRoles, userValidationSchemaValues } from "@/models/logic/user.model"
import { BaseComponentProps } from "@/models/ui/component.model"
import { updateUserDataService } from "@/services/server/user.service"
import { zodResolver } from "@hookform/resolvers/zod"
import { IconCheck, IconEdit, IconMessage2, IconUserPlus, IconX } from "@tabler/icons-react"
import clsx from "clsx"
import { FC, useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { useArtistInfoSection } from "./hooks/useArtistInfoSection"

export const updateUserInfoFormSchema = z.object({
    username: userValidationSchemaValues.username.optional(),
    description: userValidationSchemaValues.description,
    roles: userValidationSchemaValues.roles,
    socials: userValidationSchemaValues.socials
})

export type UpdateUserInfoFormType = z.infer<typeof updateUserInfoFormSchema>
interface ArtistInfoSectionProps extends BaseComponentProps {
    defaultUserData: User
    isProfileOwner: boolean
}

export const ArtistInfoSection: FC<ArtistInfoSectionProps> = ({ className, defaultUserData, isProfileOwner, ...props }) => {
    const { currentUserData, updateCurrentUserData, editMode, toggleEditMode, loadingForm, toggleLoadingForm } = useArtistInfoSection(defaultUserData)
    const { replace } = useRouting()

    const {
        formState: {
            errors,
            isDirty,
            dirtyFields,
        },
        setValue,
        register,
        handleSubmit,
        reset,
        trigger
    } = useForm<UpdateUserInfoFormType>({
        defaultValues: {
            ...defaultUserData
        },
        values: currentUserData,
        resolver: zodResolver(updateUserInfoFormSchema)
    })

    useEffect(() => {
        return () => {
            reset()
        }
    }, [])

    const socialsError = Object.values(errors)[0]?.message ?? (errors.socials != null && 'Invalid urls')

    const activateEditMode = editMode && isProfileOwner

    const handleOnClickToToggleEditMode = (newValue?: boolean) => () => {
        if (!newValue) {
            reset()
        }

        toggleEditMode(newValue)
    }

    const handleOnSubmit = handleSubmit(async (data) => {
        if (loadingForm || !isDirty) return
        toggleLoadingForm(true)

        const { message, statusCode } = await updateUserDataService(data)

        let toastMethod: 'success' | 'error' = 'error'

        if (statusCode >= 200 && statusCode < 300) {
            toastMethod = 'success'
            updateCurrentUserData(data)
            toggleEditMode(false)

            const isThereANewUsername = dirtyFields.username

            if (isThereANewUsername) {
                replace(data.username!)
            }
        }

        if (statusCode === 500) {
            reset()
            toggleEditMode(false)
        }

        toast[toastMethod](message)
        toggleLoadingForm(false)
    })

    console.log(errors)

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
                <form onSubmit={handleOnSubmit} className="inline-flex flex-grow items-start">
                    <div>
                        {
                            activateEditMode
                                ?
                                <RoundedEditProfileButton
                                    className="flex-shrink-0"
                                    size="big"
                                    imageProps={{
                                        src: '/tainy.webp',
                                        alt: 'avatar of' + defaultUserData.username
                                    }}
                                />
                                :
                                <RoundedPlaySongButton
                                    className="flex-shrink-0"
                                    size="big"
                                    imageProps={{
                                        src: '/tainy.webp',
                                        alt: 'avatar of' + defaultUserData.username
                                    }}
                                />
                        }
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
                                                <Input
                                                    size="xl"
                                                    variant="transparent"
                                                    className={
                                                        clsx(
                                                            "px-1",
                                                            errors.username?.message && 'border-b-2 border-b-red-300'
                                                        )
                                                    }
                                                    {...register('username')}
                                                />
                                                <TextField.Error>{errors.username?.message}</TextField.Error>
                                            </TextField>
                                        )
                                        :
                                        (
                                            <Title as="secondary" className="pl-1">{currentUserData.username}</Title>
                                        )
                                }
                                {
                                    activateEditMode
                                        ? (
                                            <div>
                                                <MultipleSelect
                                                    unlock={activateEditMode}
                                                    defaultSelectedOptions={currentUserData.roles}
                                                    options={Object.values(userRoles)}
                                                    onChange={(options) => {
                                                        setValue('roles', options, { shouldValidate: true, shouldDirty: true })
                                                    }}
                                                />
                                                <input type="text" hidden {...register('description')} />
                                                <TextField.Error>{errors.roles?.message}</TextField.Error>
                                            </div>
                                        )
                                        : (
                                            <div className="flex mt-1 gap-1 items-start flex-shrink-0">
                                                {
                                                    currentUserData.roles.map((value) => (
                                                        <Badge
                                                            key={value}
                                                            size="big"
                                                        >
                                                            <span>
                                                                {value}
                                                            </span>
                                                        </Badge>
                                                    ))
                                                }
                                            </div>
                                        )
                                }
                            </div>
                        </div>
                        <div
                            className="flex items-start justify-between pl-1 gap-2"
                        >
                            <div className="w-full">
                                {
                                    activateEditMode
                                        ? (
                                            <TextField as="primary">
                                                <TextArea
                                                    variant="transparent"
                                                    className={
                                                        clsx(
                                                            "outline-none text-xs bg-transparent text-text-tertiary w-full h-[48px] font-medium",
                                                            errors.description?.message && 'border-b-2 border-b-red-300'
                                                        )
                                                    }
                                                    {...register('description')}
                                                />
                                                <TextField.Error>{errors.description?.message}</TextField.Error>
                                            </TextField>
                                        )
                                        : (
                                            <Paragraph as="quaternary" className="line-clamp-3">
                                                {currentUserData.description ?? 'NO DESCRIPTION'}
                                            </Paragraph>
                                        )
                                }
                            </div>
                            <div className="flex gap-1 flex-shrink-0">
                                {
                                    !isProfileOwner && (
                                        <>
                                            <Button type="button">
                                                <IconMessage2 width={18} height={18} />
                                            </Button>
                                            <Button type="button">
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
                                                    <Button type="button" onClick={handleOnClickToToggleEditMode(true)} className="flex-shrink-0">
                                                        <IconEdit width={18} height={18} />
                                                    </Button>
                                                )
                                            }
                                            {
                                                activateEditMode && editMode && (
                                                    <>
                                                        <Button type="button" onClick={handleOnClickToToggleEditMode(false)} className="flex-shrink-0">
                                                            <IconX width={18} height={18} />
                                                        </Button>
                                                        <Button type="submit" className="flex-shrink-0" disabled={!isDirty || Object.values(errors).length !== 0} loading={loadingForm}>
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
                            {
                                activateEditMode
                                    ? (
                                        <div>
                                            <MultipleInput
                                                defaultValues={currentUserData.socials}
                                                className="!border-none !p-0 !bg-transparent hover:!bg-transparent"
                                                itemSelectedClassName="text-xs text-blue-400 transition-colors font-medium !bg-transparent !border-none"
                                                inputProps={{
                                                    className: 'text-xs',
                                                    placeholder: 'Add a social link'
                                                }}
                                                onAddValue={(values) => {
                                                    setValue('socials', values, { shouldDirty: true, shouldValidate: true })
                                                }}

                                            />
                                            <input type="text" hidden {...register('socials')} />
                                            <TextField.Error>{socialsError}</TextField.Error>
                                        </div>
                                    )
                                    : (
                                        <div className="flex mt-1 gap-1 items-start flex-shrink-0">
                                            {
                                                currentUserData.socials.map((socialLink) => {
                                                    const socialData = socialLink.split('.')
                                                    let socialName = ''

                                                    if (socialData[0].includes('www')) {
                                                        socialData.splice(0, 1)
                                                    } else {
                                                        socialData[0] = socialData[0].replace('https://', '')
                                                    }

                                                    let firstSocialFragment = socialData[0]

                                                    if (socialData.length > 2) {
                                                        socialName = firstSocialFragment + '.' + socialData[1]
                                                    } else {
                                                        socialName = firstSocialFragment
                                                    }

                                                    return (
                                                        <a target='_blank' key={socialLink} className="text-xs text-blue-400 hover:underline hover:text-blue-300 transition-colors font-medium" href={socialLink}>{socialName}</a>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </form>
            </Section.Content>
        </Section>
    )
}