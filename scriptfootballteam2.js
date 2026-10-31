
const footballTeams = {
    portugal: {
        team: "Portugal",
        year: 2022,
        headCoach: "Fernando Santos",
        players: [
            { name: "Cristiano Ronaldo", position: "forward", isCaptain: true },
            { name: "Rafael Leão", position: "forward", isCaptain: false },
            { name: "João Félix", position: "forward", isCaptain: false },
            { name: "André Silva", position: "forward", isCaptain: false },
            { name: "Gonçalo Ramos", position: "forward", isCaptain: false },

            { name: "Diogo Costa", position: "goalkeeper", isCaptain: false },
            { name: "Rui Patrício", position: "goalkeeper", isCaptain: false },

            { name: "Rúben Dias", position: "defender", isCaptain: false },
            { name: "Pepe", position: "defender", isCaptain: false },
            { name: "João Cancelo", position: "defender", isCaptain: false },
            { name: "Nuno Mendes", position: "defender", isCaptain: false },
            { name: "Raphaël Guerreiro", position: "defender", isCaptain: false },

            { name: "Bruno Fernandes", position: "midfielder", isCaptain: false },
            { name: "Bernardo Silva", position: "midfielder", isCaptain: false },
            { name: "Rúben Neves", position: "midfielder", isCaptain: false }
        ]
    },

    brazil: {
        team: "Brazil",
        year: 2022,
        headCoach: "Tite",
        players: [
            { name: "Neymar Jr.", position: "forward", isCaptain: true },
            { name: "Vinícius Júnior", position: "forward", isCaptain: false },
            { name: "Richarlison", position: "forward", isCaptain: false },
            { name: "Raphinha", position: "forward", isCaptain: false },
            { name: "Gabriel Jesus", position: "forward", isCaptain: false },

            { name: "Alisson Becker", position: "goalkeeper", isCaptain: false },
            { name: "Ederson", position: "goalkeeper", isCaptain: false },

            { name: "Thiago Silva", position: "defender", isCaptain: false },
            { name: "Marquinhos", position: "defender", isCaptain: false },
            { name: "Éder Militão", position: "defender", isCaptain: false },
            { name: "Danilo", position: "defender", isCaptain: false },
            { name: "Alex Sandro", position: "defender", isCaptain: false },

            { name: "Casemiro", position: "midfielder", isCaptain: false },
            { name: "Lucas Paquetá", position: "midfielder", isCaptain: false },
            { name: "Bruno Guimarães", position: "midfielder", isCaptain: false }
        ]
    },

    argentina: {
        team: "Argentina",
        year: 2022,
        headCoach: "Lionel Scaloni",
        players: [
            { name: "Lionel Messi", position: "forward", isCaptain: true },
            { name: "Julián Álvarez", position: "forward", isCaptain: false },
            { name: "Ángel Di María", position: "forward", isCaptain: false },
            { name: "Lautaro Martínez", position: "forward", isCaptain: false },
            { name: "Paulo Dybala", position: "forward", isCaptain: false },

            { name: "Emiliano Martínez", position: "goalkeeper", isCaptain: false },
            { name: "Franco Armani", position: "goalkeeper", isCaptain: false },

            { name: "Cristian Romero", position: "defender", isCaptain: false },
            { name: "Nicolás Otamendi", position: "defender", isCaptain: false },
            { name: "Lisandro Martínez", position: "defender", isCaptain: false },
            { name: "Nahuel Molina", position: "defender", isCaptain: false },
            { name: "Nicolás Tagliafico", position: "defender", isCaptain: false },

            { name: "Enzo Fernández", position: "midfielder", isCaptain: false },
            { name: "Rodrigo De Paul", position: "midfielder", isCaptain: false },
            { name: "Alexis Mac Allister", position: "midfielder", isCaptain: false }
        ]
    },

    france: {
        team: "France",
        year: 2022,
        headCoach: "Didier Deschamps",
        players: [
            { name: "Kylian Mbappé", position: "forward", isCaptain: true },
            { name: "Ousmane Dembélé", position: "forward", isCaptain: false },
            { name: "Olivier Giroud", position: "forward", isCaptain: false },
            { name: "Antoine Griezmann", position: "forward", isCaptain: false },
            { name: "Kingsley Coman", position: "forward", isCaptain: false },

            { name: "Hugo Lloris", position: "goalkeeper", isCaptain: false },
            { name: "Steve Mandanda", position: "goalkeeper", isCaptain: false },

            { name: "Raphaël Varane", position: "defender", isCaptain: false },
            { name: "Dayot Upamecano", position: "defender", isCaptain: false },
            { name: "Jules Koundé", position: "defender", isCaptain: false },
            { name: "Theo Hernández", position: "defender", isCaptain: false },
            { name: "Benjamin Pavard", position: "defender", isCaptain: false },

            { name: "Aurélien Tchouaméni", position: "midfielder", isCaptain: false },
            { name: "Adrien Rabiot", position: "midfielder", isCaptain: false },
            { name: "Eduardo Camavinga", position: "midfielder", isCaptain: false }
        ]
    }
};


const teamsDropdown = document.getElementById("teams");
const playersDropdown = document.getElementById("players");

const teamElement = document.getElementById("team");
const yearElement = document.getElementById("year");
const coachElement = document.getElementById("head-coach");

const playerCards = document.getElementById("player-cards");


const displayTeam = (team) => {
    teamElement.textContent = team.team;
    yearElement.textContent = team.year;
    coachElement.textContent = team.headCoach;
};


const displayPlayers = (players) => {
    playerCards.innerHTML = "";

    players.forEach(player => {
        const playerCard = `
      <div class="player-card">
        <h2>${player.isCaptain ? "(Captain) " : ""}${player.name}</h2>
        <p>Position: ${player.position}</p>
      </div>
    `;

        playerCards.innerHTML += playerCard;
    });
};

const filterPlayers = () => {
    const selectedTeam = footballTeams[teamsDropdown.value];
    const selectedPosition = playersDropdown.value;

    let filteredPlayers;

    if (selectedPosition === "all") {
        filteredPlayers = selectedTeam.players;
    } else {
        filteredPlayers = selectedTeam.players.filter(player => {
            return player.position === selectedPosition;
        });
    }

    displayPlayers(filteredPlayers);
};

teamsDropdown.addEventListener("change", () => {
    const selectedTeam = footballTeams[teamsDropdown.value];

    displayTeam(selectedTeam);

    playersDropdown.value = "all";

    displayPlayers(selectedTeam.players);
});

playersDropdown.addEventListener("change", () => {
    filterPlayers();
});

const initialTeam = footballTeams[teamsDropdown.value];

displayTeam(initialTeam);
displayPlayers(initialTeam.players);
