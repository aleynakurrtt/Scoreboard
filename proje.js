function increaseGoal(team) {
  let currentGoal = parseInt(document.getElementById('goal' + team).innerText);
  document.getElementById('goal' + team).innerText = currentGoal + 1;
}

function decreaseGoal(team) {
  let currentGoal = parseInt(document.getElementById('goal' + team).innerText);
  if (currentGoal > 0) {
      document.getElementById('goal' + team).innerText = currentGoal - 1;
  }
}

function setGoal(team) {
  let newGoal = prompt("Yeni skoru giriniz:");
  if (!isNaN(newGoal)) {
      document.getElementById('goal' + team).innerText = parseInt(newGoal);
  } else {
      alert("Lütfen sayı giriniz!");
  }
}
function changeTeamName(team) {
  let newName = prompt("Please enter new team name:");
  if (newName !== null && newName.trim() !== "") {
      document.getElementById('team' + team).innerHTML = newName + " <onclick='changeTeamName(\"" + team + "\")'></onclick>";
  }
}

let resetScores = () => {
  goalA = 0;
  goalB = 0;
  goalAValue.textContent = goalA;
  goalBValue.textContent = goalB;
}
