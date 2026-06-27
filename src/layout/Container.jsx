import Hero from "../Components/Hero/Hero";
import Menu from "../Components/Menu/Menu";
import Ourstory from "../Components/Ourstory/Ourstory";

const Container = () => {
  return (
    <div className="">
      <Hero />
      <div className="py-10.5 px-37.5">
        <Ourstory />
        <Menu />
      </div>
    </div>
  );
};

export default Container;
