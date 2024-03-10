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