$(document).ready(function(){
    var welcomeheight = ($(window).height() - $('.welcome').height())/2;
    $('.welcome').css('top', welcomeheight.toString()+"px");
    var meheight = ($(window).height() - $('#me').height())/2;
    $('#me').css('top', meheight.toString()+"px");
    var arrowsheight = ($(window).height() - $('#arrows').height())/2;
    $('#arrows').css('top', arrowsheight.toString()+"px");
    var meleft = $(window).width() - $('#me').width() - (.08*$(window).width());
    $('#me').css('left', meleft.toString()+"px");
    var socmedialeft = ($(window).width() - $('#socialmedia').width() - 107)/2;
    $('#socialmedia').css('left', socmedialeft.toString()+"px");
    $(".cssload-container").fadeOut(3000);
    $(window).resize(function(){
        $(".cssload-container").css("display", "block");
        welcomeheight = ($(window).height() - $('.welcome').height())/2;
        $('.welcome').css('top', welcomeheight.toString()+"px");
        meheight = ($(window).height() - $('#me').height())/2;
        $('#me').css('top', meheight.toString()+"px");
        meleft = $(window).width() - $('#me').width() - (.08*$(window).width());
        $('#me').css('left', meleft.toString()+"px");
        socmedialeft = ($(window).width() - $('#socialmedia').width() + 59)/2;
        $('#socialmedia').css('left', socmedialeft.toString()+"px");
        $(".cssload-container").fadeOut(3000);
    });
});
                  