function creatCard() {
  return `
  <div class="card">
          <h2>24/11 <span> Quinta </span></h2>
          <ul>
            <li>
              <img src="./assets/suicaa.svg" alt="bandeira da suica" />
              <strong> 7:00 </strong>
              <img src="./assets/cameroon.svg" alt="bandeira dos camaroes" />
            </li>
         
  `
}

document.querySelector("#app").innerHTML = `
<header>
        <img src="./assets/logo1.svg" alt="logo da nlw" />
      </header>

      <main id="cards">
        ${creatCard()}
        ${creatCard()}
        ${creatCard()}
            
          </ul>
        </div>
      </main>
`
