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
