var isMobile = {

   state: false,
   init: function() {
      var window_width = $( window ).width();

      if( window_width<768 ) {
         $('body').addClass('is-mobile');
         isMobile.state = true;
      } else {
         $('body').removeClass('is-mobile');
         isMobile.state = false;
      }
   },
}

$(document).ready(function(){
   isMobile.init();

   //RESIZE EVENTS
   $(window).resize(function () {
      isMobile.init();
   });
});