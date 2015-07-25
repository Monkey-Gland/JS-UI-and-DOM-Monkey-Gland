//колата като правоъгълник преди избора на картинка
var svg = "http://www.w3.org/2000/svg";
var car= document.createElementNS(svg, 'rect');
car.setAttributeNS(null,'width',10);
car.setAttributeNS(null, 'height', 10);

var roadFighter = (function () {
    var roadFighter = Object.create({}),
        screenContainer = document.getElementById("#screen");

    var stage = new Kinetic.Stage({
        container: 'screen',
        height: 500,
        width: 700
    });

    var backgroundLayer = new Kinetic.Layer();

    var rect = Kinetic.Rect({
        x: 0,
        y:0,
        width: 500,
        height: 500,
        fill: "000"
    });

    Object.defineProperty(roadFighter, 'init', {
        value:function(canvas,screenWidth,screenHeight)
        {
            this.canvas = canvas;
            this.screenWidth = screenWidth;
            this.screenHeight = screenHeight;
            this.gameStarted = true;
            this.car = car;
}
    })
}());