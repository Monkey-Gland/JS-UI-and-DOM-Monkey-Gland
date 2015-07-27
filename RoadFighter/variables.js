var CONST = {
    width: 700,
    height: 800,
    midLineHeight: 50,
    midLineWidth: 10,
    sideLaneWidth: 10,
    sideLaneHeight: 20,
    treeRadius: 25,
    shadowDistance: 7,
    imageHeight: 100,
    imageWidth: 100,
    enemyImageSources: [
        "images/blue_car.png",
        "images/green_car.png",
        "images/purple_car.png",
        "images/yellow_car.png"
    ]
};

var ENEMY_CONST = {
    count: 15,
    width: 80,
    height: 160,
    maxHorizontal: 450,
    minHorizontal:150,
    maxVertical: 600,
    minVertical: -4000,
    spawnRangeCoefficient: 6
};


var MYCAR_CONST = {
    width: 80,
    height: 160,
    leftArrowKey: 37,
    rightArrowKey: 39,
    upArrowKey: 38,
    displacement: 8,
    speedUp: 2,
    speedDown: 0.00001,
    speedMax: 20,
    speedMin: 1
};

var speed = 2,
    midLaneBoxes = [],
    sideLaneBoxes = [],
    trees = [];
