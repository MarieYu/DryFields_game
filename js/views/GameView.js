// /js/views/Gameview.js

function GameView(gameModel){
	Observable.call(this);
	//console.log('gameview ',this._observers);
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
	this._waterElem = $('<button>Acheter de l\'eau</button>');

	this._divGame
		.append(this._nbHarvestElem)
		.append(this._globalTankElem)
		.append(this._moneyElem);
	body.append(this._goElem)
		.append(this._divGame)
		.append(this._waterElem);
	this.display();
};

GameView.prototype.popinWater = function(){
	var body = $(document.body);
	this._popinElem = $('<div id="popin"></div>');
	this._volumeElem = $('<input id="volume" type="number" min=1 max=100 value="1"/>');
	this._buyElem = $('<button id="buy">acheter</button>');
	this._popinElem.append(this._volumeElem).append(this._buyElem);
	body.append(this._popinElem);
	
	this._buyElem.on('click', function(event){//bouton achat d'eau
		this.notify({type: 'WATER_PURCHASE', data: this._volumeElem.val()});
		this._popinElem.hide();
	}.bind(this));
};
//, money: this._gameModel.getMoney(), globalTank: this._gameModel.getGlobalTank() }.bind(this));
GameView.prototype.display = function(){
	this._nbHarvestElem.html(this._gameModel.getNbHarvest()+' récoltes');
	this._globalTankElem.html(this._gameModel.getGlobalTank()+' L');
	this._moneyElem.html(this._gameModel.getMoney()+' $');
};

GameView.prototype._bindListeners = function(){
	this._waterElem.on('click', function(e){
		this.popinWater();//fonction qui crée la popin
	}.bind(this));
	this._goElem.on('click', function(e){//bouton start
		this.notify({type: 'START_PRESS'});
	}.bind(this));
	
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