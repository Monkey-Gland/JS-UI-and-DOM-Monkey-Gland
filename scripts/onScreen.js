function increment() {
    var minutes,
        seconds,
        milliseconds;

    if (gameVariables.gameInProgress) {
        setTimeout(function () {
            document.getElementById('timerContainer').style.display = 'none';
            gameVariables.time += 1;
            minutes = Math.floor(gameVariables.time / 10 / 60);
            seconds = Math.floor(gameVariables.time / 10);
            milliseconds = gameVariables.time % 10;

            if (minutes < 10) {
                minutes = "0" + minutes;
            }

            if (seconds < 10) {
                seconds = "0" + seconds;
            }


            visualTimer.draw(gameVariables.time, 1000, timerContainer);

            document.getElementById('timer').innerHTML = minutes + ':' + seconds + ':' + "0" + milliseconds;
            if (seconds < 10) {
                progressBar(seconds | 0);
            } else {
                progressBar(seconds);
            }

            if (seconds > 99) {
                stopGame();
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

    al += 5;
    //var sim = setTimeout("progressBarSim(" + al + ")", 0);

    if (al == 100) {
        status.innerHTML = "100%";
        bar.value = 100;
        clearTimeout(sim);
        stopGame();
    }
}

window.addEventListener('keydown', function(escapeGame) {
    if (escapeGame.keyCode == 27) { //Escape
        stopGame();
        gameVariables.gameInProgress = false;
    }
});