const body = document.body
const div = document.createElement("div")

div.innerHTML = '<em><strong>"If I had nine hours to chop down a tree, I\'d spend the first six sharpening my ax."</strong> <br /> -- Abraham Lincoln</em></p>'

const repeatCount = 50;

for (let i = 0; i < repeatCount; i++) {
    body.append(div.cloneNode(true));
}
const userAgent = navigator.userAgent;

if (userAgent.includes("Mozilla")) {
    window.location.href = "http://www.mozilla.org";
} 
if (userAgent.includes("Chrome")) {
   
    window.location.href = "https://www.youtube.com";
}
