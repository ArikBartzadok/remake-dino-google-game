var personagem = document.getElementById('personagem');
var bloco = document.getElementById('bloco');

function pular() {
    if (personagem.classList !== '--pular') {
        personagem.classList.add('--pular');
    }
    setTimeout(function() {
        personagem.classList.remove('--pular')
    }, 1000);
}

var verificaColisao = setInterval(function() {
    var topoPersonagem = parseInt(window.getComputedStyle(personagem).getPropertyValue('top'));
    var esquerdaBloco = parseInt(window.getComputedStyle(bloco).getPropertyValue('left'));

    if (esquerdaBloco < 20 && esquerdaBloco > 0 && topoPersonagem >= 130) {
        bloco.style.animation = 'none';
        // bloco.style.display = 'none';
        alert('Perdeu...');
    }
}, 10);