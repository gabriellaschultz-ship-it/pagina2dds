// Espera o documento HTML ser completamente carregado
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona o botão e o parágrafo pelo ID
    const botao = document.getElementById('meuBotao');
    const mensagem = document.getElementById('mensagem');

    // Adiciona um "ouvinte de evento" para o clique no botão
    botao.addEventListener('click', () => {
        // Altera o texto do parágrafo quando o botão é clicado
        mensagem.textContent = 'Olá! Você clicou no botão. Parabéns por sua primeira interação com JavaScript!';
    });

});

