document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    const week = document.querySelector(".schedules__caption span");
    console.log(week);
    const breakfests = document.querySelectorAll('.schedules__breakfest');
    const secondBreakfests = document.querySelectorAll('.schedules__secondBreakfast');
    const soups = document.querySelectorAll('.schedules__soup');
    const mainDishes = document.querySelectorAll('.schedules__mainDish');
    const suppers = document.querySelectorAll('.schedules__supper');


    console.log(dishes);


    let monday = JSON.parse(localStorage.getItem("monday"));
    let tuesday = JSON.parse(localStorage.getItem("tuesday"));
    let wednesday = JSON.parse(localStorage.getItem("wednesday"));
    let thursday = JSON.parse(localStorage.getItem("thursday"));
    let friday = JSON.parse(localStorage.getItem("friday"));
    let saturday = JSON.parse(localStorage.getItem("saturday"));
    let sunday = JSON.parse(localStorage.getItem("sunday"));


    //
    // allSelects.forEach(function (select) {
    //     przepisy.forEach(function (element) {
    //         let option = document.createElement("option");
    //         option.innerHTML = element;
    //         select.appendChild(option)
    //     })
    // })




   currentPlan.forEach(function (dishes) {
       breakfests.forEach(function (breakfest) {
           breakfest.innerHTML = dishes;



       })


   });


    prevBtn.addEventListener("click", function () {




  });

    nextBtn.addEventListener("click", function () {


    });


});