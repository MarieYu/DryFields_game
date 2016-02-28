// /js/controllers/FieldController.js

function FieldController(model, view){
	this._model = model;
	this._view = view;
	this._fields = [];
	// this._game = ;

}

FieldController.prototype.update = function(event){
	if(event.type === 'PROGRESS_BAR_CHANGED'){
		this._model.setProgress(event.data);
	}
};

FieldController.prototype.addField = function(field){
	this._fields.push(field);
};