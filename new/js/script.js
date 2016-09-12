$(document).ready(function(){
    var welcomeheight = ($(window).height() - $('.welcome').height())/2;
    $('.welcome').css('top', welcomeheight.toString()+"px");
    var meheight = ($(window).height() - $('#me').height())/2;
    $('#me').css('top', meheight.toString()+"px");
    var arrowsheight = ($(window).height() - $('#arrows').height() - 97)/2;
    $('#arrows').css('top', arrowsheight.toString()+"px");
    var meleft = $(window).width() - $('#me').width() - (.08*$(window).width());
    $('#me').css('left', meleft.toString()+"px");
    var socmedialeft = ($(window).width() - $('#socialmedia').width() - 107)/2;
    $('#socialmedia').css('left', socmedialeft.toString()+"px");
    var navcircles = ($(window).width() - $('#move-circles').width() + 45)/2;
    $('#move-circles').css('left', navcircles.toString()+"px");
    $(window).on("load", function() {
        $(".cssload-container").fadeOut(3000);
    });
    
    $(window).resize(function(){
        $(".cssload-container").css("display", "block");
        welcomeheight = ($(window).height() - $('.welcome').height())/2;
        $('.welcome').css('top', welcomeheight.toString()+"px");
        meheight = ($(window).height() - $('#me').height())/2;
        $('#me').css('top', meheight.toString()+"px");
        arrowsheight = ($(window).height() - $('#arrows').height())/2;
        $('#arrows').css('top', arrowsheight.toString()+"px");
        meleft = $(window).width() - $('#me').width() - (.08*$(window).width());
        $('#me').css('left', meleft.toString()+"px");
        socmedialeft = ($(window).width() - $('#socialmedia').width())/2;
        $('#socialmedia').css('left', socmedialeft.toString()+"px");
        navcircles = ($(window).width() - $('#move-circles').width() + 45)/2;
        $('#move-circles').css('left', navcircles.toString()+"px");
        $(".cssload-container").fadeOut(3000);
    });
    
    $('.fa-circle-o').hover(function () {
            var labelnum = "#" + "label-" + $(this).attr('id');
            $(labelnum.toString()).fadeIn(100);
            $(this).removeClass('fa-circle-o');
            $(this).addClass('fa-circle');
        }, function () {
            var labelnum = "#" + "label-" + $(this).attr('id');
            $(labelnum.toString()).fadeOut(100);
            $(this).removeClass('fa-circle');
            $(this).addClass('fa-circle-o');
    });
    
    var hometext = ["I am a self-taught designer and developer attending the University of Chicago, and I challenge you to find something for me that I cannot learn to do.", "Nothing fascinates me more than the human brain, or understanding why people do what they do.", "I can play piano, sing, and weirdest of all, beatbox, and I love to read about technology.", "I want to change the world one day, and I will."];
    var textnum = 0;
    
    $('.fa-angle-double-down').click(function () {
        textnum += 1;
        if (textnum > 3) {
            textnum = 0;
        }
        $('#welcome-description').hide().delay(50).fadeIn('slow');
        $('#welcome-description').html(hometext[textnum]);
    });
    
    $('.fa-angle-double-up').click(function () {
        textnum -= 1;
        if (textnum == -1) {
            textnum = 3;
        }
        $('#welcome-description').hide().delay(50).fadeIn('slow');
        $('#welcome-description').html(hometext[textnum]);
    });
    
});
                  