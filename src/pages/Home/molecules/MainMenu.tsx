import { useState } from "react";

const navigationMenu = [
  {
    id: 1,
    name: "About",
    isSelected: true,
  },
  {
    id: 2,
    name: "Articles",
    isSelected: false,
  },
  {
    id: 3,
    name: "Projects",
    isSelected: false,
  },
  {
    id: 4,
    name: "Speaking",
    isSelected: false,
  },
  {
    id: 5,
    name: "Stacks",
    isSelected: false,
  },
];
const MainMenu = () => {
  const [menu, setMenu] = useState();
  const handleClick = (id: number) => {};

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
