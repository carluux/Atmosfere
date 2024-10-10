const textos = {
    historia: "Aqui está o texto sobre a História da Cloud Computing.",
    funcoes: "Aqui está o texto sobre as Funções da Cloud Computing.",
    ferramentas: "Aqui está o texto sobre as Ferramentas da Cloud Computing.",
    futuro: "Aqui está o texto sobre o Futuro da Cloud Computing."
};

document.querySelectorAll('.caixa-texto').forEach(item => {
    item.onclick = function() {
        const topic = this.getAttribute('data-topic');
        document.getElementById('textoModal').innerText = textos[topic];
        document.getElementById('modal').style.display = 'block';
    }
});

document.getElementById('fechar').onclick = function() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
}

window.onscroll = function() {showScrollToTopButton()};

function showScrollToTopButton() {
    let scrollToTopButton = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

