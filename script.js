const theTimer = document.querySelector('.timer'); 
const testArea = document.querySelector('#test-area');
const testWrapper = document.querySelector('#test-wrapper');
const directions = document.querySelector('#directions');
var timer = [0,0,0,0};
var interval;
var timerRunning = false;

// leading zero in front of timer
function leadingZero(time){
  if(time <= 9){
    time = "0" + time;
  }
  return time;
}


// start function -> detects first keystroke
function start(){
   let textLength = testArea.value.length;
   if(textLength === 0 && !timerRunning) {
     timerRunning = true;
     interval = setInterval(runtimer, 10)
   }
}
