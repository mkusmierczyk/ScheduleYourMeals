// document.addEventListener("DOMContentLoaded", function () {
//
//     const prevBtn = document.querySelector(".prev");
//     const nextBtn = document.querySelector(".next");
//
//     const week = document.querySelector(".schedules__caption span");
//     console.log(week);
//     const breakfests = document.querySelectorAll('.schedules__breakfest');
//     const secondBreakfests = document.querySelectorAll('.schedules__secondBreakfast');
//     const soups = document.querySelectorAll('.schedules__soup');
//     const mainDishes = document.querySelectorAll('.schedules__mainDish');
//     const suppers = document.querySelectorAll('.schedules__supper');
//
//
//     console.log(dishes);
//
//
//     let monday = JSON.parse(localStorage.getItem("monday"));
//     let tuesday = JSON.parse(localStorage.getItem("tuesday"));
//     let wednesday = JSON.parse(localStorage.getItem("wednesday"));
//     let thursday = JSON.parse(localStorage.getItem("thursday"));
//     let friday = JSON.parse(localStorage.getItem("friday"));
//     let saturday = JSON.parse(localStorage.getItem("saturday"));
//     let sunday = JSON.parse(localStorage.getItem("sunday"));
//
//
//     //
//     // allSelects.forEach(function (select) {
//     //     przepisy.forEach(function (element) {
//     //         let option = document.createElement("option");
//     //         option.innerHTML = element;
//     //         select.appendChild(option)
//     //     })
//     // })
//
//
//
//
//    currentPlan.forEach(function (dishes) {
//        breakfests.forEach(function (breakfest) {
//            breakfest.innerHTML = dishes;
//
//
//
//        })
//
//
//    });
//
//
//     prevBtn.addEventListener("click", function () {
//
//
//
//         const prevBtn = document.querySelector(".prev");
//         const nextBtn = document.querySelector(".next");
//
//         const weekNum = document.querySelector(".schedules__caption span");
//
//         const monday = document.querySelectorAll('.monday');
//         const tuesday = document.querySelectorAll('.tuesday');
//         const wednesday = document.querySelectorAll('.wednesday');
//         const thursday = document.querySelectorAll('.thursday');
//         const friday = document.querySelectorAll('.friday');
//         const saturday = document.querySelectorAll('.saturday');
//         const sunday = document.querySelectorAll('.sunday');
//
//
//         let plans = JSON.parse(localStorage.getItem("plans"));
//         console.log(plans);
//
//         let plansPrev = JSON.parse(localStorage.getItem("plans"));
//
//
//         plans.forEach(function (weekLast) {
//             let counter = 0;
//             weekLast.monday.forEach(function (meal) {
//
//                 monday[counter].innerText = meal;
//                 counter++
//             });
//             counter = 0;
//             weekLast.tuesday.forEach(function (meal) {
//
//                 tuesday[counter].innerText = meal;
//                 counter++
//             });
//             counter = 0;
//             weekLast.wednesday.forEach(function (meal) {
//
//                 wednesday[counter].innerText = meal;
//                 counter++
//             });
//             counter = 0;
//             weekLast.thursday.forEach(function (meal) {
//
//                 thursday[counter].innerText = meal;
//                 counter++
//             });
//             counter = 0;
//             weekLast.friday.forEach(function (meal) {
//
//                 friday[counter].innerText = meal;
//                 counter++
//             });
//             counter = 0;
//             weekLast.saturday.forEach(function (meal) {
//
//                 saturday[counter].innerText = meal;
//                 counter++
//             });
//             counter = 0;
//             weekLast.sunday.forEach(function (meal) {
//
//                 sunday[counter].innerText = meal;
//                 counter++;
//
//
//             });
//
//             weekNum.innerText = weekLast.week
//
//         });
//
//         prevBtn.addEventListener("click", function (event) {
//             for (let i = 0; i <plans.length ; i++) {
//
//
//             }
//             plans[i]
//             plans.forEach(function (weekPrev) {
//                 let counter = 0;
//                 weekPrev.monday.forEach(function (meal) {
//
//                     monday[counter ].innerText = meal;
//                     counter++
//                 });
//                 counter = 0;
//                 weekPrev.tuesday.forEach(function (meal) {
//
//                     tuesday[counter].innerText = meal;
//                     counter++
//                 });
//                 counter = 0;
//                 weekPrev.wednesday.forEach(function (meal) {
//
//                     wednesday[counter].innerText = meal;
//                     counter++
//                 });
//                 counter = 0;
//                 weekPrev.thursday.forEach(function (meal) {
//
//                     thursday[counter].innerText = meal;
//                     counter++
//                 });
//                 counter = 0;
//                 weekPrev.friday.forEach(function (meal) {
//
//                     friday[counter].innerText = meal;
//                     counter++
//                 });
//                 counter = 0;
//                 weekPrev.saturday.forEach(function (meal) {
//
//                     saturday[counter].innerText = meal;
//                     counter++
//                 });
//                 counter = 0;
//                 weekPrev.sunday.forEach(function (meal) {
//
//                     sunday[counter].innerText = meal;
//                     counter++;
//
//
//                 });
//
//                 weekNum.innerText = weekPrev.week
//
//             });
//
//         })
//
//     });