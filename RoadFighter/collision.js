function detectCollision(myCar) {
    //I used the collision algorithm from here:
    //http://gamedev.stackexchange.com/questions/586/what-is-the-fastest-way-to-work-out-2d-bounding-box-intersection
    //The idea is to check twice if the car is colliding. I imagined two boxes for the car - big and small.
    //The small hitbox is the full height of the car with less width than the whole car.
    //The big hitbox is the full width of the car with less height than the whole car.
    //Using paint.net I measured the offsets needed for the algorithm. I recalculated X, Y, width and height for each of the two hitboxes.
    //Visual representation of the idea:
    //http://i.imgur.com/V213NFV.jpg

    var collisionDetected = false,
        playerCarX = myCar.attrs.x,
        playerCarY = myCar.attrs.y,
        carWidth = PLAYER_CONST.width,
        carHeight = PLAYER_CONST.height;

    var sideImageOffset = 2, //px
        sideCarOffset = 25, //px
        topAndBottomCarOffset = 12; //px    Magic number shush

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

    for (var i = 0, len = enemyCars.cars.length; i < len; i += 1) {
        var enemyCarX = enemyCars.cars[i].attrs.x,
            enemyCarY = enemyCars.cars[i].attrs.y,
            smallRectangleEnemyCarX = enemyCarX + sideCarOffset + sideImageOffset,
            smallRectangleEnemyCarY = enemyCarY,
            bigRectangleEnemyCarX = enemyCarX + sideImageOffset,
            bigRectangleEnemyCarY = enemyCarY - topAndBottomCarOffset;

        if (Math.abs(smallRectanglePlayerCarX - smallRectangleEnemyCarX) * 2 < smallRectangleCarWidthSquared &&
            Math.abs(smallRectanglePlayerCarY - smallRectangleEnemyCarY) * 2 < smallRectangleCarHeightSquared) {
            collisionDetected = true;
            break;
        } else if (Math.abs(bigRectanglePlayerCarX - bigRectangleEnemyCarX) * 2 < bigRectangleCarWidthSquared &&
            Math.abs(bigRectanglePlayerCarY - bigRectangleEnemyCarY) * 2 < bigRectangleCarHeightSquared) {
            collisionDetected = true;
            break;
        }
    }
    //old Algotihm
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
