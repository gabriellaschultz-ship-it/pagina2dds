document.addEventListener('DOMContentLoaded', () => {
    const cavalo = document.getElementById('cavalo');
    const obstaculo = document.getElementById('obstaculo');
    const mensagem = document.getElementById('mensagem');

    let jogoIniciado = false;

    function pular() {
        if (!cavalo.classList.contains('saltando')) {
            cavalo.classList.add('saltando');
            setTimeout(() => {
                cavalo.classList.remove('saltando');
            }, 500); // Remove a classe 'saltando' após 500ms (duração da animação)
        }
    }

    // Função para começar o jogo
    function comecarJogo() {
        if (!jogoIniciado) {
            jogoIniciado = true;
            mensagem.style.display = 'none';
            // Reinicia a animação do obstáculo
            obstaculo.style.animation = 'none';
            obstaculo.offsetHeight; // Força o reflow para reiniciar a animação
            obstaculo.style.animation = 'moverObstaculo 2s linear infinite';
            checarColisao();
        }
    }

    // Adiciona o evento de tecla
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            comecarJogo(); // Começa o jogo se ainda não começou
            pular();
        }
    });

    // Detecção de colisão
    function checarColisao() {
        const loop = setInterval(() => {
            const cavaloTop = parseInt(window.getComputedStyle(cavalo).getPropertyValue('bottom'));
            const obstaculoLeft = parseInt(window.getComputedStyle(obstaculo).getPropertyValue('right'));

            if (obstaculoLeft > 700 && obstaculoLeft < 750 && cavaloTop <= 60) {
                // Colisão detectada
                clearInterval(loop);
                alert("Game Over! Pressione OK para jogar novamente.");
                document.location.reload(); // Recarrega a página para reiniciar
            }
        }, 10);
    }
});
