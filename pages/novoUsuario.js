// const formAcoes = {
//   insertNome: function (nome) {
//     return this.setValue('@inputNome', nome)
//   },
//   insetUltimoNome: function(ultimoNome) {   
//     return this.setValue('@inputUltimoNome')
//   } 
// }

module.exports = {

  url: "https://automacaocombatista.herokuapp.com/users/new",
   
   //commands: [formAcoes],
 
   elements: {
     telaNovoUsuario: 'div.col.s9 > div:nth-child(2)  > div > h5',
     formNovoUsuario: '#new_user',
     inputNome:'#user_name',
     inputUltimoNome: '#user_lastname',
     inputEmail: '#user_email',
     inputEndereco: '#user_address',
     inputUniversidade: '#user_university',
     inputProfissao: '#user_profile',
     inputGenero: '#user_gender',
     inputIdade:'#user_age',
     botaoCriar: 'input[value=Criar]',
     userCriado: '#notice', 
     botaoEditar:'a.btn[href*="edit"]',
     botaoVoltar: 'a.btn[href$="users"]',
     barraSucessoDiogo: 'a[href="/treinamento/home"]',
   },
};
 