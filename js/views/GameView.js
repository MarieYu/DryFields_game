// /js/views/Gameview.js

function GameView(gameModel){
	Observable.call(this);
	this._gameModel = gameModel;
	this._createElements();
	this._bindListeners();

}

GameView.prototype = Object.create(Observable.prototype); // GameView extends Observable
GameView.prototype.constructor = GameView;

GameView.prototype._createElements = function(){
	var body = $(document.body);
	this._divGame = $('<div class="gameData"></div>');
	this._nbHarvestElem = $('<span id="nbHarv"></span>');
	this._globalTankElem = $('<span id="globalTank"></span>');
	this._moneyElem = $('<span id="money"></span>');
	this._goElem = $('<button>START</button>');

	this._divGame.append(this._nbHarvestElem);
	this._divGame.append(this._globalTankElem);
	this._divGame.append(this._moneyElem);
	body.append(this._goElem);
	body.append(this._divGame);
	this.display();
};

GameView.prototype.display = function(){
	this._nbHarvestElem.html(this._gameModel.getNbHarvest()+' récoltes');
	this._globalTankElem.html(this._gameModel.getGlobalTank()+' L');
	// console.log(this._gameModel.getNbHarvest());
	this._moneyElem.html(this._gameModel.getMoney()+' $');
};

GameView.prototype._bindListeners = function(){
	this._goElem.on('click', function(e){

	});
};

GameView.prototype.update = function(event){
	if(event.type === 'MONEY_CHANGED'){
		this.display();
	}
	if(event.type === 'GLOBAL_TANK_CHANGED'){
		this.display();
	}
	if(event.type === 'NB_HARVEST_CHANGED'){
		this.display();
	}
};