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



function setScorePrompt(team){
    let score = prompt ("Güncel gol sayınızı giriniz:");
    if(!isNaN(score)){
            document.getElementById('goal'+ team).innerText = parseInt (score);
        } else {
            alert("Geçerli bir sayı giriniz.")
        }
      }

      function changeName(team){
        let newName = prompt("Lütfen yeni takım ismi giriniz");
        if (newName !== null && newName.trim() !=="") {
          document.getElementById('team'+team).innerHTML=newName + "<button onclick='changeName(\"" + team + "\")'></button>"
        }
      }
