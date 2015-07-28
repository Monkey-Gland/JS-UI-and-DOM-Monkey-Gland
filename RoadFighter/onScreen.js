var time = 0,
    score = 0,
    minutes, seconds, miliseconds,
    running = false,
    score = 0,
    currentSpeed = speed;

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

            increment();
        }, 100);
    }
}

function progressBar(al) {
    var bar = document.getElementById('progressBar');
    var status = document.getElementById('status');

    status.innerHTML = al + "%";
    bar.value = al;

    al++;
    var sim = setTimeout("progressBarSim(" + al + ")", 0);

    if (al == 100) {
        status.innerHTML = "100%";
        bar.value = 100;
        clearTimeout(sim);
        var finalMessage = document.getElementById('gameOver');
        finalMessage.style.display = 'inline';
        enemyCarsAnimation.stop();
        anim.stop();
        document.getElementById('timerContainter').style.dispay = 'none';
        document.getElementById('progressBar').stytle.display = 'none';
    }
}

window.addEventListener('keydown', function(escapeGame) {
    if (escapeGame.keyCode == 27) {//Escape
        anim.stop();
        enemyCarsAnimation.stop();
        document.getElementById('gameOver').style.display = 'block';
        document.getElementById('timer').style.dispay = 'none';
        document.getElementById('progressBar').style.display = 'none';
    }
});
running = true;
increment();