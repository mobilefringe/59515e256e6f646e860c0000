$('document').ready(function() {
     $('#menu-icon').click(function(){
		$(this).toggleClass('open');
		$('#menu_page').slideToggle(100,"linear");
		$('#menu-icon').toggle();
		$('<div class="modal-backdrop custom_backdrop"></div>').appendTo(document.body);
        // $('.logo_container').toggle();
	});
});
function init(e){
   
	
    // $('#open_menu').click(function(){
    //     $('#mobile_menu').slideDown();
    //     $(this).hide();
    //     $('#close_menu').show();
    // });
    
    $('.close_menu').click(function(){
        $('#menu_page').slideUp();
        //$(this).hide();
        $('#menu-icon').toggle();
        $(".custom_backdrop").remove();
        // $('.logo_container').toggle();
    });
	
}
function show_content(){
    $('.yield').fadeIn();
    $(".modal-backdrop").remove();
    
}