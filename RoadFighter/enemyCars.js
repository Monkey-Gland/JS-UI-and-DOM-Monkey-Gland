var enemyCars = (function() {
    var i,
        len,
        returnLayer,
        _enemyCarsList = [],
        layer = new Kinetic.Layer(),
        enemyCarsAnimation,
        Randomizer = {
          getRandomCarSeed: function() {
              var carVariationsAvailable = CONST.enemyImageSources.length - 1;

              return Math.round(Math.random() * carVariationsAvailable);
          },
          getRandomCarX: function() {
              return (CONST.width / 4 + (Math.random() * (CONST.width / 2 - CONST.imageWidth)));
          }
        };

    function getRandomColoredCar (positionX, positionY) {
        var randomCar,
            imageObj = new Image();

        imageObj.src = CONST.enemyImageSources[Randomizer.getRandomCarSeed()];

        randomCar = new Kinetic.Image({
            x: positionX,
            y: positionY,
            image: imageObj,
            width: 80,
            height: 160,
            draggable: true
        });

        return randomCar;
    }

    function repositionCars(arrayOfCarImages) {
        var i,
            len,
            newX,
            newY;

        for (i = 0, len = arrayOfCarImages.length; i < len; i += 1) {
            var currentCar = arrayOfCarImages[i],
                currentCarYDisplacementCoefficient = Math.random();
            // TODO: incorporate the coefficient to randomize it a little and add distance between cars

            newX = Randomizer.getRandomCarX();
            newY = (MYCAR_CONST.height * i) - (ENEMY_CONST.count * MYCAR_CONST.height);
            // TODO: randomize color too

            currentCar.setX(newX);
            currentCar.setY(newY);
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
            lastCar = _enemyCarsList[0],
            lastCarPositionY = lastCar.getY();

        if(lastCarPositionY > CONST.height) {
            repositionCars(_enemyCarsList);
        }

        for (i = 0, len = carsList.length; i < len; i += 1) {
            var currentCar = _enemyCarsList[i],
                currentY = currentCar.getY(),
                newY = currentY + 2 + speed;

            currentCar.setY(newY);
        }
    }, layer);

    returnLayer = function() {
        return layer;
    };

    return{
        getLayer: returnLayer,
        cars: _enemyCarsList,
        animation: enemyCarsAnimation
    }
}());
