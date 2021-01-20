// define a classe cardUser
class cardUser {
    // cria a propriedade user que contem a tag com ID user do HTML
    constructor() {
      this.user = document.getElementById("user")
    }

    // Monta o HTML do card com os dados do Json
    mostraUsuario(dados) {
        localStorage.setItem("infor_user", dados[0].nome)
        let inforLocalStorage = localStorage.getItem("infor_user")
        //console.log(dados)
        let card = ''


            card += `
            <h3 class="profile-fullname"><a>${inforLocalStorage}<a></h3>
            <h2 class="profile-element"><a>${dados[0].usuario}</a></h2>
            <a class="profile-element profile-website" hrerf=""><i
                class="octicon octicon-link"></i>&nbsp;${dados[0].usuario}.com</a>
            <a class="profile-element profile-website" hrerf=""><i
                class="octicon octicon-location"></i>&nbsp;${dados[0].local}</a>
            <h2 class="profile-element"><i class="octicon octicon-calendar"></i>${dados[0].cadastro}</h2>
            <button class="btn btn-search-bar tweet-to-btn">Tweet to ${dados[0].nome}</button>
            `

        this.user.innerHTML = card
    }
}