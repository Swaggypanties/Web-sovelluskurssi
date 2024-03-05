let text;
if (confirm("Are you a student?") == true) {
  window.location.href = "welcome.html";
} else {
    window.location.href = "away.html";
}
document.getElementById("erisivu").innerHTML = text;