document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('button1');
    button.addEventListener('click', function() {
        const currentDate = new Date();
        const formattedDate = currentDate.toDateString();
        alert('you clicked me!' + formattedDate);

    });
});
function showTable() {
    document.write(`
    <table border="10">
        <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>$320,800</td>
            </tr>
            <tr>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>$170,750</td>
            </tr>
            <tr>
                <td>Ashton Cox</td>
                <td>Junior Technical Author</td>
                <td>$86,000</td>
            </tr>
            <tr>
                <td>Cedric Kelly</td>
                <td>Senior Javascript Developer</td>
                <td>$433,060</td>
            </tr>
            <tr>
                <td>Airi Satou</td>
                <td>Accountant</td>
                <td>$162,700</td>
            </tr>
        </tbody>
    </table>
    `);
}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('button2');
    button.addEventListener('click', showTable);
});

document.getElementById('button3').addEventListener('click', function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            alert("Latitude: " + latitude + "\nLongitude: " + longitude);
        }, function() {
            alert("Geolocation is not supported by this browser or permission was denied.");
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});
document.getElementById('harjotus2').addEventListener('mouseover', function() {
    alert("Stepped over by a mouse!");
});document.getElementById('harjotus2').addEventListener('mouseleave', function() {
    alert("Bye bye mouse!");
});

document.getElementById('textdata').placeholder = "Please enter your message here";
document.getElementById('textdata').addEventListener('focus', myfunction);
document.getElementById('textdata').addEventListener('keydown', myfunctions);
document.getElementById('textdata').addEventListener('keyup', myfunctionss);




function myfunction() {
    document.getElementById('textdata').style.backgroundColor = "red";
    document.getElementById('textdata').placeholder = "Please fill in the form with proper data";    
}
function myfunctions() {
    document.getElementById('textdata').style.backgroundColor = "green";
}
function myfunctionss() {
    document.getElementById('textdata').style.backgroundColor = "red";
}

document.getElementById('kentta').addEventListener('submit', function(event) {
    var textData = document.getElementById('textdata').value;
    if (textData.trim() === "") { // Check if textdata is empty or just whitespace
        alert("Please enter your message before submitting.");
        event.preventDefault(); // Prevent form from submitting
    }
});

document.getElementById('coordinates').addEventListener('mousemove', function(event) {
var x = event.clientX;
var y = event.clientY;
document.getElementById('coordinates').innerHTML = 'X:'+ x +',Y:'+y;
});
