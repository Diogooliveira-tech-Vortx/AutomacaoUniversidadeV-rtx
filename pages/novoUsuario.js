
let CadastroActions = {

  telaInicial: function () {
    return this
      .navigate()
      .waitForElementVisible('@telaNovoUsuario')
  },
  expectMensage: function () {
    return this
      .assert.containsText('@telaNovoUsuario', "Novo Usuário!!")
      .waitForElementVisible('@formNovoUsuario')
  }
}
let PreechimentoActions = {
  inserirDados: function () {
    return this
      .setValue('@inputNome', 'Diogo')
      .setValue('@inputUltimoNome', 'Oliveira')
      .setValue('@inputEmail', 'diogooliveira8@hotmail.com')
      .setValue('@inputEndereco', 'rua dos QAs')
      .setValue('@inputUniversidade', 'universidade sp')
      .setValue('@inputProfissao', 'qa-tester')
      .setValue('@inputGenero', 'Masculino')
      .setValue('@inputIdade', 21)
  },
  cadastrarUsuario: function () {
    return this
      .assert.visible('@botaoCriar')
      .click('@botaoCriar')
  }
}
let validadarCadastroConcluido = {
  expectCadastroConcluido: function () {

    return this
      .waitForElementVisible('@userCriado')
      .assert.containsText('@userCriado', 'Usuário Criado com sucesso')
  }
}

module.exports = {
  url: "https://automacaocombatista.herokuapp.com/users/new",

  commands: [CadastroActions, PreechimentoActions, validadarCadastroConcluido],

  elements: {
    telaNovoUsuario: 'div.col.s9 > div:nth-child(2)  > div > h5',
    formNovoUsuario: '#new_user',
    inputNome: '#user_name',
    inputUltimoNome: '#user_lastname',
    inputEmail: '#user_email',
    inputEndereco: '#user_address',
    inputUniversidade: '#user_university',
    inputProfissao: '#user_profile',
    inputGenero: '#user_gender',
    inputIdade: '#user_age',
    botaoCriar: 'input[value=Criar]',
    userCriado: '#notice',
    naviBarTreinamento: 'a[href="/treinamento/home"]',
    botaoEditar: 'a.btn[href*="edit"]',
    botaoVoltar: 'a.btn[href$="users"]',
  },
};
