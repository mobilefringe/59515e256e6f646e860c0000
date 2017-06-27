/*Created 2015-02-28 by CodeCloud Team*/

function test_function(){
    alert('calling test_function');
}

function init(){
    $('#menu-icon').click(function(){
		$(this).toggleClass('open');
		$('#menu_page').slideToggle();
		$('#menu-icon').toggle();
		$('.logo_container').toggle();
	});
	
    // $('#open_menu').click(function(){
    //     $('#mobile_menu').slideDown();
    //     $(this).hide();
    //     $('#close_menu').show();
    // });
    
    $('.close_menu').click(function(){
        $('#mobile_menu').slideUp();
        $(this).hide();
        $('#open_menu').show();
    });
	
}