document.addEventListener("DOMContentLoaded", function () {

    const tableBody = document.querySelector("tbody");
    const editBtn = document.querySelector(".fa-edit");

    const deleteBtn = document.querySelector("td i:last-child");
    const addBtn = document.querySelector("button i");



    if (editBtn === null) {

    }else {
        // editBtn.forEach(function (singleEditBtn) {
        //     singleEditBtn.addEventListener("click", function () {
        //         const popup = document.createElement("span");
        //         popup.innerText = "Gotowe do edycji! Po prostu kliknij w miejsce, które chcesz zedytować. Buziaki, Maria ;)";
        //         popup.classList.add("popupEdit");
        //         popup.style.display = "block";
        //         this.parentElement.parentElement.contentEditable = "true";
        //         this.parentElement.appendChild(popup);
        //         setTimeout(function () {
        //             popup.style.display = "none"
        //         }, 2000)
        //     })
        //
        // });
    }


    if (deleteBtn === null) {

    }else {
        deleteBtn.addEventListener("click", function () {
            this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement);
            // localStorage.removeItem('keyName')  dodać nazwę local storage
        });
    }

    addBtn.addEventListener("click", function () {
        //przejscie do okna dodawania nowego planu
        window.location.href = 'newRecipe.html';
    });

    getRecipesfromLS();


    function getRecipesfromLS() {
        tableBody.innerHTML = "";
        let allRecipes = JSON.parse(localStorage.getItem("recipes"));
        if (allRecipes === null) {
            allRecipes = 0;
        }else {
            if (allRecipes.length > 0) {
                allRecipes.forEach(function (singleRecipe) {
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

                    newRecipeId.innerText = singleRecipe.id;
                    newRecipeName.innerText = singleRecipe.title;
                    newRecipeDescription.innerText = singleRecipe.description;

                    newRecipeRow.appendChild(newRecipeId);
                    newRecipeRow.appendChild(newRecipeName);
                    newRecipeRow.appendChild(newRecipeDescription);
                    newRecipeRow.appendChild(newActionElem);

                    tableBody.appendChild(newRecipeRow);
                })
            }
        }
    }

});