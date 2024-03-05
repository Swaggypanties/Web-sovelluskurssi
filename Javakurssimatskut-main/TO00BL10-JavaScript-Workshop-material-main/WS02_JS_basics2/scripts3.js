
document.write('<img src="http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg">' );



const imageUrls =[
    "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
    "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
    "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg"
    ]; 
function getRandomImageUrl() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return imageUrls[randomIndex];
}

window.onload = function() {
    const randomImage = document.getElementById('randomImage');
    randomImage.src = getRandomImageUrl();
};