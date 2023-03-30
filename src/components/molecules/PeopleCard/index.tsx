import { Avatar } from "@/components/atomics/Avatar"
import Button from "@/components/atomics/Button"


interface PeopleCardProps {
    src?: string
    name: string
    buttonText: string
}

const PeopleCard = ({ buttonText, name, src = "" }: PeopleCardProps)=> {
    return (
        <div className="w-[300px] flex flex-col items-center border-2 p-5">
            <Avatar src={src} type="small" />
            <h1 className="mt-2 text-2xl mt-5">{name || "Simple Placeholder name"}</h1>
            <p className="mt-2 text-2xl text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero!
            </p>
            <Button text={buttonText || "verificar"} className="bg-[#6EB5C0] mt-5 w-[150px]" />
        </div>
    )
}


export default PeopleCard