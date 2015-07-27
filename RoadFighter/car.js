var carLeyer = new Kinetic.Layer();

var imageObj = new Image();

var myCar= new Kinetic.Image({
	x: CONST.width/2 + ((CONST.width/4)/3),
	y: CONST.height/1.4,
	image: imageObj,
	width: 80,
	height: 160,
	draggable: true
});

imageObj.onload = function() {

	// add the shape to the layer
	carLeyer.add(myCar);

	// add the layer to the stage
	stage.add(carLeyer);


};

imageObj.src = 'images/car.png';

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

window.addEventListener('keydown', function(speedChange) {
	if (speed !== 20){
		if (speedChange.keyCode == 38){ //Up Arrow Key

		speed+=2;
		}
	}
	
	if(speed !==0){
			if (speedChange.keyCode == 40){ //Down Arrow Key

		speed-=2;
		}	
	}
	
});

window.addEventListener('keyup', function(speedStop) {
			if (speedStop.keyCode == 38){ //Up Arrow Key

			speed-=5;
		}

});
