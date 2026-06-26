import Navbar from "./Navbar";

import "./Hero.css";
import Button from "./Button/Button";

const Hero = () => {
  return (
    <div className=" p-10.5 hero">
      <div className="custom_shape">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,
            82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,
            985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35
            A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          />
        </svg>
      </div>
      <Navbar />

      <div className="w-2/5 flex flex-col justify-center h-screen font-young-serif text-white">
        <h1 className="text-5xl">GRAB YOUR DRINK NOW</h1>
        <br />
        <div className="flex items-center justify-between">
          <h2 className="text-4xl">IN SENSOK</h2>
          <Button
            w={"215px"}
            bg_color={"--color-primary"}
            text_color={"--color-lightbrown"}
            label={"Get direction"}
          />
          <Button
            w={"109px"}
            bg_color={"--color-cream"}
            text_color={"--color-darkbrown"}
            label={"Menu"}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
