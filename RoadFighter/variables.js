var CONST = {
    width: 600,
    height: 600,
    midLineHeight: 50,
    midLineWidth: 10,
    sideLaneWidth: 10,
    sideLaneHeight: 20,
    treeRadius:25,
    enemyImageSources: [
        "images/blue_car.png",
        "images/green_car.png",
        "images/purple_car.png",
        "images/yellow_car.png"
    ]
};

var ENEMY_CONST = {
    count: 10,
    width: 40,
    height: 100,
    maxHorizontal: 450,
    minHorizontal:150,
    maxVertical: 600,
    minVertical: -4000
};

var speed = 2,
    midLaneBoxes = [],
    sideLaneBoxes = [],
    trees = [];