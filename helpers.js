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
        }
        else{
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
        }
    }
});
function init(e){
     $('<div class="modal-backdrop custom_backdrop"><img src="http://kodekloud.s3.amazonaws.com/sites/554a79236e6f64713f000000/69e8cd982124dc73de1f5a67a627ee75/loading.gif" class="" alt=""></div>').appendTo(document.body);
	
}
function show_content(){
    $('.yield').fadeIn();
    $(".modal-backdrop").remove();
}

function remove_duplicates( ){
    
}

function sortByStoresName (item_list){
    item_list.sort(function(a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    return item_list;
}

// function getAllCategory(){
//     //initData();
//     var mallDataJSON = JSON.parse(getStorage().mallData);
//     //console.log("mallData",mallDataJSON.categories);
//     return mallDataJSON.categories;
// }

function getDineStores (all_categories) {
   // var all_categories = getStoreCategories();
    var dine_categories_id = [];
    var dine_stores = [];
    $.each( all_categories , function( i, cat ) {
        if((cat.name.indexOf("Food") > -1) || (cat.name.indexOf("Restaurant")> -1)) {
            //console.log(cat);
            dine_categories_id.push(cat.id);
        }
    });
    $.each( dine_categories_id , function( i, val ) {
        $.each( getStoresListByCategoryID(parseInt(val)) , function( i, store ) {
            
            dine_stores.push(store);
        });
       //console.log(dine_stores);
    });
    return dine_stores;
}
function getShopStores (all_categories) {
   // var all_categories = getStoreCategories();
    var shop_categories_id = [];
    var shop_stores = [];
    $.each( all_categories , function( i, cat ) {
        if((cat.name.indexOf("Apparel") > -1) || (cat.name.indexOf("Accessories")> -1) || (cat.name.indexOf("Jewellery")> -1)|| (cat.name.indexOf("'s Wear")> -1)|| (cat.name.indexOf("Toys")> -1)|| (cat.name.indexOf("Athletic")> -1)|| (cat.name.indexOf("Stationary")> -1)) {
            //console.log(cat);
            shop_categories_id.push(cat.id);
        }
    });
    $.each( shop_categories_id , function( i, val ) {
        $.each( getStoresListByCategoryID(parseInt(val)) , function( i, store ) {
            
            shop_stores.push(store);
        });
       //console.log(dine_stores);
    });
    return shop_stores;
}