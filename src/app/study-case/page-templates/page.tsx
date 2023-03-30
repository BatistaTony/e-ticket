import Button from "@/components/atomics/Button";
import Input from "@/components/atomics/Input";
import DynamicLabel from "@/components/atomics/Label/dynamic-label";
import { CrazyTitle } from "@/components/atomics/Title";
import HomeTemplate from "@/components/templates/Home";

const AtomicsComponentPage = () => {
  return (
    <div className="flex flex-col w-[90%] items-center">
      <CrazyTitle text="Templates" />
      <div className="w-full">
        <HomeTemplate />
      </div>
    </div>
  );
};

export default AtomicsComponentPage;
