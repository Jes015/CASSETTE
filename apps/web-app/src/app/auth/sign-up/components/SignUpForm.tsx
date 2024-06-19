'use client'
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button/Button"
import { Input } from "@/components/ui/Input/Input"
import { Paragraph } from "@/components/ui/Paragraph/Paragraph"
import { TextField } from "@/components/ui/TextField/TextField"
import { useRouting } from "@/hooks/useRouting"
import { UserRolesType, userRoles } from "@/models/logic/user.model"
import { frontRoutes } from "@/models/routing/routes.model"
import { BaseComponentType } from "@/models/ui/component.model"
import { globalLoaderService } from "@/services/client/CustomEvents/global-loader.client-service-custom-events"
import { signUpService } from "@/services/server/auth.service"
import { zodResolver } from '@hookform/resolvers/zod'
import { IconInfoCircle } from "@tabler/icons-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const signUpSchema = z.object({
    email: z.string().max(50).email().refine((value) => value.endsWith('gmail.com'), { message: 'Just gmail.com directions are allowed'}),
    username: z.string().min(4).max(40).regex(/^[a-zA-Z0-9_-]+$/, { message: 'The username should not contain symbols or operators.' }),
    password: z.string().min(4).max(40).regex(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'The password must have a Uppercase, lowercase letter and a number' }),
    roles: z.string().transform(value => value.split(',')).transform(value => value.map(value2 => value2[0].toLocaleUpperCase() + value2.slice(1))).refine(value => value.every(val => Object.values(userRoles).includes(val as UserRolesType)), { message: 'Valid values: ' + Object.values(userRoles).join(', ')})
})

export type SignUpSchema = z.infer<typeof signUpSchema>

export const SignUpForm: BaseComponentType = (props) => {
    const { goToAndRefresh } = useRouting()
    const [message, setMessage] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm<SignUpSchema>({
        resolver: zodResolver(signUpSchema)
    })

    const handleOnSubmit = handleSubmit(async (data) => {
        setLoading(true)
        try {
            globalLoaderService.sendMessage({ detail: true })
            const response = await signUpService(data)
            
            setMessage(response.message)

            if (response.statusCode === 201) {
                goToAndRefresh(frontRoutes.static.home.path)
            } else {
                globalLoaderService.sendMessage({ detail: false })
            }

        } catch (error) {
            console.log(error)
        }finally {
            setLoading(false)
        }

    })
    return (
        <form onSubmit={handleOnSubmit} className="w-full flex gap-1 flex-col text-xs">
            {
                message && (
                    <Badge className="flex items-center gap-1 p-1 justify-center w-full">
                        <IconInfoCircle width={14} height={14} />
                        {message}
                    </Badge>
                )
            }
            <TextField as="primary">
                <TextField.Label>Username</TextField.Label>
                <Input {...register('username')} />
                <Paragraph as="quaternary" className="text-red-400/90">{errors['username']?.message}</Paragraph>
            </TextField>
            <TextField as="primary">
                <TextField.Label>Roles</TextField.Label>
                <Input defaultValue='Singer,Producer,Writer' {...register('roles')} />
                <Paragraph as="quaternary" className="text-red-400/90">{errors['roles']?.message}</Paragraph>
            </TextField>
            <TextField as="primary">
                <TextField.Label>Email</TextField.Label>
                <Input {...register('email')} />
                <Paragraph as="quaternary" className="text-red-400/90">{errors['email']?.message}</Paragraph>
            </TextField>
            <TextField as="primary">
                <TextField.Label>Password</TextField.Label>
                <Input {...register('password')} />
                <Paragraph as="quaternary" className="text-red-400/90">{errors['password']?.message}</Paragraph>
            </TextField>
            <Button disabled={loading} loading={loading} className="mt-2">Sign in</Button>
        </form>
    )
}