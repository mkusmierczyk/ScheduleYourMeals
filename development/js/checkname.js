document.addEventListener('DOMContentLoaded', function () {
    let nameSpan = document.querySelector('.header__name span');
    console.log(nameSpan);

    if (localStorage.getItem('name') != null) {
        nameSpan.innerText = localStorage.getItem('name');

    }


});