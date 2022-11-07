function createGame(player1, hour, player2){
  return `
    <li>
      <img src="./assets/icon=${player1}.svg" alt="Bandeira do ${player1}" />
      <strong> ${hour} </strong>
      <img src="./assets/icon=${player2}.svg" alt="bandeira da ${player2}" />
    </li>
  `
}

function createGameFinals(game, position1, group1, hour, position2, group2) {
  return `
    <li>
      <strong>
      <ul>Oitavas ${game}</ul>
      <ul> ${position1} grupo ${group1} </ul>
      <ul> ${hour} </ul>
      <ul> ${position2} grupo ${group2} </ul>
      </strong>
    </li>
  `
}
function createRoadToFinals(play, gamen1, hour, gamen2) {
  return `
    <li>
      <strong>
      <ul>Quartas ${play}</ul>
      <ul> Venc. 8ª ${gamen1}</ul>
      <ul> ${hour} </ul>
      <ul> Venc. 8ª ${gamen2} </ul>
      </strong>
    </li>
  `
}
function createFourthBTW(play, gamen1, hour, gamen2) {
  return `
    <li>
      <strong>
      <ul>Semifinal ${play}</ul>
      <ul> Venc. 4ª ${gamen1}</ul>
      <ul> ${hour} </ul>
      <ul> Venc. 4ª ${gamen2} </ul>
      </strong>
    </li>
  `
}

function createDecLooser(gamen1, hour, gamen2) {
  return `
    <li>
      <strong>
      <ul>Decisão 3º e 4º</ul>
      <ul> Perd. Semi ${gamen1}</ul>
      <ul> ${hour} </ul>
      <ul> Perd. Semi ${gamen2} </ul>
      </strong>
    </li>
  `
}

function createGameFinal(gamen1, hour, gamen2) {
  return `
    <li>
      <strong>
      <ul>Final</ul>
      <ul> Venc. Semi ${gamen1}</ul>
      <ul> ${hour} </ul>
      <ul> Venc. Semi ${gamen2} </ul>
      </strong>
    </li>
  `
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>
          ${date}
          <span>
            ${day}
          </span>
        </h2>
        <ul>
          ${games}          
        </ul>
      </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", createGame("qatar", "13:00", "ecuador")) +
  createCard(
    "21/11",
    "segunda",
    createGame("england", "10:00", "iran") +
      createGame("senegal", "13:00", "netherlands") +
      createGame("united states", "16:00", "wales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "07:00", "saudi arabia") +
      createGame("denmark", "10:00", "tunisia") +
      createGame("mexico", "13:00", "poland") +
      createGame("france", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "segunda",
    createGame("morocco", "07:00", "croatia") +
      createGame("germany", "10:00", "japan") +
      createGame("spain", "13:00", "costa rica") +
      createGame("belgium", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "terça",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("uruguay", "10:00", "south korea") +
      createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "25/11",
    "quarta",
    createGame("wales", "07:00", "iran") +
      createGame("qatar", "10:00", "senegal") +
      createGame("netherlands", "13:00", "ecuador") +
      createGame("england", "16:00", "united states")
  ) +
  createCard(
    "26/11",
    "quinta",
    createGame("tunisia", "07:00", "australia") +
      createGame("poland", "10:00", "saudi arabia") +
      createGame("france", "13:00", "denmark") +
      createGame("argentina", "16:00", "mexico")
  ) +
  createCard(
    "27/11",
    "sexta",
    createGame("japan", "07:00", "costa rica") +
      createGame("belgium", "10:00", "morocco") +
      createGame("croatia", "13:00", "canada") +
      createGame("spain", "16:00", "germany")
  ) +
  createCard(
    "28/11",
    "sabado",
    createGame("cameroon", "07:00", "serbia") +
      createGame("south korea", "10:00", "ghana") +
      createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "29/11",
    "domingo",
    createGame("ecuador", "12:00", "senegal") +
      createGame("netherlands", "12:00", "qatar") +
      createGame("iran", "16:00", "united states") +
      createGame("wales", "16:00", "england")
  ) +
  createCard(
    "30/11",
    "segunda",
    createGame("tunisia", "12:00", "france") +
      createGame("australia", "12:00", "denmark") +
      createGame("poland", "16:00", "argentina") +
      createGame("saudi arabia", "16:00", "mexico")
  ) +
  createCard(
    "01/12",
    "terça",
    createGame("croatia", "12:00", "belgium") +
      createGame("canada", "12:00", "morocco") +
      createGame("japan", "16:00", "spain") +
      createGame("costa rica", "16:00", "germany")
  ) +
  createCard(
    "02/12",
    "quarta",
    createGame("south korea", "12:00", "portugal") +
      createGame("ghana", "12:00", "uruguay") +
      createGame("serbia", "16:00", "switzerland") +
      createGame("cameroon", "16:00", "brazil")
  ) +
  createCard(
    "03/12",
    "quinta",
    createGameFinals("1", "1º", "A", "12:00", "2º", "B") +
      createGameFinals("2", "1º", "C", "16:00", "2º", "D")
  ) +
  createCard(
    "04/12",
    "sexta",
    createGameFinals("3", "1º", "B", "12:00", "2º", "A") +
      createGameFinals("4", "1º", "D", "12:00", "2º", "C")
  ) +
  createCard(
    "05/12",
    "sabado",
    createGameFinals("5", "1º", "E", "12:00", "2º", "F") +
      createGameFinals("6", "1º", "G", "16:00", "2º", "H")
  ) +
  createCard(
    "06/12",
    "domingo",
    createGameFinals("7", "1º", "F", "12:00", "2º", "E") +
      createGameFinals("8", "1º", "H", "16:00", "2º", "G")
  ) +
  createCard(
    "09/12",
    "segunda",
    createRoadToFinals("1", "1", "12:00", "2") +
      createRoadToFinals("2", "5", "12:00", "6")
  ) +
  createCard(
    "10/12",
    "terça",
    createRoadToFinals("3", "3", "16:00", "4") +
      createRoadToFinals("4", "7", "12:00", "8")
  ) +
  createCard(
    "13/12",
    "quarta",
    createFourthBTW("1", "1", "16:00", "2") 
  ) +
  createCard(
    "14/12",
    "quinta",
    createFourthBTW("2", "3", "16:00", "4")
  ) +
  createCard(
    "17/12",
    "sabado",
    createDecLooser("1","12:00","2") 
  ) +     
  createCard(
    "18/12",
    "domingo",
    createGameFinal("1","12:00","2") 
  )
    
      
