import { IoIosArrowDown } from "react-icons/all";

const MobileMenu = () => {
  return (
    <div className="block md:hidden flex">
      <div className="flex items-center gap-x-1 p-2 border-1 shadow-md rounded-xl text-md">
        <div>Menu</div>
        <IoIosArrowDown />
      </div>
    </div>
  );
};

export default MobileMenu;
