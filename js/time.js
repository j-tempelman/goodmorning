/**
 * Created by Jelle on 16-2-2017.
 */
var textHours = document.getElementById('hours');
var textMinutes = document.getElementById('minutes');
var textSeconds = document.getElementById('seconds');
var textDaytime = document.getElementById('daytime');

function updateTime() {
    console.log(seconds++);
    if (seconds > 59) {
        seconds = 0;
        minutes++;
    }
    if (minutes > 59) {
        minutes = 0;
        hours++;
    }
    if (hours > 23) {
        hours = 0;
    }
    if (hours >= 0 && hours < 6)
        textDaytime.innerText = 'Goede Nacht!';

    if (hours >= 6 && hours < 12)
        textDaytime.innerText = 'Goede Morgen!';

    if (hours >= 12 && hours < 18)
        textDaytime.innerText = 'Goede Middag!';

    if (hours >= 18 && hours < 24)
        textDaytime.innerText = 'Goede Avond!';
}

function timeToString(timeNum){
    timeStr = timeNum.toString();
    if(timeStr.length < 2){
        timeStr = '0' + timeStr;
    }
    return timeStr;
}

function updateDisplay(){
    textHours.innerText = timeToString(hours);
    textMinutes.innerText = timeToString(minutes);
    textSeconds.innerText = timeToString(seconds);

}

function update(){
    updateTime();
    updateDisplay();
}

setInterval(update, 1000);