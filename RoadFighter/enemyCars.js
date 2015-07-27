var enemyCars = (function() {
    var i,
        len,
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
          },
          getRandomCarY: function() {
              return ((CONST.height + (Math.random() * CONST.height * ENEMY_CONST.spawnRangeCoefficient)) * -1);
          }
        };

    function validCarPosition(randomCar) {
        var i,
            len,
            carPositionX = randomCar.getX(),
            carPositionY = randomCar.getY();

        //console.log(_enemyCarsList.length);
        for (i = 0, len = _enemyCarsList.length; i < len; i += 1) {
            var carBeingCheckedForOverlap = _enemyCarsList[i],
                currentX = carBeingCheckedForOverlap.getX(),
                currentY = carBeingCheckedForOverlap.getY();

            //console.log("hello " + Math.abs(carPositionY - currentY));
            //console.log(carPositionY + ' ' + currentY);
            if (Math.abs(carPositionY - currentY) < CONST.imageHeight) {
                if (Math.abs(carPositionX - currentX) < CONST.imageWidth) {
                    return false;
                }
            }
        }

        return true;
    }

    function getRandomColoredCar () {
        var randomCar,
            imageObj = new Image();

        imageObj.src = CONST.enemyImageSources[Randomizer.getRandomCarSeed()];

        randomCar = new Kinetic.Image({
            x: Randomizer.getRandomCarX(),
            y: Randomizer.getRandomCarY(),
            image: imageObj,
            width: 80,
            height: 160,
            draggable: true
        });

        return randomCar;
    }

    for (i = 0; i < ENEMY_CONST.count; i += 1) {
        var carToPush = getRandomColoredCar();

        while(!validCarPosition(carToPush)) {
            carToPush = getRandomColoredCar();
        }
        //console.log("position is " + validCarPosition(carToPush));

        _enemyCarsList.push(getRandomColoredCar());
    }

    for (i = 0, len = _enemyCarsList.length; i < len; i += 1) {
        layer.add(_enemyCarsList[i]);
    }

    enemyCarsAnimation = new Kinetic.Animation(function(frame){
        for (i = 0, len = carsList.length; i < len; i += 1) {
            var checkedCar = carsList[i];

            //TODO Check if cars get clustered with time because of smaller random range
            if (checkedCar.getY() > CONST.height) {
                var randomY = Randomizer.getRandomCarY(),
                    randomX = Randomizer.getRandomCarX();
                console.log(randomX);
                console.log(randomY);


                checkedCar.setX(randomX);
                checkedCar.setY(randomY);
            }
        }

        for (i = 0, len = carsList.length; i < len; i += 1) {
            var currentCar = carsList[i],
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
