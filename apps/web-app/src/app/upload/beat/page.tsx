import { Button } from "@/components/ui/Button/Button"
import { Input } from "@/components/ui/Input/Input"
import { MultipleInput } from "@/components/ui/MultipleInput/MultipleInput"
import { Section } from "@/components/ui/Section/Section"
import TextArea from "@/components/ui/TextArea/TextArea"
import { TextField } from "@/components/ui/TextField/TextField"
import { PageType } from "@/models/page.model"

const UploadPage: PageType = (props) => {
    return (
        <Section
            type="secondary"
            className="m-auto w-[320px] !gap-0"
        >
            <Section.Header
                title="Upload a beat"
                type="secondary"
            />
            <Section.Content
                className="p-1"
            >
                <form className="grid grid-cols-1 w-full gap-1">
                    <div className="flex gap-1">
                        <TextField as="primary" className="flex-grow">
                            <TextField.Label className="text-xs pl-[0.1rem]">Name</TextField.Label>
                            <Input size="sm" />
                        </TextField>
                        <TextField as="primary" className="w-14">
                            <TextField.Label className="text-xs pl-[0.1rem]">BPM</TextField.Label>
                            <Input className="" min={0} size="sm" />
                        </TextField>
                    </div>
                    <TextField as="primary">
                        <TextField.Label className="text-xs pl-[0.1rem]">Description</TextField.Label>
                        <TextArea variant="base" />
                    </TextField>
                    <TextField as="primary">
                        <TextField.Label className="text-xs pl-[0.1rem]">Genres</TextField.Label>
                        <MultipleInput
                            className="h-40 overflow-y-auto !items-start"
                            inputProps={{
                            }}
                        />
                    </TextField>
                    <TextField as="primary">
                        <TextField.Label className="text-xs pl-[0.1rem]">Labels</TextField.Label>
                        <MultipleInput
                            className="overflow-y-auto h-20 !items-start"
                            inputProps={{
                            }}
                        />
                    </TextField>
                    <Button>Add song</Button>
                </form>
            </Section.Content>
        </Section>
    )
}

export default UploadPage