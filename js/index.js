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

//Trending Movies Scroll
const containerTredingMovies = document.getElementById("trendingMovies");

let scrollIntervalTrendingMovies; //Controladorpara o intervalo do scroll
let scrollDirectionTrendingMovies = 0; //Direção do scroll (0 = parado, 1 = direita, -1 = esquerda)

containerTredingMovies.addEventListener("mousemove", (e) => {
    const boundingRect = containerTredingMovies.getBoundingClientRect();
    const mouseX = e.clientX;

    const threshold = 200; //distância das bordas para ativar o scroll

    if (mouseX < boundingRect.left + threshold) {
        scrollDirectionTrendingMovies = -1; //scroll para a esquerda
        containerTredingMovies.style.cursor = "url('/img/arrow-left.png'), auto"; //cursor para a esquerda
    }   else if (mouseX > boundingRect.right - threshold) {
        scrollDirectionTrendingMovies = 1; //scroll para a direita
        containerTredingMovies.style.cursor = "url('/img/arrow-right.png'), auto"; // cursor para a direita
    }   else {
        scrollDirectionTrendingMovies = 0; //parar scroll
        containerTredingMovies.style.cursor = "pointer"; //cursor padrao
    }
});

containerTredingMovies.addEventListener("mouseleave", () => {
    scrollDirectionTrendingMovies = 0; //parar scroll quando sai do elemento
    containerTredingMovies.style.cursor = "default"; //resetar scroll
});

//função para o scroll continuo
function autoScrollTrendingMovies() {
    if (scrollDirectionTrendingMovies !== 0) {
        containerTredingMovies.scrollLeft += scrollDirectionTrendingMovies + 6; //ajuste de velocidade (5 = rápido)
    }
}

scrollDirectionTrendingMovies = setInterval(autoScrollTrendingMovies, 16); // ~60 FPS