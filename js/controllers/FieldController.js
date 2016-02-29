// /js/controllers/FieldController.js

function FieldController(model, view){
	this._model = model;
	this._view = view;
	this._fields = [];
	this._views = [];
	// this._game = game;

}

FieldController.prototype.update = function(event){
	switch(event.type){
		case 'PROGRESS_BAR_CHANGED': 
			this._model.setProgress(event.data);
			break;
		case 'TANK_VOL_CHANGED':
			this._model.setTankVol(event.data);
			break;
		case 'DRY_PRESS':
			this._model.setTankVol((event.data)+1);
			break;
		case 'HARVEST_PRESS':
			this._model.harvest();
			break;
	}

};



FieldController.prototype.addField = function(field){
	this._fields.push(field);
};

FieldController.prototype.addFieldView = function(fieldView){
	this._views.push(fieldView);
};