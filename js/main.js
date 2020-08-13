


$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */

        $('.hidemeProjects').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){


                $('.hidemeProjects').animate({'opacity':'1','margin-top':'-100px'},1400);


            }

        });


        $('.hideme').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $('.hideme').animate({'opacity':'1','margin-top':'0'},1000);


            }

        });

        $('.hideme2').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){


                $('.hideme2').animate({'opacity':'1','margin-top':'350'},1000);


            }

        });

        $('.hideme3').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){


                $('.hideme3').animate({'opacity':'1','margin-top':'170'},1000);


            }

        });

        $('.hideme4').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){


                $('.hideme4').animate({'opacity':'1','margin-top':'0'},1000);


            }

        });









        $('.hideme5').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){


                $('.hideme5').animate({'opacity':'1','margin-top':'0'},800);


            }

        });


        $('.hideme6').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){


                $('.hideme6').animate({'opacity':'1','margin-top':'0'},1000);


            }

        });

        $('.hideme7').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){


                $('.hideme7').animate({'opacity':'1','margin-top':'0'},1400);


            }

        });

    });

});

$('#arrows').click(function(){
    $('html, body').animate({
        scrollTop: $('#work' ).offset().top
    }, 800);
    return false;
});


$(function(){
  $(".hoverDeal").hover(function(){
      $(".fadeAway").addClass("fading");
  }, function() {
    $(".fadeAway").removeClass("fading");
  })
});





$(function(){
  $(".designHover").mouseenter(function(){
      $(".designHoverImg_1").stop(true, true).fadeIn();
      $(".designHoverImg_2").stop(true, true).delay(50).fadeIn();
  })

  $(".designHover").mouseleave(function(){
      $(".designHoverImg_1").stop(true, true).fadeOut();
      $(".designHoverImg_2").stop(true, true).delay(50).fadeOut();
  })

});





$(function(){
  $(".researchHover").hover(function(){
      $(".researchHoverImg_1").stop(true, true).fadeToggle();
      $(".researchHoverImg_2").stop(true, true).delay(50).fadeToggle();

  })
});


$(function(){

  $(".efEdTech").mouseenter(function(){
      $(".workPreview").addClass('efEdTech_background');
  })
  $(".efEdTech").mouseleave(function(){
      $(".workPreview").removeClass('efEdTech_background');
  })

  $(".efLabs").mouseenter(function(){
      $(".workPreview").addClass('efLabs_background');
  })
  $(".efLabs").mouseleave(function(){
      $(".workPreview").removeClass('efLabs_background');
  })

  $(".upf").mouseenter(function(){
      $(".workPreview").addClass('upf_background');
  })
  $(".upf").mouseleave(function(){
      $(".workPreview").removeClass('upf_background');
  })

});
