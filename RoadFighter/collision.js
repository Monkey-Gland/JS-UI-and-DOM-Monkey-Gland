function detectCollision() {
	var collisionDetected = false,
		carLeftCoords=myCar.x(),
		carRightCoords=myCar.x()+80,
		carTopCoords=myCar.y(),
		carBottomCoords=myCar.y()+160;
	
	//console.log(carLeftCoords+'-'+carRightCoords+', '+carTopCoords+'-'+carBottomCoords);
	
	for (var i = 0,len = enemyCars.cars.length; i < len; i+=1) {
		var enemyCarLeftCoords = enemyCars.cars[i].getX(),
			//enemyCarRightCoords = enemyCars.cars[i].getX()+80,
			//enemyCarBottomCoords = enemyCars.cars[i].getY()+160,
			enemyCarTopCoords = enemyCars.cars[i].getY();
			
		//console.log('car '+i+': '+enemyCars.cars[i].getX());
		
		if (enemyCarTopCoords >= carTopCoords && enemyCarTopCoords <= carBottomCoords &&
			enemyCarLeftCoords >= carLeftCoords && enemyCarLeftCoords <= carRightCoords) {
			collisionDetected = true;
		}
		
	}
	console.log(collisionDetected);
	return collisionDetected;
}