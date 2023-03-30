import { Avatar } from "@/components/atomics/Avatar";
import Button from "@/components/atomics/Button";
import Input from "@/components/atomics/Input";
import DynamicLabel from "@/components/atomics/Label/dynamic-label";
import { CrazyTitle } from "@/components/atomics/Title";

const AtomicsComponentPage = () => {
  return (
    <div className="flex flex-col">
      <CrazyTitle text="Atomic Components" />

      <Avatar src="" type="super-small" className="mb-5" />
      <DynamicLabel text="Label with some weird" className="mb-5 text-[#fff]" />
      <Input placeholder="text something here" className="max-w-[250px] mb-5" />
      <Button text="Click me" className="max-w-[150px] bg-[#F9A826]" />
    </div>
  );
};

export default AtomicsComponentPage;
