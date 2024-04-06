// Recolhendo todos os botões e a barra
var botoes = document.querySelectorAll('.botao');
var limpar = document.querySelector('#limpar');
var barra = document.querySelector('.barra');

// Adicionando um evento de clique a cada botão
botoes.forEach(function(botao) {
  botao.addEventListener('click', function() {
    // Obtendo o valor do botão clicado
    var valorBotao = this.value;
    barra.innerText += valorBotao;
  });
});

// Função de limpar
/*
limpar.forEach(function(limparTudo) {
    limparTudo.addEventListener('click', function() {
        barra.innerHTML = "0";
    });
});
*/