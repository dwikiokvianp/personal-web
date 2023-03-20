import Header from "./organisms/Header";
import MainContent from "./organisms/MainContent";
import Footer from "./organisms/Footer";

const Home = () => {
  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto bg-white min-h-screen">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
