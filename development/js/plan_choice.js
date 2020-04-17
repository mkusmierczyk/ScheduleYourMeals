document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    const week = document.querySelector(".schedules__caption span");

    const monday = document.querySelectorAll('.monday');
    const tuesday = document.querySelectorAll('.tuesday');
    const wednesday = document.querySelectorAll('.wednesday');
    const thursday = document.querySelectorAll('.thursday');
    const friday = document.querySelectorAll('.friday');
    const saturday = document.querySelectorAll('.saturday');
    const sunday = document.querySelectorAll('.sunday');
    let days = document.querySelectorAll('.day');
    let plans = JSON.parse(localStorage.getItem("plans"));


    let scheduleDays = localStorage.getItem("plans").split(",");// Do zmiennej `dataArray` przypisujemy zamieniony na tablicę string z localStorage:
    console.log(plans);


    plans.forEach(function (week){
        let counter = 0;
        week.monday.forEach(function (meal) {

            monday[counter].innerText = meal;
            counter++
        });
         counter = 0;
        week.tuesday.forEach(function (meal) {

            tuesday[counter].innerText = meal;
            counter++
        });
         counter = 0;
        week.wednesday.forEach(function (meal) {

            wednesday[counter].innerText = meal;
            counter++
        });
        counter = 0;
        week.thursday.forEach(function (meal) {

            thursday[counter].innerText = meal;
            counter++
        });
        counter = 0;
        week.friday.forEach(function (meal) {

            friday[counter].innerText = meal;
            counter++
        });
        counter = 0;
        week.saturday.forEach(function (meal) {

            saturday[counter].innerText = meal;
            counter++
        });
        counter = 0;
        week.sunday.forEach(function (meal) {

            sunday[counter].innerText = meal;
            counter++
        })

        }
    );


    // for (let i = 0; i < plans.length; i++) {
    //     console.log(i,plans[i]); // wyświetli każdy (index, element)
    //     let daysSchedule = [];
    //     days.forEach(function (element){
    //         console.log(element);
    //
    //
    //     })
    //
    // }




    // plans.forEach(function (days) {
    //             days.forEach(function (element) {
    //                 let option = document.createElement("option");
    //                 option.innerHTML = element;
    //                 days.appendChild(option)
    //             });
    //     console.log(days);
    // });







    //
    // allSelects.forEach(function (select) {
    //     przepisy.forEach(function (element) {
    //         let option = document.createElement("option");
    //         option.innerHTML = element;
    //         select.appendChild(option)
    //     })
    // })




    // currentPlan.forEach(function (dishes) {
    //     breakfests.forEach(function (breakfest) {
    //         breakfest.innerHTML = dishes;
    //
    //
    //
    //     })
    //
    //
    // });


    prevBtn.addEventListener("click", function () {




    });

    nextBtn.addEventListener("click", function () {


    });


});