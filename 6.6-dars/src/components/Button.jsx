import React from "react";
import file from "../App.css";
function Button() {
  function stopGame() {
    let time = document.getElementById("time");
    let y = document.getElementById("y");
    let x = document.getElementById("x");
    x.textContent = "X";
    y.textContent = "Y";
    time.textContent = "hi there";
  }
  function checkAns(e) {
    let error = document.getElementById("error");
    let labels = document.getElementById("labels");
    let restart = document.getElementById("restart");
    restart.disabled = true;
    let quest1 = Math.floor(Math.random() * 10);
    let quest2 = Math.floor(Math.random() * 10);
    let y = document.getElementById("y");
    let x = document.getElementById("x");
    x.textContent = quest1;
    y.textContent = quest2;
    let realAns = quest1 + quest2;
    labels.append(realAns);
    let eVal = e.target.textContent;
    console.log(eVal);
    if (eVal === realAns) {
      stopGame();
    } else {
      e.target.classList.add("hidden");
      labels.classList.add("hidden");
      error.classList.remove("hidden");
    }
  }
  let randomNum = Math.floor(Math.random() * 10);
  return (
    <div>
      <div className="hidden" id="error">
        <h2>Your answer is error !</h2>
      </div>
      <div id="labels">
        <p id="label" onClick={checkAns}>
          {randomNum}
        </p>
      </div>
    </div>
  );
}

export default Button;
