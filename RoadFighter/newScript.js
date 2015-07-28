var stage = new Kinetic.Stage({
    container: 'canvas',
    width: CONST.width,
    height:CONST.height
});

var staticLayer = staticBackground.getLayer(),
    layerMovingObjects = new Kinetic.Layer(),
    enemyCarsLayer = enemyCars.getLayer();

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
}

//filling trees
var imageTree = new Image();
imageTree.src = 'images/Palm_Tree.png';

for (var i = 0, cnt = CONST.height/(CONST.treeRadius*2); i < cnt + 1; i+=1) {
	treeLeft = new Kinetic.Image({
			x: 5,
            y: i * 4 * CONST.treeRadius,
            image: imageTree,
            width: CONST.imageWidth,
            height: CONST.imageHeight
    });

    treeRight = new Kinetic.Image({
			x: CONST.width - CONST.imageWidth + 5,
            y: i * 4 * CONST.treeRadius,
            image: imageTree,
            width: CONST.imageWidth,
            height: CONST.imageHeight
    });


	trees.push(treeLeft);
	trees.push(treeRight);
}

for (var i = 0, len = trees.length; i < len; i+=1) {
	layerMovingObjects.add(trees[i]);
}


var anim = new Kinetic.Animation(function(frame){

	var startY = midLaneBoxes[0].y();

	if(startY >= 0){
		for (var i = 0, len = midLaneBoxes.length; i < len; i+=1) {
			var currentBox = midLaneBoxes[i];

            currentBox.move({
                x: 0,
                y: - 2 * CONST.midLineHeight
            })
		}
	}

	for (var i = 0, len = midLaneBoxes.length; i < len; i+=1) {
		var rectMidLine = midLaneBoxes[i];

		rectMidLine.move({
            x: 0,
            y: speed
        })
	}

	//move side lane logic
	var sideLaneFirstY = sideLaneBoxes[0].y();

	if(sideLaneFirstY >= 0){
		for (var i = 0, len = sideLaneBoxes.length; i < len; i+=1) {
			var currentBox = sideLaneBoxes[i];

            currentBox.move({
                x: 0,
                y: - 2 * CONST.sideLaneHeight
            })
		}
	}

	for (var i = 0, len = sideLaneBoxes.length; i < len; i+=1) {
		var rectSideLane = sideLaneBoxes[i];

		rectSideLane.move({
            x: 0,
            y: speed
        });
	}

	//move trees logic
	var treeFirstY = trees[0].y();

	if(treeFirstY >= 0){
		for (var i = 0, len = trees.length; i < len; i+=1) {
			var currentTree = trees[i];

            currentTree.move({
                x: 0,
                y:  - 4 * CONST.treeRadius
            })
		}
	}

	for (var i = 0, len = trees.length; i < len; i+=1) {
		var tree = trees[i];

		tree.move({
            x: 0,
            y: speed
        });
	}

},layerMovingObjects);

var carsList = enemyCars.cars;
var enemyCarsAnimation = enemyCars.animation;
enemyCarsAnimation.start();
anim.start();

stage.add(staticLayer);
stage.add(layerMovingObjects);
stage.add (enemyCarsLayer);