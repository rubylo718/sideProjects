let players = [
  { name: "櫻木花道", pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
  { name: "流川楓", pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
  { name: "赤木剛憲", pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
  { name: "宮城良田", pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
  { name: "三井壽", pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 },
];

const dataPanel = document.querySelector("#data-panel");

//input default scores
function displayPlayerList(players) {
  let htmlContent = "";
  players.forEach((player) => {
    htmlContent += "<tr>";
    for (let key in player) {
      if (key === "name") {
        htmlContent += `
          <td>
            <span class=>${player[key]}</span>
          </td>
        `;
      } else {
        htmlContent += `
           <td>
             <span class="score">${player[key]}</span>
             <icon class = 'fa fa-plus-circle up'></icon>
             <icon class = 'fa fa-minus-circle down'></icon>
           </td>
      `;
      }
    }
    htmlContent += "</tr>";
  });
  dataPanel.innerHTML = htmlContent;
}
displayPlayerList(players);

//score adjustment
dataPanel.addEventListener("click", scoreAdjustment);

function scoreAdjustment(event) {
  if (event.target.matches(".up") || event.target.matches(".down")) {
    let scoreNum = event.target.parentElement.children[0];
    let score = Number(scoreNum.innerText);
    if (event.target.matches(".up")) {
      score++;
    } else {
      score--;
      if (score < 0) score = 0;
    }
    scoreNum.innerText = score;
  }
}

// add new player
const addBtn = document.querySelector("#add-btn");
const inputPlayer = document.querySelector("#input-player");
const body = document.querySelector("body");

function addNewPlayer(newPlayerName) {
  if (newPlayerName.length > 0) {
    let newPlayerLine = document.createElement("tr");
    let htmlContent = `
    <td>
      <span class=>${newPlayerName}</span>
    </td>`;
    for (let i = 0; i < 5; i++) {
      htmlContent += `
      <td>
        <span class="score">0</span>
        <icon class="fa fa-plus-circle up"></icon>
        <icon class="fa fa-minus-circle down"></icon>
      </td>
    `;
    }
    newPlayerLine.innerHTML = htmlContent;
    dataPanel.appendChild(newPlayerLine);
  }
  inputPlayer.value = "";
}

addBtn.addEventListener("click", function () {
  let inputName = inputPlayer.value;
  addNewPlayer(inputName.trim(" "));
});

body.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    let inputName = inputPlayer.value;
    addNewPlayer(inputName.trim(" "));
  }
});

// reset the scores
const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", function (event) {
  const scores = document.querySelectorAll(".score");
  scores.forEach((score) => {
    score.innerText = "0";
  });
});
