document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.new_recipe_form form');

    const tableBody = document.querySelector("tbody");
    const addNewRecipeBtn = document.querySelector('.save_quit');

    const addInstructionBtn = document.querySelector('.add_instruction');
    const addIngredientBtn = document.querySelector('.add_ingredient');

    const inputInstruction = document.querySelector('input[name="recipeInstructions"]');
    const inputIngredient = document.querySelector('input[name="recipeIngredients"]');

    const title = document.querySelector('input[name="recipeName"]');
    const description = document.querySelector('textarea[name="recipeDescription"]');
    const ingredients = document.querySelector('.recipeIngredients-list');
    const instructions = document.querySelector('.recipeInstruction-list');

    const newRecipe = {
        id: '',
        title: '',
        description: '',
        ingredients: [],
        instruction: []
    };
    //error msg
    let err1 = document.querySelector('.error_msg1');
    let err2 = document.querySelector('.error_msg2');
    let err3 = document.querySelector('.error_msg3');
    let err4 = document.querySelector('.error_msg4');
    let successmsg = document.querySelector('.success_msg');

    addIngredientBtn.addEventListener('click', function (e) {
        e.preventDefault();

        let trashBtn = document.createElement('i');
        trashBtn.classList.add('fas');
        trashBtn.classList.add('fa-trash-alt');
        let editBtn = document.createElement('i');
        editBtn.classList.add('fas');
        editBtn.classList.add('fa-edit');

        if (inputIngredient.value.length <= 1 || inputIngredient.value.length > 15) {
            err1.innerText = 'Składnik powinien zawierać od 2 do 15 znaków!';
            err1.classList.remove('hide');
        } else {
            err1.classList.add('hide');
            let newIngredient = document.createElement('li');
            newIngredient.setAttribute('contenteditable', 'false');
            newIngredient.innerText = inputIngredient.value;
            newIngredient.appendChild(trashBtn);
            newIngredient.appendChild(editBtn);
            ingredients.appendChild(newIngredient);

            //zapisz składnik do tablicy która jest polem obiektu newRecipe
            newRecipe.ingredients.push(newIngredient.innerText);

            trashBtn.addEventListener('click', function () {
                ingredients.removeChild(newIngredient);
            });
            editBtn.addEventListener('click', function () {
                if (newIngredient.getAttribute('contenteditable')==='false') {
                    newIngredient.setAttribute('contenteditable', 'true');
                } else {
                    newIngredient.setAttribute('contenteditable', 'false');
                }
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

        if (inputInstruction.value.length <= 1 || inputInstruction.value.length > 30) {
            err2.innerText = 'Instrukcja powinna zawierać od 2 do 30 znaków!';
            err2.classList.remove('hide');
        } else {
            err2.classList.add('hide');
            let newInstruction = document.createElement('li');
            newInstruction.setAttribute('contenteditable', 'false');
            newInstruction.innerText = inputInstruction.value;
            newInstruction.appendChild(trashBtn);
            newInstruction.appendChild(editBtn);
            instructions.appendChild(newInstruction);
            //zapisz instrukcję do tablicy która jest polem obiektu newRecipe
            newRecipe.instruction.push(newInstruction.innerText);

            trashBtn.addEventListener('click', function () {
                instructions.removeChild(newInstruction);
            });
            editBtn.addEventListener('click',function () {
                if (newInstruction.getAttribute('contenteditable')==='false') {
                    newInstruction.setAttribute('contenteditable', 'true');
                } else {
                    newInstruction.setAttribute('contenteditable', 'false');
                }
            });
        }
    });

    let dataFromLocalStorage = [];

    let saveRecipeToLS = function (newObject) {
        if (localStorage.getItem('recipes')!=null) {
            dataFromLocalStorage = JSON.parse(localStorage.getItem('recipes'));
            dataFromLocalStorage.push(newObject);
            localStorage.setItem('recipes', JSON.stringify(dataFromLocalStorage));
        } else {
            dataFromLocalStorage.push(newObject);
            localStorage.setItem('recipes', JSON.stringify(dataFromLocalStorage));
        }

    };

    addNewRecipeBtn.addEventListener('click', function (e) {
        e.preventDefault();

        if (title.value.length <= 1 || title.value.length > 15) {
            err3.innerText = 'Nazwa przepisu powinna zawierać od 2 do 15 znaków!';
            err3.classList.remove('hide');
        } else if (description.value.length <= 1 || description.value.length > 200) {
            err4.innerText = 'Opis przepisu powinien zawierać od 2 do 200 znaków!';
            err4.classList.remove('hide');
        } else {
            err3.classList.add('hide');
            err4.classList.add('hide');
            successmsg.classList.remove('hide');

            newRecipe.description = description.value;
            newRecipe.title = title.value;
            let allRecipes = JSON.parse(localStorage.getItem("recipes"));
            if (allRecipes === null) {
                allRecipes = [];
            }
            newRecipe.id = allRecipes.length + 1;

            saveRecipeToLS(newRecipe);

            let newRecipeRow = document.createElement("tr");
            newRecipeRow.classList.add("row");
            let newRecipeId = document.createElement("td");
            newRecipeId.classList.add("col-1");
            let newRecipeName = document.createElement("td");
            newRecipeName.classList.add("col-2");
            let newRecipeDescription = document.createElement("td");
            newRecipeDescription.classList.add("col-8");
            let newActionElem = document.createElement("td");
            newActionElem.classList.add("col-1");

            let trashBtn = document.createElement('i');
            trashBtn.classList.add('fas');
            trashBtn.classList.add('fa-trash-alt');
            let editBtn = document.createElement('i');
            editBtn.classList.add('fas');
            editBtn.classList.add('fa-edit');

            newActionElem.appendChild(editBtn);
            newActionElem.appendChild(trashBtn);

            newRecipeId.innerText = newRecipe.id;
            newRecipeName.innerText = title.value;
            newRecipeDescription.innerText = description.value;

            newRecipeRow.appendChild(newRecipeId);
            newRecipeRow.appendChild(newRecipeName);
            newRecipeRow.appendChild(newRecipeDescription);
            newRecipeRow.appendChild(newActionElem);

            let timeout = setTimeout(function () {
                window.location.href = 'recipes.html';
            }, 2500);

            tableBody.appendChild(newRecipeRow);
            form.reset();
            ingredients.innerHTML = '';
            instructions.innerHTML = '';
        }

    });


});