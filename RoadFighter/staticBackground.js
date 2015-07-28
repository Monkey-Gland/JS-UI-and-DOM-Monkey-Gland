var staticBackground = (function() {
    var rectSand,
        rectRoad,
        rectGreen,
        staticLayer = new Kinetic.Layer();

    rectSand = new Kinetic.Rect({
        x:0,
        y:0,
        width:CONST.width,
        height:CONST.height,
        fill:"DarkKhaki"
    });

    rectRoad = new Kinetic.Rect({
        x: CONST.width/4,
        y: 0,
        width:CONST.width/2,
        height:CONST.height,
        fill: 'grey'
    });

    rectGreen = new Kinetic.Rect({
        x: CONST.width/8,
        y: 0,
        width: 3*CONST.width/4,
        height: CONST.height,
        fill: 'green'
    });

    staticLayer.add(rectSand);
    staticLayer.add(rectGreen);
    staticLayer.add(rectRoad);

    function returnLayer() {
        return staticLayer;
    }

    return{
        getLayer: returnLayer
    }
}());