import assets from "../../assets/assets";

import "./Menu_card.css";
const Menu_card = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center absolute ">
        <img src={assets.chocolate} alt="chocolate drink" className="w-12" />
        <img src={assets.menu_card} alt="" />
      </div>
    </>
  );
};

export default Menu_card;
