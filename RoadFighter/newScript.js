var stage = new Kinetic.Stage({
    container: 'canvas',
    width: GAME_CONST.width,
    height:GAME_CONST.height
}),
    enemyCarsAnimation = enemyCars.animation,
    movingBackgroundAnimation = movingBackground.animation,
    carAnimation = myFighterCar.animation;
    
function startGame() {
    var staticBackgroundLayer = staticBackground.layer,
    	movingBackgroundLayer = movingBackground.layer,
        enemyCarsLayer = enemyCars.layer,
        carLayer = myFighterCar.layer;

    enemyCars.repositionCars(enemyCars.cars);
    myFighterCar.resetCar();

    stage.add(staticBackgroundLayer);
    stage.add(movingBackgroundLayer);
    stage.add(enemyCarsLayer);
    stage.add(carLayer);

    enemyCarsAnimation.start();
    movingBackgroundAnimation.start();
    carAnimation.start();
}

function stopGame() {
    document.getElementById('canvas').style.display = 'none';
    document.getElementById('loadingMenu').style.display = 'block';
    document.getElementById('gameOver').style.display = 'inline-block';
    document.getElementById('startBotton').textContent = 'TRY AGAIN';
    document.getElementById('infoBotton').style.display = 'none';

    running = false;
    enemyCarsAnimation.stop();
    movingBackgroundAnimation.stop();
    carAnimation.stop();
}
