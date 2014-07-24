$(document).ready(function(){

	var cleaningSupplies = [
		{id: 'Paper Towels', site: '#'},
		{id: 'Mop', site: '#'},
		{id: 'Broom', site: '#'},
		{id: 'Swiffer', site: '#'}
	];

	var kitchenSupplies = [
		{id: 'Pans', site: '#'},
		{id: 'Spatula', site: '#'},
		{id: 'Glasses', site: '#'},
		{id: 'Plates', site: '#'}
	];

	var furniture = [
		{id: 'Couch', site: '#'},
		{id: 'Coffee Table', site: '#'},
		{id: 'Dining Table', site: '#'},
		{id: 'Dining Chairs', site: '#'}
	];

	var bedroomBasics = [
		{id: 'Bed', site: '#'},
		{id: 'Night Stand', site: '#'},
		{id: 'Dresser', site: '#'},
		{id: 'Desk', site: '#'}
	];

	var generalFood = [
		{id: 'Olive Oil', site: '#'},
		{id: 'Salt', site: '#'},
		{id: 'Pepper', site: '#'},
		{id: 'Sriracha', site: '#'}
	];

	var randomStuff = [
		{id: 'Batteries', site: '#'},
		{id: 'Flashlight', site: '#'},
		{id: 'First Aid Kit', site: '#'},
		{id: 'Basic Toolkit', site: '#'}
	];

	var buildList = function (categoryName, categoryTitle) {

		var list = document.createElement('div');
		var listCat = document.createElement('a');
		var listItem = document.createElement('a');
		var listCheckBox = document.createElement('div');
		var listLabel = document.createElement('label');
		var listInput = document.createElement('input');
		var catTitle = categoryTitle;

		list.className = 'list-group col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3 scooby';
		listCat.className = 'list-group-item active cat';
		listItem.className = 'list-group-item carrot';
		listCheckBox.className = 'checkbox smallMargin';		
		
		listCat.innerHTML = catTitle;
		listLabel.innerHTML = categoryName[0].id;

		if ($('.list-group').length == 0) {
		$('#heresWhat').after(list);
		$('.list-group').append(listCat);
				
		$('.cat').after(listItem);
		$('.carrot').append(listCheckBox);
		$('.checkbox').append(listLabel);
		$('label').prepend(listInput);
		$('label').children().attr('type', 'checkbox');

		}	

		else {

		$('.scooby').last().after(list);
		$('.scooby').last().append(listCat);
				
		$('.cat').last().after(listItem);
		$('.carrot').last().append(listCheckBox);
		$('.checkbox').last().append(listLabel);
		$('label').last().prepend(listInput);
		$('label').last().children().attr('type', 'checkbox');

		};
		
		for (var x = 1, y = categoryName.length; x < y; x++) {
			var listItem2 = document.createElement('a');
			var listCheckBox2 = document.createElement('div');
			var listLabel2 = document.createElement('label');
			var listInput2 = document.createElement('input');
			var catTitle2 = "Example Title";
			var itemText2= "Example item";

			listItem2.className = 'list-group-item carrot';
			listItem2.className = 'list-group-item carrot';
			listCheckBox2.className = 'checkbox smallMargin';		
			
			listLabel2.innerHTML = categoryName[x].id;

			$('.carrot:last').after(listItem2);
			$('.carrot:last').append(listCheckBox2);
			$('.checkbox:last').append(listLabel2);
			$('label:last').prepend(listInput2);
			$('label:last').children().attr('type', 'checkbox');
		}

	};

	$("input").change(function() {
	    if(this.checked) {
	        console.log('chizeck mizate');
	    }
	});

$('#soWhat').click(function() {

	$('#page1').hide();
	$('#page2').show();

	if ($('#cSupplies').hasClass('active')) {
		buildList(cleaningSupplies, 'Cleaning Supplies'	);
	};

	if ($('#kSupplies').hasClass('active')) {
		buildList(kitchenSupplies, 'Kitchen Supplies');
	};

	if ($('#furniture').hasClass('active')) {
		buildList(furniture, 'Furniture');
	};

	if ($('#bedroomBasics').hasClass('active')) {
		buildList(bedroomBasics, 'Bedroom Basics');
	};

	if ($('#generalFood').hasClass('active')) {
		buildList(generalFood, 'General Food');
	};

	if ($('#randomStuff').hasClass('active')) {
		buildList(randomStuff, 'Random Stuff');
	};

});

$('#back').click(function() {

	$('.list-group').remove();
	$('#page2').hide();
	$('#page1').show();

});

$('.btn-default').click(function(){
	if ($(this).hasClass('active')) {
	}
	else {
		$(this).parent().children().toggleClass('active');
	}
});

});