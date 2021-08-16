
// top Heading animation

var headersToAnimate = ["Hi!", "Hola!","Ciao!","Privet!","Hallå!"];
var startReversAnimationAfter = 500; //ms

function reverseAnimation(headerIndex){
  var i = headersToAnimate[headerIndex].length -1, delay = 15;
  for (; i >= 0 ; i--, delay++) {
    let string = headersToAnimate[headerIndex].substr(0, i);
    setTimeout('document.getElementById("Header").innerHTML = \'' + string + '\';', 100 * delay);
  }
  
   setTimeout(function(){ animateHeaders(headerIndex + 1)}, 100 * delay + startReversAnimationAfter);
}
function animateHeaders(headerIndex){
  var i =0;
  if(headerIndex ==  headersToAnimate.length){
    headerIndex = 0;
  }
  for (; i < headersToAnimate[headerIndex].length; i++) {
    let string = headersToAnimate[headerIndex][i]
    setTimeout('document.getElementById("Header").innerHTML += \'' + string + '\';', 100 * i);
  }
 
 setTimeout(function(){ reverseAnimation(headerIndex)}, 100 * i + startReversAnimationAfter);
}

animateHeaders(0)
 

// open and Close Menu 

const menuBtn = document.getElementById('menu-btn')
   close1 = document.querySelector('ul')
    x = document.getElementById('m-dis');
menuBtn.addEventListener('click', function(){
  
 
 if (x.style.display === 'block') {
   x.style.display ='none';
 } else {
   x.style.display = "block";
 }
});
  
close1.addEventListener('click', () =>{
x.style.display = 'none'
});

