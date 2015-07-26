var CONST = {
	width: 600,
	height: 600,
	midLineHeight: 50,
	midLineWidth: 10,
	sideLaneWidth: 10,
	sideLaneHeight: 20,
	treeRadius:25
};

var speed = 2,
	midLaneBoxes = [],
	sideLaneBoxes = []
	trees = [];

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

//filling centre line boxes
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

//filling side lane boxes
for (var i = 0, cnt = CONST.height/CONST.sideLaneHeight; i < cnt + 1; i+=1) {
	if(i%2){
		sideLaneBoxes.push(
					new Kinetic.Rect({
						x: CONST.width/4 - CONST.sideLaneWidth,
						y: i* CONST.sideLaneHeight,
						width: CONST.midLineWidth,
						height: CONST.midLineHeight,
						fill:'black'
						})
		);
		sideLaneBoxes.push(
					new Kinetic.Rect({
						x: 3*CONST.width/4,
						y: i* CONST.sideLaneHeight,
						width: CONST.midLineWidth,
						height: CONST.midLineHeight,
						fill:'black'
						})
		);
	} else {
		sideLaneBoxes.push(
					new Kinetic.Rect({
						x: CONST.width/4 - CONST.sideLaneWidth,
						y: i* CONST.sideLaneHeight,
						width: CONST.midLineWidth,
						height: CONST.midLineHeight,
						fill:'white'
						})
		);
		sideLaneBoxes.push(
					new Kinetic.Rect({
						x: 3*CONST.width/4,
						y: i* CONST.sideLaneHeight,
						width: CONST.midLineWidth,
						height: CONST.midLineHeight,
						fill:'white'
						})
		);
	}					
}
for (var i = 0, len = sideLaneBoxes.length; i < len; i+=1) {
	layerMovingObjects.add(sideLaneBoxes[i]);
};	

//filling trees
for (var i = 0, cnt = CONST.height/(CONST.treeRadius*2); i < cnt + 1; i+=1) {
	trees.push(
				new Kinetic.Circle({
					x: CONST.height/10,
					y: i * 4 * CONST.treeRadius,
					radius: CONST.treeRadius,
					fill:'darkgreen',
					stroke: 'black'
				})
	);

	trees.push(
				new Kinetic.Circle({
					x: 9 * CONST.height/10,
					y: i * 4 * CONST.treeRadius,
					radius: CONST.treeRadius,
					fill:'darkgreen',
					stroke: 'black'
				})
	);	
}
for (var i = 0, len = trees.length; i < len; i+=1) {
	layerMovingObjects.add(trees[i]);
};


var anim = new Kinetic.Animation(function(frame){
	var startY = midLaneBoxes[0].getY();
	//move centre line logic
	if(startY >= 0){
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

	//move side lane logic
	var sideLaneFirstY = sideLaneBoxes[0].getY();

	if(sideLaneFirstY >= 0){
		for (var i = 0, len = sideLaneBoxes.length; i < len; i+=1) {
			var boxY = sideLaneBoxes[i].getY(),
				currentBox = sideLaneBoxes[i];
			currentBox.setY(boxY - CONST.sideLaneHeight);
		}
	}

	for (var i = 0, len = sideLaneBoxes.length; i < len; i+=1) {
		var rectSideLane = sideLaneBoxes[i],
			newY = rectSideLane.getY() + speed;

		rectSideLane.setY(newY);	
	}

	//move trees logic
	var treeFirstY = trees[0].getY();

	if(treeFirstY >= 0){
		for (var i = 0, len = trees.length; i < len; i+=1) {
			var treeY = trees[i].getY(),
				currentTree = trees[i];
			currentTree.setY(treeY - 4 * CONST.treeRadius);
		}
	}

	for (var i = 0, len = trees.length; i < len; i+=1) {
		var tree = trees[i],
			newY = tree.getY() + speed;

		tree.setY(newY);	
	}

},layerMovingObjects);

var carsList = enemyCars.cars;
var enemyCarsAnimation = new Kinetic.Animation(function(frame){
    // TODO Try to move the whole function to the module
    for (i = 0, len = carsList.length; i < len; i += 1) {
        var checkedCar = carsList[i];

        //TODO Check if cars get clustered with time because of smaller random range
        if (checkedCar.getY() > CONST.height) {
            // TODO Move randomization of car position to module
            var randomY = (600 + (Math.random() * 3400)) * -1,
                randomX = 150 + (Math.random() * 300);

            checkedCar.setX(randomX);
            checkedCar.setY(randomY);
        }
    }

    for (i = 0, len = carsList.length; i < len; i += 1) {
        var currentCar = carsList[i],
            currentY = currentCar.getY(),
            newY = currentY + 2;

        currentCar.setY(newY);
    }
}, enemyCarsLayer);

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