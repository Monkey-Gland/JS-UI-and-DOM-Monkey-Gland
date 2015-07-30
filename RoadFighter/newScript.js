var stage = new Kinetic.Stage({
    container: 'canvas',
    width: GAME_CONST.width,
    height:GAME_CONST.height
    }),
    enemyCarsAnimation = enemyCars.animation,
    movingBackgroundAnimation = movingBackground.animation,
    carAnimation = myFighterCar.animation,
    speedAnimation = speedometer.animation,
    timerContainer = document.getElementById("clock-elapsed");

function startGame() {
    var staticBackgroundLayer = staticBackground.layer,
    	movingBackgroundLayer = movingBackground.layer,
        enemyCarsLayer = enemyCars.layer,
        carLayer = myFighterCar.layer,
    viewSpeedometer = speedometer.layer;

    enemyCars.repositionCars(enemyCars.cars);
    myFighterCar.resetCar();

    stage.add(staticBackgroundLayer);
    stage.add(movingBackgroundLayer);
    stage.add(enemyCarsLayer);
    stage.add(carLayer);
    stage.add(viewSpeedometer);

    enemyCarsAnimation.start();
    movingBackgroundAnimation.start();
    carAnimation.start();
    speedAnimation.start();
}

function stopGame() {
    document.getElementById('canvas').style.display = 'none';
    document.getElementById('infoBotton').style.display = 'none';
    document.getElementById('timer-container').style.display = 'none';
    document.getElementById('loadingMenu').style.display = 'inline-block';
    document.getElementById('gameOver').style.display = 'block';
    document.getElementById('startBotton').textContent = 'TRY AGAIN';

    gameVariables.gameInProgress = false;
    enemyCarsAnimation.stop();
    movingBackgroundAnimation.stop();
    carAnimation.stop();
    speedAnimation.stop();
}