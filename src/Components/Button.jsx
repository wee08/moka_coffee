import "./Hero.css";
const Button = ({ w, bg_color, text_color, label }) => {
  return (
    <div>
      <button
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
          width: w,
          color: `var(${text_color})`,
          background: `var(${bg_color})`,
        }}>
        {label}
      </button>
    </div>
  );
};

export default Button;
