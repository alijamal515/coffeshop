let serch = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    serch.classList.toggle('active');
    navbar.classList.remove('active');
}
/*
let img = document.querySelector('.imgg');
let cont = document.querySelector('.customes-container');
function colors(color){
    cont.style.background = color;

}
function phon(phone){
    img.src =phone;
}*/
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    serch.classList.remove('active');
};
window.onscroll = () =>{
    navbar.classList.remove('active');
    serch.classList.remove('active');
}



let header = document.querySelector('header');
window.addEventListener('scroll',() => {
    header.classList.toggle('shadow', window.scrollY > 0);
});