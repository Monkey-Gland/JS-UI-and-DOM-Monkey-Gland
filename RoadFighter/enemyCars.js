var enemyCars = (function() {
    var i,
        len,
        _enemyCarsList = [],
        layer = new Kinetic.Layer(),
        enemyCarsAnimation;

    // TODO: move constants to another file

    for (i = 0; i < ENEMY_CONST.count; i += 1) {
        _enemyCarsList.push(new Kinetic.Rect({
            x: ENEMY_CONST.minHorizontal + (Math.random() * (ENEMY_CONST.maxHorizontal - ENEMY_CONST.minHorizontal)),
            y: ENEMY_CONST.minVertical + (Math.random() * (ENEMY_CONST.maxVertical - ENEMY_CONST.minVertical)),
            width: ENEMY_CONST.width,
            height: ENEMY_CONST.height,
            fill: "#000"
        }));
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
                var randomY = (600 + (Math.random() * 3400)) * -1,
                    randomX = 150 + (Math.random() * 300);

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