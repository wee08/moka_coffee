import Navbar from "./Navbar";

import "./Hero.css";
import Button from "./Button";

const Hero = () => {
  return (
    <div className=" p-10.5 hero">
      <Navbar />

      <div className="flex flex-col justify-center h-screen font-young-serif text-white ">
        <h1 className="text-5xl">GRAB YOUR DRINK NOW</h1>
        <br />
        <div>
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
