//cria classe tweets
class Tweets {
    // cria método para buscar tweets no json
    buscaTweets() {
        // retorna o fetch
        return fetch("./tweets.json")
    }
}