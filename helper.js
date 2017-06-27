$('document').ready(function() {
});

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