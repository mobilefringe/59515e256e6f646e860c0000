$('document').ready(function() {
});
function init(){
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
    var windowWidth = $(window).width();
    if(windowWidth <= 1024) {
         $('.panel-collapse').removeClass('in')
    }
    
    var n = 0;
    $("div.home_page h3").each(function(){
        if (n % 4 == 1 ){
            $(this).addClass("yellow");    
            $(this).addClass("ph"+n);    
        } 
        if (n % 4 == 2 ){
            $(this).removeClass("yellow");  
            $(this).addClass("purple");  
            $(this).addClass("ph"+n);    
        }
        if (n % 4 == 3 ){
            $(this).removeClass("yellow");  
            $(this).removeClass("purple");  
            $(this).addClass("red");    
            $(this).addClass("ph"+n);    
        } 
        
        n = n+1;
    });
    
}