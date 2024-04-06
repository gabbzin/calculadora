// Recolhendo todos os botões
var botoes = document.querySelectorAll('.botao');
var barra = document.querySelector('.barra')

// Adicionando um evento de clique a cada botão
botoes.forEach(function(botao) {
  botao.addEventListener('click', function() {
    // Obtendo o valor do botão clicado
    var valorBotao = this.value;

    barra.innerText = valorBotao;
  });
});