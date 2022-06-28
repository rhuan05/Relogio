let secondsDiv = document.querySelector('.seconds');
let minutesDiv = document.querySelector('.minutes');
let hourDiv = document.querySelector('.hour');
let seconds = 0;
let minutes = 0;
let hour = 0;

function moreOneSecond(){
    if(seconds !== 360){
        seconds = seconds + 6;
        secondsDiv.style.setProperty('--seconds', seconds + 'deg');
    } else {
        if(minutes !== 360){
            seconds = 6;
            secondsDiv.style.setProperty('--seconds', seconds + 'deg');
            minutes = minutes + 6;
            minutesDiv.style.setProperty('--minutes', minutes + 'deg');
        } else {
            seconds = 6;
            secondsDiv.style.setProperty('--seconds', seconds + 'deg');
            minutes = minutes + 6;
            minutesDiv.style.setProperty('--minutes', minutes + 'deg');
            hour = hour + 6;
            hourDiv.style.setProperty('--hour', hour + 'deg');
        }
   }
}
setInterval(moreOneSecond, 1000);