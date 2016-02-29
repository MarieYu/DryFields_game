// /js/models/Game.js

function Game(){
	Observable.call(this);
	this._fields = [];
	this._money = 50;
	this._globalTank = 3;
	this_nbHarvest = 0;
	//this._addFieldModel();
}

Game.prototype = Object.create(Observable.prototype); // Game extends Observable
Game.prototype.constructor = Game;

Game.prototype._addFieldModel = function(field){
	this._fields.push(field);
};

Game.prototype.getMoney = function(){
	return this._money;
};

Game.prototype.getGlobalTank = function(){
	return this._globalTank;
};

Game.prototype.getNbHarvest = function(){
	return this._nbHarvest;
};

Game.prototype.setMoney = function(money){
	this._money = money;
	this.notify({type: 'MONEY_CHANGED', data: this._model.getMoney()});
};

Game.prototype.setGlobalTank = function(globalTank){
	this._globalTank = globalTank;
	this.notify({type: 'GLOBAL_TANK_CHANGED', data: this._model.getGlobalTank()});
};

Game.prototype.setNbHarvest = function(nbHarv){
	this._nbHarvest = nbHarv;
	this.notify({type: 'NB_HARVEST_CHANGED', data: this._model.getNbHarvest()});
};

