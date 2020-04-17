document.addEventListener("DOMContentLoaded", function () {


    const tableBody = document.querySelector("tbody");
    const addNewRecipeBtn = document.querySelector('.save_quit'); //btn dodaje przepis do planu i zamyka okno nowy przepis

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

        if (inputInstruction.value.length < 1) {
            //error msg
        } else {
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
                if (newIngredient.getAttribute('contenteditable')==='false') {
                    newIngredient.setAttribute('contenteditable', 'true');
                } else {
                    newIngredient.setAttribute('contenteditable', 'false');
                }
            });
        }
    });

    let recipes =[];
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
        newRecipe.description = description.value;
        newRecipe.title = title.value;
        newRecipe.id = recipes.length + 1;
        recipes.push(newRecipe);
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

        tableBody.appendChild(newRecipeRow);

    });




});