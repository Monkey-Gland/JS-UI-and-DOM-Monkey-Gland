var enemyCars = (function() {
    var i,
        len,
        _enemyCarsList = [],
        layer = new Kinetic.Layer();

    // TODO: move constants to another file
    var ENEMY_CONST = {
        count: 20,
        width: 40,
        height: 100,
        maxHorizontal: 450,
        minHorizontal:150,
        maxVertical: 600,
        minVertical: -4000
    };

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

    returnLayer = function() {
        return layer;
    };

    return{
        getLayer: returnLayer,
        cars: _enemyCarsList
    }
}());