import { React, useEffect, useState } from "react";
import "./game.styles.css";

const GuessGame = () => {
  const [userText, setUserText] = useState("");
  const [count, setCount] = useState(3);
  const [randomNumber, setRandomNumber] = useState(0);
  const [changeButton, setChangeButton] = useState(false);

  const targetVal = document.getElementById("target-value");
  const countParag = document.getElementById("count-parag");
  const showComp = document.getElementById("show-random");
  const showUser = document.getElementById("show-usertext");

  const handleNewGame = () => {
    targetVal.value = "";
    setUserText("");
    showComp.textContent = "";
    setCount(3);
    countParag.textContent = "Click the submit button to start game";
    setChangeButton(false);
  };

  const getUserInput = (e) => {
    if (
      e.target.value.length <= 2 &&
      e.target.value > 0 &&
      e.target.value < 11
    ) {
      setUserText(e.target.value);
    }
  };

  const countClicked = () => {
    setCount(count - 1);
  };

  const greaterThan = () => {
    if (count > 1) {
      const reducedCount = count - 1;
      const getTrial = reducedCount > 1 ? "trials" : "trial";
      countParag.textContent = `You guessed wrong! You have ${reducedCount} ${getTrial} left for this game`;
    }
  };

  const lessthan = () => {
    showUser.textContent = `${userText}`;
    showComp.textContent = `${randomNumber}`;
    countParag.textContent = `You lost the game, the answer is ${randomNumber}`;
    setChangeButton(true);
  };

  const isTheSame = () => {
    greaterThan();
    countClicked();
    showComp.textContent = `${randomNumber}`;
    countParag.textContent = `Congratulations, You won the guess game`;
    setChangeButton(true);
  };

  useEffect(() => {
    const number = Math.trunc(Math.random() * 10) + 1;
    setRandomNumber(number);

    if (count === 0 && Number(userText) !== randomNumber) {
      lessthan();
    } else if (count === 0 && Number(userText) === randomNumber) {
      isTheSame();
    }
  });

  const checkBeforeSubmit = (e) => {
    e.preventDefault();
    if (
      userText.length > 0 &&
      userText.length < 2 &&
      targetVal.value.length > 0 &&
      targetVal.value.length < 2
    ) {
      if (Number(userText) === randomNumber) {
        getUserInput(e);
        isTheSame();
      } else if (Number(userText) !== randomNumber) {
        countClicked();
        getUserInput(e);
        greaterThan();
      }
    }
  };

  const clickToReset = (e) => {
    e.preventDefault();
    targetVal.value = "";
    showUser.textContent = "";
    showComp.textContent = "";
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
          <div id="show-usertext" className="render-user-choice">
            {userText}
          </div>
        </div>
        <div className="dev-choice">
          <h3 className="dev-text">comp choice</h3>
          <span className="dev">💻</span>
          <div className="render-dev-choice">
            <p id="show-random"></p>
          </div>
        </div>
      </div>
      <p id="count-parag" className="render">
        Click the submit button to start game
      </p>
      {changeButton ? (
        <div className="button-container">
          <button className="button newButton" onClick={handleNewGame}>
            New Game
          </button>
        </div>
      ) : (
        <div id="button-folder" className="button-container">
          <div className="button game-button">
            <input type="submit" onClick={checkBeforeSubmit} />
          </div>
          <div className="button game-button">
            <input type="reset" onClick={clickToReset} />
          </div>
        </div>
      )}
    </div>
  );
};

export default GuessGame;
