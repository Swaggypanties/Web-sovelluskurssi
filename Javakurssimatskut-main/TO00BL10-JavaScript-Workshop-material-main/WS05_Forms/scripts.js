function laheta(event) {   // Tämä tarkastaa ssyötteet ja sen sisällön

    event.preventDefault(); //estää sivun päivittämistä
    var mail = document.getElementById("email").value;
    var comments = document.getElementById("comment").value;

    let email = document.getElementById("email");
    let comment = document.getElementById("comment");
    let emailError = document.getElementById("email-error");
    let commentError = document.getElementById("comment-error");

    email.classList.remove("error");
    comment.classList.remove("error");
    emailError.textContent = "";
    commentError.textContent = "";

    let hasError = false;

    if (email.value === "") {  //Jos tyhjä syöte niin antaa tämän
        email.classList.add("error");
        emailError.textContent = "Please enter your email address.";
        hasError = true;
    }else if (mail.length > 15) { // jos syötteessö on enemmän kuin 15 merkkiä niin tämä
        email.classList.add("error");
        emailError.textContent = "Email length is too long";
        hasError = true;;
    } else if (mail.length < 6) { //jos syötteessö on liian vähän merkkejä
        email.classList.add("error");
        emailError.textContent = "Email length is too short";
        hasError = true;
    } else { //  Jos syöte on oikein syötetty
        alert("Email: " + mail)
    }
    

    

    if (comment.value === "") { //Jos kommentti syöte on tyhjä
        comment.classList.add("error");
        commentError.textContent = "Please add a comment.";
        hasError = true;
    } else if (comment.value.length > 50) { //Jos kommentti syötteessö on liikaa merkkejä
        comment.classList.add("error");
        commentError.textContent = "The comment is too long, keep it under 50 characters.";
        hasError = true;
    }else { //Jos syöte on oikein
        alert("Comment: " + comments)
    }

    
}

function laske(){
    var type = document.getElementById("type").value;
    var vuosi = parseInt(document.getElementById("years").value);
    var prices = {
        basic: 10,
        premium: 15,
        gold: 20,
        platinum: 25
    };

    var hinta = prices[type];

    var totalcost = hinta * vuosi;

    

    if (vuosi > 1 && vuosi < 5){
        totalcost *= 0.8;
    }else if (vuosi >= 5){
        totalcost=totalcost * 0.8 - 5   ;
        alert("Thank you for joining more than 5 years! Here is a 5$ discount ")
        
        
    }

    document.getElementById("cost").value = "$" + totalcost.toFixed(2);

    console.log("Hinta:", hinta); // Nämä tarkastaa ettän toimiiko se koodi oikeasti
    console.log("Vuosi:", vuosi); 
    console.log("Total cost:", totalcost); 

    return false;

}

document.getElementById("submit").addEventListener("click",function(event){
    event.preventDefault();
    laske();
});

