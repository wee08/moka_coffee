import { NavLink } from "react-router-dom";
import assets from "../assets/assets.js";
const Navbar = () => {
  const active_style =
    "bg-lightwarmbrown rounded-full font-bold border-2 border-darkbrown text-darkbrown";

  const NavItem = ({ to, label }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-6 py-2 ${isActive ? active_style : "text-white"}`
      }>
      {label}
    </NavLink>
  );
  const NAV_LINK = [
    { to: "/", label: "Home" },
    { to: "/our_story", label: "Our story" },
    { to: "/top_menu", label: "Menu" },
    { to: "/about_us", label: "About us" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="w-full flex justify-between items-center text-darkbrown font-young-serif">
      <div>
        <img className="w-50.5 h-15.5 " src={assets.logo} alt="" />
      </div>
      <div className="flex justify-evnely items-ceneter text-darkbrown text-5 gap-28">
        {NAV_LINK.map(({ to, label }) => (
          <NavItem key={to} to={to} label={label} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
