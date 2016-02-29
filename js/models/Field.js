// /js/models/Field.js

function Field(){
	Observable.call(this);
	this._game = game;
	this._interval = null;
	this._progress = 15;
	this._tank = 3;
	this._mature();

}

Field.prototype = Object.create(Observable.prototype); // Field extends Observable
Field.prototype.constructor = Field;

//maturation du champs = barre de progression incrémente d'1 chaque sec
Field.prototype._mature = function(){
	if(!this._interval && this._progress < 20){
		this._interval = setInterval(function(){
			this.setProgress(this._progress + 1); //augmente valeur de 1 chaque seconde
			this.setTankVol(this._tank - 1);
			
			if (this._progress === 20){
				clearInterval(this._interval);
				this._interval = null;
				this.notify({type: 'HARVEST_TIME'});//pour changer bouton de couleur
			}
			if(this._tank === 0){
				clearInterval(this._interval);
				this._interval = null;
				this.setProgress(0);
			}
		}.bind(this), 1000);		
	}
};
// //utilisation de l'eau de la citerne du champ = diminution de 1L toutes les sec
// Field.prototype._tankDraw = function(){
// 	if(!this._intTank){
// 		this._intTank = setInterval(function(){
// 			if(this._tank === 0 || this._progress === 20){
// 				clearInterval(this._intTank);
// 				this._intTank = null;
// 			}
// 		}.bind(this), 1000);
// 	}
// };


//progress bar augmente si citerne > 0
Field.prototype.dryFields = function(){
	if(this._tank > 0){
		this._mature();
	}
};

//Bouton récolter = si barre progress complète (soit value=20)
Field.prototype.harvest = function(){
	if(this._progress === 20 && this._tank > 0){		
		this.setProgress(0); //remise à 0 de la maturité du champs après récolte
		this._mature();
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
	this.dryFields();
	this.notify({type: 'TANK_VOL_CHANGED' , data: this.getTankVol()});
};

Field.prototype.setProgress = function(progress){
	this._progress = progress;
	this.notify({type: 'PROGRESS_BAR_CHANGED', data: this.getProgress()});
};

