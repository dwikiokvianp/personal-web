import { useState } from "react";
import { navigationMenu } from "../../../constant/user-related";
import { useNavigate } from "react-router-dom";

const MainMenu = () => {
  const [menu, setMenu] = useState();
  const navigate = useNavigate();
  const [selectedMenu, setSelectedMenu] = useState(1);
  const handleClick = (id: number) => {
    setSelectedMenu(id);
    if (id === 1) {
      return navigate("/");
    }
    navigate(navigationMenu[id - 1].name.toLowerCase());
  };

  return (
    <div className="hidden md:block">
      <div className="border p-2 px-4 rounded-2xl">
        <ul className="flex gap-x-2">
          {navigationMenu.map((menu) => {
            return (
              <li
                className={`font-semibold hover:text-teal-600 ${
                  menu.isSelected ? "text-teal-500" : null
                }`}
                key={menu.id}
                onClick={() => handleClick(menu.id)}
              >
                {menu.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MainMenu;
