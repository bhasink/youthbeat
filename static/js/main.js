
//Header fixed//
$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if(scroll >= 100){
            // $('.main-nav, #menu-bar').addClass("white").css({"fill": "#000"});
            $('.main-nav, #menu-bar').addClass("white");
        }
        else{
            // $('.main-nav, #menu-bar').removeClass("white").css({"fill": "#fff"});
            $('.main-nav, #menu-bar').removeClass("white");
        }

    });

});

//data counter//

(function($){
    $(window).on("load",function(){
        $(document).scrollzipInit();
        $(document).rollerInit();
    });
    $(window).on("load scroll resize", function(){
        $('.numscroller').scrollzip({
            showFunction    :   function() {
                numberRoller($(this).attr('data-slno'));
            },
            wholeVisible    :     false,
        });
    });
    $.fn.scrollzipInit=function(){
        $('body').prepend("<div style='position:fixed;top:0px;left:0px;width:0;height:0;' id='scrollzipPoint'></div>" );
    };
    $.fn.rollerInit=function(){
        var i=0;
        $('.numscroller').each(function() {
            i++;
            $(this).attr('data-slno',i);
            $(this).addClass("roller-title-number-"+i);
        });
    };
    $.fn.scrollzip = function(options){
        var settings = $.extend({
            showFunction    : null,
            hideFunction    : null,
            showShift       : 0,
            wholeVisible    : false,
            hideShift       : 0,
        }, options);
        return this.each(function(i,obj){
            $(this).addClass('scrollzip');
            if ( $.isFunction( settings.showFunction ) ){
                if(
                    !$(this).hasClass('isShown')&&
                    ($(window).outerHeight()+$('#scrollzipPoint').offset().top-settings.showShift)>($(this).offset().top+((settings.wholeVisible)?$(this).outerHeight():0))&&
                    ($('#scrollzipPoint').offset().top+((settings.wholeVisible)?$(this).outerHeight():0))<($(this).outerHeight()+$(this).offset().top-settings.showShift)
                ){
                    $(this).addClass('isShown');
                    settings.showFunction.call( this );
                }
            }
            if ( $.isFunction( settings.hideFunction ) ){
                if(
                    $(this).hasClass('isShown')&&
                    (($(window).outerHeight()+$('#scrollzipPoint').offset().top-settings.hideShift)<($(this).offset().top+((settings.wholeVisible)?$(this).outerHeight():0))||
                        ($('#scrollzipPoint').offset().top+((settings.wholeVisible)?$(this).outerHeight():0))>($(this).outerHeight()+$(this).offset().top-settings.hideShift))
                ){
                    $(this).removeClass('isShown');
                    settings.hideFunction.call( this );
                }
            }
            return this;
        });
    };
    function numberRoller(slno){
        var min=$('.roller-title-number-'+slno).attr('data-min');
        var max=$('.roller-title-number-'+slno).attr('data-max');
        var timediff=$('.roller-title-number-'+slno).attr('data-delay');
        var increment=$('.roller-title-number-'+slno).attr('data-increment');
        var numdiff=max-min;
        var timeout=(timediff*1000)/numdiff;
        //if(numinc<10){
        //increment=Math.floor((timediff*1000)/10);
        //}//alert(increment);
        numberRoll(slno,min,max,increment,timeout);

    }
    function numberRoll(slno,min,max,increment,timeout){//alert(slno+"="+min+"="+max+"="+increment+"="+timeout);
        if(min<=max){
            $('.roller-title-number-'+slno).html(min);
            min=parseInt(min)+parseInt(increment);
            setTimeout(function(){numberRoll(eval(slno),eval(min),eval(max),eval(increment),eval(timeout))},timeout);
        }else{
            $('.roller-title-number-'+slno).html(max);
        }
    }
})(jQuery);


//Removes br tag on mobile//

$(function () {
    function checkPosition() {
        if (window.matchMedia('(max-width: 767px)').matches) {
            $('br', ".about-text > p").remove();
        } else {
            //...
        }
    }
    checkPosition();

});

$(".check-button").click(function() {
    $(".sa-success").addClass("hide");
    setTimeout(function() {
        $(".sa-success").removeClass("hide");
    }, 10);
});


$('.testi-slider').owlCarousel({
    // stagePadding: 50,
    // loop:true,
    dots: true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
