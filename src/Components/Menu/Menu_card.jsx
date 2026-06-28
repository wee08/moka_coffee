import assets from "../../assets/assets";

import "./Menu_card.css";
const Menu_card = () => {
  return (
    <>
      <div className="menu-card-product absolute z-100 flex flex-col items-center justify-end ">
        <img
          src={assets.chocolate}
          alt="chocolate drink"
          className="menu-card-img w-60 h-75 rotate-20 relative"
        />
      </div>

      <div className="absolute flex flex-col items-center justify-center bg-card">
        <div className="inner_card"></div>
      </div>
    </>
  );
};

export default Menu_card;
