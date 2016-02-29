// /js/models/Game.js

function Game(){
	Observable.call(this);
	this._fields = [];
	this._money = 50;
	this._globalTank = 3;
	this._nbHarvest = 0;
	this._volWater = 0;

}

Game.prototype = Object.create(Observable.prototype); // Game extends Observable
Game.prototype.constructor = Game;

Game.prototype.addFieldModel = function(field){
	this._fields.push(field);
};


Game.prototype.start = function(){
	if(!this._interval){
		this._interval = setInterval(function(){
			this.setGlobalTank(this._globalTank - 1);
			if(this._globalTank === 0){
				clearInterval(this._interval);
				this._interval = null;
			}
		}, 1000);
	}
};

Game.prototype.waterPurchase = function(){
	if(this._money > 0){
		this.setMoney(this._money - this._volWater);//diminution de 1$/L acheté
		this.setGlobalTank(this._globalTank + this._volWater);//augmentation vol citerne globale
	}
};


// ------------------ GETTER & SETTER ----------------------- //
Game.prototype.getMoney = function(){
	return this._money;
};

Game.prototype.getGlobalTank = function(){
	return this._globalTank;
};

Game.prototype.getNbHarvest = function(){
	return this._nbHarvest;
};

Game.prototype.getVolWater = function(){
	return this._volWater;
};

Game.prototype.setMoney = function(money){
	this._money = money;
	this.notify({type: 'MONEY_CHANGED', data: this._gameModel.getMoney()});
};

Game.prototype.setGlobalTank = function(globalTank){
	this._globalTank = globalTank;
	this.notify({type: 'GLOBAL_TANK_CHANGED', data: this._gameModel.getGlobalTank()});
};

Game.prototype.setNbHarvest = function(nbHarv){
	this._nbHarvest = nbHarv;
	this.notify({type: 'NB_HARVEST_CHANGED', data: this._gameModel.getNbHarvest()});
};

Game.prototype.setVolWater = function(volWater){
	this._volWater = volWater;
	this.notify({type: 'VOL_WATER_CHANGED', data: this._gameModel.getVolWater()})
};
// ------------------------------------------------------------- //
