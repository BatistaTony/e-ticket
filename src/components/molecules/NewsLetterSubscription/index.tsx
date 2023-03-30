import Button from "@/components/atomics/Button"
import Input from "@/components/atomics/Input"
import DynamicLabel from "@/components/atomics/Label/dynamic-label"





const NewsLetterSubscription = ()=> {
    return (
        <div className="w-[100%] flex flex-row justify-between">
            <DynamicLabel text="Subscreva a NewsLetter agora" className="text-[red]"  />
            <Input placeholder="insira o teu email" className="w-[50%]" />
            <Button text="subscrever" className="w-[200px] bg-[red] ml-5" />
        </div>
    )
}



export default NewsLetterSubscription