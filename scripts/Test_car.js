var myFighterCar = (function() {
	var carLeyer = new Kinetic.Layer();

	var imageObj = new Image();

    var carXdisplacement = 0;

	var myCar= new Kinetic.Image({
		x: (7*GAME_CONST.width)/12,
		y: GAME_CONST.height/1.4,
		image: imageObj,
		width: PLAYER_CONST.width,
		height: PLAYER_CONST.height,
		draggable: true
	});

	imageObj.onload = function() {

		// add the shape to the layer
		carLeyer.add(myCar);
	};

	imageObj.src = 'images/car.png';

	carLeyer.on('keydown', function(evt) {
		if (evt.keyCode == PLAYER_CONST.leftArrowKey) {//Left Arrow Key
			carXdisplacement = -1;
            console.log("left");
		}

		if (evt.keyCode == PLAYER_CONST.rightArrowKey) {//Right Arrow Key
			carXdisplacement = 1;
            console.log("right");
		}
	});

    var animation = new Kinetic.Animation(function(frame) {
        var x = myCar.getX();
        myCar.setX(x + carXdisplacement);
    }, carLeyer);


    function getLayerFunc() {
        return carLeyer;
    }

    return {
        animation: animation,
        car: myCar,
        getLayer: getLayerFunc
    };
}());
