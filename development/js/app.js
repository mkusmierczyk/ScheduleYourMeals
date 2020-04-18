document.addEventListener('DOMContentLoaded', function () {

    let btnSubmit = document.querySelector('.first_entry_btn');
    let nameInput = document.querySelector('input[value][type="text"]');
    let errorMsg = document.querySelector('.error_msg');

        if (localStorage.getItem('name')!=null) {
            window.location.href = 'recipes.html';
        }
        errorMsg.classList.add('visible');

        btnSubmit.addEventListener('click', function (e) {
            e.preventDefault();
            if (nameInput.value.length < 3) {
                errorMsg.classList.remove('visible');
            } else {
                errorMsg.classList.add('visible');
                let userName = nameInput.value;
                localStorage.setItem("name", userName);

                window.location.href = 'recipes.html'; //do odswieżenia po zapisaniu imienia do spana


                window.location.href = 'recipes.html';
                parent.location.reload();

            }
        });
});