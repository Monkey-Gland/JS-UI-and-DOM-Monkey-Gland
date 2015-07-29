function detectCollision(myCar) {
    var collisionDetected = false,
		playerCarX = myCar.attrs.x,
		playerCarY = myCar.attrs.y,
		carWidth = PLAYER_CONST.width,
		carHeight = PLAYER_CONST.height;

    var sideImageOffset = 2, //px   ForX
        sideCarOffset = 25, //px    ForX
        topAndBottomCarOffset = 18; //px    ForY
        // topSideMirrorOffset = 210, //px
        // sideMirrorHeight = 10; //px

    var smallRectangleCarWidth = carWidth - 2 * (sideCarOffset + sideImageOffset),
        smallRectangleCarHeight = carHeight,
        bigRectangleCarWidth = carWidth - 2 * sideImageOffset,
        bigRectangleCarHeight = carHeight - 2 * topAndBottomCarOffset,
        smallRectangleCarWidthSquared = smallRectangleCarWidth + smallRectangleCarWidth,
        smallRectangleCarHeightSquared = smallRectangleCarHeight + smallRectangleCarHeight,
        bigRectangleCarWidthSquared = bigRectangleCarWidth + bigRectangleCarWidth,
        bigRectangleCarHeightSquared = bigRectangleCarHeight + bigRectangleCarHeight,

        smallRectanglePlayerCarX = playerCarX + sideCarOffset + sideImageOffset,
        smallRectanglePlayerCarY = playerCarY,
        bigRectanglePlayerCarX = playerCarX + sideImageOffset,
        bigRectanglePlayerCarY = playerCarY + topAndBottomCarOffset;

    for (var i = 0, len = enemyCars.cars.length; i < len; i+=1) {
        var enemyCarX = enemyCars.cars[i].attrs.x,
            enemyCarY = enemyCars.cars[i].attrs.y,
            smallRectangleEnemyCarX = enemyCarX + sideCarOffset + sideImageOffset,
            smallRectangleEnemyCarY = enemyCarY,
            bigRectangleEnemyCarX = enemyCarX + sideImageOffset,
            bigRectangleEnemyCarY = enemyCarY - topAndBottomCarOffset;

            console.log('x: ' + enemyCarX + ' y: ' + enemyCarY + ' smallX:' + smallRectangleEnemyCarX + 'smallY:' + smallRectangleEnemyCarY +
                        ' bigX:' + bigRectangleEnemyCarX + ' bigY:' + bigRectangleEnemyCarY);

            if (Math.abs(smallRectanglePlayerCarX - smallRectangleEnemyCarX) * 2 < smallRectangleCarWidthSquared &&
                Math.abs(smallRectanglePlayerCarY - smallRectangleEnemyCarY) * 2 < smallRectangleCarHeightSquared) {
                collisionDetected = true;
                gameOver();
                console.log('HI');
                break;
            } else if (Math.abs(bigRectanglePlayerCarX - bigRectangleEnemyCarX) * 2 < bigRectangleCarWidthSquared &&
                Math.abs(bigRectanglePlayerCarY - bigRectangleEnemyCarY) * 2 < bigRectangleCarHeightSquared) {
                collisionDetected = true;
                gameOver();
                console.log('Hello');
                break;
            }
    }

    // for (var i = 0, len = enemyCars.cars.length; i < len; i++) {
    //     var enemyCarX = enemyCars.cars[i].attrs.x,
	// 		enemyCarY = enemyCars.cars[i].attrs.y;
    //
    //     if (Math.abs(playerCarX - enemyCarX) * 2 < (carWidth + carWidth) &&
	// 		Math.abs(playerCarY - enemyCarY) * 2 < (carHeight + carHeight)) {
    //         //http://gamedev.stackexchange.com/questions/586/what-is-the-fastest-way-to-work-out-2d-bounding-box-intersection
    //
    //         collisionDetected = true;
    //         gameOver();
    //     }
    // }
    return collisionDetected;
}
function gameOver() {

    document.getElementById('canvas').style.display = 'none';
    document.getElementById('loadingMenu').style.display = 'block';
    document.getElementById('gameOver').style.display = 'inline-block';
    document.getElementById('startBotton').textContent = 'TRY AGAIN';
    document.getElementById('infoBotton').style.display = 'none';
    running = false;
   // anim.stop();
    enemyCarsAnimation.stop();
}
