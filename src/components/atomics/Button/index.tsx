import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"


interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    text: string
}


const Button  = ({ text, ...props }: ButtonProps)=> {
    return (
        <button {...props} className={`text-white w-full font-bold py-2 px-4 rounded ${props.className}`}>
            {text}
        </button>
    )
}


export default Button