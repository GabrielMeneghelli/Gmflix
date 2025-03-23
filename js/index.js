//Ao carregar a página executa as funções de buscar os dados
document.addEventListener("DOMContentLoaded", async () => {
    setTimeout(() => {
        toggleLoading();
    }, 2000);

    let trendingContainer = document.querySelector("#trendingMovies");
    trendingContainer.innerHTML = "";
    for (let i = 1; i <= 20; i++) {
        trendingContainer.innerHTML += `<a href='detalhes.html?id=${i}'>
                <img src="img/posters/${i}.jpg" alt="${i}">
            </a>`;        
    }
});

// Trending Movies Scroll
const containerTrendingMovies = document.getElementById("trendingMovies");

let scrollIntervalTrendingMovies; // Controlador para o intervalo de scroll
let scrollDirectionTrendingMovies = 0; // Direção do scroll (0 = parado, 1 = direita, -1 = esquerda)

containerTrendingMovies.addEventListener("mousemove", (e) => {
    const boundingRect = containerTrendingMovies.getBoundingClientRect();
    const mouseX = e.clientX;

    const threshold = 200; // Distância das bordas para ativar o scroll

    if (mouseX < boundingRect.left + threshold) {
        scrollDirectionTrendingMovies = -1; // Scroll para a esquerda
        containerTrendingMovies.style.cursor = "url('/img/arrow-left.png'), auto"; // Cursor para a esquerda
    } else if (mouseX > boundingRect.right - threshold) {
        scrollDirectionTrendingMovies = 1; // Scroll para a direita
        containerTrendingMovies.style.cursor = "url('/img/arrow-right.png'), auto"; // Cursor para a direita
    } else {
        scrollDirectionTrendingMovies = 0; // Parar scroll
        containerTrendingMovies.style.cursor = "pointer"; // Cursor padrão
    }
});

containerTrendingMovies.addEventListener("mouseleave", () => {
    scrollDirectionTrendingMovies = 0; // Parar scroll quando o mouse sai do elemento
    containerTrendingMovies.style.cursor = "default"; // Resetar cursor
});

// Função para scroll contínuo
function autoScrollTrendingMovies() {
    if (scrollDirectionTrendingMovies !== 0) {
        containerTrendingMovies.scrollLeft += scrollDirectionTrendingMovies * 6; // Ajuste a velocidade (5 = rápido)
    }
}

scrollIntervalTrendingMovies = setInterval(autoScrollTrendingMovies, 16); // ~60 FPS
