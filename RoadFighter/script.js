﻿//колата като правоъгълник преди избора на картинка
var svg = "http://www.w3.org/2000/svg";
var car= document.createElementNS(svg, 'rect');
car.setAttributeNS(null,'width',10);
car.setAttributeNS(null, 'height', 10);

var roadFighter = (function () {
    var roadFighter = Object.create({});

    var stage = new Kinetic.Stage();

    var layer - new

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