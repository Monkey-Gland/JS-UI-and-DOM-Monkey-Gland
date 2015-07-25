var enemyCars = (function() {
    var _enemyCarsList = [],
        rect = new Kinetic.Rect({
            x: 0,
            y: 0,
            width: 100,
            height: 100,
            fill: "#0F0"
        }),
        layer = new Kinetic.Layer();

    layer.add(rect);

    returnLayer = function() {
        return layer;
    };

    function animationFunction() {

    }

    return{
        getLayer: returnLayer,
        animationFunction : animationFunction
    }
}());
