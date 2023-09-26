const title = document.getElementById('title');
const cursor = document.getElementById('cursor'); // Elemento da barrinha
const words = ['Design', 'Marca', 'Logo', 'Site'];
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function animateTitle() {
    const currentWord = words[currentWordIndex];

    if (isDeleting) {
        title.innerHTML = `<span style="font-size: 45px;">${currentWord.substring(0, currentCharIndex - 1)}</span><span id="cursor" style="font-size: 45px;">|</span>`;
        cursor.style.opacity = 1; // Mostra o cursor ao apagar
        currentCharIndex--;

        // Quando o caractere for excluído, inicia a escrita novamente
        if (currentCharIndex === 0) {
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length;
            setTimeout(animateTitle, 500); // Aguarda 0,5 segundo após apagar a palavra
        } else {
            setTimeout(animateTitle, 100); // Controla a velocidade do apagamento (100ms por letra)
        }
    } else {
        title.innerHTML = `<span style="font-size: 45px;">${currentWord.substring(0, currentCharIndex)}</span><span id="cursor" style="font-size: 45px;">|</span>`;
        cursor.style.opacity = 1; // Mostra o cursor ao escrever
        currentCharIndex++;

        // Quando a palavra estiver totalmente escrita, inicia a exclusão
        if (currentCharIndex === currentWord.length + 1) {
            isDeleting = true;
            setTimeout(animateTitle, 1000); // Aguarda 1 segundo após escrever a palavra
        } else {
            setTimeout(animateTitle, 100); // Controla a velocidade da digitação (100ms por letra)
        }
    }
}

// Inicia a animação
animateTitle();
