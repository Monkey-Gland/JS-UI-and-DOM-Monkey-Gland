var myFighterCar = (function() {
	var carLeyer = new Kinetic.Layer();

	var imageObj = new Image();

	var myCar= new Kinetic.Image({
		x: (7*CONST.width)/12,
		y: CONST.height/1.4,
		image: imageObj,
		width: MYCAR_CONST.width,
		height: MYCAR_CONST.height,
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
		if (moveCar.keyCode == MYCAR_CONST.leftArrowKey) {//Left Arrow Key
			if(myCar.x() > CONST.width/4){
				myCar.x(myCar.x() - MYCAR_CONST.displacement);
			}
		}

		if (moveCar.keyCode == MYCAR_CONST.rightArrowKey) {//Right Arrow Key
			if((myCar.x()+ myCar.width()) < ((3*CONST.width)/4)){

				myCar.x(myCar.x() + MYCAR_CONST.displacement);
			}

		}

		if (speed <  MYCAR_CONST.speedMax){
			if (moveCar.keyCode == MYCAR_CONST.upArrowKey){ //Up Arrow Key

				speed += MYCAR_CONST.speedUp;
			}
		}

		stage.draw();
	});



	window.addEventListener('keyup', function(speedStop) {
		if (speedStop.keyCode == MYCAR_CONST.upArrowKey){ //Up Arrow Key
			while(speed > MYCAR_CONST.speedMin){
				speed -= MYCAR_CONST.speedDown;

			}

		}

	});
	return myCar;
}());
