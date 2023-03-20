import Header from "./organisms/Header";
import Footer from "./organisms/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto bg-white min-h-screen">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
