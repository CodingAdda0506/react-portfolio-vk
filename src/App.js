import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import CurrentWork from "./components/CurrentWork/CurrentWork";

function App() {
  return (
    <div className="flex h-auto justify-center border border-red-500 p-5 sm:border-blue-500 md:border-green-500 lg:border-purple-500 xl:border-yellow-500">
      <BgFliterBlack />
      <Navbar />
      <div className="mt-28 w-[700px]">
        <HeroSection />
        <CurrentWork />
      </div>
    </div>
  );
}

function BgFliterBlack() {
  return (
    <div className="absolute inset-0 -z-10 mx-auto h-[350px] w-full bg-[#0a0a0d] opacity-50" />
  );
}

export default App;
