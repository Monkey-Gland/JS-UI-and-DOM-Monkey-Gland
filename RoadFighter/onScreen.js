function increment() {
    (function () {
        var bar = document.getElementById('progressBar');

        bar.max = GAME_CONST.distanceToFinish;
    }());

    if (gameVariables.gameInProgress) {
        setTimeout(function () {
            gameVariables.timeInSeconds += 0.1;

            gameVariables.totalSpeed += GAME_CONST.speed / 10;
            gameVariables.averageSpeed = gameVariables.totalSpeed / gameVariables.timeInSeconds;
            gameVariables.distanceTraveled = gameVariables.averageSpeed * gameVariables.timeInSeconds;

            visualTimer.draw(gameVariables.timeInSeconds, GAME_CONST.timeLimit, timerContainer);
            updateProgressBar(gameVariables.distanceTraveled);

            if (gameVariables.timeInSeconds >= GAME_CONST.timeLimit) {
                stopGame();
            }

            if (gameVariables.distanceTraveled + 47 >= GAME_CONST.distanceToFinish && !gameVariables.finishLineMoved) {
                movingBackground.resetFinishLine();
                gameVariables.finishLineMoved = true;
            }

            increment();
        }, 100);
    }
}

function updateProgressBar(distanceTraveled) {
    var bar = document.getElementById('progressBar');
    bar.value = distanceTraveled;

    if (distanceTraveled >= GAME_CONST.distanceToFinish) {
        bar.value = GAME_CONST.distanceToFinish;
        winGame();
    }
}