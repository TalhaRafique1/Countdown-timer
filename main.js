#! /usr/bin/env node
//Countdown Timer Project
//In this project, you will build a countdown timer using the data module.
//data module install command
//npm install data-fns
//Start coding step 1 :
import { differenceInSeconds } from "date-fns";
//Function for count down second 
function* countdownTimer(second) {
    //While loop
    while (second > 0) {
        yield second;
        second--;
    }
}
//step 2 : counter inilization
let timerIterator = countdownTimer(30);
//function to create a count down timer
function displayCountdown() {
    //value below 10
    let result = timerIterator.next();
    //if else condition apply
    if (!result.done) {
        // current date and time calls 
        const now = new Date();
        // calculate minutes in time 
        const countdownTimer = new Date(now.getTime() + (result.value * 1000));
        // calculate remaining seconds in time 
        const remainingSecond = differenceInSeconds(countdownTimer, now);
        console.log(`Remaining Seconds: ${remainingSecond}`);
        setTimeout(displayCountdown, 1000); // 1 second id equal to 1000 ms
    }
    else {
        // display result count down complete
        console.log("Countdown Complete!");
    }
}
// invoke
displayCountdown();
