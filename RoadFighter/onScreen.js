function increment() {
    var distanceTraveled,
        averageSpeed,
        minutes,
        seconds,
        milliseconds;

    if (gameVariables.gameInProgress) {
        setTimeout(function () {
            document.getElementById('timerContainer').style.display = 'none';
            gameVariables.time += 1;
            minutes = Math.floor(gameVariables.time / 10 / 60);
            seconds = Math.floor(gameVariables.time / 10);
            milliseconds = gameVariables.time % 10;

            gameVariables.totalSpeed += GAME_CONST.speed;
            gameVariables.averageSpeed = gameVariables.totalSpeed / gameVariables.time;
            gameVariables.distanceTraveled = (gameVariables.averageSpeed * gameVariables.time) * GAME_CONST.distanceCoefficient;
            //console.log(gameVariables.distanceTraveled);

            if (minutes < 10) {
                minutes = "0" + minutes;
            }

            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            visualTimer.draw(gameVariables.time / 10, GAME_CONST.timeLimit, timerContainer);

            document.getElementById('timer').innerHTML = minutes + ':' + seconds + ':' + "0" + milliseconds;
            if (seconds < 10) {
                progressBar(gameVariables.distanceTraveled | 0);
            } else {
                progressBar(gameVariables.distanceTraveled);
            }
            //console.log(seconds + " " + GAME_CONST.timeLimit);

            if (seconds >= GAME_CONST.timeLimit) {
                stopGame();
            }

            increment();
        }, 100);
    }
}

function progressBar(distanceTraveled) {
    var bar = document.getElementById('progressBar');
    var status = document.getElementById('status');

    //status.innerHTML = ((distanceTraveled / GAME_CONST.distanceToFinish) * 100) + "%";
    bar.value = distanceTraveled;

    //al += 5;
    //var sim = setTimeout("progressBarSim(" + al + ")", 0);

    console.log(distanceTraveled + " " + GAME_CONST.distanceToFinish);
    if (distanceTraveled >= GAME_CONST.distanceToFinish) {
        //status.innerHTML = "100%";
        bar.value = GAME_CONST.timeLimit;
        //clearTimeout(sim);
        stopGame();
    }
}

window.addEventListener('keydown', function(escapeGame) {
    if (escapeGame.keyCode == 27) { //Escape
        stopGame();
        gameVariables.gameInProgress = false;
    }
});