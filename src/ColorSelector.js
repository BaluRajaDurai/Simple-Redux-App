import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "./features/theme";

const ColorSelector = () => {
  const dispatch = useDispatch();

  const [color, setColor] = useState("black");

  return (
    <div>
      <br />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={() => dispatch(changeColor(color))}>Change Color</button>
    </div>
  );
};

export default ColorSelector;
