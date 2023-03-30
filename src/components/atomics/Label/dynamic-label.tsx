import { DetailedHTMLProps, HTMLAttributes } from "react"


interface DynamicLabelProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    text: string
}

const DynamicLabel = ({text, ...props}: DynamicLabelProps)=> (
    <p {...props} className={`block font-bold   ${props.className} text-gray-700`}>
        {text}
    </p>
)


export default DynamicLabel