var stage = new Kinetic.Stage({
    container: 'canvas',
    width: GAME_CONST.width,
    height:GAME_CONST.height
});

var staticBackgroundLayer = staticBackground.layer,
	movingBackgroundLayer = movingBackground.layer,
    enemyCarsLayer = enemyCars.layer,
    carLayer = myFighterCar.layer;

stage.add(staticBackgroundLayer);
stage.add(movingBackgroundLayer);
stage.add (enemyCarsLayer);
stage.add(carLayer);

var carsList = enemyCars.cars;

var enemyCarsAnimation = enemyCars.animation,
    movingBackgroundAnimation = movingBackground.animation,
    carAnimation = myFighterCar.animation;

enemyCarsAnimation.start();
movingBackgroundAnimation.start();
carAnimation.start();