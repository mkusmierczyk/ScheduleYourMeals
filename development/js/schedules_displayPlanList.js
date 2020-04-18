document.addEventListener("DOMContentLoaded", function () {
   //new whole row
   //new td with Id iteration
   //new td with localstorage.planName
   //new td with localstorage.planDescription
   // new td with localstorage.weekNumber
   const tableBody = document.querySelector("tbody");
   const editBtn = document.querySelector("td i:first-child");
   const deleteBtn = document.querySelector("td i:last-child");
   const addBtn = document.querySelector("button i");

   addBtn.addEventListener("click", function () {
       //przejscie do okna dodawania nowego planu

   });

   getPlansfromLS();

   editBtn.addEventListener("click", function () {
      //przejscie do edycji, wyświetleie popup edycji
   });

   deleteBtn.addEventListener("click", function () {
      //new whole row add class hide

   });



   function getPlansfromLS() {
      tableBody.innerHTML = "";
      let allPlans = JSON.parse(localStorage.getItem("plans"));
      if (allPlans === null) {
         allPlans = [];
      }else {
         let i = 1;
         allPlans.forEach(function (singlePlan) {
            let newPlanRow = document.createElement("tr");
            newPlanRow.classList.add("row");
            let newPlanId = document.createElement("td");
            newPlanId.classList.add("col-1");
            let newPlanName = document.createElement("td");
            newPlanName.classList.add("col-2");
            let newPlanDescription = document.createElement("td");
            newPlanDescription.classList.add("col-6");
            let newPlanWeek = document.createElement("td");
            newPlanWeek.classList.add("col-2");
            let newAction = document.createElement("td");
            newAction.classList.add("col-1");

            let trashBtn = document.createElement('i');
            trashBtn.classList.add('fas');
            trashBtn.classList.add('fa-trash-alt');
            let editBtn = document.createElement('i');
            editBtn.classList.add('fas');
            editBtn.classList.add('fa-edit');

            newAction.appendChild(editBtn);
            newAction.appendChild(trashBtn);


            newPlanId.innerText = i;
            i ++;

            newPlanName.innerText = singlePlan.name;
            newPlanDescription.innerText = singlePlan.description;
            newPlanWeek.innerText = singlePlan.week;

            newPlanRow.appendChild(newPlanId);
            newPlanRow.appendChild(newPlanName);
            newPlanRow.appendChild(newPlanDescription);
            newPlanRow.appendChild(newPlanWeek);
            newPlanRow.appendChild(newAction);

            tableBody.appendChild(newPlanRow);
         })

      }
   }




});