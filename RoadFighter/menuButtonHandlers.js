function startButtonHandler() {
    var loadingScreen = document.getElementById('loadingMenu');
    loadingScreen.style.display = 'none';

    document.getElementById('gameOver').style.display = 'none';
    document.getElementById('finalMessage').style.display = 'none';
    document.getElementById('timer-container').style.display = 'block';
    document.getElementById('canvas').style.display = 'inline-block';
    document.getElementById('progressContainer').style.display = 'inline-block';

    gameVariables.timeInSeconds = 0;
    gameVariables.totalSpeed = 0;
    gameVariables.gameInProgress = true;
    movingBackground.resetFinishLine();

    increment();
    startGame();
}

function creditsButtonHandler() {
    var infoCreateBy = document.getElementById('info');
    if (infoCreateBy.style.display === 'none') {
        infoCreateBy.style.display = 'block';
    } else {
        infoCreateBy.style.display = 'none';
    }
}