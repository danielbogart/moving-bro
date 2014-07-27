$(document).ready(function(){

	var cleaningSupplies = [
		{id: 'Paper Towels', site: '#'},
		{id: 'Mop', site: '#'},
		{id: 'Bucket', site: '#'},
		{id: 'Broom', site: '#'},
		{id: 'Dust pan', site: '#'},
		{id: 'Garbage can', site: '#'},
		{id: 'Garbage bags', site: '#'},
		{id: 'Cleaning solutions', site: '#'},
		{id: 'Dish soap', site: '#'},
		{id: 'Sponges', site: '#'},
		{id: 'Laundry detergent', site: '#'},
		{id: 'Laundry basket', site: '#'},
		{id: 'Dish drying rack', site: '#'},
		{id: 'Dishwasher detergent', site: '#'},
		{id: 'Iron', site: '#'},
		{id: 'Ironing board', site: '#'}
	];

	var kitchenSupplies = [
		{id: 'Plates', site: '#'},
		{id: 'Bowls', site: '#'},
		{id: 'Glasses', site: '#'},
		{id: 'Coffee mugs', site: '#'},
		{id: 'Forks, knives, spoons', site: '#'},
		{id: 'Kitchen knife set', site: '#'},
		{id: 'Salt & pepper shakers', site: '#'},
		{id: 'Pots & pans', site: '#'},
		{id: 'Bakeware (cookie sheet, baking sheet, cake pan)', site: '#'},
		{id: 'Mixing bowls', site: '#'},
		{id: 'Cooking utensils (spatula, tongs, ladle, serving spoons)', site: '#'},
		{id: 'Can opener', site: '#'},
		{id: 'Colander', site: '#'},
		{id: 'Corkscrew', site: '#'},
		{id: 'Ice cream scoop', site: '#'},
		{id: 'Paper towel holder', site: '#'},
		{id: 'Chip clips', site: '#'},
		{id: 'Measuring cups & spoons', site: '#'},
		{id: 'Coffee maker', site: '#'},
		{id: 'Microwave', site: '#'},
		{id: 'Toaster', site: '#'},
		{id: 'Blender', site: '#'},
		{id: 'Dish towels', site: '#'},
		{id: 'Oven mitts', site: '#'},
		{id: 'Potholders', site: '#'},
		{id: 'Table cloths', site: '#'},
		{id: 'Placemats', site: '#'},
		{id: 'Trash can', site: '#'},
		{id: 'Napkins', site: '#'},
		{id: 'Ice cube trays', site: '#'},
		{id: 'Plastic wrap, aluminum foil', site: '#'},
		{id: 'Serving bowl', site: '#'},
		{id: 'Wine glasses', site: '#'},
		{id: 'Shot glasses', site: '#'},
		{id: 'Corkscrew', site: '#'},
		{id: 'Peeler', site: '#'}
	];

	var furniture = [
		{id: 'Dining table', site: '#'},
		{id: 'Ding chairs', site: '#'},
		{id: 'Sofa', site: '#'},
		{id: 'Lounge chair', site: '#'},
		{id: 'Floor lamp', site: '#'},		
		{id: 'Coffee table', site: '#'}		
	];

	var bedroomBasics = [
		{id: 'Bed', site: '#'},
		{id: 'Bed frame', site: '#'},
		{id: 'Bed sheets', site: '#'},
		{id: 'Blankets', site: '#'},
		{id: 'Pillows', site: '#'},
		{id: 'Alarm clock', site: '#'},
		{id: 'Clothes hangers', site: '#'},
		{id: 'Storage boxes', site: '#'},
		{id: 'Night Stand', site: '#'},
		{id: 'Dresser', site: '#'},
		{id: 'Desk', site: '#'},
		{id: 'Dresser', site: '#'},
		{id: 'Fan', site: '#'},
		{id: 'Space heater', site: '#'},
		{id: 'Full-length mirror', site: '#'}
	];

	var bathroom = [
		{id: 'Plunger', site: '#'},
		{id: 'Shower curtain', site: '#'},
		{id: 'Shower basket', site: '#'},
		{id: 'Bath towels', site: '#'},
		{id: 'Bath mat', site: '#'},
		{id: 'Toilet brush', site: '#'},
		{id: 'Bathroom trash can', site: '#'},
		{id: 'Hand soap', site: '#'},
		{id: 'Scale', site: '#'},
		{id: 'Toothbrush holder', site: '#'},
		{id: 'Body wash', site: '#'},
		{id: 'Shampoo & conditioner', site: '#'},
		{id: 'Toothbrush', site: '#'},
		{id: 'Toothpaste', site: '#'},
		{id: 'Floss', site: '#'},
		{id: 'Comb', site: '#'}
	];

	var generalFood = [
		{id: 'Olive Oil', site: '#'},
		{id: 'Salt', site: '#'},
		{id: 'Pepper', site: '#'},
		{id: 'Seasoning set', site: '#'},
		{id: 'Balsamic vinegar', site: '#'},
		{id: 'Baking soda', site: '#'},
		{id: 'Sugar', site: '#'},
		{id: 'Ketchup', site: '#'},
		{id: 'Mustard', site: '#'},
		{id: 'Sriracha', site: '#'}
	];

	var randomStuff = [
		{id: 'Batteries', site: '#'},
		{id: 'Flashlight', site: '#'},
		{id: 'First Aid Kit', site: '#'},
		{id: 'Basic Toolkit', site: '#'},
		{id: 'Light bulbs', site: '#'},
		{id: 'Power strip', site: '#'},
		{id: 'Smoke detector', site: '#'},
		{id: 'Fire extinguisher', site: '#'},
		{id: 'Router', site: '#'},
		{id: 'Modem', site: '#'},
		{id: 'TV', site: '#'},
		{id: 'DVD Player', site: '#'}
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

	if ($('#bathroom').hasClass('active')) {
		buildList(bathroom, 'Bathroom & Toiletries');
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