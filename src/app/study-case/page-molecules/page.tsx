import Button from "@/components/atomics/Button";
import Input from "@/components/atomics/Input";
import DynamicLabel from "@/components/atomics/Label/dynamic-label";
import { CrazyTitle } from "@/components/atomics/Title";
import NewsLetterSubscription from "@/components/molecules/NewsLetterSubscription";
import PeopleCard from "@/components/molecules/PeopleCard";
import SearchBar from "@/components/molecules/SearchBar";

const AtomicsComponentPage = () => {
  return (
    <div className="flex flex-col">
      <CrazyTitle text="Molecules Components" />

      <div className="flex flex-row">
        <div className="w-[60%]">
          <div className="mb-5 border-2 border-white p-5 w-[100%]">
            <NewsLetterSubscription />
          </div>

          <div className="mb-5 border-2 border-white p-5 w-[100%]">
            <SearchBar />
          </div>
        </div>
        <div className="mb-5 border-2 border-white p-5 ml-5">
          <PeopleCard />
        </div>
      </div>
    </div>
  );
};

export default AtomicsComponentPage;
