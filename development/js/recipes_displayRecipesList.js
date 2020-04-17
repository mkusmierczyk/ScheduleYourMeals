document.addEventListener("DOMContentLoaded", function () {

    const tableBody = document.querySelector("tbody");
    const editBtn = document.querySelector("td i:first-child");
    const deleteBtn = document.querySelector("td i:last-child");
    const addBtn = document.querySelector("button i");


    editBtn.addEventListener("click", function () {
        window.location.href = 'schedules.html';
      //  this.parentElement.parentElement.contentEditable = "true";
        //localStorage.setItem('nazwa_polaLocalS, userName)
    });

    deleteBtn.addEventListener("click", function () {
        this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement);
       // localStorage.removeItem('keyName')  dodać nazwę local storage
    });

    // editBtn.addEventListener("click", function () {
    //     //przejscie do edycji, wyświetleie popup edycji
    // });

    // deleteBtn.addEventListener("click", function () {
    //     //new whole row add class hide
    //
    // });


    addBtn.addEventListener("click", function () {
        //przejscie do okna dodawania nowego planu

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