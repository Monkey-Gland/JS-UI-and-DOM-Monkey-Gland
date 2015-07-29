var GAME_CONST = {
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
    ],
    defaultSpeed: 2,
    speed: this.defaultSpeed
};

var gameVariables = {
    time: 0,
    gameInProgress: false
};

var ENEMY_CONST = {
    count: 5,
    width: 80,
    height: 160,
    maxHorizontal: 450,
    minHorizontal:150,
    maxVertical: 600,
    minVertical: -4000,
    spawnRangeCoefficient: 6,
    enemySpeed: 2
};


var PLAYER_CONST = {
    width: 80,
    height: 160,
    leftArrowKey: 37,
    rightArrowKey: 39,
    upArrowKey: 38,
    downArrowKey: 40,
    displacement: 0,
    speedUp: 2,
    speedDown: 1,
    speedMax: 20,
    speedMin: 1
};