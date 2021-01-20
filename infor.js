// Cria classe informações do usuário
class Infor {
    // cria método para buscar informações no json
    buscaInformacao() {
        // retorna as informações no json
        return fetch("./usuario.json")
    }
}