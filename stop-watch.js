let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let interval = null;
function watchStart() {
  if (interval) {
    return;
  } 
  interval = setInterval(() => {
    seconds++;  
    if (seconds == 60) {
      seconds = 0;
      minutes++;  
      if (minutes == 60) {
        minutes = 0;
        hours++;  
      }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    displayTime.innerHTML = h + ":" + m + ":" + s;
  } , 1000);
}
function watchStop() {
  clearInterval(interval);
  interval = null;
}
function watchReset() {
  watchStop();
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
}
