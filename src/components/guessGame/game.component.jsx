import { React, useEffect, useState } from "react";
import "./game.styles.css";
import { click } from "@testing-library/user-event/dist/click";
// import PopUp from "./popup.component";

const GuessGame = () => {
  const [userText, setUserText] = useState("");
  const [count, setCount] = useState(3);
  const [randomNumber, setRandomNumber] = useState(0);

  const targetVal = document.getElementById("target-value");
  const buttonFold = document.getElementById("button-folder");
  const gameButton = document.querySelectorAll("game-button");
  const countParag = document.getElementById("count-parag");
  const showComp = document.getElementById("show-random");
  const showUser = document.getElementById("show-usertext");

  // const handleNewGame = () => {};

  const createButton = () => {
    const replacedChildren = ;
    console.log(replacedChildren);

    const newButton = document.createElement("button");
    newButton.textContent = "New Game";

    buttonFold.replaceChildren(newButton);

    newButton.addEventListener("click", () => {
      targetVal.value = "";
      setUserText("");
      showComp.textContent = "";
      countParag.textContent = "Click the submit button to start game";

      buttonFold.replaceChildren(replacedChildren);
    });
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

  // useEffect(() => {

  // }, []);

  useEffect(() => {
    const number = Math.trunc(Math.random() * 10) + 1;
    setRandomNumber(number);

    if (count === 0) {
      showUser.textContent = `${userText}`;
      showComp.textContent = `${randomNumber}`;
      countParag.textContent = `You lost the game, the answer is ${randomNumber}`;
      createButton();
    }
  });

  const checkBeforeSubmit = (e) => {
    e.preventDefault();
    if (userText.length > 0) {
      if (Number(userText) === randomNumber) {
        countClicked();
        getUserInput(e);
        showComp.textContent = `${randomNumber}`;
        countParag.textContent = `Congratulations, You won the guess game`;
        createButton();
      } else if (Number(userText) !== randomNumber) {
        getUserInput(e);
        countClicked();
        countParag.textContent = `You guessed wrong! You have ${
          count - 1
        } trials left for this game`;
      }
      clickToReset(e);
    }
  };

  const clickToReset = (e) => {
    e.preventDefault();
    targetVal.value = "";
    setRandomNumber("");
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
      <div id="button-folder" className="button-container">
        <div className="button game-button">
          <input type="submit" onClick={checkBeforeSubmit} />
        </div>
        <div className="button game-button">
          <input type="reset" onClick={clickToReset} />
        </div>
      </div>
    </div>
  );
};

export default GuessGame;
