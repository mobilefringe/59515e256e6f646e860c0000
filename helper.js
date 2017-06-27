$('document').ready(function() {
    
});
function init(e){
       $('<div class="modal-backdrop custom_backdrop"><img src="http://kodekloud.s3.amazonaws.com/sites/554a79236e6f64713f000000/69e8cd982124dc73de1f5a67a627ee75/loading.gif" class="" alt=""></div>').appendTo(document.body);
	$('#menu-icon').click(function(){
		$(this).toggleClass('open');
		$('#menu_page').slideToggle(100,"linear");
		$('#menu-icon').toggle();
		$('<div class="modal-backdrop custom_backdrop"></div>').appendTo(document.body);
        // $('.logo_container').toggle();
	});
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