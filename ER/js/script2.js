$(document).ready(function(){
    $('#settings').click(function() {
        $('#drop-down').fadeIn();
    });
    
    $(window).click(function() {
        $('#drop-down').fadeOut();
    });

    $('#settings').click(function(event){
        event.stopPropagation();
    });
    
     $('#drop-down').click(function(event){
        event.stopPropagation();
    });
    
    $('#injury-report').click(function(event){
        window.location.href = "injury.html";
    });
});