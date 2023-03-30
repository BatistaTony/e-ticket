import DynamicLabel from "@/components/atomics/Label/dynamic-label";
import PeopleCard from "@/components/molecules/PeopleCard";

const data = [
  { src: "", name: "Branch 1" },
  { src: "", name: "Branch 2" },
  { src: "", name: "Branch 3" },
];

const PeopleYouMayKnow = () => {
  return (
    <div className="pt-5 flex flex-col items-center">
      <DynamicLabel
        text="Pessoas que talvez conheçes"
        className="text-3xl text-center mb-5 text-[white]"
      />

      <div className="w-full flex flex-col items-center gap-10">
        {data.map((item) => (
          <PeopleCard
            key={item.name}
            src={item.src}
            buttonText="Adicionar"
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PeopleYouMayKnow;
