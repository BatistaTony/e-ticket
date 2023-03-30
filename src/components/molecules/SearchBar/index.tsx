import Button from "@/components/atomics/Button";
import Input from "@/components/atomics/Input";
import DynamicLabel from "@/components/atomics/Label/dynamic-label";

const SearchBar = () => {
  return (
    <div className="w-full flex flex-row justify-between">
      <div className="flex flex-col">
        <DynamicLabel
          text="Pesquisar artigos"
          className="text-[white] text-[20pt] mb-3"
        />
        <Input placeholder="titulo do artigo" className="w-[500px]" />
      </div>

      <Button text="pesquisar" className="w-[100px] bg-[#6EB5C0] text-[black] h-[40px] self-end ml-2" />
    </div>
  );
};

export default SearchBar;
