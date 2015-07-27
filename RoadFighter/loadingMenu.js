function LoadingMenuStart() {
    loadingScreen = document.getElementById('loadingMenu');
    loadingScreen.style.display = 'none';
    document.getElementById('canvas').style.display = 'block';
    running = false;
    time = 0;
    document.getElementById('startPause').innerHTML = "Start";
    document.getElementById('timer').innerHTML = "00:00:00";
    running = true;
    increment();
}
function LoadingMenuInfo() {

    running = false;
    time = 0;
    document.getElementById('startPause').innerHTML = "Start";
    document.getElementById('timer').innerHTML = "00:00:00";
    running = true;
    increment();
}