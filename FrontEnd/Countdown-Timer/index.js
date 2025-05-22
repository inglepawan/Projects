const daysEl =document.getElementById("days");
const hoursEl =document.getElementById("hours");
const minutesEl =document.getElementById("minutes");
const secondsEl =document.getElementById("seconds");

const endDate = "30 Sep 2025";

function countdown(){
    const conclusionDate = new Date(endDate);
    const currentDate = new Date();

    const totalSeconds = (conclusionDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;

}

countdown();

setInterval(countdown, 1000);
