// /js/controllers/FieldController.js

function FieldController(gameModel){
	this._fields = [];
	this._views = [];
	this._gameModel = gameModel;

}

FieldController.prototype.update = function(event){
	switch(event.type){
		case 'PROGRESS_BAR_CHANGED': 
			this._fields[event.id].setProgress(event.data);
			break;
		case 'TANK_VOL_CHANGED':
			this._fields[event.id].setTankVol(event.data);
			break;
		case 'DRY_PRESS':
			//this._fields[event.id].setTankVol((event.data)+1);
			this._gameModel.tankDry(event.field);
			//(this._gameModel.getGlobalTank()-1);
			break;
		case 'HARVEST_PRESS':
			this._fields[event.id].harvest();
			this._gameModel.setMoney(this._gameModel.getMoney()+40);
			this._gameModel.setNbHarvest(this._gameModel.getNbHarvest()+1);
			break;
		
	}
};


// ajout du modèle
FieldController.prototype.addField = function(field){
	this._fields.push(field);
};

//ajout de la vue
FieldController.prototype.addFieldView = function(fieldView){
	this._views.push(fieldView);
};