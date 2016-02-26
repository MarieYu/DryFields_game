// /js/views/FieldView.js

function FieldView(model){
	Observable.call(this);
	this._model = model;

}

FieldView.prototype = Object.create(Observable.prototype); // FieldView extends Observable
FieldView.prototype.constructor = FieldView;


FieldView.prototype.createElement = function(){
	var body = $(document.body);
	
};

FieldView.prototype._init = function(){

};