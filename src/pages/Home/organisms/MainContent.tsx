import { mainMenu, mainMenuItems } from "../../../constant/user-related";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/all";

const socialMedia = [
  {
    id: 1,
    name: "Github",
  },
  {
    id: 2,
    name: "Twitter",
  },
  {
    id: 3,
    name: "Instagram",
  },
  {
    id: 4,
    name: "LinkedIn",
  },
];

const MainContent = () => {
  const iconDeterminer = (name: string) => {
    switch (name) {
      case "Github":
        return <AiFillGithub />;
      case "Twitter":
        return <AiFillTwitterCircle />;
      case "Instagram":
        return <AiFillInstagram />;
      case "LinkedIn":
        return <AiFillLinkedin />;
      default:
        return <AiFillGithub />;
    }
  };
  return (
    <div className="m-10 block md:flex ">
      <section className="flex-1 flex md:hidden">
        <img
          src={mainMenu.imgUrl}
          alt=""
          className="rounded-2xl h-64 rotate-6 md:h-96"
        />
      </section>
      <section className="mt-14 flex-col flex-1">
        <h1 className="font-extrabold text-6xl text-slate-800">
          {mainMenuItems.title}
        </h1>
        <ul className="mt-3">
          {mainMenuItems.description.map((item) => {
            return (
              <>
                <li className="text-slate-500 text-lg" key={item.id}>
                  {item.text}
                </li>
                <br />
              </>
            );
          })}
        </ul>
      </section>
      <section className="hidden md:block flex-1 flex mt-16">
        <div className="flex">
          <div className="w-[80%] mx-auto ">
            <img
              src={mainMenu.imgUrl}
              alt=""
              className="rounded-2xl rotate-3 md:h-72 lg:h-96 "
            />
          </div>
        </div>
        <div className="flex ">
          <ul className="mt-5 w-[80%] mx-auto">
            {socialMedia.map((item) => {
              return (
                <>
                  <div className="flex gap-x-2 items-center my-2">
                    <div className="text-3xl ">{iconDeterminer(item.name)}</div>
                    <li
                      className="font-bold text-slate-700 text-md"
                      key={item.id}
                    >
                      Follow on {item.name}
                    </li>
                  </div>
                </>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};
export default MainContent;
