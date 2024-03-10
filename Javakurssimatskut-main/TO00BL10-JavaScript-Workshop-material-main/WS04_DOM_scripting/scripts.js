document.getElementById('muuttuja').addEventListener('click', function() { // eka tehtävä
    var heading =  document.getElementById('kyltti');
    if (heading) {
        heading.textContent="modified heading!";
    }
});

document.getElementById('muuttuja2').addEventListener('click', function() { //Toka tehtävä
    var heading = document.getElementById('kyltti2');
    if (heading) {
        heading.style.fontSize = '24px';
        heading.style.fontStyle = 'italic';
        heading.style.color = 'purple';
        heading.style.backgroundColor = 'yellow';
    } 
});

document.getElementById('muuttuja3').addEventListener('click', function() { // kolmas tehtävä
    var para = document.getElementById('lorem');
    if (para) {
        para.style.fontStyle = 'italic';
        para.style.fontSize = '24px';
    }
});

function myFunction() { // neljäs tehtävä joka tulostaa viel kuvan siihen loppuun
    const para = document.createElement("p");
    const node = document.createTextNode('Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed posuere interdum sem. Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien. Mauris varius diam vitae arcu. Sed arcu lectus auctor vitae, consectetuer et venenatis eget velit.');
    para.appendChild(node);
    const img = document.createElement("img") //kuva tehtävän loppuun
    img.src = 'kuva/aboutme123.jpg';
    img.alt='e.t'
    img.width=100;
    img.height=100;
    img.addEventListener('mouseover', function() {
        this.style.border = '5px solid #ff0000'; 
    });

    
    img.addEventListener('mouseout', function() {
        this.style.border = 'none'; // Remove the border
    });

    para.appendChild(img);
    document.body.appendChild(para);
    document.getElementById("teksti").appendChild(para);
};

document.getElementById('muuttuja3').addEventListener('click', function() { // Tehtävä joka muuttaa taustan väriä
    var keho = document.getElementById('keho4');
    if (keho) {
        keho.style.backgroundColor = 'pink';
    }
});

document.getElementById('CheckboxGroup1_0').addEventListener('change', function(){ //tehtävä joka piilottaa laatikon


    var piiloon = document.getElementById('me');
    if (piiloon) {
        piiloon.style.display = 'none';
    }
});

document.getElementById('CheckboxGroup1_1').addEventListener('change', function(){ //tehtövö joka tuo laatikon esiin


    var esille = document.getElementById('me');
    if (esille) {
        esille.style.display = 'block';
    }
});

document.getElementById('CheckboxGroup1_2').addEventListener('change', function(){ //tehtävä joka laajentaa saman tekstin
    var surpriseElement = document.getElementById('surpise'); // Note: There's a typo in the id. It should match your HTML.
    if (surpriseElement) {
        surpriseElement.style.fontSize = '20px';
    }
});

document.getElementById('mySelect').addEventListener('change', function(){ //tehtävä joka tulostaa pop upin siitä autosta minkä valitsin
    var huomio = this.options[this.selectedIndex].text;

    alert('You selected: ' + huomio);
});

function reunat(x){ // tuo siihen auton kuvaan reunat kun laitan hiiren päälle
    x.style.border = "50px solid red";
};

function eiReunat(x){ // vie reunat pois kun otan hiiren pois päältä
    x.style.border = "none";
};

function paivita() {// päivittää aina kuvan siitä autosta minkä valitsen
    var select = document.getElementById("mySelect");
    var selectedOption = select.options[select.selectedIndex];
    var imageUrl = selectedOption.getAttribute('data-img-url');
    
    document.getElementById('carImage').src = imageUrl;
};

function changePosition() { // muuttaa auto kuvan sijaintia sivussa
    var imgDiv = document.getElementById('carImage');
    imgDiv.style.position ='relative';
    imgDiv.style.top = "500px";
};

let position = 0; // The initial position of the image
 let direction = 1; // The direction of movement: 1 for right, -1 for left
 const step = 20; // How many pixels the image should move per interval
 const maxWidth = document.body.clientWidth; // The maximum width of the screen or container

 function doMove() { // Tää liikuttaa auton kuvaa sivulta sivulle
    const imgDiv = document.getElementById('carImage');
    if (!imgDiv) return; // Exit if the element doesn't exist

    // Update the position
    position += step * direction;

    // Reverse direction if reaching the edges
    if (position <= 0 || position >= maxWidth - imgDiv.offsetWidth) {
        direction *= -1;
    }

    // Apply the new position
    imgDiv.style.left = position + 'px';
};

let opacity = 1; // Start opacity at 1
const fadeOutInterval = 250; // Match the interval set in the onclick handler


function fadeOut() { // tämä haalistaa auton kuvaa 1.0 -> 0
    const imgDiv = document.getElementById('carImage');
    if (!imgDiv) return;

    opacity -= 0.05;
    if (opacity <= 0) {
        opacity = 0;
        clearInterval(fading);
    }

    imgDiv.style.opacity = opacity;



};

function remove() { // poistaa kuvan
    var img = document.getElementById('carImage');
    if (img) {
        img.remove();
    }
};

function insertRows() { //Lisää rivin
    var table = document.getElementById("data").getElementsByTagName('tbody')[0];

    var row = table.insertRow(-1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    var name = document.getElementById("textfield").value; //hakee ne syötetyt arvot
    var position = document.getElementById("textfield2").value;
    var salary = document.getElementById("textfield3").value;

    cell1.innerHTML = name;
    cell2.innerHTML = position;
    cell3.innerHTML = salary;
};
