$(document).ready(function() {
  $( ".progect__more" ).click(function() {
    $( '.progect__horizontal' ).toggleClass( "open" );
  });
});
$(document).ready(function() {
  $( ".news__more" ).click(function() {
    $( '.news__open' ).toggleClass( "open" );
  });

$('.partner__slider').slick({
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});











});


function showModal(id) {
  $(".modal").modal('hide');
  $("#" + id).modal();
};
