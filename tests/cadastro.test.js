const novoUsuario = require("../pages/novoUsuario");

module.exports = {

  before: (browser) => {
    browser.resizeWindow(1920, 1080);
  },
  after: (browser) => {
    browser.end();
  },

  'Dado que acesso o formulário de cadastro': (browser) => {

    let novoUsuario = browser.page.novoUsuario() //chamar a minha page como função para carregar o mapa de elementos, como minha url está dentro do mapa de elemento eu não preciso passar ela

    novoUsuario.navigate()
      .waitForElementVisible('@telaNovoUsuario', 3000)
      .assert.containsText('@telaNovoUsuario', "Novo Usuário!!")
      .waitForElementVisible('@formNovoUsuario', 3000)
  },
  'Quando submeto o formulário com os meus dados pessoais': (browser) => {

    let novoUsuario = browser.page.novoUsuario()

    novoUsuario
      .setValue('@inputNome', 'JoaoSilverio')
      .setValue('@inputUltimoNome', '33Camarguinho3')
      .setValue('@inputEmail', 'diogooliveira8@hotmail.com')
      .setValue('@inputEndereco', 'rua da paz')
      .setValue('@inputUniversidade', 'universidade sp')
      .setValue('@inputProfissao', 'qa-tester')
      .setValue('@inputGenero', 'Masculino')
      .setValue('@inputIdade', 21)
      .click('@botaoCriar')
  },
  'Então é apresentada a mensagem usuário criado com sucesso': (browser) => {
    
    let novoUsuario = browser.page.novoUsuario()

    novoUsuario
      .waitForElementVisible('@userCriado', 3000)
      .assert.containsText('@userCriado', 'Usuário Criado com sucesso')
      .waitForElementVisible('@botaoEditar')
      .waitForElementVisible('@botaoVoltar')
  },
};


