var movingBackground = (function() {
    var i,
        len,
        animation,
        leftSideRoadShape,
        rightSideRoadShape,
        sideRoadShape,
        sideRoadImageObject,
        shapeToBeMoved,
        midLaneShapes = [],
        sideLaneShapes = [],
        sideRoadShapes = [],
        layer = new Kinetic.Layer();

    //creating mid-lane shapes
    for (i = 0, len = CONST.height / (CONST.midLineHeight * 2); i < len + 1; i += 1) {
        midLaneShapes.push(
            new Kinetic.Rect({
                x: (CONST.width- CONST.midLineWidth) / 2,
                y: i * 2 * CONST.midLineHeight - 2 * CONST.midLineHeight,
                width: CONST.midLineWidth,
                height: CONST.midLineHeight,
                fill:'white'
            })
        );
    }

    for (i = 0, len = midLaneShapes.length; i < len; i += 1) {
        layer.add(midLaneShapes[i]);
    }

    //creating side-lane shapes
    for (i = 0, len = CONST.height/CONST.sideLaneHeight; i < len + 2; i+=1) {
        if(i%2){
            sideLaneShapes.push(
                new Kinetic.Rect({
                    x: CONST.width/4 - CONST.sideLaneWidth,
                    y: i* CONST.sideLaneHeight,
                    width: CONST.sideLaneWidth,
                    height: CONST.sideLaneHeight,
                    fill:'black',
                    shadowColor: 'black',
                    shadowBlur: 10,
                    shadowOffset: {x:CONST.shadowDistance,y:CONST.shadowDistance},
                    shadowOpacity: 0.5
                })
            );
            sideLaneShapes.push(
                new Kinetic.Rect({
                    x: 3*CONST.width/4,
                    y: i* CONST.sideLaneHeight,
                    width: CONST.sideLaneWidth,
                    height: CONST.sideLaneHeight,
                    fill:'black',
                    shadowColor: 'black',
                    shadowBlur: 10,
                    shadowOffset: {x:CONST.shadowDistance,y:CONST.shadowDistance},
                    shadowOpacity: 0.5
                })
            );
        } else {
            sideLaneShapes.push(
                new Kinetic.Rect({
                    x: CONST.width/4 - CONST.sideLaneWidth,
                    y: i* CONST.sideLaneHeight,
                    width: CONST.sideLaneWidth,
                    height: CONST.sideLaneHeight,
                    fill:'white',
                    shadowColor: 'black',
                    shadowBlur: 10,
                    shadowOffset: {x:CONST.shadowDistance,y:CONST.shadowDistance},
                    shadowOpacity: 0.5
                })
            );
            sideLaneShapes.push(
                new Kinetic.Rect({
                    x: 3*CONST.width/4,
                    y: i* CONST.sideLaneHeight,
                    width: CONST.sideLaneWidth,
                    height: CONST.sideLaneHeight,
                    fill:'white',
                    shadowColor: 'black',
                    shadowBlur: 10,
                    shadowOffset: {x:CONST.shadowDistance,y:CONST.shadowDistance},
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

    for (i = 0, len = CONST.height/(CONST.treeRadius*2); i < len + 1; i+=1) {
        leftSideRoadShape = new Kinetic.Image({
            x: 5,
            y: i * 4 * CONST.treeRadius,
            image: sideRoadImageObject,
            width: CONST.imageWidth,
            height: CONST.imageHeight
        });

        rightSideRoadShape = new Kinetic.Image({
            x: CONST.width - CONST.imageWidth + 5,
            y: i * 4 * CONST.treeRadius,
            image: sideRoadImageObject,
            width: CONST.imageWidth,
            height: CONST.imageHeight
        });


        sideRoadShapes.push(leftSideRoadShape);
        sideRoadShapes.push(rightSideRoadShape);
    }

    for (i = 0, len = sideRoadShapes.length; i < len; i+=1) {
        layer.add(sideRoadShapes[i]);
    }

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
                   y: - 2 * CONST.midLineHeight
               })
        	}
        }

        for (i = 0, len = midLaneShapes.length; i < len; i += 1) {
        	shapeToBeMoved = midLaneShapes[i];

            shapeToBeMoved.move({
               x: 0,
               y: speed
           })
        }

        // moving side-lane shapes
        var sideLaneFirstY = sideLaneShapes[0].y();

        if(sideLaneFirstY >= 0){
        	for (i = 0, len = sideLaneShapes.length; i < len; i+=1) {
        		shapeToBeMoved = sideLaneShapes[i];

                shapeToBeMoved.move({
                   x: 0,
                   y: - 2 * CONST.sideLaneHeight
               })
        	}
        }

        for (i = 0, len = sideLaneShapes.length; i < len; i += 1) {
        	shapeToBeMoved = sideLaneShapes[i];

            shapeToBeMoved.move({
               x: 0,
               y: speed
           });
        }

        // moving side-road shapes
        sideRoadShape = sideRoadShapes[0].y();

        if(sideRoadShape >= 0){
        	for (i = 0, len = sideRoadShapes.length; i < len; i += 1) {
                shapeToBeMoved = sideRoadShapes[i];

                shapeToBeMoved.move({
                   x: 0,
                   y:  - 4 * CONST.treeRadius
               })
        	}
        }

        for (i = 0, len = sideRoadShapes.length; i < len; i += 1) {
            shapeToBeMoved = sideRoadShapes[i];

            shapeToBeMoved.move({
               x: 0,
               y: speed
           });
        }
    }, layer);

    return{
        layer:layer,
        animation: animation
    }
}());