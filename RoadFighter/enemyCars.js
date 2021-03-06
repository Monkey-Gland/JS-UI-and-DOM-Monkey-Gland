var enemyCars = (function() {
    var i,
        len,
        _enemyCarsList = [],
        layer = new Kinetic.Layer(),
        enemyCarsAnimation,
        randomise = {
          carSeed: function() {
              var carVariationsAvailable = GAME_CONST.enemyImageSources.length - 1;

              return Math.round(Math.random() * carVariationsAvailable);
          },
          carX: function() {
              return (GAME_CONST.width / 4 + (Math.random() * (GAME_CONST.width / 2 - GAME_CONST.imageWidth)));
          }
        };

    function getRandomColoredCar (positionX, positionY) {
        var randomCar,
            imageObj = new Image();

        imageObj.src = GAME_CONST.enemyImageSources[randomise.carSeed()];

        randomCar = new Kinetic.Image({
            x: positionX,
            y: positionY,
            image: imageObj,
            width: PLAYER_CONST.width,
            height: PLAYER_CONST.height
        });

        return randomCar;
    }

    function repositionCars(arrayOfCarImages) {
        var i,
            len,
            newX,
            newY,
            lastCarY,
            currentCar,
            currentCarYDisplacementCoefficient;

        lastCarY = 0;
        for (i = 0, len = arrayOfCarImages.length; i < len; i += 1) {
            currentCar = arrayOfCarImages[i];
            currentCarYDisplacementCoefficient = Math.random();

            newX = randomise.carX();
            newY = lastCarY - (ENEMY_CONST.count * PLAYER_CONST.height + ( PLAYER_CONST.height * currentCarYDisplacementCoefficient));

            lastCarY = newY;
            currentCar.x(newX);
            currentCar.y(newY);
        }
    }

    // filling array with cars positioned at (0,0) and adding them to layer
    for (i = 0; i < ENEMY_CONST.count; i += 1) {
        _enemyCarsList.push(getRandomColoredCar(0, 0));
    }

    for (i = 0, len = _enemyCarsList.length; i < len; i += 1) {
        layer.add(_enemyCarsList[i]);
    }

    repositionCars(_enemyCarsList);

    enemyCarsAnimation = new Kinetic.Animation(function(frame){
        var i,
            len,
            lastCar = _enemyCarsList[_enemyCarsList.length - 1],
            lastCarPositionY = lastCar.y();

        if(lastCarPositionY > GAME_CONST.height) {
            repositionCars(_enemyCarsList);
        }

        for (i = 0, len = _enemyCarsList.length; i < len; i += 1) {
            var currentCar = _enemyCarsList[i];

            currentCar.move({
                x: 0,
                y: ENEMY_CONST.enemySpeed + GAME_CONST.speed
            });
        }
    }, layer);

    return{
        layer: layer,
        cars: _enemyCarsList,
        animation: enemyCarsAnimation,
        repositionCars: repositionCars
    };
}());
