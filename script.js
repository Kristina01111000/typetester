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

// run the timer
function runTimer(){
  let currentTime = leadingZero(timer[0]) + ':' + leadingZero(timer[1]) + ':' +leadingZero(timer[2]);
  timer[3]++;
  theTimer.innerHTML = currentTime;
  // change the array values
  timer[0] = Math.floor((timer[3] / 100) / 60); // hours
  timer[1] = Math.floor((timer[3] / 100) - timer[0] * 60); // minutes
  timer[2] = Math.floor((timer[3]) - (timer[0] * 100 * 60) - (timer[1]*100)); // seconds
}

// Match the test entered with the text on the page
function spellCheck(){
  let textEntered = testArea.value;
  let originTextMatch = theText.substring(0,textEntered.length);

  // if they match stop the clock and change the border color
  if (textEntered == directions){
    clearInterval(interval);
    testWrapper.style.borderColor = "#429890";
  } else {
    // if they match at char level change the border color
    if (testEntered == textMatch)
      testWrapper.style.borderColor = "#429890";
  }
}

// start function -> detects first keystroke
function start(){
   let textLength = testArea.value.length;
   if(textLength === 0 && !timerRunning) {
     timerRunning = true;
     interval = setInterval(runtimer, 10) // runs every 0.1 seconds
   }
}
// resets everything when button is clicked
function reset() {
  clearInterval(interval);
  interval = null;
  timer = [0,0,0,0]
  timerRunning = false;
  testArea.value = '';
  theTimer.innerHTML = "00:00:00";
  testWrapper.style.borderColor = "grey";
}


// event listeners for start, spellcheck, and reset button
testArea.addEventListener('keypress', start, false);
testArea.addEventListener('keyup', spellCheck,false);
resetButton.addEventListener('click', reset,false);
