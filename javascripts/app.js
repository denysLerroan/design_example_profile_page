var alternador = document.querySelector('.js-chaveador');

var aboutMe = document.querySelector('.js-about-me');
var bkd = document.querySelector('.js-about-me');

var bkd = document.querySelector('.js-bkd');

alternador.onclick = function() {
    var menu = document.querySelector('.js-menu');
    menu.classList.toggle('menu--exibindo')
}

aboutMe.onclick = function() {
    var teste = document.querySelector('.js-teste');
    teste.classList.toggle('teste');
    var teste2 = document.querySelector('.js-teste2');
    teste2.classList.toggle('texto_bkd--active');

}