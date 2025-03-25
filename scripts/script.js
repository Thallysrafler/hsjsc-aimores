// Obtém os elementos do carrossel
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const carousel = document.querySelector('.news-grid.carousel');
const totalCards = document.querySelectorAll('.news-card').length; // Total de notícias
const itemsPerSlide = 3; // Exibir 3 notícias por vez
let currentIndex = 0; // Índice de onde estamos no carrossel

// Função para mover o carrossel
function updateCarouselPosition() {
    const offset = -(currentIndex * (111 / (totalCards / itemsPerSlide))) + "%";
    carousel.style.transform = `translateX(${offset})`;
}

// Função para ir para a próxima seção de 3 notícias
function goToNext() {
    if (currentIndex + itemsPerSlide < totalCards) {
        currentIndex += itemsPerSlide;
    } else {
        currentIndex = 0; // Voltar ao início do carrossel
    }
    updateCarouselPosition();
}

// Função para voltar para a seção anterior de 3 notícias
function goToPrev() {
    if (currentIndex - itemsPerSlide >= 0) {
        currentIndex -= itemsPerSlide;
    } else {
        currentIndex = totalCards - itemsPerSlide; // Voltar para a última seção de 3 notícias
    }
    updateCarouselPosition();
}

// Adiciona eventos de clique para os botões de navegação
prevButton.addEventListener('click', goToPrev);
nextButton.addEventListener('click', goToNext);

// Atualiza a posição inicial do carrossel
updateCarouselPosition();