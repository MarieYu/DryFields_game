// /js/controllers/FieldController.js

function FieldController(model, view){
	this._model = model;
	this._view = view;
	this._fields = [];
	// this._game = ;

}

FieldController.prototype.update = function(event){

};

FieldController.prototype.addField = function(field){
	this._fields.push(field);
};