/*Created 2015-02-28 by CodeCloud Team*/

function test_function(){
    alert('calling test_function');
}

function init(){
    $('#menu-icon').click(function(){
		$(this).toggleClass('open');
		$('#menu_page').slideToggle();
		$('#menu-icon').toggle();
		$('<div class="modal-backdrop custom_backdrop" style="z-index:1"></div>').appendTo(document.body);
// 		$('.logo_container').toggle();
	});
	
    // $('#open_menu').click(function(){
    //     $('#mobile_menu').slideDown();
    //     $(this).hide();
    //     $('#close_menu').show();
    // });
    
    $('.close_menu').click(function(){
        $('#menu_page').slideUp();
        $(this).hide();
        $('#menu-icon').toggle();
        // $('.logo_container').toggle();
    });
	
}