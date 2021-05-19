
module.exports = {

  'Dado que acesso o formulário de cadastro': (browser) => {

    browser.page
      .novoUsuario()
      .navigate()
      .telaInicial('@telaNovoUsuario', "Novo Usuário!!")
  },
  'Quando submeto o formulário com os meus dados pessoais': (browser) => {

    browser.page
      .novoUsuario()
      .inserirDados()
      .cadastrarUsuario()
  },
  'Então é apresentada a mensagem usuário criado com sucesso': (browser) => {

    browser.page
      .novoUsuario()
      .validadarCadastroConcluido()
  },
};