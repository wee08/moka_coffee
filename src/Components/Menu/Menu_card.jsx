import assets from "../../assets/assets";

import "./Menu_card.css";
const Menu_card = () => {
  return (
    <>
      <img
        src={assets.chocolate}
        alt="chocolate drink"
        className="w-60  0 h-75 items-start rotate-20 relative translate-y-45 -translate-x-4 z-100"
      />
      <div className="absolute flex flex-col items-center justify-center bg-card">
        <div className="inner_card"></div>
        <p className="text-xl text-center self-center">hello </p>
      </div>
    </>
  );
};

export default Menu_card;
