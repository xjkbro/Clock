

function doTime() {
    const fullDate = new Date();
    const backgroundImg = document.getElementById('bg');
    let hour = fullDate.getHours();
    let minute = fullDate.getMinutes();
    let second = fullDate.getSeconds();


    if (hour < 10)
        hour = '0' + hour;
    if (minute < 10)
        minute = '0' + minute;
    if (second < 10)
        second = '0' + second;

    if (hour < 18 && hour > 6) {
        backgroundImg.style.backgroundImage = "url('assets/day.png')";
        backgroundImg.style.backgroundSize = "cover";
    }
    else {
        backgroundImg.style.backgroundImage = "url('assets/night.jpg')";
        backgroundImg.style.backgroundSize = "cover";

    }


    const hour_div = document.getElementById('hour');
    const min_div = document.getElementById('minute');
    const sec_div = document.getElementById('second');

    hour_div.innerHTML = hour + ':';
    min_div.innerHTML = minute + ':';
    sec_div.innerHTML = second;

}
setInterval(doTime, 1000);