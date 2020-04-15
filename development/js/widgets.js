document.addEventListener("DOMContentLoaded", function () {
   const addRecipeBtn = document.querySelector(".widgets__content__box:first-child");
   const addPlanBtn = document.querySelector(".widgets__content__box:last-child");

   addRecipeBtn.addEventListener("click", function (event) {
       event.preventDefault();
       //tutaj dodamy klase pokazywania popup zeby dodac przepis
       addRecipeBtn.classList.add("hide");
       addPlanBtn.classList.add("hide")
   });

    addPlanBtn.addEventListener("click", function (event) {
        event.preventDefault();
        //tutaj doademy klase pokazywania popup zeby dodac plan
        addRecipeBtn.classList.add("hide");
        addPlanBtn.classList.add("hide")
    })
});
