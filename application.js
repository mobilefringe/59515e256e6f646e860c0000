/*Created 2015-02-28 by CodeCloud Team*/

function test_function(){
    alert('calling test_function');
}

function init(){
    $('#menu-icon').click(function(){
		$(this).toggleClass('open');
		$('#menu').slideToggle();
	});
	
}