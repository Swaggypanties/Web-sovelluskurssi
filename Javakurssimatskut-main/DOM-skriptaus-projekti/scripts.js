function laheta(event) { //Tämä tarkastaa ssyötteet ja sen sisällön
    event.preventDefault();// estää sivun päivittämistä
    //määrittää arvot
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

        // Ei saa olla yhtä suuri tai pienempi kuin 0
    if (age === "" || Number(age) <= 0) {
        ageElement.classList.add("error");
        agesError.textContent = "Please add a natural value";
        hasError = true;
        }
    
        // Ei saa olla yhtä suuri tai pienempi kuin 0
    if (weight === "" || Number(weight) <= 0) {
        weightElement.classList.add("error");
        weightsError.textContent = "Please add a natural value";
        hasError = true;
    }
        // Ei saa olla yhtä suuri tai pienempi kuin 0
    if (height === "" || Number(height) <= 0) {
        heightElement.classList.add("error");
        heightsError.textContent = "Please add a natural value";
        hasError = true;
    }


    

    if (!hasError){
        //Tallentaa tiedot localstorageen
        localStorage.setItem("Name", name);
        localStorage.setItem("Age", age);
        localStorage.setItem("Weight", weight);
        localStorage.setItem("Height", height);
        //Siirtyy tähän sivulle
        window.location.href = 'secondpage.html';
        

    }

    }

}

document.addEventListener('DOMContentLoaded', function() { // Hakee nimen ja lisää tervetuloa tekstiin

    var userName = localStorage.getItem('Name');// hakee nimen
    var wlcmMessageElement = document.getElementById('wlcmMessage');
    if (userName && wlcmMessageElement) { 
        wlcmMessageElement.textContent = 'Welcome, ' + userName + '!';
    }

    var formElement = document.querySelector('information');
    if (formElement) {
        formElement.onsubmit = laheta;
    }
});

document.addEventListener('DOMContentLoaded', function() {

    var userAge = localStorage.getItem('Age'); // Hakee iän localstoragesta
    var infoElement = document.getElementById('info');
    if (userAge && infoElement) { 
        infoElement.textContent = 'Age: ' + userAge;
    }

    var formElement = document.querySelector('information');
    if (formElement) {
        formElement.onsubmit = laheta;
    }
});

document.addEventListener('DOMContentLoaded', function() {

    var userWeight = localStorage.getItem('Weight'); // Hakee painon localstoragesta
    var info1Element = document.getElementById('info1');
    if (userWeight && info1Element) { 
        info1Element.textContent = 'Weight: ' + userWeight + ' Kg';
    }

    var formElement = document.querySelector('information');
    if (formElement) {
        formElement.onsubmit = laheta;
    }
});

document.addEventListener('DOMContentLoaded', function() {

    var userHeight = localStorage.getItem('Height'); //Hakee pituuden localstoragesta
    var info2Element = document.getElementById('info2');
    if (userHeight && info2Element) {
        info2Element.textContent = 'Height: ' + userHeight + ' Cm';
    }

    var formElement = document.querySelector('information');
    if (formElement) {
        formElement.onsubmit = laheta; 
    }
});

function lisaa(event) { //Tämä tarkastaa syötteet ja sen sisällön addpage:st
    event.preventDefault();// estää sivun päivittämistä
    //Määrittää arvot
    let kcalElement = document.getElementById("kcal");
    let trainElement = document.getElementById("train");
    let intensityElement = document.getElementById("intensity");
    let sportElement = document.getElementById("sport");
    let kcalsError = document.getElementById("kcalError");
    let trainsError = document.getElementById("trainsError");
    
    if (kcalsError && trainsError) {
        let hasError = false; //tarkistaa onko tosi vai epätosi

        //Määrittää arvot
        let kcals = kcalElement.value;
        let trains = trainElement.value;
        let intensity = intensityElement.value;
        let sport = sportElement.options[sportElement.selectedIndex].text;


        kcalElement.classList.remove("error"); //Poistaa errorin
        trainElement.classList.remove("error");
        kcalsError.textContent = ""; //Teksti kenttä mihin sitten ilmestyy error viesti
        trainsError.textContent = "";

    
        //Tarkistaa jos on pienempi kuin nolla 
    if (kcals === "" || Number(kcals) < 0) {
        kcalElement.classList.add("error");//Lisää error viestin
        kcalsError.textContent = "You can't have a negative value";//tulostaa tämän viestin
        hasError = true;//Tarkoittaa että virhe ilmestyi 
    }

        //Tarkistaa jos on pienempi kuin nolla 
    if (trains === "" || Number(trains) < 0) {
        trainElement.classList.add("error");//Lisää error viestin
        trainsError.textContent = "You can't have a negative value";//tulostaa tämän viestin
        hasError = true;//Tarkoittaa että virhe ilmestyi 
    }

    

    if (!hasError){
        //Laskukaava Kuinka paljon kaloreita kulutti (aika*Treenimuoto)
        let caloriesBurned = intensityOptions[intensity][sport][0] * parseInt(trains, 10);
        //Määrittää arvot kun laittaa kokonaisuuteen
        const newEntry = {
            kcal: kcals,
            train: trains,
            intensity: intensity,
            sport: sport,
            caloriesBurned: caloriesBurned.toString()
        };

        // Lisää kokonaisuuteen
        addEntryToLocalStorage(newEntry);

        // Vie tälle sivulle
        window.location.href = 'summarypage.html';
        }
    }
}

function addEntryToLocalStorage(entry) { //Käytin tässä funktiossa chatGPT
// Hakee nykyisen datan tai sitten määrittää uuden
let existingEntries = localStorage.getItem('workoutEntries');
existingEntries = existingEntries ? JSON.parse(existingEntries) : [];

// Lisää uuden merkinnän
existingEntries.push(entry);

// Tallentaa localstorageen
localStorage.setItem('workoutEntries', JSON.stringify(existingEntries));
}

document.addEventListener('DOMContentLoaded', function() {  //Käytin tässä funktiossa chatGPT
    var storedEntries = localStorage.getItem('workoutEntries');
    var summaryElement = document.getElementById('summary');

    if (storedEntries && summaryElement) {
        // Pistää JSON ryhmiin
        var entries = JSON.parse(storedEntries);

        // Varmistaa että ei ole tyhjä ja hakee uusimman sisällön
        if (entries.length > 0) {
            var mostRecentEntry = entries[entries.length - 1]; // Viimeisin lisäys on uusin

            // Käyttää uusimman syötteen yhteenvedossa
            summaryElement.innerHTML = 'You did ' + mostRecentEntry.train + ' hours of ' + mostRecentEntry.sport+
                                        ', burning an estimated ' + mostRecentEntry.caloriesBurned + ' kcal.<br><br>'+
                                        'You consumed '+ mostRecentEntry.kcal + ' kcal'    ;
        } else {
            // Jos nyt ei ole lisätty mitään
            summaryElement.textContent = 'No entry data available. Please add an entry.';
        }
    }
});

var intensityOptions = { //Tässä ovat vetolaatikon sisältö ja niitten arvot
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
  window.onload = function() {  //Tästä kun valitsee sen ekan rivin niin se avaa sen toisen rivin vaihtoehdot
    var intensitySel = document.getElementById("intensity");
    var sportSel = document.getElementById("sport");
    for (var x in intensityOptions) {
      intensitySel.options[intensitySel.options.length] = new Option(x, x);
    }

    intensitySel.onchange = function() {
        

        sportSel.length = 1;
        
        for (var y in intensityOptions[this.value]) {
          sportSel.options[sportSel.options.length] = new Option(y, y);
        }
    }
}
document.addEventListener('DOMContentLoaded', function() { //Käytin tässä funktiossa chatGPT
    var storedEntries = localStorage.getItem('workoutEntries');
    var totalElement = document.getElementById('totality');

    if (storedEntries && totalElement) {
        // Pistää JSON-merkkijonon ryhmiin
        var entries = JSON.parse(storedEntries);

        // Alustaa muuttujat
        var totalHours = 0;
        var totalCaloriesBurned = 0;
        var totalKcalConsumed = 0;
        // Kattoo mitä aktiviteettei tulee
        var sportOccurrences = {};

        // Kattoo kaikki tulokset
        entries.forEach(function(entry) {
            totalHours += parseInt(entry.train, 10);
            totalCaloriesBurned += parseInt(entry.caloriesBurned, 10);
            totalKcalConsumed += parseInt(entry.kcal, 10);

            // Lisää aktiviteetin(sport) muuttuja sportOccurenciin
            if (sportOccurrences[entry.sport]) {
                sportOccurrences[entry.sport]++;
            } else {
                sportOccurrences[entry.sport] = 1;
            }
        });

        // Kattoo mikä laji ilmestyy eniten
        var favoriteSport = Object.keys(sportOccurrences).reduce(function(a, b) { return sportOccurrences[a] > sportOccurrences[b] ? a : b; }, '');

        // Tässä on datan kokonaisuus
        totalElement.innerHTML = 'Total hours you have worked out: ' + totalHours +
                                 '<br><br> Your favorite sport: ' + favoriteSport +
                                 '<br><br> Total calories burned: ' + totalCaloriesBurned +
                                 '<br><br> Total calories consumed: ' + totalKcalConsumed + 'kcal.<br>';
    } else {
        // Jos nyt ei sattumoisin lisätty mitään
        if (totalElement) {
            totalElement.textContent = 'No entry data available. Please add an entry.';
        }
    }
});



function mbrFormula() { //MBR Laskukaava
    //Hakee muuttujien arvot
    let weight = parseFloat(localStorage.getItem('Weight'));    
    let height = parseFloat(localStorage.getItem('Height')); 
    let age = parseInt(localStorage.getItem('Age'), 10); 
    // Tarkistaa vielä että jos ei nyt ole mitään lisätty
    if (!isNaN(weight) && !isNaN(height) && !isNaN(age)) {
        // Laskukaava
        return (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        // Jos nyt sattumoisin puuttuu jotain
        console.error("One or more values are missing from localStorage");
        return null;
    }
}

document.addEventListener('DOMContentLoaded', function() { //Tulostaa MBR tuloksen
    var mbrElement = document.getElementById('MBR');
    if (mbrElement) {

        let mbrValue = mbrFormula();
        if(mbrValue !==null){
        mbrElement.innerHTML = 'Your MBR(Metabolic rate) <br> according to your <br> age,height and weight.<br><br>' + mbrValue + ' kcal' ;
    }
    }
});

document.addEventListener('DOMContentLoaded', function() { //Tulostaa MBR tuloksen
    var mbrElement = document.getElementById('info3');
    if (mbrElement) {

        let mbrValue = mbrFormula();
        if(mbrValue !==null){
        mbrElement.innerHTML = 'MBR: ' + mbrValue + 'kcal'  ;
    }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var deleteButton = document.getElementById('del');

    if (deleteButton) {
        deleteButton.addEventListener('click', function() {
            // Poistaa kaiken
            localStorage.clear();

            // Vie takaisin alkuun
            window.location.href = 'frontpage.html';
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {  //Käytin tässä funktiossa chatGPT
    var storedEntries = localStorage.getItem('workoutEntries');
    var recentElement = document.getElementById('recent');

    if (storedEntries && recentElement) {
        // Pistää JSON ryhmiin
        var entries = JSON.parse(storedEntries);

        // Varmistaa että ei ole tyhjä ja hakee uusimman sisällön
        if (entries.length > 0) {
            var mostRecentEntry = entries[entries.length - 1]; // Viimeisin lisäys on uusin

            // Käyttää uusimman syötteen yhteenvedossa
            recentElement.innerHTML = mostRecentEntry.train + ' hours of ' + mostRecentEntry.sport+
                                        '<br> burning an estimated ' + mostRecentEntry.caloriesBurned + 'kcal.<br><br>'
                                        + 'You consumed ' + mostRecentEntry.kcal + 'kcal';
        } else {
            // Jos nyt ei ole lisätty mitään
            recentElement.textContent = 'No entry data available. Please add an entry.';
        }
    }
});

document.addEventListener('DOMContentLoaded', function() { 
    var enableEditButton = document.getElementById('enableEdit');
    if (enableEditButton) {
        enableEditButton.addEventListener('click', function() {
            // Enable fields
            document.getElementById('Name').disabled = false;
            

            // Optionally add the required attribute
            document.getElementById('Name').required = false;
            
            // Piilottaa napin niin on pakko päivittää tiedot jos painaa siitä
            enableEditButton.style.display = 'none';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() { 
    var enableEditButton = document.getElementById('enableEdit1');
    if (enableEditButton) {
        enableEditButton.addEventListener('click', function() {
            // Enable fields
            
            document.getElementById('Age').disabled = false;
            

            // Optionally add the required attribute
            
            document.getElementById('Age').required = true;
           
            // Piilottaa napin niin on pakko päivittää tiedot jos painaa siitä
            enableEditButton.style.display = 'none';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() { 
    var enableEditButton = document.getElementById('enableEdit2');
    if (enableEditButton) {
        enableEditButton.addEventListener('click', function() {
            // Enable fields
            
            document.getElementById('Weight').disabled = false;
            

            // Optionally add the required attribute
            
            document.getElementById('Weight').required = true;
           

            // Piilottaa napin niin on pakko päivittää tiedot jos painaa siitä
            enableEditButton.style.display = 'none';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() { 
    var enableEditButton = document.getElementById('enableEdit3');
    if (enableEditButton) {
        enableEditButton.addEventListener('click', function() {
            // Enable fields
            
            document.getElementById('Height').disabled = false;

            // Optionally add the required attribute
            
            document.getElementById('Height').required = true;

            // Piilottaa napin niin on pakko päivittää tiedot jos painaa siitä
            enableEditButton.style.display = 'none';
        });
    }
});


function paivita(event) { //Tämä tarkastaa ssyötteet ja sen sisällön
    event.preventDefault();// estää sivun päivittämistä
    //määrittää arvot
    let nameElement = document.getElementById("Name") ; 
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

        let elements = [ageElement, weightElement, heightElement, nameElement];
    let errors = [agesError, weightsError, heightsError, nameElement];
    elements.forEach(element => element.classList.remove("error"));
    errors.forEach(error => error.textContent = "");
    
        


        ageElement.classList.remove("error");
        weightElement.classList.remove("error");
        heightElement.classList.remove("error");
        agesError.textContent = "";
        weightsError.textContent = "";
        heightsError.textContent = "";

        // Ei saa olla yhtä suuri tai pienempi kuin 0
    if (!ageElement.disabled && (age === "" || Number(age) <= 0)) {
        ageElement.classList.add("error");
        agesError.textContent = "Please add a natural value";
        hasError = true;
        }
    
        // Ei saa olla yhtä suuri tai pienempi kuin 0
    if (!weightElement.disabled && (weight === "" || Number(weight) <= 0)) {
        weightElement.classList.add("error");
        weightsError.textContent = "Please add a natural value";
        hasError = true;
    }
        // Ei saa olla yhtä suuri tai pienempi kuin 0
    if (!heightElement.disabled && (height === "" || Number(height)) <= 0) {
        heightElement.classList.add("error");
        heightsError.textContent = "Please add a natural value";
        hasError = true;
    }


    

    if (!hasError) { //chatGPT hyödynnetty tässä. jos jotain kohtaa tai ei mitään päivitä niin säilyttää nykyset arvot
        let fieldsToUpdate = [
            { element: nameElement, key: "Name" },
            { element: ageElement, key: "Age" },
            { element: weightElement, key: "Weight" },
            { element: heightElement, key: "Height" }
        ];

        fieldsToUpdate.forEach(({ element, key }) => {
            if (!element.disabled && localStorage.getItem(key) !== element.value) {
                localStorage.setItem(key, element.value);
            }
        });


        window.location.href = 'secondpage.html';
        

    }

    }

}