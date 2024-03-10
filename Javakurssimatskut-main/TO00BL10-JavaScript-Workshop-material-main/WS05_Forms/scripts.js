function laheta(event) {
    var mail = document.getElementById("email").value;
    var comments = document.getElementById("comment").value;


    
    if (mail.length > 15) {

        alert("Email length is too long");
    } else if (mail.length < 6) {
        alert ("Email length is too short")
    } else {
        alert("Email: " + mail)
    }
    


    if (comments.length > 50) {

        alert("The comment is too long keep it under 50 characters");
    } else if (comments.length < 50) {
        alert("Comment: " + comments);
    }

    
}