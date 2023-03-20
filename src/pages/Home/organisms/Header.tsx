import PhotoProfile from "../Atoms/PhotoProfile";
import MobileMenu from "../molecules/MobileMenu";
import DarkModeLogo from "../molecules/DarkModeLogo";
import MainMenu from "../molecules/MainMenu";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <PhotoProfile />
      <MainMenu />
      <div className="flex gap-x-2 items-center">
        <MobileMenu />
        <DarkModeLogo />
      </div>
    </div>
  );
};

export default Header;
