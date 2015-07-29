function loadingMenuStart() {
    loadingScreen = document.getElementById('loadingMenu');
    loadingScreen.style.display = 'none';
    document.getElementById('canvas').style.display = 'block';
    //document.getElementById('timerContainer').style.display = 'block';
    document.getElementById('progressContainer').style.display = 'block';
    gameVariables.time = 0;
    //document.getElementById('timer').innerHTML = "00:00:00";
    gameVariables.gameInProgress = true;

    increment();
    startGame();
}

function loadingMenuInfo() {
    var infoCreateBy = document.getElementById('info');
    if (infoCreateBy.style.display === 'none') {
        infoCreateBy.style.display = 'block';
    } else {
        infoCreateBy.style.display = 'none';
    }
}