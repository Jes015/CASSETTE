'use client'
import { Button } from "@/components/ui/Button/Button"
import { Input } from "@/components/ui/Input/Input"
import { Paragraph } from "@/components/ui/Paragraph/Paragraph"
import { TextField } from "@/components/ui/TextField/TextField"
import { BaseComponentType } from "@/models/ui/component.model"
import { signInService } from "@/services/server/auth.service"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const signInSchema = z.object({
    email: z.string().max(50).email().refine((value) => value.endsWith('gmail.com'), { message: 'Just gmail.com directions are allowed'}),
    password: z.string().min(4).max(40).regex(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: 'The password must have a Uppercase, lowercase letter and a number' }),
})

export type SignInSchema = z.infer<typeof signInSchema>

export const SignInForm: BaseComponentType = (props) => {
    const { handleSubmit, register, formState: { errors } } = useForm<SignInSchema>({
        resolver: zodResolver(signInSchema)
    })

    const handleOnSubmit = handleSubmit(async (data) => {
        signInService(data)
    })

    return (
        <form
            onSubmit={handleOnSubmit}
            className="w-full flex gap-1 flex-col text-xs"
        >
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
            <Button className="mt-2">Sign in</Button>
        </form>
    )
}