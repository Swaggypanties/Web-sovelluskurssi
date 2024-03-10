function laheta(event) {
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

    if (email.value === "") {
        email.classList.add("error");
        emailError.textContent = "Please enter your email address.";
        hasError = true;
    }

    if (email.value === "") {
        email.classList.add("error");
        emailError.textContent = "Please enter your email address.";
        hasError = true;
    }
    
    if (mail.length > 15) {
        alert("Email length is too long");
    } else if (mail.length < 6) {
        alert ("Email length is too short")
    } else {
        alert("Email: " + mail)
    }
    

    if (comments === "") {
        alert("Please add a comment");
    } else if (comments.length > 50) {
        alert("The comment is too long keep it under 50 characters");
    } else {
        alert("Comment: " + comments)
    }

    if (comment.value === "") {
        comment.classList.add("error");
        commentError.textContent = "Please add a comment.";
        hasError = true;
    } else if (comment.value.length > 50) {
        comment.classList.add("error");
        commentError.textContent = "The comment is too long, keep it under 50 characters.";
        hasError = true;
    }

    
}