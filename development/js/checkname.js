document.addEventListener('DOMContentLoaded', function () {
    let nameSpan = document.querySelector('.header__name span');

    if (localStorage.getItem('name') != null) {
        nameSpan.innerText = localStorage.getItem('name');

    } else {
        // window.location.reload(false);

    }


});