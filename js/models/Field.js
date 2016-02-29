// /js/models/Field.js

function Field(game){
	Observable.call(this);
	//this._game = game;
	this._progress = 0;
	this._tank = 3;
	this._intTank = null;
	this._intProgress = null;
	this._mature();
	this._tankDraw();
}

Field.prototype = Object.create(Observable.prototype); // Field extends Observable
Field.prototype.constructor = Field;

//maturation du champs = barre de progression incrémente d'1 chaque sec
Field.prototype._mature = function(){
	if(!this._intProgress){
		this._intProgress = setInterval(function(){
			this.setProgress(this._progress + 1); //augmente valeur de 1 chaque seconde
			if (this._progress === 20 || this._tank === 0){
				clearInterval(this._intProgress);
				this._intProgress = null;
			}
		}.bind(this), 1000);		
	}
};
//utilisation de l'eau de la citerne du champ = diminution de 1L toutes les sec
Field.prototype._tankDraw = function(){
	if(!this._intTank){
		this._intTank = setInterval(function(){
			this.setTankVol(this._tank - 1);
			if(this._tank === 0){
				clearInterval(this._intTank);
				this._intTank = null;

			}
		}.bind(this), 1000);
	}
};


//Bouton irriguer = augmentation vol citerne du champs tant que barre progress < 20
Field.prototype.dryFields = function(){
	if(this._progress < 20){
		this._tank = this.getTankVol() + 1; //augmente volume citerne de 1
		this.notify({type: 'DRY_PRESS', data: this._model.getTankVol() });	
	}
};

//Bouton récolter = si barre progress complète (soit value=20)
Field.prototype.harvest = function(){
	if(this._progress === 20){

	}
};

Field.prototype.getTankVol = function(){
	return this._tank;
};

Field.prototype.getProgress = function(){
	return this._progress;
};

Field.prototype.setTankVol = function(tankVol){
	this._tank = tankVol;
	this.notify({type: 'TANK_VOL_CHANGED', data: this.getTankVol()});
};

Field.prototype.setProgress = function(progress){
	this._progress = progress;
	this.notify({type: 'PROGRESS_BAR_CHANGED', data: this.getProgress()});
};
