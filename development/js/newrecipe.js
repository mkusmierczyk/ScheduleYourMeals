document.addEventListener("DOMContentLoaded", function () {
    const newRecipeForm = document.querySelector('.new_recipe_form');
    const addNewRecipeBtn = document.querySelector('.save_quit'); //btn dodaje przepis do planu i zamyka okno nowy przepis
    const addInstructionBtn = document.querySelector('.add_instruction');
    const addIngredientBtn = document.querySelector('.add_ingredient');
    const instructionList = document.querySelector('.recipeInstruction-list');
    const ingredientsList = document.querySelector('.recipeIngredients-list');

    const inputInstruction = document.querySelector('input[name="recipeInstructions"]');
    const inputIngredient = document.querySelector('input[name="recipeIngredients"]');

    addIngredientBtn.addEventListener('click', function (e) {
        e.preventDefault();

        let trashBtn = document.createElement('i');
        trashBtn.classList.add('fas');
        trashBtn.classList.add('fa-trash-alt');
        let editBtn = document.createElement('i');
        editBtn.classList.add('fas');
        editBtn.classList.add('fa-edit');

        if (inputIngredient.value.length < 1) {
            //error msg
        } else {
            let newIngredient = document.createElement('li');
            newIngredient.setAttribute('contenteditable', 'false');

            newIngredient.innerText = inputIngredient.value;
            newIngredient.appendChild(trashBtn);
            newIngredient.appendChild(editBtn);
            ingredientsList.appendChild(newIngredient);

            trashBtn.addEventListener('click', function () {
                ingredientsList.removeChild(newIngredient);
            });
            editBtn.addEventListener('click', function () {
                if (newIngredient.attributes[])

            });
        }
    });

    addInstructionBtn.addEventListener('click', function (e) {
        e.preventDefault();

        let trashBtn = document.createElement('i');
        trashBtn.classList.add('fas');
        trashBtn.classList.add('fa-trash-alt');
        let editBtn = document.createElement('i');
        editBtn.classList.add('fas');
        editBtn.classList.add('fa-edit');

        if (inputInstruction.value.length < 1) {
            //error msg
        } else {
            let newInstruction = document.createElement('li');
            newInstruction.setAttribute('contenteditable', 'false');

            newInstruction.innerText = inputInstruction.value;
            newInstruction.appendChild(trashBtn);
            newInstruction.appendChild(editBtn);
            instructionList.appendChild(newInstruction);

            trashBtn.addEventListener('click', function () {
                instructionList.removeChild(newInstruction);
            });
            editBtn.addEventListener('click',function () {


            });
        }

    });




});