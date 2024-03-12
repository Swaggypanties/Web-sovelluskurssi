function laheta(event) { //Tämä tarkastaa ssyötteet ja sen sisällön
    event.preventDefault();// estää sivun päivittämistä

    let nameElement = document.getElementById("Name");
    let weightElement = document.getElementById("Weight");
    let heightElement = document.getElementById("Height");
    let weightsError = document.getElementById("weightError")
    let heightsError = document.getElementById("heightError")

    if (nameElement && weightElement && heightElement && weightsError && heightsError) {
        let hasError = false;

        let name = nameElement.value;
        let weight = weightElement.value;
        let height = heightElement.value;


        weightElement.classList.remove("error");
        heightElement.classList.remove("error");
        weightsError.textContent = "";
        heightsError.textContent = "";

    

    if (weight === "" || Number(weight) <= 0) {
        weightElement.classList.add("error");
        weightsError.textContent = "Please add a natural value";
        hasError = true;
    }

    if (height === "" || Number(height) <= 0) {
        heightElement.classList.add("error");
        heightsError.textContent = "Please add a natural value";
        hasError = true;
    }

    

    if (!hasError){

        localStorage.setItem("Name", name);
        localStorage.setItem("Weight", weight);
        localStorage.setItem("Height", height);

        window.location.href = 'secondpage.html';
        

    }

    }

}
document.addEventListener('DOMContentLoaded', function() {

    var userName = localStorage.getItem('Name'); // Retrieve the name from Local Storage
    var wlcmMessageElement = document.getElementById('wlcmMessage');
    if (userName && wlcmMessageElement) { // Check if userName exists
        wlcmMessageElement.textContent = 'Welcome, ' + userName + '!';
    }

    var formElement = document.querySelector('form');
    if (formElement) {
        formElement.onsubmit = laheta; // Attach the event handler
    }
});