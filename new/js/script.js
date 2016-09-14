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
        $("#outside").css("visibility", "visible");
        $(".cssload-container").delay(500).fadeOut(1000);
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
    var edupics = ["uchicago-img", "selftaught-img"];
    var exptext = ["Inventory Connection", "ExplORer Surgical", "Sewickley Academy", "UPMC Hospital"];
    var expsubtext = ["Full Stack Designer + Developer | Jun. 2016 - Present", "Technical Operations Intern | May 2016 - Present", "IT Assistant | Aug. 2015 - Sept. 2015", "Research Volunteer | Jul. 2014 - Aug. 2015"];
    var exppics = ["inventory-img", "explorer-img","sewickley-img", "upmc-img"];
    var projtext = ["Church Website", "Facebook Re-Design", "Accident Report", "Smart Receipts", "Finals Generator", "Low Polygon Art", "Presentation Design", "Calc Color", "Instagram Logo Design", "Ultimate Horn", "UW Poster", "Past Websites"];
    var projsubtext = ["Made w/ HTML, CSS, jQuery | Sept. 2016", "Made w/ Sketch | Sept. 2016", "Made w/ Sketch | Aug. 2016", "Made w/ Sketch, Swift, XCode | Mar. 2016", "Made w/ Twilio, Python | May 2016", "Made w/ Photoshop | May 2016", "Made w/ Sketch | Jun. 2016", "Made w/ Sketch, Swift, XCode | Jul. 2016", "Made w/ Sketch | May 2016", "Made w/ Swift, XCode | Jul. 2016", "Made w/ Photoshop | May 2016", "Made w/ HTML, CSS, jQuery | Mar./Aug. 2016"];
    var projpics = ["church-img", "facebook-img", "accident-img", "smart-img", "finals-img", "low-img", "presentation-img", "calc-img", "instagram-img", "ultimate-img", "uw-img", "past-img"];
    var blogtext = ["Why am I 'terrible' with computers?", "How do mobile apps really work?", "Could you power your house with your bike?", "How much fun would it be to run at the speed of light?"];
    var blogsubtext = ["March 22\, 2016 | 3 - 5 min. read", "July 14\, 2015 | 8 - 14 min. read", "July 15\, 2016 | 2 - 3 min. read", "July 18\, 2016 | 1-3 min. read"];
    var blogpics = ["search-img", "apps-img", "bike-img", "light-img"];
    var abouttext = ["So Who Am I?"];
    
    var backpics
    
    var textnum = 0;
    
    
    
    $('.fa-angle-double-down').click(function () {
        if ($('#welcome-text').hasClass('1')) {
            textnum += 1;
            if (textnum > 3) {
                textnum = 0;
            }
            $('#welcome-description').hide().delay(50).fadeIn('slow');
            $('#welcome-description').html(hometext[textnum]);
            $('#current-count').html((textnum + 1).toString());
            $('#current-count').hide().fadeIn(400);
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
            $( ("#" + edupics[textnum]) ).css("visibility", "visible");
            $( ("#" + edupics[textnum]) ).insertBefore( $( "#container" ) );
            $( ("#" + edupics[textnum]) ).css("opacity", "0").fadeTo(400, 1);
            $('#current-count').html((textnum + 1).toString());
            $('#current-count').hide().fadeIn(400);
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
            $( ("#" + exppics[textnum]) ).css("visibility", "visible");
            $( ("#" + exppics[textnum]) ).insertBefore( $( "#container" ) );
            $( ("#" + exppics[textnum]) ).css("opacity", "0").fadeTo(400, 1);
            $('#current-count').html((textnum + 1).toString());
            $('#current-count').hide().fadeIn(400);
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
            $( ("#" + projpics[textnum]) ).css("visibility", "visible");
            $( ("#" + projpics[textnum]) ).insertBefore( $( "#container" ) );
            $( ("#" + projpics[textnum]) ).css("opacity", "0").fadeTo(400, 1);
            $('#current-count').html((textnum + 1).toString());
            $('#current-count').hide().fadeIn(400);
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
            $( ("#" + blogpics[textnum]) ).css("visibility", "visible");
            $( ("#" + blogpics[textnum]) ).insertBefore( $( "#container" ) );
            $( ("#" + blogpics[textnum]) ).css("opacity", "0").fadeTo(400, 1);
            $('#current-count').html((textnum + 1).toString());
            $('#current-count').hide().fadeIn(400);
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
            $('#current-count').html((textnum + 1).toString());
            $('#current-count').hide().fadeIn(400);
        
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
            $( ("#" + edupics[textnum]) ).css("visibility", "visible");
            $( ("#" + edupics[textnum]) ).insertBefore( $( "#container" ) );
            $( ("#" + edupics[textnum]) ).css("opacity", "0").fadeTo(400, 1);
            $('#current-count').html((textnum + 1).toString());
            $('#current-count').hide().fadeIn(400);
        
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
            $( ("#" + exppics[textnum]) ).css("visibility", "visible");
            $( ("#" + exppics[textnum]) ).insertBefore( $( "#container" ) );
            $( ("#" + exppics[textnum]) ).css("opacity", "0").fadeTo(400, 1);
            $('#current-count').html((textnum + 1).toString());
            $('#current-count').hide().fadeIn(400);
        
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
            $( ("#" + projpics[textnum]) ).css("visibility", "visible");
            $( ("#" + projpics[textnum]) ).insertBefore( $( "#container" ) );
            $( ("#" + projpics[textnum]) ).css("opacity", "0").fadeTo(400, 1);
            $('#current-count').html((textnum + 1).toString());
            $('#current-count').hide().fadeIn(400);
        
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
            $( ("#" + blogpics[textnum]) ).css("visibility", "visible");
            $( ("#" + blogpics[textnum]) ).insertBefore( $( "#container" ) );
            $( ("#" + blogpics[textnum]) ).css("opacity", "0").fadeTo(400, 1);
            $('#current-count').html((textnum + 1).toString());
            $('#current-count').hide().fadeIn(400);
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
            $( "#home-img" ).insertBefore( $( "#container" ) );
            $( "#home-img").css("opacity", "0").fadeTo(400, 1);
            $('#current-count').html("1");
            $('#total-count').html("4");
        }
        if ($(this).attr('id') == "2") {
            $('#welcome-description').html(edutext[0]);
            $('#welcome-description').addClass('huge');
            $( "#uchicago-img" ).css("visibility", "visible");
            $( "#uchicago-img" ).insertBefore( $( "#container" ) );
            $( "#uchicago-img" ).css("opacity", "0").fadeTo(400, 1);
            $('#current-count').html("1");
            $('#total-count').html("2");
            
        }
        if ($(this).attr('id') == "3") {
            $('#welcome-description').html(exptext[0]);
            $('#welcome-description').addClass('huge');
            $( "#inventory-img" ).css("visibility", "visible");
            $( "#inventory-img" ).insertBefore( $( "#container" ) );
            $( "#inventory-img" ).css("opacity", "0").fadeTo(400, 1);
            $('#current-count').html("1");
            $('#total-count').html("4");
        }
        if ($(this).attr('id') == "4") {
            $('#welcome-description').html(projtext[0]);
            $('#welcome-description').addClass('semi-huge');
            $( "#church-img" ).css("visibility", "visible");
            $( "#church-img" ).insertBefore( $( "#container" ) );
            $( "#church-img" ).css("opacity", "0").fadeTo(400, 1);
            $('#current-count').html("1");
            $('#total-count').html("12");
        }
        if ($(this).attr('id') == "5") {
            $('#welcome-description').html(blogtext[0]);
            $('#welcome-description').addClass('semi-huge');
            $( "#search-img" ).css("visibility", "visible");
            $( "#search-img" ).insertBefore( $( "#container" ) );
            $( "#search-img" ).css("opacity", "0").fadeTo(400, 1);
            $('#current-count').html("1");
            $('#total-count').html("4");
        }
        if ($(this).attr('id') == "6") {
            $('#welcome-description').html(abouttext[0]);
            $('#welcome-description').addClass('huge');
            $( "#about-img" ).css("visibility", "visible");
            $( "#about-img" ).insertBefore( $( "#container" ) );
            $( "#about-img" ).css("opacity", "0").fadeTo(400, 1);
            $('#current-count').html("1");
            $('#total-count').html("1");
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
                  