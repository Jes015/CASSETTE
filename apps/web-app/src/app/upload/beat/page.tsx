import { Input } from "@/components/ui/Input/Input"
import { Section } from "@/components/ui/Section/Section"
import TextArea from "@/components/ui/TextArea/TextArea"
import { TextField } from "@/components/ui/TextField/TextField"
import { PageType } from "@/models/page.model"

const UploadPage: PageType = (props) => {
    return (
        <Section
            type="secondary"
            className="m-auto min-w-[300px] !w-fit !gap-0"
        >
            <Section.Header
                title="Upload a beat"
                type="secondary"
            />
            <Section.Content
                className="p-1"
            >
                <div className="grid grid-cols-1 w-full gap-1">
                    <TextField as="primary">
                        <TextField.Label className="text-xs pl-[0.1rem]">Name</TextField.Label>
                        <Input size="sm" />
                    </TextField>
                    <TextField as="primary">
                        <TextField.Label className="text-xs pl-[0.1rem]">Description</TextField.Label>
                        <TextArea variant="base" />
                    </TextField>
                    <TextField as="primary">
                        <TextField.Label className="text-xs pl-[0.1rem]">Name</TextField.Label>
                        <Input size="sm" />
                    </TextField>
                    <TextField as="primary">
                        <TextField.Label className="text-xs pl-[0.1rem]">Name</TextField.Label>
                        <Input size="sm" />
                    </TextField>
                </div>
            </Section.Content>
        </Section>
    )
}

export default UploadPage