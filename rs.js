function abrirUbicacion() {
  window.location.href = "https://maps.google.com";
}
const musica = document.getElementById("musica");

document.addEventListener("click", () => {
    musica.play();
}, { once: true });