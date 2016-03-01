// js/app.js

var gameModel = new Game();
var ctrlField = new FieldController(gameModel);
var gameView = new GameView(gameModel);
var ctrlGame = new GameController(gameModel);//controller partie connait modèle de la partie

for (var ii=0; ii<=2; ii++){
	var field = new Field(ii);//instance d'un modèle avec id=ii
	var fieldView = new FieldView(field, ii);//instance d'une vue avec id=ii

	gameModel.addFieldModel(field);//ajout modèles champs à la partie
	
	ctrlField.addFieldView(fieldView);//ajout vues au controleur de champs
	ctrlField.addField(field); //ajout modèles au controleur de champs
	//Observer
	fieldView.addObserver(ctrlField);
	field.addObserver(fieldView);
}
//Observer
gameModel.addObserver(gameView);
gameView.addObserver(ctrlGame);

/*console.log(ctrlField);*/





