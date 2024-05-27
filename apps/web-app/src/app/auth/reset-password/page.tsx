import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button/Button"
import { Input } from "@/components/ui/Input/Input"
import { Link } from "@/components/ui/Link/Link"
import { Section } from "@/components/ui/Section/Section"
import { TextField } from "@/components/ui/TextField/TextField"
import { PageType } from "@/models/page.model"
import { frontRoutes } from "@/models/routes.model"

const ResetPasswordPage: PageType = () => {
    return (
        <div className="flex flex-col gap-1">
            <Badge className="flex justify-center">Not available yet</Badge>
            <Section
                type="secondary"
                className="!gap-0 w-[300px]"
            >
                <Section.Header
                    title="Reset password"
                    type="secondary"
                />
                <Section.Content className="flex flex-col p-1">
                    <form className="w-full flex gap-1 flex-col text-xs">
                        <TextField as="primary">
                            <TextField.Label>Email</TextField.Label>
                            <Input />
                        </TextField>
                        <Button className="mt-2">Send email</Button>
                    </form>
                    <div
                        className="flex justify-center w-full text-[0.6rem]"
                    >
                        <Link
                            href={frontRoutes.static.auth.path}
                            variant="link"
                        >
                            Auth options
                        </Link>
                    </div>
                </Section.Content>
            </Section>
        </div>
    )
}

export default ResetPasswordPage