// /js/views/FieldView.js

function FieldView(model){
	Observable.call(this);
	this._model = model;
	this._createElements();

}

FieldView.prototype = Object.create(Observable.prototype); // FieldView extends Observable
FieldView.prototype.constructor = FieldView;


FieldView.prototype._createElements = function(){
	var body = $(document.body);
	this._spanElem = $('<span></span>');
	this._dryElem = $('<button>irriguer</button>'); //bouton irriguer
	this._harvestElem  = $('<button>récolter</button>'); //bouton récolte
	this._tankElem = $('<div id="tank">0 L</div>');//citerne d'eau
	this._progressElem  = $('<progress value=\"3\" max=\"20\"></progress>');
	
	this._spanElem.append(this._tankElem);
	this._spanElem.append(this._dryElem);
	this._spanElem.append(this._harvestElem);
	this._spanElem.append(this._progressElem);
	body.append(this._spanElem)
};

FieldView.prototype._init = function(){

};

FieldView.prototype.update = function(event){

};