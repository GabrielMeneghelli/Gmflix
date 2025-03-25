//API key
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzE2MmJlNDhiODZjNjY5MTkwMzU1NWIxZmM2Y2FmYyIsIm5iZiI6MTc0MjkwNDM0NS4yMywic3ViIjoiNjdlMjljMTlkNzBjNjE1OTAzNzVlNjUzIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.dDLO44EdiODg2Ia21nhFxaoTLGGqhhuMBPAI9iQKZVc'
    }
}


//exibir loading 
function toggleLoading() {
    let loader = document.querySelector(".loader");
    loader.style.display = loader.style.display == "none" ? "block" : "none";
}

//page scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});