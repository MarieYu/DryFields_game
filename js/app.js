// js/app.js

var ctrlField = new FieldController();
var gameModel = new Game();
var ctrlGame = new GameController(gameModel);
var gameView = new GameView(gameModel);

for (var ii=0; ii<=2; ii++){
	var field = new Field(ii);//instance d'un modèle avec id=ii
	var fieldView = new FieldView(field, ii);//instance d'une vue avec id=ii

	gameModel.addFieldModel(field);//ajout modèle champ à la partie
	
	ctrlField.addFieldView(fieldView);//ajout vue au controleur champs
	ctrlField.addField(field); //ajout modèle au controleur de champs
	//Observer
	fieldView.addObserver(ctrlField);
	gameView.addObserver(ctrlGame);
	field.addObserver(fieldView);
	gameModel.addObserver(fieldView);
}

console.log(ctrlField);





