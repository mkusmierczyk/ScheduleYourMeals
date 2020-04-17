document.addEventListener('DOMContentLoaded', function () {

    let btnSubmit = document.querySelector('.first_entry_btn');
    let nameInput = document.querySelector('input[value][type="text"]');
    let errorMsg = document.querySelector('.error_msg');

    //jeżeli w local storage zapisane zostało imię pozostaw formularz niewidoczny i zmień imię w navie
        if (localStorage.getItem('name')!=null) {
            window.location.href = 'recipes.html';
        } else {

        }

        errorMsg.classList.add('visible');

        btnSubmit.addEventListener('click', function (e) {
            e.preventDefault();
            if (nameInput.value.length < 3) {
                errorMsg.classList.remove('visible');
            } else {
                errorMsg.classList.toggle('visible');
                //zapisz imię w local storage
                let userName = nameInput.value;
                localStorage.setItem("name", userName);
                window.location.href = 'recipes.html'; //do odswieżenia po zapisaniu imienia do spana
            }
        });
});