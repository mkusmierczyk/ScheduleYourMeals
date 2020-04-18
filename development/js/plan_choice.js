document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    const weekNum = document.querySelector(".schedules__caption span");

    const monday = document.querySelectorAll('.monday');
    const tuesday = document.querySelectorAll('.tuesday');
    const wednesday = document.querySelectorAll('.wednesday');
    const thursday = document.querySelectorAll('.thursday');
    const friday = document.querySelectorAll('.friday');
    const saturday = document.querySelectorAll('.saturday');
    const sunday = document.querySelectorAll('.sunday');

    let plans = JSON.parse(localStorage.getItem("plans"));
    console.log(plans);

    let plansPrev = JSON.parse(localStorage.getItem("plans"));


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

        });



            weekNum.innerText = plans.week



        }
    );

    prevBtn.addEventListener("click", function () {
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





    });

    nextBtn.addEventListener("click", function () {


    });


});