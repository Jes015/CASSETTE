import { Link } from "@/components/ui/Link/Link"
import { Section } from "@/components/ui/Section/Section"
import { PageType } from "@/models/routing/page.model"
import { frontRoutes } from "@/models/routing/routes.model"

const AuthPage: PageType = () => {
    return (
        <Section
            type="secondary"
            className="!gap-0 w-[300px]"
        >
            <Section.Header
                title="Auth"
                type="secondary"
            />
            <Section.Content>
                <div className="w-full grid grid-cols-2 gap-1 p-1 flex-col text-xs">
                    {
                        Object.values(frontRoutes.static.auth.subRoutes).map((authPageLink) => (
                            <Link
                                href={authPageLink.path}
                                variant="button"
                                key={authPageLink.name}
                            >
                                {authPageLink.name}
                            </Link>
                        ))
                    }
                </div>
            </Section.Content>
        </Section>
    )
}

export default AuthPage