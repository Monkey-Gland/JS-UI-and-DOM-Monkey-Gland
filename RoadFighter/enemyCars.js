var enemyCars = (function() {
    var i,
        len,
        _enemyCarsList = [],
        layer = new Kinetic.Layer(),
        enemyCarsAnimation,
        Randomizer = {
          getRandomCarSeed: function(carVariationsAvailable) {
              return Math.round(Math.random() * carVariationsAvailable);
          },
          getRandomCarX: function() {
              return (150 + (Math.random() * 300));
          },
          getRandomCarY: function() {
              return ((600 + (Math.random() * 3400)) * -1);
          }
        };

    function getRandomColoredCar () {
        var randomCar,
            imageObj = new Image(),
            carVariationsAvailable = CONST.enemyImageSources.length - 1,
            randomSeed = Randomizer.getRandomCarSeed(carVariationsAvailable);

        imageObj.src = CONST.enemyImageSources[randomSeed];

        randomCar = new Kinetic.Image({
            x: CONST.width / 2 + ((CONST.width / 4) / 3),
            y: CONST.height / 1.4,
            image: imageObj,
            width: 80,
            height: 160,
            draggable: true
        });

        console.log(randomCar);

        return randomCar;
    }

    for (i = 0; i < ENEMY_CONST.count; i += 1) {
        console.log(getRandomColoredCar());
        _enemyCarsList.push(getRandomColoredCar());
    }

    for (i = 0, len = _enemyCarsList.length; i < len; i += 1) {
        layer.add(_enemyCarsList[i]);
    }

    enemyCarsAnimation = new Kinetic.Animation(function(frame){
        // TODO Try to move the whole function to the module
        for (i = 0, len = carsList.length; i < len; i += 1) {
            var checkedCar = carsList[i];

            //TODO Check if cars get clustered with time because of smaller random range
            if (checkedCar.getY() > CONST.height) {
                // TODO Move randomization of car position to module
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