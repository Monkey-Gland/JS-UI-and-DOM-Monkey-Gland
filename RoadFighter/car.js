var myFighterCar = (function() {
	var playerCar,
        animation,
        layer = new Kinetic.Layer(),
        imageObj = new Image(),
		carSettings = {
			x: (7*GAME_CONST.width)/12,
			y: GAME_CONST.height/1.4,
			image: imageObj,
			width: PLAYER_CONST.width,
			height: PLAYER_CONST.height
		};

	playerCar = new Kinetic.Image(carSettings);

	imageObj.onload = function() {
		layer.add(playerCar);
	};

	imageObj.src = 'images/car.png';

    animation = new Kinetic.Animation(function() {
        playerCar.move({
            x: PLAYER_CONST.displacement,
            y:0
        });

        if (playerCar.x() < GAME_CONST.width/4 || playerCar.x()+ playerCar.width() > (3*GAME_CONST.width) / 4) {
            PLAYER_CONST.displacement = 0;
        }

        if (detectCollision(playerCar)) {
        	stopGame();
        }
    }, layer);

	window.addEventListener('keydown', function(keyEvent) {
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
        if (keyEvent.keyCode == PLAYER_CONST.upArrowKey){
            if (GAME_CONST.speed <  PLAYER_CONST.speedMax){

                GAME_CONST.speed += PLAYER_CONST.speedUp;
            }
        }

        //Down Arrow Key
        if (keyEvent.keyCode == PLAYER_CONST.downArrowKey){
            if (GAME_CONST.speed - PLAYER_CONST.speedDown >=  PLAYER_CONST.speedMin){

                GAME_CONST.speed -= PLAYER_CONST.speedDown;
            }
        }

        //Escape
        if (keyEvent.keyCode == 27) {
            stopGame();
            gameVariables.gameInProgress = false;
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

	function resetCar() {
		playerCar.setAttrs(carSettings);
		GAME_CONST.speed = GAME_CONST.defaultSpeed;
	}
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
        animation: animation,
		resetCar: resetCar
	};
}());
