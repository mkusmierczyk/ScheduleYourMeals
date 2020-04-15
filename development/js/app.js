document.addEventListener('DOMContentLoaded', function () {

    let btnSubmit = document.querySelector('.first_entry_btn');
    let name = document.querySelector('input[value][type="text"]');
    let errorMsg = document.querySelector('.error_msg');
    let nameSpan = document.querySelector('.header__name span');
    let form = document.querySelector('.first_entry_form');

    form.classList.add('hide');

        //jeżeli w local storage zapisane zostało imię pozostaw formularz niewidoczny i zmień imię w navie
        if (localStorage.getItem('name')!=null) {
            nameSpan.innerHTML = localStorage.getItem('name');
            console.log(localStorage.name);
        } else {
            //odkryj formularz
            form.classList.remove('hide');
        }
        errorMsg.classList.add('visible');

        btnSubmit.addEventListener('click', function (e) {
            e.preventDefault();
            if (name.value.length < 3) {
                errorMsg.classList.remove('visible');
            } else {
                errorMsg.classList.toggle('visible');
                //zapisz imię w local storage
                let userName = name.value;
                localStorage.setItem("name", userName);
                //zmień imię w navie
                nameSpan.innerHTML = localStorage.getItem('name');
                //ukryj formularz
                form.classList.add('hide');
            }
        });
});