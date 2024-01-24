Tehtävä 10.
  
var arr = [];
  //This will print out the numbers 15 times
  for (var i = 0; i < 15; i++) {
    // Random numbers from 1 to 100
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    arr.push(randomNumber);
  }
  //this will be displayed in the website
  document.write("<h1>Random Numbers (between 1 and 100):</h1>");
  document.write("<ul>");

  for (var j = 0; j < arr.length; j++) {
    document.write("<li>" + arr[j] + "</li>");
  }

  document.write("</ul>");
  //From here it will be in the console
console.log("Random Numbers (between 1 and 100):");


  for (var j = 0; j < arr.length; j++) {
    console.log(arr[j]);
  }