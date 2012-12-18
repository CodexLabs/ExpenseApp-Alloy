var Paint = require('ti.paint');

var paint = Paint.createPaintView({
	strokeWidth: 6,
	strokeColor:'#2a81df',
	zIndex:10,
	bottom:0,
	top:0
});
$.wrapper.add(paint);

$.win.orientationModes = [ 
	Titanium.UI.LANDSCAPE_RIGHT
];
	
$.win.addEventListener('open', function() {
	Titanium.UI.orientation = Titanium.UI.LANDSCAPE_RIGHT;
});

// Callback functions
function btnPreviousCallback(e) {
	var add = Alloy.createController('forms/add').getView();
	add.open();
}

function btnSendCallback(e) {
	alert("sending");
}

function btnBackCallback(e) {
	var addExpense = Alloy.createController('addExpense').getView();
	addExpense.open();
}

function btnClearCallback(e) {
	paint.clear();
}