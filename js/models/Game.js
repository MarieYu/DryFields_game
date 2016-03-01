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

Game.prototype.tankDry = function(field){
	if(this._globalTank > 0){
		this.setGlobalTank((this._globalTank)-1);
		field.setTankVol(field.getTankVol()+1);
	}
};

Game.prototype.start = function(){

};

Game.prototype.waterPurchase = function(data){//data correcpond à ce qu'on passe comme volume d'eau acheté
	if(this._money > 0 && this._money >= parseInt(data)){
		console.log(this._money, parseInt(data));
		this.setMoney(this._money - parseInt(data));//diminution de 1$/L acheté
		this.setGlobalTank(this.getGlobalTank() + parseInt(data));//augmentation vol citerne globale
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
	this.notify({type: 'MONEY_CHANGED', data: this.getMoney()});
};

Game.prototype.setGlobalTank = function(globalTank){
		this._globalTank = globalTank;
		this.notify({type: 'GLOBAL_TANK_CHANGED', data: this.getGlobalTank()});			
};

Game.prototype.setNbHarvest = function(nbHarv){
	this._nbHarvest = nbHarv;
	this.notify({type: 'NB_HARVEST_CHANGED', data: this.getNbHarvest()});
};

Game.prototype.setVolWater = function(volWater){
	this._volWater = volWater;
	this.notify({type: 'VOL_WATER_CHANGED', data: this.getVolWater()})
};
// ------------------------------------------------------------- //
