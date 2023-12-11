import { React, useState } from "react";
import "./game.styles.css";
import PopUp from "./popup.component";

const GuessGame = () => {
  const [userText, setUserText] = useState("");
  const [compText, setCompText] = useState("");
  const [countClick, setCountClick] = useState(3);
  const [winner, setWinner] = useState(false);

  const hideWinner = () => setWinner(false);

  const inPutText = (e) => e.target.value;

  const getUserInput = (e) => {
    if (inPutText(e).length <= 2) {
      setUserText(inPutText(e));
    }
  };

  const clickedCount = () => {
    setCountClick(countClick - 1);
  };

  const getCompGuess = () => {
    setCompText(Math.trunc(Math.random() * 10) + 1);
  };

  const checkBeforeSubmit = (e) => {
    e.preventDefault();
    if (userText.length > 0 && Number(userText) <= 10 && countClick > 0) {
      if (Number(userText) === Number(compText)) {
        return <PopUp />;
        // clickToReset(e);
      } else if (Number(userText) !== Number(compText)) {
        clickedCount();
        getCompGuess();
      }
    } else if (
      userText.length > 0 &&
      Number(userText) <= 10 &&
      countClick < 1
    ) {
      clickToReset(e);
    }
  };

  const clickToReset = (e) => {
    e.preventDefault();
    setCountClick(3);
    setUserText("");
    setCompText("");
  };

  return (
    <div className="guess-game-container">
      <div className="guess-game">
        <div className="user-choice">
          <h3 className="user-text">User Choice</h3>
          <input
            id="target-value"
            type="text"
            placeholder="click here to type"
            className="user-input"
            onChange={getUserInput}
          />
          <div className="render-user-choice">{userText}</div>
        </div>
        <div className="dev-choice">
          <h3 className="dev-text">comp choice</h3>
          <span className="dev">💻</span>
          <div className="render-dev-choice">
            <p>{compText}</p>
          </div>
        </div>
      </div>
      <p className="render">You have {countClick} trials for this game</p>
      <div className="button-container">
        <div className="button">
          <input type="submit" onClick={checkBeforeSubmit} />
        </div>
        <div className="button">
          <input type="reset" onClick={clickToReset} />
        </div>
      </div>
    </div>
  );
};

export default GuessGame;
