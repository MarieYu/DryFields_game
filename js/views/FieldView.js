// /js/views/FieldView.js

function FieldView(model){
	Observable.call(this);
	this._model = model;
	this._createElements();
	this._bindListeners();

}

FieldView.prototype = Object.create(Observable.prototype); // FieldView extends Observable
FieldView.prototype.constructor = FieldView;


FieldView.prototype._createElements = function(){
	var body = $(document.body);
	this._spanElem = $('<span></span>');
	this._dryElem = $('<button>irriguer</button>'); //bouton irriguer
	this._harvestElem  = $('<button class="">récolter</button>'); //bouton récolte
	this._tankElem = $('<div id="tank"></div>');//citerne d'eau
	this._progressElem  = $('<progress value=\"0\" max=\"20\"></progress>');
	
	this._spanElem.append(this._tankElem);
	this._spanElem.append(this._dryElem);
	this._spanElem.append(this._harvestElem);
	this._spanElem.append(this._progressElem);
	body.append(this._spanElem)
};

FieldView.prototype.display = function(){
	this._tankElem.html(this._model.getTankVol()+' L');
	this._progressElem.val(this._model.getProgress());
};

FieldView.prototype._bindListeners = function(){
	this._dryElem.on('click', function(e){
		this.notify({type: 'DRY_PRESS', data: this._model.getTankVol()});
	}.bind(this));
	this._harvestElem.on('click', function(e){
		this._harvestElem.removeClass('harvestTime');
		this.notify({type: 'HARVEST_PRESS'});
	}.bind(this));
};

FieldView.prototype.update = function(event){
	if(event.type === 'PROGRESS_BAR_CHANGED'){
		this.display();
	}
	if(event.type === 'TANK_VOL_CHANGED'){
		this.display();
	}
	if(event.type === 'HARVEST_TIME'){
		this._harvestElem.attr('class', 'harvestTime');
	}


	
};