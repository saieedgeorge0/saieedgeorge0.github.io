$(document).ready(function(){
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