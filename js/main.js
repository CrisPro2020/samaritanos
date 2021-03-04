// Accion para abrir el menu responsive

var menuHamburguer = document.getElementById("navToggle");
var menuFlotante = document.getElementById("menuPopup");
var closeMenu = document.getElementById("closePopup");

var body = document.getElementById("body");

menuHamburguer.addEventListener("click", function() {

    menuFlotante.classList.add("active");
    body.classList.add("active-popup-menu");

})

closeMenu.addEventListener("click", function() {

    menuFlotante.classList.remove("active");
    body.classList.remove("active-popup-menu");

})