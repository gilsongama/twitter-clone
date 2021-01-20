// define a classe cardTweet
class cardTweet {
    // cria a propriedade tweets que contem a tag com ID tweets do HTML
    constructor() {
      this.tweets = document.getElementById("tweets")
    }
  
    // monta o HTML do card com os dados do JSON
    mostraTweet(dados) {
     
      let card = ''
      
      dados.tweets.map(function (tweet){
          //console.log("tweet", tweet)

          card += `
          <li class="tweet-card">
              <div class="tweet-content">
                <div class="tweet-header">
                  <span class="fullname">
                    <strong>${tweet.nome}</strong>
                  </span>
                  <span class="username">${tweet.usuario}</span>
                  <span class="tweet-time">${tweet.data}</span>
                </div>
                <a>
                  <img class="tweet-card-avatar" src="https://randomuser.me/api/portraits/men/20.jpg" alt="">
                </a>
                <div class="tweet-text">
                  <p class="" lang="es" data-aria-label-part="0">
                  ${tweet.mensagem}
                      
                  </p>
                </div>
                <div class="tweet-footer">
                  <a class="tweet-footer-btn">
                    <i class="octicon octicon-comment" aria-hidden="true"></i><span>${tweet.comentarios}</span>
                  </a>
                  <a class="tweet-footer-btn">
                    <i class="octicon octicon-sync" aria-hidden="true"></i><span>${tweet.compartilhamentos} </span>
                  </a>
                  <a class="tweet-footer-btn">
                    <i class="octicon octicon-heart" aria-hidden="true"></i><span>${tweet.likes} </span>
                  </a>
                </div>
              </div>
            </li>
          
        `
      });
  
      this.tweets.innerHTML = card
    
    }
  }