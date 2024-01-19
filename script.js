const cats = ["jpg/cat1.jpg", "jpg/cat2.jpg", "jpg/cat3.jpg", "jpg/cat4.jpg"];

let selectedPlayers = [];

function generateMatchup() {
  const matchupContainer = document.getElementById("matchups");
  matchupContainer.innerHTML = "";

  const matchup = [];
  for (let i = 0; i < cats.length; i += 2) {
    matchup.push([cats[i], cats[i + 1]]);
  }

  matchup.forEach((matchup, index) => {
    const matchupDiv = document.createElement("div");
    matchupDiv.classList.add("matchup");

    const player1Img = document.createElement("img");
    player1Img.src = matchup[0];
    player1Img.onclick = () => selectPlayer(matchup[0]);

    const player2Img = document.createElement("img");
    player2Img.src = matchup[1];
    player2Img.onclick = () => selectPlayer(matchup[1]);

    matchupDiv.appendChild(player1Img);
    matchupDiv.appendChild(player2Img);

    matchupContainer.appendChild(matchupDiv);
  });
}

function selectPlayer(cat) {
  selectedPlayers.push(cat);
  if (selectedPlayers.length === cats.length / 2) {
    document.getElementById("nextRound").style.display = "block";
  }
}

function nextRound() {
  cats.length = 0;
  cats.push(...selectedPlayers);
  selectedPlayers.length = 0;
  document.getElementById("nextRound").style.display = "none";

  if (cats.length === 1) {
    const winnerContainer = document.getElementById("winner");
    const winnerImage = document.getElementById("winnerImage");
    winnerImage.src = cats[0];
    winnerContainer.style.display = "block";
  } else {
    generateMatchup();
  }
}

generateMatchup();
