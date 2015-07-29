var myFighterCar = (function() {
	var myCar,
        animation,
        carLayer = new Kinetic.Layer(),
        imageObj = new Image();

	myCar= new Kinetic.Image({
		x: (7*CONST.width)/12,
		y: CONST.height/1.4,
		image: imageObj,
		width: MYCAR_CONST.width,
		height: MYCAR_CONST.height
	});

	imageObj.onload = function() {
		carLayer.add(myCar);
	};

	imageObj.src = 'images/car.png';

    animation = new Kinetic.Animation(function() {
        myCar.move({
            x: MYCAR_CONST.displacement,
            y:0
        })
    }, carLayer);

	window.addEventListener('keydown', function(keyEvent) {
        if (keyEvent.keyCode == MYCAR_CONST.leftArrowKey) {//Left Arrow Key
            if(myCar.x() > CONST.width/4){
                MYCAR_CONST.displacement = - 8;
            }
        }


        if (keyEvent.keyCode == MYCAR_CONST.rightArrowKey) {//Right Arrow Key
            if((myCar.x()+ myCar.width()) < ((3*CONST.width)/4)){
                MYCAR_CONST.displacement = 8;
            }
        }

        if (speed <  MYCAR_CONST.speedMax){
            if (keyEvent.keyCode == MYCAR_CONST.upArrowKey){ //Up Arrow Key

                speed += MYCAR_CONST.speedUp;
            }
        }
        detectCollision(myCar);
    });

    window.addEventListener('keyup', function(keyEvent) {
        if (keyEvent.keyCode == MYCAR_CONST.leftArrowKey) {//Left Arrow Key
            if(myCar.x() > CONST.width/4){
                MYCAR_CONST.displacement = 0;
            }
        }


        if (keyEvent.keyCode == MYCAR_CONST.rightArrowKey) {//Right Arrow Key
            if((myCar.x()+ myCar.width()) < ((3*CONST.width)/4)){
                MYCAR_CONST.displacement = 0;
            }
        }
    });

/*
//disabled because go to min speed immediately
	window.addEventListener('keyup', function(speedStop) {
		if (speedStop.keyCode == MYCAR_CONST.upArrowKey){ //Up Arrow Key
			while(speed > MYCAR_CONST.speedMin){
				speed -= MYCAR_CONST.speedDown;

			}

		}

	});*/
	return {
		layer: carLayer,
        animation: animation
	};
}());
