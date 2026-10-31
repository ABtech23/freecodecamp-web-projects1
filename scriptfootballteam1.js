
let footballTeam = {
  team: "Portugal",
  year: 2022,
  headCoach: "Fernando Santos",
  players: [
    {
      name: "Cristiano Ronaldo",
      position: "forward",
      isCaptain: true
    },
    {
      name: "Bruno Fernandes",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Rúben Dias",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Diogo Costa",
      position: "goalkeeper",
      isCaptain: false
    }
  ]
};

document.getElementById("team").textContent = footballTeam.team;
document.getElementById("year").textContent = footballTeam.year;
document.getElementById("head-coach").textContent = footballTeam.headCoach;

const playerCards = document.getElementById("player-cards");

const displayPlayers = (players) => {
  playerCards.innerHTML = "";

  players.forEach(player => {
    let playerCard = `
      <div class="player-card">
        <h2>${player.isCaptain ? "(Captain) " : ""}${player.name}</h2>
        <p>Position: ${player.position}</p>
      </div>
    `;

    playerCards.innerHTML += playerCard;
  });
};

const playersDropdown = document.getElementById("players");

playersDropdown.addEventListener("change", () => {
  let selectedPosition = playersDropdown.value;

  let filteredPlayers;

  if (selectedPosition === "all") {
    filteredPlayers = footballTeam.players;
  } else {
    filteredPlayers = footballTeam.players.filter(player => {
      return player.position === selectedPosition;
    });
  }

  displayPlayers(filteredPlayers);
});


displayPlayers(footballTeam.players);
