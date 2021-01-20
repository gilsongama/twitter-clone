// define a classe card dos seguidores
class cardInfor {
    // cria a propriedade lista que contem a tag com ID Lista do HTML
    constructor() {
      this.infor = document.getElementById("informacoes")
    }

    mostraInformacao(dados) {
        let card = ''
        console.log(dados[0])

        card += `
        <li class="profile-stats-item-active">
        <a>
          <span class="profile-stats-item profile-stats-item-label">Tweets</span>
          <span class="profile-stats-item profile-stats-item-number">${dados[0].quantidade_tweets}</span>
        </a>
      </li>
      <li>
        <a>
          <span class="profile-stats-item profile-stats-item-label">Following</span>
          <span class="profile-stats-item profile-stats-item-number">${dados[0].seguindo}</span>
        </a>
      </li>
      <li>
        <a>
          <span class="profile-stats-item profile-stats-item-label">Followers</span>
          <span class="profile-stats-item profile-stats-item-number">${dados[0].seguidores}</span>
        </a>
      </li>
      <li>
        <a>
          <span class="profile-stats-item profile-stats-item-label">Likes</span>
          <span class="profile-stats-item profile-stats-item-number">${dados[0].likes}</span>
        </a>
      </li>
    `
    this.infor.innerHTML = card

    }
}