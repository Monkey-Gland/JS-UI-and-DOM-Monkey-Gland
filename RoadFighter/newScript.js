var CONST = {
	width: 600,
	height: 600,
	midLineHeight: 50,
	midLineWidth: 10
};

var speed = 2,
	midLaneBoxes = [];

var stage = new Kinetic.Stage({
    container: 'canvas',
    width: CONST.width,
    height:CONST.height
});

var layerMovingObjects = new Kinetic.Layer(),
    enemyCarsLayer = enemyCars.getLayer();

var rect = new Kinetic.Rect({
    x:0,
    y:0,
    width:CONST.width,
    height:CONST.height,
    fill:"green"
});

var rectRoad = new Kinetic.Rect({
	x: CONST.width/4,
	y: 0,
	width:CONST.width/2,
	height:CONST.height,
	fill: 'grey'
});

layerMovingObjects.add(rect);
layerMovingObjects.add(rectRoad);


for (var i = 0, cnt = CONST.height/(CONST.midLineHeight*2); i < cnt + 1; i+=1) {
	midLaneBoxes.push(
					new Kinetic.Rect({
						x: (CONST.width- CONST.midLineWidth)/2,
						y: i* 2* CONST.midLineHeight - 2* CONST.midLineHeight,
						width: CONST.midLineWidth,
						height: CONST.midLineHeight,
						fill:'white'
						})
					);	
}
for (var i = 0, len = midLaneBoxes.length; i < len; i+=1) {
	layerMovingObjects.add(midLaneBoxes[i]);
};	

var anim = new Kinetic.Animation(function(frame){
	var startY = midLaneBoxes[0].getY();
	if(startY === 0){
		for (var i = 0, len = midLaneBoxes.length; i < len; i+=1) {
			var boxY = midLaneBoxes[i].getY(),
				currentBox = midLaneBoxes[i];
			currentBox.setY(boxY - 2* CONST.midLineHeight);
		}
	}

	for (var i = 0, len = midLaneBoxes.length; i < len; i+=1) {
		var rectMidLine = midLaneBoxes[i],
			newY = rectMidLine.getY() + speed;
		console.log(startY);
		rectMidLine.setY(newY);
	}	
},layerMovingObjects);

var enemyCarsAnimation = new Kinetic.Animation(enemyCars.animationFunction, enemyCarsLayer);

var carLeyer = new Kinetic.Layer();

var imageObj = new Image();
imageObj.onload = function() {
	var myCar = new Kinetic.Image({
		x: CONST.width/2 + ((CONST.width/4)/3),
		y: CONST.height/1.4,
		image: imageObj,
		width: 80,
		height: 140,
		draggable: true
	});

	// add the shape to the layer
	carLeyer.add(myCar);

	// add the layer to the stage
	stage.add(carLeyer);

	window.addEventListener('keydown', function(moveCar) {
		if (moveCar.keyCode == 37) {//Left Arrow Key
               if(myCar.x() > CONST.width/4){
				   myCar.x(myCar.x() - 5);
			   }
		}

		if (moveCar.keyCode == 39) {//Right Arrow Key
			if((myCar.x()+ myCar.width()) < (CONST.width/2 + CONST.width/4)){

				myCar.x(myCar.x() + 5);
			}

		}
		stage.draw();
	});
};
imageObj.src = 'images/SimpleBlueCarTopView.png';

window.addEventListener('keydown', function(speedChange) {
	if (speedChange.keyCode == 38){ //Up Arrow Key

		speed+=10;
	}
});


stage.add(layerMovingObjects);
stage.add (enemyCarsLayer);
anim.start();
enemyCarsAnimation.start();
