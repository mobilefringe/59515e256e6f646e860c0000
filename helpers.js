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
    $('#search_input').keyup(function(e){
        showSearchResults();
    });
    
    $('#search_input').on('input', function() {
        showSearchResults();
    });
    function showSearchResults(){
    $('#search_results').show();
    if($('#search_input').val().length === 0){
        $('#search_results').hide();
    }else{
        var search_results = getSearchResults($('#search_input').val(),99,100);
        $('.search-results-count').html("Total Results : "+search_results.summary.count);
        renderSearchResultsTemplate('#search_results_template','#search_results_items',search_results);
        if (search_results["stores"]){
            if (search_results["stores"].length > 0){
                $("#store_results_header").html(search_results["stores"].length+" Stores <i id='store_arrow' class='fa fa-chevron-right pull-right'></i>") ;
                $("#store_results_header").show();
            }
            
        } else {
            $("#store_results_header").hide();
        }
        if (search_results["promotions"]){
            if (search_results["promotions"].length > 0){
                $("#promotions_results_header").html(search_results["promotions"].length+" Promotions <i id='promo_arrow' class='fa fa-chevron-right pull-right'></i>")    ;
                $("#promotions_results_header").show();
            }
            
        } else {
            $("#promotions_results_header").hide();
        }
        if (search_results["events"]){
            if (search_results["events"].length > 0) {
                $("#events_results_header").html(search_results["events"].length+" Events <i id='event_arrow' class='fa fa-chevron-right pull-right'></i>")
                $("#events_results_header").show();
            }
            
        } else {
            $("#events_results_header").hide();
        }
    }
}
});
function init(e){
    
	
}
function show_content(){
    $('.yield').fadeIn();
    $(".modal-backdrop").remove();
}