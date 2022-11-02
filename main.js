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
        ${creatCard("24/11", "quinta", createGame{

        })}
        ${creatCard("28/11", "segunda",createGame{
          
        })}
        ${creatCard("02/12", "sexta",createGame{
          
        })}
            
        
      </main>
`
