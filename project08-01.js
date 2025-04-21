"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Britney Amaro
      Date:   04/16/2025

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
//Create timer constructor function
function timer(min, sec) {
      this.minutes = min;
      this.seconds = sec;
      this.timeID = null;
}

//Add runPause method to timer prototype
timer.prototype.runPause = function(timer, minBox, secBox) {
      if (timer.timeID) {
            window.clearInterval(timer.timeID);
            timer.timeID = null;
      } else {
            timer.timeID = window.setInterval(function() {
                  countdown(timer, minBox, secBox);
            },   1000);
      }
};
//Add countdown function 
function countdown(timer, minBox, secBox) {
      if (timer.seconds > 0) {
          timer.seconds--;
      } else if (timer.minutes > 0) {
            timer.minutes--;
            timer.seconds = 59;
      } else {
            window.clearInterval(timer.timeID);
            timer.timeID = null;
      }
      minBox.value = timer.minutes;
      secBox.value = timer.seconds;
}

/*---------------Interface Code -----------------*/
//Define interface objects, create timer instance, and set up event handlers
/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

//create timer instance
const myTimer = new timer (minBox.value, secBox.value);

//Event handlers for input changes
minBox.onchange = function () {
      myTimer.minutes = minBox.value;
};
secBox.onchange = function () {
      myTimer.seconds = secBox.value;
};
//Event handler for run/pause button
runPauseTimer.onclick = function () {
     myTimer.runPause(myTimer, minBox, secBox);
};



