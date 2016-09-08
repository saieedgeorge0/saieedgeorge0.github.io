
$(document).ready(function(){
    var eduuc = ["University of Chicago", "Education |", "College |", "September 2015 - June 2019 |", "GPA: 3.75/4.00", "I am currently a sophomore at the University of Chicago, where I plan on pursuing a Bachelors degree in both Computer Science and Statistics. I am also a member of UChicago's all-male A Capella group <a class = 'blandlink' href='https://www.facebook.com/UChicagoRunforCover/'>Run For Cover</a> - you can find us on Spotify, iTunes, and Loudr."];

    var edusa = ["Sewickley Academy", "Education |", "High School |", "September 2011 - June 2015 |", "GPA: 3.91/4.00 | SAT: 2360 | ACT: 35", "I attended Sewickley Academy High School, located in Sewickley, PA. I graduated as a member of the cum laude society, as well as with highest honors. I was president of the Speech and Debate, Mock Trial, Programming, and Quiz Bowl teams, and I received a total of more than ten awards over the course of the four years that I attended the school. These were: the <strong>Benjamin Thomas Memorial Forensic Award</strong> (given to the student who demonstrates the most passion for speech and debate), the <strong>Computer Science Award</strong> (given to the student who demonstrates that he or she is most proficient in the field of computer science), the <strong>Outstanding Physics Student Award</strong>, the <strong>Math Award</strong>, the <strong>Science Award</strong>, and the <strong>Tuck McClintock Community Service Award</strong> (given to the student who has contributed the most service to his/her communities). I was also an <strong>AP Scholar</strong>, an <strong>AP Scholar with Distinction</strong>, and a <strong>National AP Scholar</strong>."];
    
    var educmu = ["Carnegie Mellon University", "Education |", "Pre-College |", "September 2011 - June 2014 |", "GPA: 3.5", "I took several pre-college courses at CMU the summers after my freshman, sophomore, and junior years of high school. I took <strong>Modern Biology</strong>, <strong>Modern Biology Lab</strong>, <strong>Calculus I</strong> and <strong>Chemistry II</strong>. In addition, I also attended <strong>Leap@CMU</strong>, a ten week course that exposes high school students to rigorous mathematical theory, robotics, and computer science. Click <a class = 'blandlink' href = 'https://www.dropbox.com/sh/pc083cjywg0sxjd/AADilzpdR4GMzlLcAqBPn58ja?dl=0&preview=Andrew%27s+Leap+++Final+Presentaion.pptx'>here</a> to see the powerpoint overview for the project I completed while there. Click <a class = 'blandlink' href = 'https://www.dropbox.com/sh/pc083cjywg0sxjd/AADilzpdR4GMzlLcAqBPn58ja?dl=0'>here</a> to see the source code / the rest of the files."];

        $(".edu-point").hover(function(){
            scrollToAnchor('UofC');
            $('#uchicago').css('-webkit-filter', 'blur(0px)');
            $('#sewickleyacademy').css('-webkit-filter', 'blur(0px)');
            $('#carnegiemellon').css('-webkit-filter', 'blur(0px)');
            $('#selftaught').css('-webkit-filter', 'blur(0px)');
        },
        function(){
            $('#uchicago').css('-webkit-filter', 'blur(2px) grayscale(100%)');
            $('#sewickleyacademy').css('-webkit-filter', 'blur(2px) grayscale(100%)');
            $('#carnegiemellon').css('-webkit-filter', 'blur(2px) grayscale(100%)');
            $('#selftaught').css('-webkit-filter', 'blur(2px) grayscale(100%)');
        });
    
        $(".exp-point").hover(function(){
            scrollToAnchor('IC');
            $('#inventoryconnection').css('-webkit-filter', 'blur(0px)');
            $('#explorer').css('-webkit-filter', 'blur(0px)');
            $('#sewickleyacademy2').css('-webkit-filter', 'blur(0px)');
            $('#upmc').css('-webkit-filter', 'blur(0px)');
        },
        function(){
            $('#inventoryconnection').css('-webkit-filter', 'blur(2px) grayscale(100%)');
            $('#explorer').css('-webkit-filter', 'blur(2px) grayscale(100%)');
            $('#sewickleyacademy2').css('-webkit-filter', 'blur(2px) grayscale(100%)');
            $('#upmc').css('-webkit-filter', 'blur(2px) grayscale(100%)');
        });
        
        $(".pro1-point").hover(function(){
            scrollToAnchor('IGDesign');
            $('#instagram').css('-webkit-filter', 'blur(0px)');
            $('#polyart').css('-webkit-filter', 'blur(0px)');
            $('#myreceipts').css('-webkit-filter', 'blur(0px)');
            $('#yourcalc').css('-webkit-filter', 'blur(0px)');
            $('#facebook').css('-webkit-filter', 'blur(0px)');
            $('#aig').css('-webkit-filter', 'blur(0px)');
            $('#presentation').css('-webkit-filter', 'blur(0px)');
            $('#church').css('-webkit-filter', 'blur(0px)');
            $('#airhorn').css('-webkit-filter', 'blur(0px)');
            $('#finalschedule').css('-webkit-filter', 'blur(0px)');
            $('#clubw').css('-webkit-filter', 'blur(0px)');
        },
        function(){
            $('#instagram').css('-webkit-filter', 'blur(2px) grayscale(100%)');
            $('#polyart').css('-webkit-filter', 'blur(2px) grayscale(100%)');
            $('#myreceipts').css('-webkit-filter', 'blur(2px) grayscale(100%)');
            $('#yourcalc').css('-webkit-filter', 'blur(2px) grayscale(100%)');
            $('#facebook').css('-webkit-filter', 'blur(2px) grayscale(100%)');
            $('#aig').css('-webkit-filter', 'blur(2px) grayscale(100%)');
            $('#presentation').css('-webkit-filter', 'blur(2px) grayscale(100%)');
            $('#church').css('-webkit-filter', 'blur(2px) grayscale(100%)');
            $('#airhorn').css('-webkit-filter', 'blur(2px) grayscale(100%)');
            $('#finalschedule').css('-webkit-filter', 'blur(2px) grayscale(100%)');
            $('#clubw').css('-webkit-filter', 'blur(2px) grayscale(100%)');
        });
    
        $(".blog-point").hover(function(){
            scrollToAnchor('badcomp');
            $('#post1').css('-webkit-filter', 'blur(0px)');
            $('#post2').css('-webkit-filter', 'blur(0px)');
            $('#post3').css('-webkit-filter', 'blur(0px)');
            $('#post4').css('-webkit-filter', 'blur(0px)');
        },
        function(){
            $('#post1').css('-webkit-filter', 'blur(2px) grayscale(100%)');
            $('#post2').css('-webkit-filter', 'blur(2px) grayscale(100%)');
            $('#post3').css('-webkit-filter', 'blur(2px) grayscale(100%)');
            $('#post4').css('-webkit-filter', 'blur(2px) grayscale(100%)');
        });
    
        $(".clicked").click(function(){
            $('#popup-image').attr("src", "postimg/" + $(this).attr('id') + ".jpg");
            if($(this).attr('id') == "eduuc") {
                $('#p-heading').html(eduuc[0]);
                $('#p-type').html(eduuc[1]);
                $('#p-subtype1').html(eduuc[2]);
                $('#p-subtype2').html(eduuc[3]);
                $('#p-subtype3').html(eduuc[4]);
                $('#p-body').html(eduuc[5]);
            }
            
            else if($(this).attr('id') == "edusa") {
                $('#p-heading').html(edusa[0]);
                $('#p-type').html(edusa[1]);
                $('#p-subtype1').html(edusa[2]);
                $('#p-subtype2').html(edusa[3]);
                $('#p-subtype3').html(edusa[4]);
                $('#p-body').html(edusa[5]);
            }
            
            else if($(this).attr('id') == "educmu") {
                $('#p-heading').html(educmu[0]);
                $('#p-type').html(educmu[1]);
                $('#p-subtype1').html(educmu[2]);
                $('#p-subtype2').html(educmu[3]);
                $('#p-subtype3').html(educmu[4]);
                $('#p-body').html(educmu[5]);
            }
            
            $('#contains').css("position", "fixed");
            $('#contains').css("height", "100%");
            $('#contains').css("width", "100%");
            $('.pop-back').fadeIn(1000);
            $('#popup').fadeIn(1000);
            $('html, body').animate({
            scrollTop: $("#popup").offset().top
            }, 500);
            
        }); 
    
        $("#close-popup").click(function(){
            $('#contains').css("position", "relative");
            $('#contains').css("height", "");
            $('#contains').css("width", "");
            $('#popup').fadeOut(500);
            $('.pop-back').fadeOut(500);
        }); 
    
        function scrollToAnchor(aid){
            var aTag = $("a[name='"+ aid +"']");
            $('html,body').animate({scrollTop: aTag.offset().top},'slow');
        }
    
    
        $(".card").hover(function(){
            $(this).css('-webkit-filter', 'blur(0px)');
        },
        function(){
            $(this).css('-webkit-filter', 'blur(2px) grayscale(100%)');
        });
        $("#me").hover(function(){
            $(this).css('-webkit-filter', 'blur(0px)');
        },
        function(){
            $(this).css('-webkit-filter', 'blur(0px)');
        });
});