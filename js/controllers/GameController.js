// /js/js/controllers/GameController.js

function GameController(gameModel){
	this._gameModel = gameModel;


}

//GameController.prototype.addGameModel = function()

GameController.prototype.update = function(event){
	console.log(event);
	switch(event.type){
		case 'WATER_PURCHASE':
		console.log('update controller', event.data);
			//appel fonction achat d'eau sur clic dans la popin
			this._gameModel.waterPurchase(event.data);
			break;
	}
};