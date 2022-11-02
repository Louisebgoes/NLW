function createGame(player1, hour, player2) {
  return `
  <li>
  <img src="./assets/${player1}.svg" alt="bandeira do ${player1}" />
  <strong>${hour}</strong>
  <img src="./assets/${player2}.svg" alt="bandeira do ${player2}" />
  </li>
  `
}

function creatCard(date, day, games) {
  return `
  <div class="card">
          <h2>${date}<span>${day}</span></h2>
          <ul>
            ${games}
            </ul>
            </div>
         
  `
}

document.querySelector("#app").innerHTML = `
<header>
        <img src="./assets/logo1.svg" alt="logo da nlw" />
      </header>

      <main id="cards">
        ${creatCard(
          "24/11",
          "quinta",
          createGame("suicaa", "07:00", "cameroon") +
            createGame("brasil", "16:00", "serbia")
        )}
        ${creatCard(
          "28/11",
          "segunda",
          createGame("cameroon", "07:00", "serbia") +
            createGame("brasil", "13:00", "suicaa")
        )}
        ${creatCard(
          "02/12",
          "sexta",
          createGame("cameroon", "16:00", "brasil") +
            createGame("serbia", "16:00", "suicaa")
        )}
            
        
      </main>
`
