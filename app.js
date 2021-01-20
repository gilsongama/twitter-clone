const objetoFollowers = new Followers()
const objetoCard = new cardFollowers()

const objetoTweets = new Tweets()
const objetoTweet = new cardTweet()

const objetoUser = new Users()
const objetoCardUser = new cardUser()

const objetoInfor = new Infor()
const objetocardInfor = new cardInfor()



objetoFollowers.buscaSeguidores()
    
    .then(function (resposta) {
        
        resposta.json()
        

    .then(function (dados) {

        objetoCard.mostraSeguidor(dados)
    })

})



objetoTweets.buscaTweets()

    .then(function (resposta) {
        
        resposta.json()
        

    .then(function (dados) {

        objetoTweet.mostraTweet(dados)
    })

})


objetoUser.buscaUsuario()

    .then(function (resposta) {
        
        resposta.json()
        

    .then(function (dados) {

        objetoCardUser.mostraUsuario(dados)
    })

})


objetoInfor.buscaInformacao()

    .then(function (resposta) {
        
        resposta.json()
        

    .then(function (dados) {

        objetocardInfor.mostraInformacao(dados)
    })

})