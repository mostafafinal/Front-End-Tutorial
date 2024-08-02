import { useState } from "react";
function ColorPicker() {
  const [color, setColor] = useState("#cccccc");
  const colorChangeHandler = (event) => setColor(event.target.value);
  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div
        className="colored-space"
        style={{
          color: "white",
          backgroundColor: color,
          fontSize: "1.5rem",
          fontWeight: "bold",
          width: "500px",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: ".25s ease",
        }}>
        {color}
      </div>
      <p>Color Value: {color}</p>
      <label htmlFor="colorpicker">Select Color</label>
      <input
        type="color"
        name="colorpicker"
        value={color}
        onChange={colorChangeHandler}
      />
    </div>
  );
}
export default ColorPicker;
