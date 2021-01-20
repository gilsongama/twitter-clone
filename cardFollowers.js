// define a classe card dos seguidores
class cardFollowers {
    // cria a propriedade lista que contem a tag com ID Lista do HTML
    constructor() {
      this.seguidores = document.getElementById("followers")
    }
  
    // monta o HTML do card com os dados do JSON
    mostraSeguidor(dados) {
     
      let card = ''
      
      dados.followers.map(function (seguidor){
          //console.log("seguidor", seguidor)

          card += `
          <ol id="" class="tweet-list">
                <li class="tweet-card">
                  <div class="tweet-content">
                    <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/20.jpg" alt="">
                    <div class="tweet-header">
                      <span class="fullname">
                        <strong>${seguidor.nome}</strong>
                      </span>
                      <span class="username">${seguidor.usuario}</span>
                    </div>

                    <button class="btn btn-follow">Follow</button>
                  </div>
                </li>
              </ol> 
            
          `
      });
  
      this.seguidores.innerHTML = card
    }
  }