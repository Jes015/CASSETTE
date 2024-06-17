import { Link } from "@/components/ui/Link/Link"
import { Section } from "@/components/ui/Section/Section"
import { PageType } from "@/models/routing/page.model"
import { frontRoutes } from "@/models/routing/routes.model"
import { SignUpForm } from "./components/SignUpForm"

const SignUpPage: PageType = (props) => {
    return (
        <Section
            type="secondary"
            className="!gap-0 w-[300px]"
        >
            <Section.Header
                title="Sign up"
                type="secondary"
            />
            <Section.Content className="flex flex-col p-1">
                <SignUpForm />
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
    )
}

export default SignUpPage