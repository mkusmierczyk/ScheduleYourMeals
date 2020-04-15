document.addEventListener('DOMContentLoaded', function () {

    //sprawdź czy już istnieje imię!!!

    let btnSubmit = document.querySelector('.first_entry_btn');
    let name = document.querySelector('input[value][type="text"]');
    let errorMsg = document.querySelector('.error_msg');
    // let form = document.querySelector('.first_entry_form');

    btnSubmit.addEventListener('click', function (e) {
        e.preventDefault();
        if (name.value.length < 3) {
            errorMsg.classList.add('visible');
        } else {
            errorMsg.classList.remove('visible');
            //zapisz w lokal storage
            let userName = name.value;
            localStorage.setItem("name", userName);
            //zmień value
            let nameSpan = document.querySelector('.header__name span');
            nameSpan.innerHTML = localStorage.getItem('name');
            //daj invisible na formularz

        }

    });

});