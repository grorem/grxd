



function countryHighlight(i) {


   $('.ctry_1').animate({'opacity':'1'},300);
   $('.ctry_1').animate({'opacity':'.3'},300);

   $('.ctry_2').delay(300).animate({'opacity':'1'},300);
   $('.ctry_2').animate({'opacity':'.3'},300);

   $('.ctry_3').delay(600).animate({'opacity':'1'},300);
   $('.ctry_3').animate({'opacity':'.3'},300);

   $('.ctry_4').delay(900).animate({'opacity':'1'},300);
   $('.ctry_4').animate({'opacity':'.3'},300);

   $('.ctry_5').delay(1200).animate({'opacity':'1'},300);
   $('.ctry_5').animate({'opacity':'.3'},300);

   $('.ctry_6').delay(1400).animate({'opacity':'1'},300);
   $('.ctry_6').animate({'opacity':'.3'},300);



}
setInterval(countryHighlight, 2200);





$(document).ready(function() {

  $('#showcase').delay(2222).animate({'margin-top':'-48px'},600);

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

            var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 450;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $('.hideme').animate({'opacity':'1','margin-top':'0'},1000);


            }

        });

        $('.hideme2').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 450;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){


                $('.hideme2').animate({'opacity':'1','margin-top':'350'},1000);


            }

        });

        $('.hideme3').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 450;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){


                $('.hideme3').animate({'opacity':'1','margin-top':'170'},1000);


            }

        });

        $('.hideme4').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 450;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){


                $('.hideme4').animate({'opacity':'1','margin-top':'0'},1000);


            }

        });









        $('.hideme5').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 450;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){


                $('.hideme5').animate({'opacity':'1','margin-top':'170'},800);


            }


        });


        $('.hideme6').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 450;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){


                $('.hideme6').animate({'opacity':'1','margin-top':'350'},1000);


            }

        });

        $('.hideme7').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight() - 450;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){


                $('.hideme7').animate({'opacity':'1','margin-top':'0'},1400);


            }

        });

    });

});

$('#arrows2').click(function(){
    $('html, body').animate({
        scrollTop: $('#work' ).offset().top
    }, 800);
    return false;
});





var i=1;
var j=i+1;


$('#next').click(function(){


    $('#vidFeature_'+i).fadeOut(200);
    $('#vidFeature_'+j).delay(200).fadeIn(200);


    if (i<1) {
      i++;
      j++;
    }





});


$('#prev').click(function(){


    $('#vidFeature_'+j).fadeOut(200);
    $('#vidFeature_'+i).delay(200).fadeIn(200);

    if (i>1) {
      i--;
      j--;
    };


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
