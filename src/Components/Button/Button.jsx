import { NavLink } from "react-router-dom";
const Button = ({ w, bg_color, text_color, label }) => {
  const google_map_location = "https://maps.app.goo.gl/gZVkZbsRMXrgjrrS8";

  return (
    <div>
      <NavLink
        to={`${label == "Get direction" ? google_map_location : "/top_menu"}`}
        target={`${label == "Get direction" ? "_blank" : ""}`}
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "52px",
          fontSize: "20px",
          border: "solid 3px #432818",
          borderRadius: "100px",
          padding: "12px",
          fontWeight: "bold",
          cursor: "pointer",

          width: w,
          color: `var(${text_color})`,
          background: `var(${bg_color})`,
        }}>
        {label}
      </NavLink>
    </div>
  );
};

export default Button;
