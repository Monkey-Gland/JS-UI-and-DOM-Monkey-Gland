var time = 0,
	score = 0,
	minutes, seconds, miliseconds,
	running = false,
	score = 0;

function startPause() {
    if (!running) {
        running = true;
        increment();
        document.getElementById('startPause').innerHTML = 'Pause';
    } else {
        running = false;
        document.getElementById('startPause').innerHTML = 'Resume';
    }
}

function reset() {
    running = false;
    time = 0;
    document.getElementById('startPause').innerHTML = "Start";
    document.getElementById('timer').innerHTML = "00:00:00";

}

function increment() {
    if (running) {
        setTimeout(function () {
            time += 1;
            minutes = Math.floor(time / 10 / 60);
            seconds = Math.floor(time / 10);
            miliseconds = time % 10;

            if (minutes < 10) {
                minutes = "0" + minutes;
            }

            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            document.getElementById('timer').innerHTML = minutes + ':' + seconds + ':' + "0" + miliseconds;
            if (seconds < 10) {
                progressBar(seconds | 0);
            } else {
                progressBar(seconds);
            }

            if (seconds % 5 == 0 && miliseconds == 0) {
                scoreAdd();
            }

            increment();
        }, 100);
    }
}

function scoreAdd() {
    score += 10;
    document.getElementById('score').innerHTML = score;
}

function progressBar(time) {
    var bar = document.getElementById('progressBar'),
		status = document.getElementById('status');

    status.innerHTML = time + "%";
    bar.value = time;

    var sim = setTimeout("progressBar(" + time + ")", 0);
    if (time == 100) {
        status.innerHTML = "100%";
        bar.value = 100;
        clearTimeout(sim);
        document.getElementById("finalMessage").innerHTML = "Finish";
    }
}

running = true;
increment();