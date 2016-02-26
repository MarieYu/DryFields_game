// /js/models/Field.js

function Field(){
	Observable.call(this);
	this._id = id;
	this._tank = tank;
	

}

Field.prototype = Object.create(Observable.prototype); // Field extends Observable
Field.prototype.constructor = Field;

//irrigation des 3 champs = décrémentation des volumes des citernes
Field.prototype.dryFields = function(){
	setInterval(function(){

	}, 1000);
}