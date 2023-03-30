import { Logo } from "@/components/atomics/Logo";
import SearchBar from "@/components/molecules/SearchBar";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6 rounded">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Logo />
      </div>
      <div className="">
        <div>
            <SearchBar/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
