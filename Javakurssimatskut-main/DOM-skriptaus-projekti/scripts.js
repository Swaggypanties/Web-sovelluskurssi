function laheta(event) { //Tämä tarkastaa ssyötteet ja sen sisällön
    event.preventDefault();// estää sivun päivittämistä

    let nameElement = document.getElementById("Name");
    let weightElement = document.getElementById("Weight");
    let heightElement = document.getElementById("Height");
    let trainElement = document.getElementById("train");
    let weightsError = document.getElementById("weightError");
    let heightsError = document.getElementById("heightError");
    let trainsError = document.getElementById("trainError");

    if (nameElement && weightElement && heightElement && weightsError && heightsError && trainsError) {
        let hasError = false;

        let name = nameElement.value;
        let weight = weightElement.value;
        let height = heightElement.value;
        let trains = trainElement.value;


        weightElement.classList.remove("error");
        heightElement.classList.remove("error");
        trainElement.classList.remove("error");
        weightsError.textContent = "";
        heightsError.textContent = "";
        trainsError.textContent = "";

    

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
    if (trains === "" || Number(train) < 0) {
        trainElement.classList.add("error");
        trainsError.textContent = "You can't have a negative value"
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

function lahetan(event) { //Tämä tarkastaa ssyötteet ja sen sisällön
    event.preventDefault();// estää sivun päivittämistä

    let heightElement = document.getElementById("Height");
    let trainElement = document.getElementById("train");
    let heightsError = document.getElementById("heightError");
    let trainsError = document.getElementById("trainError");

    if (heightsError && trainsError) {
        let hasError = false;

    
        let height = heightElement.value;
        let trains = trainElement.value;


        heightElement.classList.remove("error");
        trainElement.classList.remove("error");
        heightsError.textContent = "";
        trainsError.textContent = "";

    

    if (weight === "" || Number(weight) <= 0) {
        weightElement.classList.add("error");
        weightsError.textContent = "Please add a natural value";
        hasError = true;
    }


    if (trains === "" || Number(train) < 0) {
        trainElement.classList.add("error");
        trainsError.textContent = "You can't have a negative value"
        hasError = true;
    }

    

    if (!hasError){

        localStorage.setItem("Weight", weight);
        localStorage.setItem("train", train);

        window.location.href = 'summarypage.html';
        

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

var subjectObject = {
    "None": {
        "None":[],
    },
    "Low intensity (1hr = 200kcal*)": {
      "Frisbee golf":[],
      "Walking": [],
      "Archery": [],
      "Other":[],
    },
    "Light intensity(1hr = 300kcal*)": {
        "Ping Pong": [],
        "Light jog": ["SELECT", "UPDATE", "DELETE"],
        "Badminton": [],
        "Other": [],
    },
    "Moderate intensity(1hr = 400kcal*)": {
        "Boxing(Bag workout)": [],
        "Weight lifting": [],
        "Excersie bike": [],
        "Long hike with a backpack": [],
        "Other": [],
      },
      "High intensity(1hr = 500kcal*)": {
        "Aerobic": [],
        "Running at brisk pace": [],
        "Roller blading": [],
        "Swimming": [],
        "Other": [],
      },
      "Intense(1hr = 600kcal*)": {
        "Basketball": [],
        "Football": [],
        "Ice hockey": [],
        "Horse riding": [],
        "Other": [],
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
