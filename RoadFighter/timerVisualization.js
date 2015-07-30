var visualTimer = (function() {
    function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
        var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    }

    function describeArc(x, y, radius, startAngle, endAngle){
        var path,
            start = polarToCartesian(x, y, radius, endAngle),
            end = polarToCartesian(x, y, radius, startAngle),
            arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

        path = [
            "M", start.x, start.y,
            "A", radius, radius, 0, arcSweep, 0, end.x, end.y,
            "L", x,y,
            "L", start.x, start.y
        ].join(" ");

        return path;
    }

    function drawTimer(currentTime, maximumTime, container) {
        var endAngle = (currentTime / maximumTime) * 360;

        container.setAttribute("d", describeArc(200, 200, 100, 0, endAngle));
    }

    return {
        draw: drawTimer
    }
}());