import { Outlet } from "react-router-dom";
import GuessGame from "../../components/guessGame/game.component";
import PopUp from "../../components/guessGame/popup.component";
import "./guess.css";

const Guess = () => {
  return (
    <div className="guess-container">
      <Outlet />
      <GuessGame />
    
    </div>
  );
};

export default Guess;
