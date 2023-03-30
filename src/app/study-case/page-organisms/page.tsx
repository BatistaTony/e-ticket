import Button from "@/components/atomics/Button";
import Input from "@/components/atomics/Input";
import DynamicLabel from "@/components/atomics/Label/dynamic-label";
import { CrazyTitle } from "@/components/atomics/Title";
import Navbar from "@/components/organisms/Navbar";
import PeopleYouMayKnow from "@/components/organisms/PeopleYouMayKnow";

const AtomicsComponentPage = () => {
  return (
    <div className="flex flex-col">
      <CrazyTitle text="Organisms Components" />

      <div>
        <DynamicLabel text="Navbar" className="text-[white] mb-3" />
        <Navbar/>
      </div>

      <div className="w-[300]">
        <PeopleYouMayKnow/>
      </div>


      
    </div>
  );
};

export default AtomicsComponentPage;
