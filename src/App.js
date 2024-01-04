import "./App.css";
import { AiFillAlipayCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="h-screen border border-red-500 p-5 sm:border-blue-500 md:border-green-500 lg:border-purple-500 xl:border-yellow-500">
      <BgFliterBlack />
      <Navbar />
    </div>
  );
}

function BgFliterBlack() {
  return (
    <div className="absolute inset-0 mx-auto h-[350px] w-full bg-[#0a0a0d] opacity-50" />
  );
}

export default App;
