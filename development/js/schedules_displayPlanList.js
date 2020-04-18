document.addEventListener("DOMContentLoaded", function () {
   const tableBody = document.querySelector("tbody");
   const addBtn = document.querySelector("button i");

   addBtn.addEventListener("click", function () {
       //przejscie do okna dodawania nowego planu

   });

   getPlansfromLS();

   const editBtn = document.querySelectorAll(".fa-edit");
   editBtn.forEach(function (singleEditBtn) {
      singleEditBtn.addEventListener("click", function () {
         console.log("elo");
         const popup = document.createElement("span");
         popup.innerText = "Gotowe do edycji!";
         popup.classList.add("popupEdit");
         this.parentElement.appendChild(popup);


      })

   });






   const deleteBtn = document.querySelectorAll(".fa-trash-alt");

   deleteBtn.forEach(function (singleDeleteBtn) {
      console.log("elo");
      singleDeleteBtn.addEventListener("click", function () {
         this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement);

         let allplans = JSON.parse(localStorage.getItem("plans"));
         allplans.forEach(function (plan) {
            let planName = singleDeleteBtn.parentElement.parentElement.firstChild.nextSibling;
            if (plan === null) {
            }else {
               if (plan.name === planName.innerText) {
                  delete allplans[allplans.indexOf(plan)];
                  window.localStorage.plans = JSON.stringify(allplans);
               }
            }
         })
      });
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

            if (singlePlan === null) {

            } else {
               newPlanName.innerText = singlePlan.name;
               newPlanDescription.innerText = singlePlan.description;
               newPlanWeek.innerText = singlePlan.week;

               newPlanRow.appendChild(newPlanId);
               newPlanRow.appendChild(newPlanName);
               newPlanRow.appendChild(newPlanDescription);
               newPlanRow.appendChild(newPlanWeek);
               newPlanRow.appendChild(newAction);

               tableBody.appendChild(newPlanRow);
         }
         })

      }
   }


});
