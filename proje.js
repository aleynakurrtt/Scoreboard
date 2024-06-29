let teamAScore = 0;
let teamBScore = 0;

let teamAScoreValue = document.getElementById("teamAScore");
let teamBScoreValue = document.getElementById("teamBScore");

let incrementScore = (team) => {
  if (team === "teamA") {
    teamAScore++;
    teamAScoreValue.textContent = teamAScore;
  } else if (team === "teamB") {
    teamBScore++;
    teamBScoreValue.textContent = teamBScore;
  }
};

let decrementScore = (team) => {
  if (team === "teamA" && teamAScore > 0) {
    teamAScore--;
    teamAScoreValue.textContent = teamAScore;
  } else if (team === "teamB" && teamBScore > 0) {
    teamBScore--;
    teamBScoreValue.textContent = teamBScore;
  }
};

let resetScores = () => {
  teamAScore = 0;
  teamBScore = 0;
  teamAScoreValue.textContent = teamAScore;
  teamBScoreValue.textContent = teamBScore;
};

function setScorePrompt(team) {
  let score = prompt(`Güncel ${team} skorunu giriniz:`);
  if (score !== null && !isNaN(score)) {
    score = parseInt(score);
    if (!isNaN(score)) {
      if (team === "teamA") {
        teamAScore = score;
        teamAScoreValue.textContent = teamAScore;
      } else if (team === "teamB") {
        teamBScore = score;
        teamBScoreValue.textContent = teamBScore;
      }
    } else {
      alert("Geçerli bir sayı giriniz.");
    }
  } else {
    alert("Skor girilemedi veya iptal edildi.");
  }
}

function changeTeamName(team) {
  let newName = prompt(`Enter new name for ${team}:`);
  if (newName !== null && newName.trim() !== "") {
    if (team === "teamA") {
      document.getElementById("teamAName").textContent = newName;
    } else if (team === "teamB") {
      document.getElementById("teamBName").textContent = newName;
    }
  } else {
    alert("Invalid name. Please enter a valid team name.");
  }
}
