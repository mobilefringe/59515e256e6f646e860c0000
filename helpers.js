$('document').ready(function(e) {
    $('#menu-icon').click(function(){
		$(this).toggleClass('open');
		$('#menu_page').slideToggle(100,"linear");
		$('#menu-icon').toggle();
        // $('<div class="modal-backdrop custom_backdrop"></div>').appendTo(document.body);
        // $('.logo_container').toggle();
	});
    
    $('.close_menu').click(function(){
        $('#menu_page').hide();
        //$(this).hide();
        $('#menu-icon').toggle();
        $(".custom_backdrop").remove();
        // $('.logo_container').toggle();
    });
    
    $('#search_mobile').click(function(e){
        $('#mobile_search').show();
        $('.social_icon_mobile').hide();
        $('#m_search').hide();
        $('#m_search_close').show();
        $('#mobile_search_box').focus();
        e.preventDefault();
    });
});
function init(e){
    
	
}
function show_content(){
    $('.yield').fadeIn();
    $(".modal-backdrop").remove();
}