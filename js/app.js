$(document).ready(function(){

		var list = document.createElement('div');
		var listCat = document.createElement('a');
		var listItem = document.createElement('a');
		var listCheckBox = document.createElement('div');
		var listLabel = document.createElement('label');
		var listInput = document.createElement('input');
		var catTitle = "Example Title";
		var itemText = "Example item";

		list.className = 'list-group col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3';
		listCat.className = 'list-group-item active cat';
		listItem.className = 'list-group-item carrot';
		listCheckBox.className = 'checkbox smallMargin';		
		
		listCat.innerHTML = catTitle;
		listLabel.innerHTML = itemText;

	var buildList = function () {

		$('#heresWhat').after(list);
		$('.list-group').append(listCat);
				
		$('.cat').after(listItem);
		$('.carrot').append(listCheckBox);
		$('.checkbox').append(listLabel);
		$('label').prepend(listInput);
		$('label').children().attr('type', 'checkbox');
		
		for (var x = 0; x <5; x++) {
			var listItem2 = document.createElement('a');
			var listCheckBox2 = document.createElement('div');
			var listLabel2 = document.createElement('label');
			var listInput2 = document.createElement('input');
			var catTitle2 = "Example Title";
			var itemText2= "Example item";

			listItem2.className = 'list-group-item carrot';
			listItem2.className = 'list-group-item carrot';
			listCheckBox2.className = 'checkbox smallMargin';		
			
			listLabel2.innerHTML = itemText;

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

	buildList();

});

$('#back').click(function() {

	$('.list-group').children().remove();
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