const theTimer = document.querySelector('.timer'); 
const testArea = document.querySelector('#test-area');
const testWrapper = document.querySelector('#test-wrapper');
const directions = document.querySelector('#directions').innerHTML;
const resetButton = document.querySelector('#reset');
var timer = [0,0,0]; // minutes, seconds, tenths of seconds
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
     interval = setInterval(runtimer, 10) // runs every 0.1 seconds
   }
}




// event listeners for start, spellcheck, and reset button
testArea.addEventListener('keypress', start, false);
testArea.addEventListener('keyup', spellCheck,false);
resetButton.addEventListener('click', reset,false);
