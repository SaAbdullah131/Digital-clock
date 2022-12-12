const hourElement =document.getElementById("hour");
const minuteElement=document.getElementById("minutes");
const secondsElement =document.getElementById("seconds");
const amPmElement =document.getElementById("amPm");

function updateClock(){
    let hour =new Date().getHours();
    let minutes=new Date().getMinutes();
    let seconds=new Date().getSeconds();
    let amPm="AM";
    if(hour>12){
        hour-=12;
        amPm="PM";
    }
    hour=hour<10?"0"+hour:hour;// tenary operator
    minutes=minutes<10?"0"+minutes:minutes;
    seconds=seconds<10?"0"+seconds:seconds;

    hourElement.innerText=hour;
    minuteElement.innerText=minutes;
    secondsElement.innerText=seconds;
    amPmElement.innerText=amPm;
    setTimeout(()=>{
        updateClock();
    },100)
}
updateClock();
