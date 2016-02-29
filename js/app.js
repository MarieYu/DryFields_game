// js/app.js


//for (var ii=1; ii<=3; ii++){
	var field= new Field();
	var view = new FieldView(field);
	var ctrl = new FieldController(field, view);
	// ctrl.addField(field);
	// ctrl.addFieldView(view);
	view.addObserver(ctrl);
	field.addObserver(view);
//}


// //Champ A
// var fieldA = new Field();//model
// var viewA = new FieldView(fieldA);//view
// var ctrl = new FieldController();//controller

// viewA.addObserver(ctrl);
// fieldA.addObserver(viewA);

// //Champ B
// var fieldB = new Field();//model
// var viewB = new FieldView(fielB);//view
// var ctrl = new FieldController();//controller

// viewB.addObserver(ctrl);
// fieldB.addObserver(viewB);

// //Champ C
// var fieldC = new Field();//model
// var viewC = new FieldView(fielC);//view
// var ctrl = new FieldController();//controller

// viewC.addObserver(ctrl);
// fieldC.addObserver(viewC);