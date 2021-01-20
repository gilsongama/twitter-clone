//cria classe do usuário
class Users {
    // cria método para buscar o usuario no json
    buscaUsuario() {
        // retorna as informações do usuario.json
        return fetch("./usuario.json")
    }
}