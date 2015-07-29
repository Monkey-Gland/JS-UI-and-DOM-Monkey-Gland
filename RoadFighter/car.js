var myFighterCar = (function() {
	var playerCar,
        animation,
        layer = new Kinetic.Layer(),
        imageObj = new Image();

	playerCar= new Kinetic.Image({
		x: (7*GAME_CONST.width)/12,
		y: GAME_CONST.height/1.4,
		image: imageObj,
		width: PLAYER_CONST.width,
		height: PLAYER_CONST.height
	});

	imageObj.onload = function() {
		layer.add(playerCar);
	};

	imageObj.src = 'images/car.png';

    animation = new Kinetic.Animation(function() {
        playerCar.move({
            x: PLAYER_CONST.displacement,
            y:0
        });

        detectCollision(playerCar);
    }, layer);

	window.addEventListener('keydown', function(keyEvent) {
        if (playerCar.x() < GAME_CONST.width/4 || playerCar.x()+ playerCar.width() > (3*GAME_CONST.width) / 4) {
            PLAYER_CONST.displacement = 0;
        }

        //Left Arrow Key
        if (keyEvent.keyCode == PLAYER_CONST.leftArrowKey) {
            if(playerCar.x() > GAME_CONST.width/4){
                PLAYER_CONST.displacement = - 8;
            }
        }

        //Right Arrow Key
        if (keyEvent.keyCode == PLAYER_CONST.rightArrowKey) {
            if((playerCar.x()+ playerCar.width()) < ((3*GAME_CONST.width)/4)){
                PLAYER_CONST.displacement = 8;
            }
        }

        //Up Arrow Key
        if (GAME_CONST.speed <  PLAYER_CONST.speedMax){
            if (keyEvent.keyCode == PLAYER_CONST.upArrowKey){

                GAME_CONST.speed += PLAYER_CONST.speedUp;
            }
        }
    });

    window.addEventListener('keyup', function(keyEvent) {
        //Left Arrow Key
        if (keyEvent.keyCode == PLAYER_CONST.leftArrowKey) {
            if(playerCar.x() > GAME_CONST.width/4){
                PLAYER_CONST.displacement = 0;
            }
        }

        //Right Arrow Key
        if (keyEvent.keyCode == PLAYER_CONST.rightArrowKey) {
            if((playerCar.x()+ playerCar.width()) < ((3*GAME_CONST.width)/4)){
                PLAYER_CONST.displacement = 0;
            }
        }
    });

/*
//disabled because go to min speed immediately
	window.addEventListener('keyup', function(speedStop) {
		if (speedStop.keyCode == PLAYER_CONST.upArrowKey){ //Up Arrow Key
			while(speed > PLAYER_CONST.speedMin){
				speed -= PLAYER_CONST.speedDown;

			}

		}

	});*/
	return {
		layer: layer,
        animation: animation
	};
}());
