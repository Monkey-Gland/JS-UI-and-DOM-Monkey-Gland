var stage = new Kinetic.Stage({
    container: 'canvas',
    width: CONST.width,
    height:CONST.height
});

var layerMovingObjects = new Kinetic.Layer(),
    enemyCarsLayer = enemyCars.getLayer();

var rectSand = new Kinetic.Rect({
    x:0,
    y:0,
    width:CONST.width,
    height:CONST.height,
    fill:"DarkKhaki"
});

var rectRoad = new Kinetic.Rect({
	x: CONST.width/4,
	y: 0,
	width:CONST.width/2,
	height:CONST.height,
	fill: 'grey'
});

var rectGreen = new Kinetic.Rect({
	x: CONST.width/8,
	y: 0,
	width: 3*CONST.width/4,
	height: CONST.height,
	fill: 'green'
});

layerMovingObjects.add(rectSand);
layerMovingObjects.add(rectGreen);
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
for (var i = 0, cnt = CONST.height/CONST.sideLaneHeight; i < cnt + 2; i+=1) {
	if(i%2){
		sideLaneBoxes.push(
					new Kinetic.Rect({
						x: CONST.width/4 - CONST.sideLaneWidth,
						y: i* CONST.sideLaneHeight,
						width: CONST.sideLaneWidth,
						height: CONST.sideLaneHeight,
						fill:'black',
						shadowColor: 'black',
						shadowBlur: 10,
        				shadowOffset: {x:CONST.shadowDistance,y:CONST.shadowDistance},
        				shadowOpacity: 0.5
						})
		);
		sideLaneBoxes.push(
					new Kinetic.Rect({
						x: 3*CONST.width/4,
						y: i* CONST.sideLaneHeight,
						width: CONST.sideLaneWidth,
						height: CONST.sideLaneHeight,
						fill:'black',
						shadowColor: 'black',
						shadowBlur: 10,
        				shadowOffset: {x:CONST.shadowDistance,y:CONST.shadowDistance},
        				shadowOpacity: 0.5
						})
		);
	} else {
		sideLaneBoxes.push(
					new Kinetic.Rect({
						x: CONST.width/4 - CONST.sideLaneWidth,
						y: i* CONST.sideLaneHeight,
						width: CONST.sideLaneWidth,
						height: CONST.sideLaneHeight,
						fill:'white',
						shadowColor: 'black',
						shadowBlur: 10,
        				shadowOffset: {x:CONST.shadowDistance,y:CONST.shadowDistance},
        				shadowOpacity: 0.5
						})
		);
		sideLaneBoxes.push(
					new Kinetic.Rect({
						x: 3*CONST.width/4,
						y: i* CONST.sideLaneHeight,
						width: CONST.sideLaneWidth,
						height: CONST.sideLaneHeight,
						fill:'white',
						shadowColor: 'black',
						shadowBlur: 10,
        				shadowOffset: {x:CONST.shadowDistance,y:CONST.shadowDistance},
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

for (var i = 0, cnt = CONST.height/(CONST.treeRadius*2); i < cnt + 1; i+=1) {
	treeLeft = new Kinetic.Image({
			x: 5,
            y: i * 4 * CONST.treeRadius,
            image: imageTree,
            width: CONST.imageWidth,
            height: CONST.imageHeight,
            draggable: true
    });

    treeRight = new Kinetic.Image({
			x: CONST.width - CONST.imageWidth + 5,
            y: i * 4 * CONST.treeRadius,
            image: imageTree,
            width: CONST.imageWidth,
            height: CONST.imageHeight,
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
			currentBox.setY(boxY - 2* CONST.midLineHeight);
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
			currentBox.setY(boxY - 2 * CONST.sideLaneHeight);
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
var enemyCarsAnimation = enemyCars.animation;
enemyCarsAnimation.start();
stage.add(layerMovingObjects);
anim.start();
stage.add (enemyCarsLayer);