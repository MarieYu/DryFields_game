// /js/models/Field.js

function Field(){
	Observable.call(this);
	//this._id = id;
	this._progress = 0;
	this._tank = 0;
	this._mature();
}

Field.prototype = Object.create(Observable.prototype); // Field extends Observable
Field.prototype.constructor = Field;

//maturation du champs = barre de progression incrémente d'1 chaque sec
Field.prototype._mature = function(){
	if(!this._intProgress){
		this._intProgress = setInterval(function(){
			console.log((this._progress + 1));
			this.setProgress(this._progress + 1); //augmente valeur de 1 chaque seconde
			if (this._progress === 20){
				clearInterval(this._intProgress);
				this._intProgress = null;
			}
		}.bind(this), 1000);		
	}
};


//Bouton irriguer = augmentation de la maturité du champs + diminution du volume citerne
Field.prototype.dryFields = function(){
		this._progress = this.getProgress() + 1; //augmente maturité de 1
		this._tank = this.getTankVol() - 1; //diminue volume citerne de 1
};


Field.prototype.getTankVol = function(){
	return this._tank;
};

Field.prototype.getProgress = function(){
	return this._progress;
};

Field.prototype.setTankVol = function(tankVol){
	this._tank = tankVol;
	this.notify({type: 'TANK_VOL_CHANGED', data: this._model.getTankVol()});
};

Field.prototype.setProgress = function(progress){
	this._progress = progress;
	this.notify({type: 'PROGRESS_BAR_CHANGED'});
};