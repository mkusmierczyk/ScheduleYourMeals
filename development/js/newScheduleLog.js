document.addEventListener('DOMContentLoaded', function () {

    const nameDescription = document.getElementById("planName");
    console.log(nameDescription);
    const weekNumber = document.getElementById("nb");
    console.log(weekNumber);
    const saveButton = document.querySelector("button");
    console.log(saveButton);
    const planDescription = document.getElementById("description");
    console.log(planDescription);
    const mondayPlan = document.getElementById("monday").getElementsByTagName("option");
    const tuesdayPlan = document.getElementById("tuesday").getElementsByTagName("option");
    const wednesdayPlan = document.getElementById("wednesday").getElementsByTagName("select");
    const thursdayPlan = document.getElementById("thursday").getElementsByTagName("select");
    const fridayPlan = document.getElementById("friday").getElementsByTagName("select");
    const saturdayPlan = document.getElementById("saturday").getElementsByTagName("select");
    const sundayPlan = document.getElementById("sunday").getElementsByTagName("select");
    console.log(mondayPlan);
    // const mondayDishes = document.querySelector(".sniadanie");
    // const tuesdayDishes = tuesdayPlan.getElementsByTagName("select");
    // const wednesdayDishes = wednesdayPlan.getElementsByTagName("select");
    // const thursdayDishes = thursdayPlan.getElementsByTagName("select");
    // // const fridayDishes = fridayPlan.getElementsByTagName("select");
    // const saturdayDishes = saturdayPlan.getElementsByTagName("select");
    // const sundayDishes = sundayPlan.getElementsByTagName("select");
    // console.log(fridayDishes);

    // console.log(iterator);

    // let random = nameDescription.value;
    // localStorage.clear();
    saveButton.addEventListener("click", function () {
        let week = weekNumber.value;
        let name = nameDescription.value;
        let description = planDescription.value;
        let monday = mondayPlan.value;
        console.log(monday);
        var iterator = Array.from(mondayPlan).values();
        console.log(iterator.next().value);
        console.log(iterator.next().value);
        console.log(iterator.next().value);
        console.log(iterator.next().value);
        console.log(iterator.next().value);

        let dataFromStorage = localStorage.getItem('plans');
        let plans;
        if (!dataFromStorage) {
            plans = [];
        } else {
            plans = JSON.parse(dataFromStorage);
        }
        const plan = {
            week: week,
            name: name,
            description: description,
            // monday: mondayDishes
            // monday: mondayDishes,
            // tuesday: tuesdayDishes,
            // wednesday: wednesdayDishes,
            // thursday: thursdayDishes,
            // friday: fridayDishes,
            // saturday: saturdayDishes,
            // sunday: sundayDishes
        }

        plans.push(plan);

        localStorage.setItem('plans', JSON.stringify(plans));

        // if (weekNumber.value <= 54 && nameDescription.value.length <= 50) {
        // localStorage.setItem("week", week);
        // localStorage.setItem("name", name);
        // localStorage.setItem("description", description);
        // } else {
        //     //alert
        // }
    })


    console.log(localStorage.getItem("week"));

    console.log(localStorage);

    // let dataArray = localStorage.getItem("weekNumber", "nameDescription", "planDescription").split(",");
    // console.log(dataArray);

    // if (localStorage.getItem("weekNumber") != "null") {
    //
    //     let plans = ["weekNumbers", "nameDescription", "planDescription"];
    // }


    //    function Schedule(id, weekNumber, title, description) {
    //        this.id = id; // id przepisu
    //        this.title = nameDescription; // nazwa planu
    //        this.description = description; // opis planu
    //        this.weekNumber = weekNumber; // numer tygodnia do którego przypisany jest plan
    //        this.monday = []; // plan na poniedzialek
    //        this.tuesday = []; // plan na wtorek
    //        this.wednesday = []; // plan na środę
    //        this.thursday = []; // plan na czwartek
    //        this.friday = []; // plan na piątek
    //        this.saturday = []; // plan na sobotę
    //        this.sunday = []; // plan na niedzielę
    //    }
    //
    //    /*
    // Metoda `.showInfo()`
    // wyświetlająca w konsoli informacje o planie */
    //    Schedule.prototype.showInfo = function() {
    //        console.warn("ID: ", this.id, "TYTUŁ: ", this.title); // wyświetl id oraz tytuł
    //        console.warn("OPIS: ",this.description); // wyświetl opis
    //
    //        console.warn("Poniedziałek:");
    //        this.monday.forEach(function(elem, i) {
    //            console.warn(i, elem); // wyświetl każdy poskiłek z poniedziałku
    //        })
    //    }

})