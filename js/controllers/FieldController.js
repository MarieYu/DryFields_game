// /js/controllers/FieldController.js

function FieldController(model, view){
	this._model = model;
	this._view = view;
	this._fields = [];
	// this._game = ;

}

FieldController.prototype.update = function(event){
	switch(event.type){
		case 'PROGRESS_BAR_CHANGED': 
			this._model.setProgress(event.data);
		case 'DRY_PRESS':
			this._model.setTankVol(event.data);
		case 'TANK_VOL_CHANGED':
			this._model.setTankVol(event.data);
	}

};

FieldController.prototype.addField = function(field){
	this._fields.push(field);
};