import assets from "../assets/assets";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      <span className="bg-black w-full h-full absolute z-1000 opacity-20"></span>
      <div
        style={{ backgroundImage: `url(${assets.hero})`, overlay: "black" }}
        className="absolute w-full bg-contain min-h-full p-10.5">
        <Navbar />
      </div>
    </>
  );
};

export default Hero;
