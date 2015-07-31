var movingBackground = (function() {
    var i,
        len,
        animation,
        finishLine,
        finishLineText,
        leftSideRoadShape,
        rightSideRoadShape,
        sideRoadShape,
        sideRoadImageObject,
        shapeToBeMoved,
        midLaneShapes = [],
        sideLaneShapes = [],
        sideRoadShapes = [],
        layer = new Kinetic.Layer();

    finishLine = new Kinetic.Rect({
        x: GAME_CONST.width / 4,
        y: GAME_CONST.height * 2,
        width: GAME_CONST.width / 2,
        height: 50,
        fill:'#008000'
    });

    finishLineText = new Kinetic.Text({
        x: GAME_CONST.width / 4 + (GAME_CONST.width / 8) + 15,
        y: GAME_CONST.height * 2,
        fontSize:  50,
        text: "Finish",
        fill: "#BDB76B"
    });

    //creating mid-lane shapes
    for (i = 0, len = GAME_CONST.height / (GAME_CONST.midLineHeight * 2); i < len + 1; i += 1) {
        midLaneShapes.push(
            new Kinetic.Rect({
                x: (GAME_CONST.width- GAME_CONST.midLineWidth) / 2,
                y: i * 2 * GAME_CONST.midLineHeight - 2 * GAME_CONST.midLineHeight,
                width: GAME_CONST.midLineWidth,
                height: GAME_CONST.midLineHeight,
                fill:'white'
            })
        );
    }

    for (i = 0, len = midLaneShapes.length; i < len; i += 1) {
        layer.add(midLaneShapes[i]);
    }

    //creating side-lane shapes
    for (i = 0, len = GAME_CONST.height/GAME_CONST.sideLaneHeight; i < len + 2; i+=1) {
        if(i%2){
            sideLaneShapes.push(
                new Kinetic.Rect({
                    x: GAME_CONST.width/4 - GAME_CONST.sideLaneWidth,
                    y: i* GAME_CONST.sideLaneHeight,
                    width: GAME_CONST.sideLaneWidth,
                    height: GAME_CONST.sideLaneHeight,
                    fill:'black',
                    shadowColor: 'black',
                    shadowBlur: 10,
                    shadowOffset: {x:GAME_CONST.shadowDistance,y:GAME_CONST.shadowDistance},
                    shadowOpacity: 0.5
                })
            );
            sideLaneShapes.push(
                new Kinetic.Rect({
                    x: 3*GAME_CONST.width/4,
                    y: i* GAME_CONST.sideLaneHeight,
                    width: GAME_CONST.sideLaneWidth,
                    height: GAME_CONST.sideLaneHeight,
                    fill:'black',
                    shadowColor: 'black',
                    shadowBlur: 10,
                    shadowOffset: {x:GAME_CONST.shadowDistance,y:GAME_CONST.shadowDistance},
                    shadowOpacity: 0.5
                })
            );
        } else {
            sideLaneShapes.push(
                new Kinetic.Rect({
                    x: GAME_CONST.width/4 - GAME_CONST.sideLaneWidth,
                    y: i* GAME_CONST.sideLaneHeight,
                    width: GAME_CONST.sideLaneWidth,
                    height: GAME_CONST.sideLaneHeight,
                    fill:'white',
                    shadowColor: 'black',
                    shadowBlur: 10,
                    shadowOffset: {x:GAME_CONST.shadowDistance,y:GAME_CONST.shadowDistance},
                    shadowOpacity: 0.5
                })
            );
            sideLaneShapes.push(
                new Kinetic.Rect({
                    x: 3*GAME_CONST.width/4,
                    y: i* GAME_CONST.sideLaneHeight,
                    width: GAME_CONST.sideLaneWidth,
                    height: GAME_CONST.sideLaneHeight,
                    fill:'white',
                    shadowColor: 'black',
                    shadowBlur: 10,
                    shadowOffset: {x:GAME_CONST.shadowDistance,y:GAME_CONST.shadowDistance},
                    shadowOpacity: 0.5
                })
            );
        }
    }

    for (i = 0, len = sideLaneShapes.length; i < len; i+=1) {
        layer.add(sideLaneShapes[i]);
    }

    // creating side-road decorations
    sideRoadImageObject = new Image();
    sideRoadImageObject.src = 'images/Palm_Tree.png';

    for (i = 0, len = GAME_CONST.height/(GAME_CONST.treeRadius*2); i < len + 1; i+=1) {
        leftSideRoadShape = new Kinetic.Image({
            x: 5,
            y: i * 4 * GAME_CONST.treeRadius,
            image: sideRoadImageObject,
            width: GAME_CONST.imageWidth,
            height: GAME_CONST.imageHeight
        });

        rightSideRoadShape = new Kinetic.Image({
            x: GAME_CONST.width - GAME_CONST.imageWidth + 5,
            y: i * 4 * GAME_CONST.treeRadius,
            image: sideRoadImageObject,
            width: GAME_CONST.imageWidth,
            height: GAME_CONST.imageHeight
        });


        sideRoadShapes.push(leftSideRoadShape);
        sideRoadShapes.push(rightSideRoadShape);
    }

    for (i = 0, len = sideRoadShapes.length; i < len; i+=1) {
        layer.add(sideRoadShapes[i]);
    }

    layer.add(finishLine);
    layer.add(finishLineText);

    animation = new Kinetic.Animation(function(frame){
        var i,
            len,
            startY = midLaneShapes[0].y();

        // moving mid-lane shapes
        if(startY >= 0){
        	for (i = 0, len = midLaneShapes.length; i < len; i += 1) {
        		shapeToBeMoved = midLaneShapes[i];

                shapeToBeMoved.move({
                   x: 0,
                   y: - 2 * GAME_CONST.midLineHeight
               })
        	}
        }

        finishLine.move({
            x: 0,
            y: GAME_CONST.speed
        });

        finishLineText.move({
            x:0,
            y: GAME_CONST.speed
        });

        for (i = 0, len = midLaneShapes.length; i < len; i += 1) {
        	shapeToBeMoved = midLaneShapes[i];

            shapeToBeMoved.move({
               x: 0,
               y: GAME_CONST.speed
           })
        }

        // moving side-lane shapes
        var sideLaneFirstY = sideLaneShapes[0].y();

        if(sideLaneFirstY >= 0){
        	for (i = 0, len = sideLaneShapes.length; i < len; i+=1) {
        		shapeToBeMoved = sideLaneShapes[i];

                shapeToBeMoved.move({
                   x: 0,
                   y: - 2 * GAME_CONST.sideLaneHeight
               })
        	}
        }

        for (i = 0, len = sideLaneShapes.length; i < len; i += 1) {
        	shapeToBeMoved = sideLaneShapes[i];

            shapeToBeMoved.move({
               x: 0,
               y: GAME_CONST.speed
           });
        }

        // moving side-road shapes
        sideRoadShape = sideRoadShapes[0].y();

        if(sideRoadShape >= 0){
        	for (i = 0, len = sideRoadShapes.length; i < len; i += 1) {
                shapeToBeMoved = sideRoadShapes[i];

                shapeToBeMoved.move({
                   x: 0,
                   y:  - 4 * GAME_CONST.treeRadius
               })
        	}
        }

        for (i = 0, len = sideRoadShapes.length; i < len; i += 1) {
            shapeToBeMoved = sideRoadShapes[i];

            shapeToBeMoved.move({
               x: 0,
               y: GAME_CONST.speed
           });
        }
    }, layer);

    function resetFinishLine() {
        finishLine.y(0 - 50);
        finishLineText.y(0 - 50);
    }

    return{
        layer:layer,
        animation: animation,
        resetFinishLine: resetFinishLine
    }
}());