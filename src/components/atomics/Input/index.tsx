

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {

}

const Input = ({...props}: InputProps)=> {
    return (
        <input {...props}  className={`border border-gray-400 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ${props.className} `}  />
    )
}


export default Input