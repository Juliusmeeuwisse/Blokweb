var openTag = document.querySelector('#hamburger');
var nav = document.querySelector("#hamburgermenu");
var closeTag = document.querySelector(".closebtn");

function openNav() {
  nav.style.width = "100%";
}

function closeNav() {
  nav.style.width = "0%";
}
openTag.addEventListener('click', openNav, false);
closeTag.addEventListener('click', closeNav, false);
