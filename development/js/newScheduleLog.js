document.addEventListener('DOMContentLoaded', function () {

        const nameDescription = document.getElementById("planName");
        console.log(nameDescription);
        const weekNumber = document.getElementById("nb");
        console.log(weekNumber);
        const saveButton = document.querySelector("button");
        console.log(saveButton);
        const planDescription = document.getElementById("description");
        console.log(planDescription);
        let allSelects = document.querySelectorAll("select");
        const mondayPlan = document.getElementById("monday").getElementsByTagName("select");
        const tuesdayPlan = document.getElementById("tuesday").getElementsByTagName("select");
        const wednesdayPlan = document.getElementById("wednesday").getElementsByTagName("select");
        const thursdayPlan = document.getElementById("thursday").getElementsByTagName("select");
        const fridayPlan = document.getElementById("friday").getElementsByTagName("select");
        const saturdayPlan = document.getElementById("saturday").getElementsByTagName("select");
        const sundayPlan = document.getElementById("sunday").getElementsByTagName("select");
        console.log(mondayPlan);
        console.log(allSelects);
            // pobranie przepisów z LS
        let fromRecipes = JSON.parse(localStorage.getItem("recipes"));
        console.log(fromRecipes);//sprawdzam czy pobrało przepsy z ls


        let recipes = [];
        fromRecipes.forEach(function (element) {

            let title = element.title;
            recipes.push(title);
            return recipes;
        })

        let przepisy = ["kiełba", "ogór", "jajecznica", "tosty", "ser"];//to było tylko do testowania dodawania dań do selectów
        console.log(przepisy);//sprawdzenie
                // dodanie do selectów listy dań z jakiejś tablicy w tym wypadku z recipes
        allSelects.forEach(function (select) {
            recipes.forEach(function (element) {
                let option = document.createElement("option");
                option.innerHTML = element;
                select.appendChild(option)
            })
        })


        saveButton.addEventListener("click", function () {
            if (weekNumber.value >= 54 || weekNumber.value <= 0) {
                alert("wypełniłeś błędnie formularz. Przyjmuje wartości 1-54");
            } else if (planDescription.value.length > 50) {
                alert("wypełniłeś błędnie formularz za dużo znaków");
            } else {
                let week = weekNumber.value;
                let name = nameDescription.value;
                let description = planDescription.value;
                let monday = mondayPlan.value;
                console.log(monday);

                function getValues(plan) {
                    let propArray = [];
                    Array.from(plan).forEach(function (element) {
                        propArray.push(element.value)
                    });
                    return propArray
                }

                console.log(getValues(mondayPlan));
                console.log(getValues(tuesdayPlan));


                let dataFromStorage = localStorage.getItem('plans');
                let plans;
                if (!dataFromStorage) {
                    plans = [];
                } else {
                    plans = JSON.parse(dataFromStorage);
                }
                const plan = {
                    week: week,
                    monday: getValues(mondayPlan),
                    tuesday: getValues(tuesdayPlan),
                    wednesday: getValues(wednesdayPlan),
                    thursday: getValues(thursdayPlan),
                    friday: getValues(fridayPlan),
                    saturday: getValues(saturdayPlan),
                    sunday: getValues(sundayPlan),
                    name: name,
                    description: description
                }

                plans.push(plan);

                localStorage.setItem('plans', JSON.stringify(plans));


            }
            // if (weekNumber.value <= 54 && nameDescription.value.length <= 50) {
            // localStorage.setItem("week", week);
            // localStorage.setItem("name", name);
            // localStorage.setItem("description", description);
            // } else {
            //     //alert
            // }
        });
        let mateusz = JSON.parse(localStorage.getItem("monday"));
        console.log(mateusz);
        // console.log(localStorage.getItem("week"));
        // console.log(localStorage);
    }
)