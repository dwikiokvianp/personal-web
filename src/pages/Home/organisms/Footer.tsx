import { navigationMenu } from "../../../constant/user-related";
import { CgCopyright } from "react-icons/all";

const Footer = () => {
  return (
    <>
      <div>
        <div className="h-1 bg-gray-50"></div>
      </div>
      <div className="mt-12 flex justify-between">
        <ul className="flex gap-x-2 m-10 ">
          {navigationMenu.map((menu) => {
            return (
              <li
                key={menu.id}
                className="text-sm font-bold hover:text-teal-500 text-slate-700 hover:cursor-pointer"
              >
                {menu.name}
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-x-1 text-slate-500 mr-10">
          <CgCopyright />
          {new Date().getFullYear()} All rights reserved
        </div>
      </div>
    </>
  );
};
export default Footer;
