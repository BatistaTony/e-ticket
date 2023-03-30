

interface CrazyTitleProps {
    text: string
}

export const CrazyTitle = ({text}: CrazyTitleProps)=> (
    <h1 className="text-[60pt] border-4 border-white uppercase font-bold border-b-10 border-gray-900 p-20  w-max mb-20">
        {text}
      </h1>
)