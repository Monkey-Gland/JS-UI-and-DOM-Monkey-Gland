function detectCollision(myCar) {
	// var collisionDetected = false,
	// 	carLeftCoords=myCar.x(),
	// 	carRightCoords=myCar.x()+80,
	// 	carTopCoords=myCar.y(),
	// 	carBottomCoords=myCar.y()+160;
	//
	// //console.log(carLeftCoords+'-'+carRightCoords+', '+carTopCoords+'-'+carBottomCoords);
	//
	// for (var i = 0,len = enemyCars.cars.length; i < len; i+=1) {
	// 	var enemyCarLeftCoords = enemyCars.cars[i].getX(),
	// 		//enemyCarRightCoords = enemyCars.cars[i].getX()+80,
	// 		//enemyCarBottomCoords = enemyCars.cars[i].getY()+160,
	// 		enemyCarTopCoords = enemyCars.cars[i].getY();
	//
	// 	//console.log('car '+i+': '+enemyCars.cars[i].getX());
	//
	// 	if (enemyCarTopCoords >= carTopCoords && enemyCarTopCoords <= carBottomCoords &&
	// 		enemyCarLeftCoords >= carLeftCoords && enemyCarLeftCoords <= carRightCoords) {
	// 		collisionDetected = true;
	// 	}
	//
	// }
	// console.log(collisionDetected);
	// return collisionDetected;
	var collisionDetected = false,
		playerCarX = myCar.attrs.x,
		playerCarY = myCar.attrs.y,
		carWidth = MYCAR_CONST.width,
		carHeight = MYCAR_CONST.height;

	for (var i = 0, len = enemyCars.cars.length; i < len; i++) {
		var enemyCarX = enemyCars.cars[i].attrs.x,
			enemyCarY = enemyCars.cars[i].attrs.y;

		if (Math.abs(playerCarX - enemyCarX) * 2 < (carWidth + carWidth) &&
			Math.abs(playerCarY - enemyCarY) * 2 < (carHeight + carHeight)) {
				//http://gamedev.stackexchange.com/questions/586/what-is-the-fastest-way-to-work-out-2d-bounding-box-intersection

			collisionDetected = true;
			console.log(collisionDetected);
			alert('Game over');//need change
			anim.stop();
			enemyCarsAnimation.stop();
			return	collisionDetected;
				//alert('Collision!');
		}
	}
	return collisionDetected;
}
