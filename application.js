/*Created 2015-02-28 by CodeCloud Team*/
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

function renderGeneral(container, template, collection){
    var item_list = [];
    var item_rendered = [];
    var template_html = $(template).html();
    Mustache.parse(template_html); 
    $.each( collection , function( key, val ) {
        var repo_rendered = Mustache.render(template_html,val);
        item_rendered.push(repo_rendered);
       
    });
    $(container).html(item_rendered.join(''));
}