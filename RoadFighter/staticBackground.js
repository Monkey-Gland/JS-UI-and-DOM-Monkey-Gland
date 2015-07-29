var staticBackground = (function() {
    var rectSand,
        rectRoad,
        rectGreen,
        staticLayer = new Kinetic.Layer();

    rectSand = new Kinetic.Rect({
        x:0,
        y:0,
        width:GAME_CONST.width,
        height:GAME_CONST.height,
        fill:"DarkKhaki"
    });

    rectRoad = new Kinetic.Rect({
        x: GAME_CONST.width/4,
        y: 0,
        width:GAME_CONST.width/2,
        height:GAME_CONST.height,
        fill: 'grey'
    });

    rectGreen = new Kinetic.Rect({
        x: GAME_CONST.width/8,
        y: 0,
        width: 3*GAME_CONST.width/4,
        height: GAME_CONST.height,
        fill: 'green'
    });

    staticLayer.add(rectSand);
    staticLayer.add(rectGreen);
    staticLayer.add(rectRoad);

    return{
        layer: staticLayer
    }
}());