$(document)ready(function(){

});

function checkOrder(form) {
		var address = form.orderAddress.value;	
		var cake = form.chosenCake.value;

		$('body').append('<div id="shade"></div>');

		$('#shade').on('click',function(){
			$('#shade').remove();
		});
	}