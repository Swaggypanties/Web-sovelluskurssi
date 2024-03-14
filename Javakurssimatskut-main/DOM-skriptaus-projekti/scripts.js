function laheta(event) { //Tämä tarkastaa ssyötteet ja sen sisällön
    event.preventDefault();// estää sivun päivittämistä

    let nameElement = document.getElementById("Name");
    let ageElement = document.getElementById("Age");
    let weightElement = document.getElementById("Weight");
    let heightElement = document.getElementById("Height");
    let agesError = document.getElementById("ageError");
    let weightsError = document.getElementById("weightError");
    let heightsError = document.getElementById("heightError");

    if (nameElement && ageElement && weightElement && heightElement && agesError && weightsError && heightsError) {
        let hasError = false;

        let name = nameElement.value;
        let age = ageElement.value;
        let weight = weightElement.value;
        let height = heightElement.value;
    
        


        ageElement.classList.remove("error");
        weightElement.classList.remove("error");
        heightElement.classList.remove("error");
        agesError.textContent = "";
        weightsError.textContent = "";
        heightsError.textContent = "";


    if (age === "" || Number(age) <= 0) {
        ageElement.classList.add("error");
        agesError.textContent = "Please add a natural value";
        hasError = true;
        }
    

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
        localStorage.setItem("Age", age);
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

    var formElement = document.querySelector('information');
    if (formElement) {
        formElement.onsubmit = laheta; // Attach the event handler
    }
});

document.addEventListener('DOMContentLoaded', function() {

    var userAge = localStorage.getItem('Age'); // Retrieve the age from Local Storage
    var infoElement = document.getElementById('info');
    if (userAge && infoElement) { // Check if userName exists
        infoElement.textContent = 'Age: ' + userAge;
    }

    var formElement = document.querySelector('information');
    if (formElement) {
        formElement.onsubmit = laheta; // Attach the event handler
    }
});

document.addEventListener('DOMContentLoaded', function() {

    var userWeight = localStorage.getItem('Weight'); // Retrieve the age from Local Storage
    var info1Element = document.getElementById('info1');
    if (userWeight && info1Element) { // Check if userName exists
        info1Element.textContent = 'Weight: ' + userWeight + ' Kg';
    }

    var formElement = document.querySelector('information');
    if (formElement) {
        formElement.onsubmit = laheta; // Attach the event handler
    }
});

document.addEventListener('DOMContentLoaded', function() {

    var userHeight = localStorage.getItem('Height'); // Retrieve the age from Local Storage
    var info2Element = document.getElementById('info2');
    if (userHeight && info2Element) { // Check if userName exists
        info2Element.textContent = 'Height: ' + userHeight + ' Cm';
    }

    var formElement = document.querySelector('information');
    if (formElement) {
        formElement.onsubmit = laheta; // Attach the event handler
    }
});

function lisaa(event) { //Tämä tarkastaa ssyötteet ja sen sisällön
    event.preventDefault();// estää sivun päivittämistä

    let kcalElement = document.getElementById("kcal");
    let trainElement = document.getElementById("train");
    let intensityElement = document.getElementById("intensity");
    let sportElement = document.getElementById("sport");
    let kcalsError = document.getElementById("kcalError");
    let trainsError = document.getElementById("trainsError");

    if (kcalsError && trainsError) {
        let hasError = false;

    
        let kcals = kcalElement.value;
        let trains = trainElement.value;
        let intensity = intensityElement.value;
        let sport = sportElement.options[sportElement.selectedIndex].text;


        kcalElement.classList.remove("error");
        trainElement.classList.remove("error");
        kcalsError.textContent = "";
        trainsError.textContent = "";

    

    if (kcals === "" || Number(kcals) < 0) {
        kcalElement.classList.add("error");
        kcalsError.textContent = "You can't have a negative value";
        hasError = true;
    }


    if (trains === "" || Number(trains) < 0) {
        trainElement.classList.add("error");
        trainsError.textContent = "You can't have a negative value";
        hasError = true;
    }

    

    if (!hasError){

        let caloriesBurned = subjectObject[intensity][sport][0] * parseInt(trains, 10);

        localStorage.setItem("kcal", kcals);
        localStorage.setItem("train", trains);
        localStorage.setItem("intensity", intensity);
        localStorage.setItem("sport", sport);
        localStorage.setItem("caloriesBurned", caloriesBurned.toString());

        window.location.href = 'summarypage.html';
        

    }

    }

}

document.addEventListener('DOMContentLoaded', function() {
    var userHours = localStorage.getItem('train');
    var userIntensity = localStorage.getItem('intensity');
    var userSport = localStorage.getItem('sport');
    var userKcal = localStorage.getItem('kcal');
    var caloriesBurned = localStorage.getItem('caloriesBurned');
    var summaryElement = document.getElementById('summary');

    if (userHours && userIntensity && userSport && userKcal && caloriesBurned && summaryElement) {
        summaryElement.textContent = 'You did ' + userHours + ' hours of ' +userSport+ ', burning an estimated ' + caloriesBurned + 'kcal.';
    }
});

var subjectObject = {
    "None": {
        "None":[0],
    },
    "Low intensity (1hr = 200kcal*)": {
      "Frisbee golf":[200],
      "Walking": [200],
      "Archery": [200],
      "some other sport":[200],
    },
    "Light intensity(1hr = 300kcal*)": {
        "Ping Pong": [300],
        "Light jog": [300],
        "Badminton": [300],
        "some other sport": [300],
    },
    "Moderate intensity(1hr = 400kcal*)": {
        "Boxing(Bag workout)": [400],
        "Weight lifting": [400],
        "Excersie bike": [400],
        "Long hike with a backpack": [400],
        "some other sport": [400],
      },
      "High intensity(1hr = 500kcal*)": {
        "Aerobic": [500],
        "Running at brisk pace": [500],
        "Roller blading": [500],
        "Swimming": [500],
        "some other sport": [500],
      },
      "Intense(1hr = 600kcal*)": {
        "Basketball": [600],
        "Football": [600],
        "Ice hockey": [600],
        "Horse riding": [600],
        "some other sport": [600],
      },
    

  }
  window.onload = function() {
    var subjectSel = document.getElementById("intensity");
    var topicSel = document.getElementById("sport");
    for (var x in subjectObject) {
      subjectSel.options[subjectSel.options.length] = new Option(x, x);
    }

    subjectSel.onchange = function() {
        //empty Chapters- and Topics- dropdowns

        topicSel.length = 1;
        //display correct values
        for (var y in subjectObject[this.value]) {
          topicSel.options[topicSel.options.length] = new Option(y, y);
        }
    }
}
