import { Title } from "@/components/ui/Title/Title"
import { BaseComponentType } from "@/models/component.model"

const NotFound: BaseComponentType = (props) => {
   return (
       <div className="bg-white">
        <Title as="secondary">Not found</Title>
       </div>
   )
}

export default NotFound