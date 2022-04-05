// Event Listeners
window.onload = () => {
    let minutes = 00;
    let seconds = 00;
    let tens= 00;
    const appendMinutes = document.getElementById('minutes');
    const appendSeconds = document.getElementById('seconds');
    const appendTens = document.getElementById('tens');
    const start = document.querySelector('.start');
    const stop = document.querySelector('.stop');
    const lap = document.querySelector('.lap');
    const reset = document.querySelector('.reset');
    let interval;

    start.onclick = function () {
        setInterval(addTens, 10)
        function addTens () {
            tens++
            if (tens <= 9) {
                appendTens.innerHTML = "0" + tens;
            }
            if (tens > 9) {
                appendTens.innerHTML = tens;
            }
            if (tens > 99){
                tens = 0;
                seconds++;
                appendSeconds.innerHTML = "0" + seconds;
                if (seconds > 9) {
                    appendSeconds.innerHTML = seconds;
                }
                if (seconds == 60) {
                    seconds = 00;
                    minutes++
                    appendMinutes.innerHTML = '0' + minutes
                }
            }   
        }
    }

}


