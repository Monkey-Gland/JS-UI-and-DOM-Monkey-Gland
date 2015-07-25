var CONST = {
	width: 600,
	height: 600,
	midLineHeight: 50,
	midLineWidth: 10
}

var speed = 5,
	midLaneBoxes = [];

var stage = new Kinetic.Stage({
    container: 'canvas',
    width: CONST.width,
    height:CONST.height
});

var layer = new Kinetic.Layer();

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

layer.add(rect);
layer.add(rectRoad);


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
	layer.add(midLaneBoxes[i]);
};

//layer.add(midLaneBoxes);	

var anim = new Kinetic.Animation(function(frame){
	var startY = midLaneBoxes[0].getY();
	if(startY === 0){
		for (var i = 0, len = midLaneBoxes.length; i < len; i+=1) {
			var boxY = midLaneBoxes[i].getY(),
				currentBox = midLaneBoxes[i];
			currentBox.setY(boxY - 100);
		}
	}

	for (var i = 0, len = midLaneBoxes.length; i < len; i+=1) {
		var rectMidLine = midLaneBoxes[i],
			newY = rectMidLine.getY() + speed;
		console.log(startY);
		rectMidLine.setY(newY);
	}	
},layer);


stage.add(layer);
anim.start();
