let openMenuBtn = document.querySelector('.menu-bar');
let navMenu = document.querySelector('.menu-responsive');

openMenuBtn.onclick= function(){
  navMenu.classList.toggle('mostrar');
}

/*
function toggleMenu() {
  navMenu.classList.toggle('mostrar');
}

openMenuBtn.addEventListener("click", toggleMenu);

/*
const subtitulo= document.querySelector(".subtitulo");
const enlaceLogo=document.querySelector(".logo-enlace");

 subtitulo.classList.toggle("desactivado");
  enlaceLogo.classList.toggle("desactivado");


/*const menu=document.querySelector(".nav-menu");

console.log(menu.className);

menu.className="menu_open";
*/
/*
const ham = document.querySelector(".ham");
const enlaces = document.querySelector(".enlaces-menu");
const barras = document.querySelectorAll(".ham span");

ham.addEventListener("click", () => {
  enlaces.classList.toggle("activado");
  barras.forEach((child) => {
    child.classList.toggle("animado");
  });
  ham.classList.toggle("girar");
});
*/
