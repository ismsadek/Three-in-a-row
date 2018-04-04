$(document).ready($('.gif').hide());
//var currentButton = $('.btn');
$('.btn').on('click', hideShowContainer);

var square = $('.col-1');
square.on('click', paintSquare);

function hideShowContainer(e){
	$('.choosing').fadeToggle();
	$('.gif').fadeIn();
}

function paintSquare(e,square){

	square = $(e.currentTarget);
	//console.log(currentButton);
	
	if($('.btn').hasClass('btn-success')){
		square.html('<h3>X</h3>');
		square.addClass('equis');
		$('.btn').removeClass('btn-success');
		$('.btn').addClass('btn-secondary')

		//console.log(currentButton);
	} else {
		square.html('<h3>O</h3>');
		square.addClass('cero');
		$('.btn').removeClass('btn-secondary')
		$('.btn').addClass('btn-success');

		//console.log(currentButton);
	}
	//$('.btn').toggleClass();
	//gameOver();
}

// function gameOver(){
// 	if($('.one').hasClass('equis') && $('.two').hasClass('equis') && $('.three').hasClass('equis') ){
// 		$('#message').html('<h3>El ganador es el jugador X</h3>')
// 	}
// }
// 






