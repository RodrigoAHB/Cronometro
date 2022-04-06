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
    // create div
    const division = document.createElement('div');
    //add class
    division.className = "laps";
    document.body.appendChild(division)

    start.onclick = function () {
        clearInterval(interval);
        interval = setInterval(addTens, 10)
    }

    stop.onclick = function() {
        clearInterval(interval);
    }

    lap.onclick = function() {
        clearInterval(interval);
        const p = document.createElement("p");
        // add text
        p.innerHTML = `${appendMinutes.textContent} : ${appendSeconds.textContent} : ${appendTens.textContent}`;
        document.body.appendChild(division).appendChild(p);
        interval = setInterval(addTens, 10);
    }

    reset.onclick = function() {
        clearInterval(interval)
        tens = "00";
        seconds = "00";
        minutes = "00";
        appendTens.innerHTML = tens;
        appendMinutes.innerHTML = minutes;
        appendSeconds.innerHTML = seconds;
        division.remove();
        location.reload();
    }

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


