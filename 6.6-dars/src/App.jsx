import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  let timeCount = 10;

  // export function (e) {
  //   let eEl = e.target.value;
  //   console.log('hi');
  // };

  function restart() {
    let quest1 = Math.floor(Math.random() * 10);
    let quest2 = Math.floor(Math.random() * 10);
    let realAns = quest1 + quest2;
    let y = document.getElementById("y");
    let x = document.getElementById("x");
    let start = document.getElementById("start");
    time.classList.add("hidden");
    start.disabled = false;
    timeCount = 10;
    answers.classList.add("hidden");
    x.textContent = "X";
    y.textContent = "Y";
    // realAns.textContent = "";
    startGame();
  }
  function startGame() {
    let restart = document.getElementById("restart");
    restart.disabled = true;
    let answers = document.getElementById("answers");
    let quest1 = Math.floor(Math.random() * 10);
    let quest2 = Math.floor(Math.random() * 10);
    let y = document.getElementById("y");
    let x = document.getElementById("x");
    x.textContent = quest1;
    y.textContent = quest2;
    let realAns = quest1 + quest2;
    answers.append(realAns);
    let start = document.getElementById("start");
    start.disabled = true;
    let time = document.getElementById("time");
    answers.classList.remove("hidden");
    time.classList.remove("hidden");
    let IntId = setInterval(() => {
      timeCount--;
      time.textContent = `Your time is ${timeCount}s`;
      if (timeCount === 0) {
        clearInterval(IntId);
        time.classList.add("hidden");
        alert("your time is end :(");
        restart.disabled = false;
        start.disabled = false;
        timeCount = 10;
        answers.classList.add("hidden");
        x.textContent = "X";
        y.textContent = "Y";
        alert(`The answer is ${realAns}`);
      }
    }, 1010);
  }

  return (
    <>
      <div className="game-app">
        <h1>Math Game</h1>
        <h3 className="hidden" id="time">
          Your time is 10s
        </h3>
        <div>
          <div className="question">
            <h2>
              Find the sum of <span id="x">X</span> and <span id="y">Y</span>
            </h2>
          </div>
          <div id="answers" className="hidden">
            <Button></Button>
            <Button></Button>
            <Button></Button>
          </div>
          <div className="start-game">
            <button className="start" id="start" onClick={startGame}>
              Start
            </button>
            <button onClick={restart} id="restart" className="restart">
              <a href="#">Restart</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
