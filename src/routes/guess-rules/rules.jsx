import { Outlet } from "react-router-dom";
import "./rules.styles.css";

const Rules = () => {
  return (
    <div>
      <Outlet />
      <div className="rules-container">
        <h3 className="rules-header">Guess Game Rules</h3>
      </div>
    </div>
  );
};

export default Rules;
