import { useState } from "react";
import "./game.styles.css";

const GuessGame = () => {
  const [userText, setUserText] = useState("");
  const [compText, setCompText] = useState("");
  const [countClick, setCountClick] = useState(3);

  const getUserInput = (e) => {
    if (e.target.value.length <= 2) {
      setUserText(e.target.value);
    }
  };

  const clickedCount = () => {
    setCountClick(countClick - 1);
  };

  const getCompGuess = () => {
    setCompText(Math.trunc(Math.random() * 10) + 1);
  };

  const inPutText = document.getElementById("target-value");

  const checkBeforeSubmit = (e) => {
    e.preventDefault();
    if (userText.length > 0 && Number(userText) <= 10 && countClick > 0) {
      if (Number(userText) === Number(compText)) {
        alert("Congratulations you won the guess game");
        clickToReset(e);
      } else if (Number(userText) !== Number(compText)) {
        getCompGuess();
        clickedCount();
      }
    } else if (
      userText.length > 0 &&
      Number(userText) <= 10 &&
      countClick < 1
    ) {
      clickToReset(e);
    }
  };

  const clickToClear = (e) => {
    e.preventDefault();
    setUserText("");
    setCompText("");
    inPutText.value = "";
  };

  const clickToReset = (e) => {
    e.preventDefault();
    clickToClear(e);
    setCountClick(3);
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
          <input type="submit" value="clear" onClick={clickToClear} />
        </div>
        <div className="button">
          <input type="reset" onClick={clickToReset} />
        </div>
      </div>
    </div>
  );
};

export default GuessGame;
