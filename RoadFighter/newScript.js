var stage = new Kinetic.Stage({
    container: 'canvas',
    width: CONST.width,
    height:CONST.height
});

var staticBackgroundLayer = staticBackground.layer,
	movingBackgroundLayer = movingBackground.layer,
    enemyCarsLayer = enemyCars.layer;

stage.add(staticBackgroundLayer);
stage.add(movingBackgroundLayer);
stage.add (enemyCarsLayer);

var carsList = enemyCars.cars;

var enemyCarsAnimation = enemyCars.animation,
    movingBackgroundAnimation = movingBackground.animation;

enemyCarsAnimation.start();
movingBackgroundAnimation.start();