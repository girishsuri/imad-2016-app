console.log('Loaded!');

//Change the test of the main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'New value';

//Move the image
var img = document.getElementById('madi');
function moveRight() {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight, 100);
};
//img.onclick = function(){
  //  var interval = setInterval(moveRight, 100)
   // img.style.marginLeft = '100px';
//};