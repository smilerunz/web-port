window.onload = pageload;

function pageload() {
    hamclickFunction();
}

function hamclickFunction() {
    let BtnOnclick = document.getElementById('clickon');
    let containerOnclick = document.getElementsByClassName('hamburger');
    let navbarInside = document.getElementsByClassName('navbar-inside');
    let containernavbar = document.getElementsByClassName('container-navbar');
    BtnOnclick.onclick = function() {
        containerOnclick[0].classList.toggle("change");
        navbarInside[0].classList.toggle("navbar-inside-open");
        containernavbar[0].classList.toggle("container-navbar-open");

    }
}