// /js/js/controllers/GameController.js

function GameController(gameModel){
	this._gameModel = gameModel;
}

//GameController.prototype.addGameModel = function()

GameController.prototype.update = function(event){
	switch(event.type){
		case 'WATER_PURCHASE':
		//console.log('update controller', event.data);
			this._gameModel.waterPurchase(event.data);//appel fonction achat d'eau sur clic dans la popin
			break;
		case 'START_PRESS':
			this._gameModel.start();

	}
};

