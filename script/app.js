var countDate = new Date("Mar 1, 2020 00:00:00").getTime();

function countdown(){
    let now = new Date().getTime();
    let gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let w = Math.floor((gap % (minute)) / (second));
    
    document.getElementById("day").innerHTML = d;
    document.getElementById("hour").innerHTML = h;
    document.getElementById("minute").innerHTML = m;
    document.getElementById("second").innerHTML = w;

}

setInterval(function(){
    countdown()
},1000);