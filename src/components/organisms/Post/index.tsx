import { Avatar } from "@/components/atomics/Avatar"

interface PostProps {
    authorAvatar: string 
    name: string 
    text: string
}

const Post = ({ authorAvatar, name ,text}: PostProps)=> {
    return (
        <div className="w-full p-5 border-2">
            <div className="flex flex-row items-center">
                <Avatar src={authorAvatar} type="small" />
                <h1 className="text-4xl ml-5">{name}</h1>
            </div>
            <div className="mt-5">
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}


export default Post