
$('.slider-one').slick({
  dots: false,
  infinite: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 2000,
  pauseOnHover: false,
  fade: true,
  cssEase: 'linear'
});
$('.slider-ped').slick({
  infinite: false,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});




$('.slider-otz').slick({
  infinite: false,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('#menu-center a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
$(document).ready(function () {
    $(document).on("scroll", onScroll1);
    
    //smoothscroll
    $('#menu-center1 a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 1500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll1);
        });
    });
});

function onScroll1(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center1 a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center1 a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}



$(function(){
  $(window).scroll(function(){
    var scrollTop = $('.top-style-li1').offset().top
    var scrollBlock = 1023;
    if(scrollTop > scrollBlock) {
      $('.top-style-li1').addClass('style');
    }
    else{
      $('.top-style-li1').removeClass('style');
    }
  });
});
$(function(){
  $(window).scroll(function(){
    var scrollTop = $('.top-style-li2').offset().top
    var scrollBlock = 1023;
    if(scrollTop > scrollBlock) {
      $('.top-style-li2').addClass('style');
    }
    else{
      $('.top-style-li2').removeClass('style');
    }
  });
});

$(function(){
  $(window).scroll(function(){
    var scrollTop = $('.top-style-li3').offset().top
    var scrollBlock = 1023;
    if(scrollTop > scrollBlock) {
      $('.top-style-li3').addClass('style');
    }
    else{
      $('.top-style-li3').removeClass('style');
    }
  });
});

$(function(){
  $(window).scroll(function(){
    var scrollTop = $('.top-style-li4').offset().top
    var scrollBlock = 1023;
    if(scrollTop > scrollBlock) {
      $('.top-style-li4').addClass('style');
    }
    else{
      $('.top-style-li4').removeClass('style');
    }
  });
});

$(function(){
  $(window).scroll(function(){
    var scrollTop = $('.top-style-li5').offset().top
    var scrollBlock = 1023;
    if(scrollTop > scrollBlock) {
      $('.top-style-li5').addClass('style');
    }
    else{
      $('.top-style-li5').removeClass('style');
    }
  });
});

$(function(){
  $(window).scroll(function(){
    var scrollTop = $('.top-style').offset().top
    var scrollBlock = 1023;
    if(scrollTop > scrollBlock) {
      $('.top-style').addClass('style');
    }
    else{
      $('.top-style').removeClass('style');
    }
  });
});

function showModal(id) {
  $(".modal").modal('hide');
  $("#" + id).modal();
};






$(window).scroll(function(){
    var scrollTop = $('.otz').offset().top;
    var scrollBlock = ($(window).scrollTop() + $(window).height()) - $(window).height()/2;
    if(scrollBlock > scrollTop) {
      $('.top-style-li5').addClass('active');
      $('.top-style-li4').removeClass('active');
    }
    else{
       
    }
  });




