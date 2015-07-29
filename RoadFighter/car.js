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
        });

        detectCollision(myCar);
    }, carLayer);

	window.addEventListener('keydown', function(keyEvent) {
        if (myCar.x() < CONST.width/4 || myCar.x()+ myCar.width() > (3*CONST.width) / 4) {
            MYCAR_CONST.displacement = 0;
        }

        //Left Arrow Key
        if (keyEvent.keyCode == MYCAR_CONST.leftArrowKey) {
            if(myCar.x() > CONST.width/4){
                MYCAR_CONST.displacement = - 8;
            }
        }

        //Right Arrow Key
        if (keyEvent.keyCode == MYCAR_CONST.rightArrowKey) {
            if((myCar.x()+ myCar.width()) < ((3*CONST.width)/4)){
                MYCAR_CONST.displacement = 8;
            }
        }

        //Up Arrow Key
        if (speed <  MYCAR_CONST.speedMax){
            if (keyEvent.keyCode == MYCAR_CONST.upArrowKey){

                speed += MYCAR_CONST.speedUp;
            }
        }
    });

    window.addEventListener('keyup', function(keyEvent) {
        //Left Arrow Key
        if (keyEvent.keyCode == MYCAR_CONST.leftArrowKey) {
            if(myCar.x() > CONST.width/4){
                MYCAR_CONST.displacement = 0;
            }
        }

        //Right Arrow Key
        if (keyEvent.keyCode == MYCAR_CONST.rightArrowKey) {
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
