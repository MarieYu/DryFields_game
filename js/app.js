// js/app.js

var ctrl = new FieldController();

for (var ii=0; ii<=2; ii++){
	var field = new Field(ii);//instance d'un modèle avec id=ii
	// console.log("field "+ii+" "+field);
	var view = new FieldView(field, ii);//instance d'une vue avec id=ii
	// console.log("view "+ii+" "+view);
	ctrl.addField(field);//ajout modèle
	ctrl.addFieldView(view);//ajout vue
	view.addObserver(ctrl);
	field.addObserver(view);
}
console.log(ctrl);














// //for (var ii=1; ii<=3; ii++){
// 	var field= new Field();
// 	var view = new FieldView(field);
// 	var ctrl = new FieldController(field);
// 	ctrl.addField(field);
// 	ctrl.addFieldView(view);
// 	view.addObserver(ctrl);
// 	field.addObserver(view);
// //}



// var game = new Game();
// for (var ii=1; ii<=3; ii++){
// 	var field = new Field(ii, game);
// 	var view = new FieldView(field, ii);
// 	var ctrl = new FieldController(field, view);

// 	view.addObserver(ctrl);
// 	field.addObserver(view);
// 	game.addObserver(view);
// }