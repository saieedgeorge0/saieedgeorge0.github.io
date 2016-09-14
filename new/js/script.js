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
    this.addEventListener("DOMContentLoaded", preloadImages, true);
 
    function preloadImages(e) {
        var imageArray = new Array("img/background.jpeg", "img/blogbike.jpg", "img/blogbwc.jpeg", "img/blogdaw.jpeg", "img/bloglight.jpg", "img/edust.jpg", "img/eduuc.jpg", "img/expes.jpg", "img/expic.jpg", "img/expsa.jpg", "img/expupmc.jpg", "img/lowpoly.jpg", "img/me.jpg", "img/projaig.jpg", "img/projcc.jpg", "img/projcw.jpg", "img/projfg.jpg", "img/projfr.png", "img/projid.jpg", "img/projlpa.jpg", "img/projpd.jpeg", "img/projpw.png", "img/projsr.jpg", "img/projuh.jpeg", "img/projuw.jpg");

        for (var i = 0; i < imageArray.length; i++) {
            var tempImage = new Image();

            tempImage.addEventListener("load", trackProgress, true);
            tempImage.src = imageArray[i];
        }
    }
    
    $(window).on("load", function() {
        $(".cssload-container").delay(1000).fadeOut(3000);
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
            if (!$('#welcome-text').hasClass($(this).attr('id').toString())) {
                var labelnum = "#" + "label-" + $(this).attr('id');
                $(labelnum.toString()).fadeOut(100);
                $(this).removeClass('fa-circle');
                $(this).addClass('fa-circle-o');
            }
    });
    
    var hometext = ["I am a self-taught designer and developer attending the University of Chicago, and I challenge you to find something for me that I cannot learn to do.", "Nothing fascinates me more than the human brain, or understanding why people do what they do.", "I can play piano, sing, and weirdest of all, beatbox, and I love to read about technology.", "I want to change the world one day, and I will."];
    var smalltext = ["Hi. I'm George Saieed.", "Sept. 2015 - Jun. 2019 | GPA: 3.75/4.00", "Full Stack Designer + Developer | June 2016 - Present", "Made w/ Sketch | May 2016", "March 22\, 2016 | 3 - 5 min. read", "All About Me"];
    var edutext = ["University of Chicago", "Self-Taught Skills"];
    var edusubtext = ["Sept. 2015 - Jun. 2019 | GPA: 3.75/4.00", "Fourteen Languages"]
    var edupics = ["url('img/eduuc.jpg')", "url('img/edust.jpg')"];
    var exptext = ["Inventory Connection", "ExplORer Surgical", "Sewickley Academy", "UPMC Hospital"];
    var expsubtext = ["Full Stack Designer + Developer | Jun. 2016 - Present", "Technical Operations Intern | May 2016 - Present", "IT Assistant | Aug. 2015 - Sept. 2015", "Research Volunteer | Jul. 2014 - Aug. 2015"];
    var exppics = ["url('img/expic.jpg')", "url('img/expes.jpg')", "url('img/expsa.jpg')", "url('img/expupmc.jpg')"];
    var projtext = ["Church Website", "Facebook Re-Design", "Accident Report", "Smart Receipts", "Finals Generator", "Low Polygon Art", "Presentation Design", "Calc Color", "Instagram Logo Design", "Ultimate Horn", "UW Poster", "Past Websites"];
    var projsubtext = ["Made w/ HTML, CSS, jQuery | Sept. 2016", "Made w/ Sketch | Sept. 2016", "Made w/ Sketch | Aug. 2016", "Made w/ Sketch, Swift, XCode | Mar. 2016", "Made w/ Twilio, Python | May 2016", "Made w/ Photoshop | May 2016", "Made w/ Sketch | Jun. 2016", "Made w/ Sketch, Swift, XCode | Jul. 2016", "Made w/ Sketch | May 2016", "Made w/ Swift, XCode | Jul. 2016", "Made w/ Photoshop | May 2016", "Made w/ HTML, CSS, jQuery | Mar./Aug. 2016"];
    var projpics = ["url('img/projcw.jpg')", "url('img/projfr.png')", "url('img/projaig.jpg')", "url('img/projsr.jpg')", "url('img/projfg.jpg')", "url('img/projlpa.jpg')", "url('img/projpd.jpeg')", "url('img/projcc.jpg')", "url('img/projid.jpg')", "url('img/projuh.jpeg')", "url('img/projuw.jpg')", "url('img/projpw.png')"];
    var blogtext = ["Why am I 'terrible' with computers?", "How do mobile apps really work?", "Could you power your house with your bike?", "How much fun would it be to run at the speed of light?"];
    var blogsubtext = ["March 22\, 2016 | 3 - 5 min. read", "July 14\, 2015 | 8 - 14 min. read", "July 15\, 2016 | 2 - 3 min. read", "July 18\, 2016 | 1-3 min. read"];
    var blogpics = ["url('img/blogbwc.jpeg')", "url('img/blogdaw.jpeg')", "url('img/blogbike.jpg')", "url('img/bloglight.jpg')"];
    var abouttext = ["So Who Am I?"];
    var textnum = 0;
    
    
    
    $('.fa-angle-double-down').click(function () {
        if ($('#welcome-text').hasClass('1')) {
            textnum += 1;
            if (textnum > 3) {
                textnum = 0;
            }
            $('#welcome-description').hide().delay(50).fadeIn('slow');
            $('#welcome-description').html(hometext[textnum]);
            $('#container').css("background", "url('img/background.jpeg')");
            $('#container').css("background-position", "center");
            $('#container').css("background-repeat", "none");
            $('#container').css("background-size", "cover");
        }
        
        if ($('#welcome-text').hasClass('2')) {
            textnum += 1;
            if (textnum > 1) {
                textnum = 0;
            }
            $('#welcome-description').hide().delay(50).fadeIn('slow');
            $('#welcome-description').html(edutext[textnum]);
            $('#welcome-text').hide().delay(50).fadeIn('slow');
            $('#welcome-text').html(edusubtext[textnum]);
            $('#container').css("background", edupics[textnum]);
            $('#container').css("background-position", "center");
            $('#container').css("background-repeat", "none");
            $('#container').css("background-size", "cover");
        }
        if ($('#welcome-text').hasClass('3')) {
            textnum += 1;
            if (textnum > 3) {
                textnum = 0;
            }
            $('#welcome-description').hide().delay(50).fadeIn('slow');
            $('#welcome-description').html(exptext[textnum]);
            $('#welcome-text').hide().delay(50).fadeIn('slow');
            $('#welcome-text').html(expsubtext[textnum]);
            $('#container').css("background", exppics[textnum]);
            $('#container').css("background-position", "center");
            $('#container').css("background-repeat", "none");
            $('#container').css("background-size", "cover");
        }
        if ($('#welcome-text').hasClass('4')) {
            textnum += 1;
            if (textnum > 11) {
                textnum = 0;
            }
            $('#welcome-description').hide().delay(50).fadeIn('slow');
            $('#welcome-description').html(projtext[textnum]);
            $('#welcome-text').hide().delay(50).fadeIn('slow');
            $('#welcome-text').html(projsubtext[textnum]);
            $('#container').css("background", projpics[textnum]);
            $('#container').css("background-position", "center");
            $('#container').css("background-repeat", "none");
            $('#container').css("background-size", "cover");
        }
        if ($('#welcome-text').hasClass('5')) {
            textnum += 1;
            if (textnum > 3) {
                textnum = 0;
            }
            $('#welcome-description').hide().delay(50).fadeIn('slow');
            $('#welcome-description').html(blogtext[textnum]);
            $('#welcome-text').hide().delay(50).fadeIn('slow');
            $('#welcome-text').html(blogsubtext[textnum]);
            $('#container').css("background", blogpics[textnum]);
            $('#container').css("background-position", "center");
            $('#container').css("background-repeat", "none");
            $('#container').css("background-size", "cover");
        }
    });
    
    $('.fa-angle-double-up').click(function () {
        if ($('#welcome-text').hasClass('1')) {
            textnum -= 1;
            if (textnum == -1) {
                textnum = 3;
            }
            $('#welcome-description').hide().delay(50).fadeIn('slow');
            $('#welcome-description').html(hometext[textnum]);
            $('#container').css("background", "url('img/background.jpeg')");
            $('#container').css("background-position", "center");
            $('#container').css("background-repeat", "none");
            $('#container').css("background-size", "cover");
        }
        if ($('#welcome-text').hasClass('2')) {
            textnum -= 1;
            if (textnum == -1) {
                textnum = 1;
            }
            $('#welcome-description').hide().delay(50).fadeIn('slow');
            $('#welcome-description').html(edutext[textnum]);
            $('#welcome-text').hide().delay(50).fadeIn('slow');
            $('#welcome-text').html(edusubtext[textnum]);
            $('#container').css("background", edupics[textnum]);
            $('#container').css("background-position", "center");
            $('#container').css("background-repeat", "none");
            $('#container').css("background-size", "cover");
        }
        if ($('#welcome-text').hasClass('3')) {
            textnum -= 1;
            if (textnum == -1) {
                textnum = 3;
            }
            $('#welcome-description').hide().delay(50).fadeIn('slow');
            $('#welcome-description').html(exptext[textnum]);
            $('#welcome-text').hide().delay(50).fadeIn('slow');
            $('#welcome-text').html(expsubtext[textnum]);
            $('#container').css("background", exppics[textnum]);
            $('#container').css("background-position", "center");
            $('#container').css("background-repeat", "none");
            $('#container').css("background-size", "cover");
        }
        if ($('#welcome-text').hasClass('4')) {
            textnum -= 1;
            if (textnum == -1) {
                textnum = 11;
            }
            $('#welcome-description').hide().delay(50).fadeIn('slow');
            $('#welcome-description').html(projtext[textnum]);
            $('#welcome-text').hide().delay(50).fadeIn('slow');
            $('#welcome-text').html(projsubtext[textnum]);
            $('#container').css("background", projpics[textnum]);
            $('#container').css("background-position", "center");
            $('#container').css("background-repeat", "none");
            $('#container').css("background-size", "cover");
        }
        if ($('#welcome-text').hasClass('5')) {
            textnum -= 1;
            if (textnum == -1) {
                textnum = 3;
            }
            $('#welcome-description').hide().delay(50).fadeIn('slow');
            $('#welcome-description').html(blogtext[textnum]);
            $('#welcome-text').hide().delay(50).fadeIn('slow');
            $('#welcome-text').html(blogsubtext[textnum]);
            $('#container').css("background", blogpics[textnum]);
            $('#container').css("background-position", "center");
            $('#container').css("background-repeat", "none");
            $('#container').css("background-size", "cover");
        }
    });
    
    $('.fa-circle-o').click(function () {
        textnum = 0;
        $('#welcome-text').removeClass();
        $('#welcome-text').addClass($(this).attr('id'));
        $('#welcome-text').html(smalltext[$(this).attr('id')-1]);
        if ($(this).attr('id') == "1") {
            $('#welcome-description').html(hometext[0]);
            $('#welcome-description').removeClass('huge');
            $('#welcome-description').removeClass('semi-huge');
            $('#welcome-description').removeClass('not-as-huge');
            $('#back-overlay').css("background", "rgba(0,0,0,0.4)");
            $('#container').css("background", "url('img/background.jpeg')");
            $('#container').css("background-position", "center");
            $('#container').css("background-repeat", "none");
            $('#container').css("background-size", "cover");
        }
        if ($(this).attr('id') == "2") {
            $('#welcome-description').html(edutext[0]);
            $('#welcome-description').addClass('huge');
            $('#back-overlay').css("background", "rgba(0,0,0,0.5)");
            $('#container').css("background", edupics[0]);
            $('#container').css("background-position", "center");
            $('#container').css("background-repeat", "none");
            $('#container').css("background-size", "cover");
        }
        if ($(this).attr('id') == "3") {
            $('#welcome-description').html(exptext[0]);
            $('#welcome-description').addClass('huge');
            $('#back-overlay').css("background", "rgba(0,0,0,0.5)");
            $('#container').css("background", exppics[0]);
            $('#container').css("background-position", "center");
            $('#container').css("background-repeat", "none");
            $('#container').css("background-size", "cover");
        }
        if ($(this).attr('id') == "4") {
            $('#welcome-description').html(projtext[0]);
            $('#welcome-description').addClass('semi-huge');
            $('#back-overlay').css("background", "rgba(0,0,0,0.5)");
            $('#container').css("background", projpics[0]);
            $('#container').css("background-position", "center");
            $('#container').css("background-repeat", "none");
            $('#container').css("background-size", "cover");
        }
        if ($(this).attr('id') == "5") {
            $('#welcome-description').html(blogtext[0]);
            $('#welcome-description').addClass('semi-huge');
            $('#back-overlay').css("background", "rgba(0,0,0,0.5)");
            $('#container').css("background", blogpics[0]);
            $('#container').css("background-position", "center");
            $('#container').css("background-repeat", "none");
            $('#container').css("background-size", "cover");
        }
        if ($(this).attr('id') == "6") {
            $('#welcome-description').html(abouttext[0]);
            $('#welcome-description').addClass('huge');
            $('#back-overlay').css("background", "rgba(0,0,0,0.5)");
            $('#container').css("background", "url('img/me.jpg')");
            $('#container').css("background-position", "center");
            $('#container').css("background-repeat", "none");
            $('#container').css("background-size", "cover");
        }
        welcomeheight = ($(window).height() - $('.welcome').height())/2;
        $('.welcome').css('top', welcomeheight.toString()+"px");
        var thingies = ["1","2","3","4","5","6"];
        $.each(thingies, function(index, value) {
            if (!$('#welcome-text').hasClass(value.toString())) {
                var labelnum = "#" + "label-" + value;
                $(labelnum.toString()).fadeOut(100);
                $("#" + value).removeClass('fa-circle');
                $("#" + value).addClass('fa-circle-o');
            }
        });
    });
    
});
                  