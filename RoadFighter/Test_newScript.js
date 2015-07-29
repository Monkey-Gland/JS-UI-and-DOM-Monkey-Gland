var stage = new Kinetic.Stage({
    container: 'canvas',
    width: GAME_CONST.width,
    height:GAME_CONST.height
});

var layerMovingObjects = new Kinetic.Layer(),
    enemyCarsLayer = enemyCars.getLayer(),
    carLayer = myFighterCar.getLayer();

var rectSand = new Kinetic.Rect({
    x:0,
    y:0,
    width:GAME_CONST.width,
    height:GAME_CONST.height,
    fill:"DarkKhaki"
});

var rectRoad = new Kinetic.Rect({
	x: GAME_CONST.width/4,
	y: 0,
	width:GAME_CONST.width/2,
	height:GAME_CONST.height,
	fill: 'grey'
});

var rectGreen = new Kinetic.Rect({
	x: GAME_CONST.width/8,
	y: 0,
	width: 3*GAME_CONST.width/4,
	height: GAME_CONST.height,
	fill: 'green'
});

layerMovingObjects.add(rectSand);
layerMovingObjects.add(rectGreen);
layerMovingObjects.add(rectRoad);

//filling centre line boxes
for (var i = 0, cnt = GAME_CONST.height/(GAME_CONST.midLineHeight*2); i < cnt + 1; i+=1) {
	midLaneBoxes.push(
					new Kinetic.Rect({
						x: (GAME_CONST.width- GAME_CONST.midLineWidth)/2,
						y: i* 2* GAME_CONST.midLineHeight - 2* GAME_CONST.midLineHeight,
						width: GAME_CONST.midLineWidth,
						height: GAME_CONST.midLineHeight,
						fill:'white'
						})
					);	
}

for (var i = 0, len = midLaneBoxes.length; i < len; i+=1) {
	layerMovingObjects.add(midLaneBoxes[i]);
};	

//filling side lane boxes
for (var i = 0, cnt = GAME_CONST.height/GAME_CONST.sideLaneHeight; i < cnt + 2; i+=1) {
	if(i%2){
		sideLaneBoxes.push(
					new Kinetic.Rect({
						x: GAME_CONST.width/4 - GAME_CONST.sideLaneWidth,
						y: i* GAME_CONST.sideLaneHeight,
						width: GAME_CONST.sideLaneWidth,
						height: GAME_CONST.sideLaneHeight,
						fill:'black',
						shadowColor: 'black',
						shadowBlur: 10,
        				shadowOffset: {x:GAME_CONST.shadowDistance,y:GAME_CONST.shadowDistance},
        				shadowOpacity: 0.5
						})
		);
		sideLaneBoxes.push(
					new Kinetic.Rect({
						x: 3*GAME_CONST.width/4,
						y: i* GAME_CONST.sideLaneHeight,
						width: GAME_CONST.sideLaneWidth,
						height: GAME_CONST.sideLaneHeight,
						fill:'black',
						shadowColor: 'black',
						shadowBlur: 10,
        				shadowOffset: {x:GAME_CONST.shadowDistance,y:GAME_CONST.shadowDistance},
        				shadowOpacity: 0.5
						})
		);
	} else {
		sideLaneBoxes.push(
					new Kinetic.Rect({
						x: GAME_CONST.width/4 - GAME_CONST.sideLaneWidth,
						y: i* GAME_CONST.sideLaneHeight,
						width: GAME_CONST.sideLaneWidth,
						height: GAME_CONST.sideLaneHeight,
						fill:'white',
						shadowColor: 'black',
						shadowBlur: 10,
        				shadowOffset: {x:GAME_CONST.shadowDistance,y:GAME_CONST.shadowDistance},
        				shadowOpacity: 0.5
						})
		);
		sideLaneBoxes.push(
					new Kinetic.Rect({
						x: 3*GAME_CONST.width/4,
						y: i* GAME_CONST.sideLaneHeight,
						width: GAME_CONST.sideLaneWidth,
						height: GAME_CONST.sideLaneHeight,
						fill:'white',
						shadowColor: 'black',
						shadowBlur: 10,
        				shadowOffset: {x:GAME_CONST.shadowDistance,y:GAME_CONST.shadowDistance},
        				shadowOpacity: 0.5
						})
		);
	}				
}

for (var i = 0, len = sideLaneBoxes.length; i < len; i+=1) {
	layerMovingObjects.add(sideLaneBoxes[i]);
};	

//filling trees
var imageTree = new Image();
imageTree.src = 'images/Palm_Tree.png';

for (var i = 0, cnt = GAME_CONST.height/(GAME_CONST.treeRadius*2); i < cnt + 1; i+=1) {
	treeLeft = new Kinetic.Image({
			x: 5,
            y: i * 4 * GAME_CONST.treeRadius,
            image: imageTree,
            width: GAME_CONST.imageWidth,
            height: GAME_CONST.imageHeight,
            draggable: true
    });

    treeRight = new Kinetic.Image({
			x: GAME_CONST.width - GAME_CONST.imageWidth + 5,
            y: i * 4 * GAME_CONST.treeRadius,
            image: imageTree,
            width: GAME_CONST.imageWidth,
            height: GAME_CONST.imageHeight,
            draggable: true
    });


	trees.push(treeLeft);
	trees.push(treeRight);	
}

for (var i = 0, len = trees.length; i < len; i+=1) {
	layerMovingObjects.add(trees[i]);
};


var anim = new Kinetic.Animation(function(frame){
	
	var startY = midLaneBoxes[0].getY();
	
	if(startY >= 0){
		for (var i = 0, len = midLaneBoxes.length; i < len; i+=1) {
			var boxY = midLaneBoxes[i].getY(),
				currentBox = midLaneBoxes[i];
			currentBox.setY(boxY - 2* GAME_CONST.midLineHeight);
		}
	}

	for (var i = 0, len = midLaneBoxes.length; i < len; i+=1) {
		var rectMidLine = midLaneBoxes[i],
			newY = rectMidLine.getY() + speed;

		//console.log(startY);
		rectMidLine.setY(newY);
	}

	//move side lane logic
	var sideLaneFirstY = sideLaneBoxes[0].getY();

	if(sideLaneFirstY >= 0){
		for (var i = 0, len = sideLaneBoxes.length; i < len; i+=1) {
			var boxY = sideLaneBoxes[i].getY(),
				currentBox = sideLaneBoxes[i];
			currentBox.setY(boxY - 2 * GAME_CONST.sideLaneHeight);
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
			currentTree.setY(treeY - 4 * GAME_CONST.treeRadius);
		}
	}

	for (var i = 0, len = trees.length; i < len; i+=1) {
		var tree = trees[i],
			newY = tree.getY() + speed;

		tree.setY(newY);	
	}

},layerMovingObjects);

var carsList = enemyCars.cars;
var enemyCarsAnimation = enemyCars.animation;

var myCar = myFighterCar.car;
var playerCarAnimation = myFighterCar.animation;
playerCarAnimation.start();

enemyCarsAnimation.start();
stage.add(layerMovingObjects);
anim.start();
stage.add(carLayer);
stage.add(enemyCarsLayer);