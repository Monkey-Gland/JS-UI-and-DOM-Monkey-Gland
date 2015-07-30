var speedometer = (function() {

    // Creates a block of kinetic text.
    this.createText = function(x, y, text) {
        return new Kinetic.Text({x: x, y: y, text: text, fontSize: 15, fontFamily: 'Calibri', fill: 'darkcyan'});
    }



    var theLayer = new Kinetic.Layer();

    var line = new Kinetic.Line({points: [70, 70, 15, 70], tension: 0.5, closed: true, stroke: 'lightskyblue', strokeWidth: 5});
    var cicle = new Kinetic.Circle({x: 70, y: 70, radius: 65, fill: 'none', strokeWidth: 1});
    var cicleDark = new Kinetic.Circle({x: 70, y: 70, radius: 70, fill: '#BCC6CC', strokeWidth: 1});

        function positionRadians(centerX, centerY, radius, radians) {

        return {
            x: centerX + (radius * Math.cos(radians)),
            y: centerY + (radius * Math.sin(radians))
        };
    }

    theLayer
        .add(cicleDark)
        .add(cicle)
        .add(line)
        .add(new Kinetic.Circle({x: 70, y: 70, radius: 10, fill: 'cadetblue', strokeWidth: 1}));


    // Text
    var angle = [1, 1.7, 2.4, 3.1, 3.8, 4.5, 5.2];
    var digits = [20, 40, 60, 80, 100, 120, 150];
    for (var i = 0; i <= digits.length - 1; i++) {
        var colour = 'grey';
        colour = 'darkcyan';
        var curentPosition = positionRadians(62, 62, 53, angle[i])

        theLayer.add(createText(curentPosition.x, curentPosition.y, digits[i]));
        console.log(curentPosition.x, curentPosition.y)

    };

    var animation = new Kinetic.Animation(function(frame) {

        var lineCurentPosition =  positionRadians(70, 70, 65, GAME_CONST.speed/3.5);
        var points = [];
        points.push(70, 70, lineCurentPosition.x, lineCurentPosition.y);
        line.setPoints(points);
        console.log(GAME_CONST.speed);
        console.log(lineCurentPosition.x, lineCurentPosition.y);

    }, theLayer);


    return {
        layer: theLayer,
        animation: animation
    };

})();