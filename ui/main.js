console.log('Loaded!');

//Change the test of the main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'New value';

//Move the image
var img = document.getElementById('madi');
img.onclick = function(){
    img.style.marginLeft = '100px';
};