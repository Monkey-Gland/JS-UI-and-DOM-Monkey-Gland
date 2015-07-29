var stage = new Kinetic.Stage({
    container: 'canvas',
    width: CONST.width,
    height:CONST.height
});

var staticLayer = staticBackground.getLayer(),
	movingBackgroundLayer = movingBackground.layer,
    enemyCarsLayer = enemyCars.getLayer();

var carsList = enemyCars.cars;
var enemyCarsAnimation = enemyCars.animation;
var movingBackgroundAnimation = movingBackground.animation;

enemyCarsAnimation.start();
movingBackgroundAnimation.start();

stage.add(staticLayer);
stage.add(movingBackgroundLayer);
stage.add (enemyCarsLayer);