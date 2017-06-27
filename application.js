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

function renderPropertyDetails(container, template, collection){
    var item_list = [];
    var item_rendered = [];
    var new_val={};
    var template_html = $(template).html();
    Mustache.parse(template_html); 
    $.each( collection , function( key, val ) {
         
        if(key == "name") {
            new_val.name = val;
        }
        if(key == "description") {
            new_val.description = val;
        }
        if(key == "address1") {
            new_val.address1 = val;
        }
         if(key == "address2") {
            new_val.address2 = val;
        }
        if(key == "city") {
            new_val.city = val;
        }
        if(key == "country") {
            new_val.country = val;
        }
        if(key == "postal_code") {
            new_val.postal_code = val;
        }
        if(key == "contact_name") {
            new_val.contact_name = val;
        }
        if(key == "contact_phone") {
            new_val.contact_phone = val;
        }
        if(key == "contact_email") {
            new_val.contact_email = val;
        }
    });
    var repo_rendered = Mustache.render(template_html,new_val);
    item_rendered.push(repo_rendered);
    $(container).html(item_rendered.join(''));
}
function renderStoreList(container, template, collection, type,starter, breaker){
    var item_list = [];
    var item_rendered = [];
    var template_html = $(template).html();
    Mustache.parse(template_html);   // optional, speeds up future uses
    var store_initial="";
    $.each( collection , function( key, val ) {
        if (type == "stores" || type == "category_stores"){
            if(!val.store_front_url ||  val.store_front_url.indexOf('missing.png') > -1 || val.store_front_url.length === 0){
                val.alt_store_front_url = "//codecloud.cdn.speedyrails.net/sites/56056be06e6f641a1d020000/image/png/1446826281000/stc-logo-holiday-360 copy.png";
            } else {
                val.alt_store_front_url = getImageURL(val.store_front_url);    
            }
            
        }
        //var categories = getStoreCategories();
        var current_initial = val.name[0];
        
        if(store_initial.toLowerCase() == current_initial.toLowerCase()){
            val.initial = "";
            val.show = "display:none;";
        }
        else{
            val.initial = current_initial;
            store_initial = current_initial;
            
            if(val.initial=="0") {
                val.initial = "#";
            }
            
            val.show = "display:block;";
            val.class_show = "first_letter";
        }
        if (val.promotions.length > 0){
            val.promotion_exist = "display:inline-block";
        }
        else{
            val.promotion_exist = "display:none";
        }
        if (val.jobs.length > 0){
            val.job_exist = "display:inline-block";
        }
        else{
            val.job_exist = "display:none";
        }
        if (val.tags !== null && val.tags.length > 0){
            val.taglist="";
             $.each( val.tags , function( tag_key, tag ) {
                val.taglist = val.taglist + " " + tag;
             });
            val.tags_show = "display:inline-block";
        }
        val.block = current_initial + '-block';
        var rendered = Mustache.render(template_html,val);
        var upper_current_initial = current_initial.toUpperCase();
        if (upper_current_initial.charCodeAt(0) <= breaker.charCodeAt(0) && upper_current_initial.charCodeAt(0) >= starter.charCodeAt(0)){
            item_rendered.push(rendered);
        }

    });
    
    $(container).show();
    $(container).html(item_rendered.join(''));
}

function renderStoreListCatetories(container, template, category_list,stores){
    var item_rendered = [];
    var template_html = $(template).html();
    Mustache.parse(template_html);   // optional, speeds up future use
    var initial_id = 0;
    var category_index = 0;
    $.each(category_list , function( key, category ) {
        var category_id = parseInt(category.id);
        var category_name = category.name;
        var current_id = category.id;
        var count = 0;
        var stores_byCat = getStoresListByCategoryID(category_id);
        $.each( stores_byCat , function( i, store ) {
            var store_category = store.categories;
            var a = store.categories.indexOf(category_id);
            
            if(a > -1){
                if (count == 0){
                    store.show  = "display:block"; 
                    
                    store.class_show = "first_letter";
                }else{
                    store.show  = "display:none"; 
                }
                
                store.header = category_name;
                store.block = category.id;
                if (store.promotions.length > 0){
                    store.promotion_exist = "display:inline";
                    var store_promo = getPromotionsForIds(store.promotions).sortBy(function(o){ return o.start_date })[0];
                    if (store_promo != undefined){
                        store.promo_btn = "/promotions/" + store_promo.slug;
                    }
                }
                else{
                    store.promotion_exist = "display:none";
                }
                if(store.phone.length < 1){
                    store.phone_exist = "display:none";
                }
                var rendered = Mustache.render(template_html,store);
                item_rendered.push(rendered);
                count += 1;
            }
            
        });
        category_index += 1;
    
    });
    $(container).show();
    $(container).html(item_rendered.join(''));
}

function renderStoreDetails(container, template, collection, slug){
    var item_list = [];
    var item_rendered = [];
    var template_html = $(template).html();
    Mustache.parse(template_html);   // optional, speeds up future uses
    item_list.push(collection);
    $.each( item_list , function( key, val ) {
        if ((val.store_front_url).indexOf('missing.png') > -1){
            val.image_url = "//codecloud.cdn.speedyrails.net/sites/592482696e6f6450ebc40000/image/png/1495569752000/logo.png";
        } else {
            val.alt_store_front_url = getImageURL(val.store_front_url); 
        }
        val.category_list = getCategoriesNamesByStoreSlug(slug);
        val.property = getPropertyDetails();
        val.map_x_coordinate = val.x_coordinate - 19;
        val.map_y_coordinate = val.y_coordinate - 58;
        val.property_map = getPropertyDetails().mm_host + getPropertyDetails().map_url;
        if (val.website !== null && val.website.length > 0){
            val.show = "display:inline-block";
        }
        else{
            val.show = "display:none";
        }
        if (val.phone !== null && val.phone.length > 0){
            val.phone_show = "display:inline-block";
        }
        else{
            val.phone_show = "display:none";
        }
        if (val.unit !== null && val.unit.length > 0){
            val.unit_show = "display:inline-block";
        }
        else{
            val.unit_show = "display:none";
        }
        if (val.tags !== null && val.tags.length > 0){
            val.taglist="";
             $.each( val.tags , function( tag_key, tag ) {
                val.taglist = val.taglist + " " + tag;
             });
            val.tags_show = "display:inline-block";
        }
        else{
            val.tags_show = "display:none";
        }
        val.payment = null; val.return = null;
        if (val.payment !== null && val.payment.length > 0){
            val.payment_show = "display:inline-block";
        }
        else{
            val.payment_show = "display:none";
        }
        if (val.return !== null && val.return.length > 0){
            val.return_show = "display:inline-block";
        }
        else{
            val.return_show = "display:none";
        }
        
        if (val.twitter !== null && val.twitter.length > 0){
            val.twitter_show = "display:inline-block";
        }
        else{
            val.twitter_show = "display:none";
        }
        
        if (val.twitter_show == "display:none" && val.phone_show == "display:none" ){
            val.show_line = "display:none";
        }
        else{
            val.show_line = "display:block";
        }
        if((val.twitter === null || val.twitter === "") && (val.facebook === "" || val.facebook === null)){
            val.hide_social = "display:none;";
        }
        if (val.facebook !== null && val.facebook.length > 0){
            val.facebook_show = "display:inline-block";
        }
        else{
            val.facebook_show = "display:none";
        }
        
        var repo = getRepoDetailsByName("Building Design Specs").images;
        $.each( repo , function( repo_key, repo_val ) {
            if((repo_val.name == val.neighbourhood.toLowerCase()) || (repo_val.name == val.neighbourhood))
            { 
                val.repo = repo_val.photo_url_abs;
                val.repo_show= "display:block;";
                val.no_repo_show="display:none;";
            }
            
        });
        if(val.repo === null)
        {
            val.repo_show= "display:none;";
            val.no_repo_show="display:block;";
        }
        if(val.neighbourhood == "Foodhall South Side")
            val.neighbourhood = "Food Court Southside";
        //console.log("Design Requirements - "+ val.neighbourhood.replace(/['"]+/g, ''));
        var repoDesign = getRepoDetailsByName("Design Requirements - "+ val.neighbourhood.replace(/['"]+/g, '')).images;
        var design = [];
        $.each( repoDesign , function( repo_key, repo_val ) {
            if(repo_val.name.indexOf("Drawing") !== -1)
            { 
                design.push("<img src="+repo_val.photo_url_abs+" alt='design_url' />") ;
            }
            
        });
        val.repoDesign = design;
        
        var rendered = Mustache.render(template_html,val);
        item_rendered.push(rendered);
    });
    
    $(container).show();
    $(container).html(item_rendered.join(''));
}