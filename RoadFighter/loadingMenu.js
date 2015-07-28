function loadingMenuStart() {
    loadingScreen = document.getElementById('loadingMenu');
    loadingScreen.style.display = 'none';
    document.getElementById('canvas').style.display = 'block';
    document.getElementById('scoreContainer').style.display = 'block';
    document.getElementById('timerContainer').style.display = 'block';
    document.getElementById('progressContainer').style.display = 'block';
    running = false;
    time = 0;
    document.getElementById('startPause').innerHTML = "Start";
    document.getElementById('timer').innerHTML = "00:00:00";
    running = true;
    increment();
    initHourglass();
}

function loadingMenuInfo() {
    var infoCreateBy = document.getElementById('info');
    if (infoCreateBy.style.display === 'none') {
        infoCreateBy.style.display = 'block';
    } else {
        infoCreateBy.style.display = 'none';
    }
}