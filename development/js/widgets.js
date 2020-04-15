document.addEventListener("DOMContentLoaded", function () {
   const addRecipeBtn = document.querySelector(".widgets__content__box:first-child");
   const addPlanBtn = document.querySelector(".widgets__content__box:last-child");
   const widgetsInfoBox = document.querySelectorAll(".widgets__info__box");

   const removeInfoWidget = document.querySelectorAll(".widgets__info__box button i");
   const recipesNumberSpan = document.querySelector("#numberOfRecipes");
   const recipesWordSpan = document.querySelector("#recipesWord");


   //
   // recipesNumberSpan.innerHTML = //tutaj będzie liczba przepisów

    if (recipesNumberSpan.innerText == 1) {
        recipesWordSpan.innerText = "przepis"
    }
    if (recipesNumberSpan.innerText > 1 && recipesWordSpan.innerText <= 5) {
        recipesWordSpan.innerText = "przepisy"
    }
    if (recipesNumberSpan.innerText > 5) {
        recipesWordSpan.innerText = "przepisów"
    }
    //to wyżej jeszcze do dopracowania

   addRecipeBtn.addEventListener("click", function (event) {
       event.preventDefault();
       //tutaj dodamy klase pokazywania popup zeby dodac przepis
       addRecipeBtn.classList.add("hide");
       addPlanBtn.classList.add("hide");
       widgetsInfoBox.forEach(function (element) {
           element.classList.add("hide");
       })
   });

    addPlanBtn.addEventListener("click", function (event) {
        event.preventDefault();
        //tutaj doademy klase pokazywania popup zeby dodac plan
        addRecipeBtn.classList.add("hide");
        addPlanBtn.classList.add("hide")
        widgetsInfoBox.forEach(function (element) {
            element.classList.add("hide");
        })
    });

    removeInfoWidget.forEach(function (element) {
        element.addEventListener("click", function () {
            element.parentElement.parentElement.classList.add("hide")
        })
    })
});
