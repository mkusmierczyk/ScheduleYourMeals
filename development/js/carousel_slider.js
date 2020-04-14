document.addEventListener("DOMContentLoaded", function () {
    //buttony
    let prev = document.querySelector('.prevSlide');
    let next = document.querySelector('.nextSlide');
    //znajdż elementy listy
    let list = document.querySelector('ul.slider').children; //html collection
    //zmienna liczbowa = counter slidera
    let picCounter = 0;
    let ulElem = Array.from(list);
    //jeżeli element widoczny pokaż indeks z jego tablicy
    ulElem.forEach(function (el) {
        if (el.style.display === "inline-block") {
            picCounter = el[i];
        }
    });
    ulElem[0].classList.add('visible');
    prev.addEventListener('click', function (ev) {
        ulElem[picCounter].classList.remove('visible');
        picCounter = picCounter - 1;
        if (picCounter<0) {
            picCounter = ulElem.length - 1;
        }
        ulElem[picCounter].classList.add('visible');
    });
    next.addEventListener('click', function (ev) {
        ulElem[picCounter].classList.remove('visible');
        picCounter += 1;
        if (picCounter === ulElem.length) {
            picCounter = 0;
        }
        ulElem[picCounter].classList.add('visible');
    });

});