document.addEventListener("DOMContentLoaded", function () {
    //new whole row
    //new td with Id iteration
    //new td with localstorage.planName
    //new td with localstorage.planDescription
    // new td with localstorage.weekNumber
    const editBtn = document.querySelector("td i:first-child");
    const deleteBtn = document.querySelector("td i:last-child");
    const addBtn = document.querySelector("button i");

    editBtn.addEventListener("click", function () {
        window.location.href = 'schedules.html';
      //  this.parentElement.parentElement.contentEditable = "true";
        //localStorage.setItem('nazwa_polaLocalS, userName)
    });

    deleteBtn.addEventListener("click", function () {
        this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement);
       // localStorage.removeItem('keyName')  dodać nazwę local storage
    });

    addBtn.addEventListener("click", function () {
        //przejscie do okna dodawania nowego planu

    });

    function getPlans() {


    }


});