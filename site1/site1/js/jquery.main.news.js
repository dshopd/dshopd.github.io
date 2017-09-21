$(document).ready(function(){


   
	initPlayerForm();
	initMap();
	initFixedMenu();
   //initMenuClick();
   //initCallFormClick();
   //initPlanirovkaClick();
   //initDocsClick();
   //initLiderClick();
   //initPlanPopup();
   initChatCustomize();
   initSearchFilterOpen();


   
   function initSearchFilterOpen(){
      $('.search-holder .open-box .open-cont').hide();
      $('.search-holder .open-box .title').on('click', function(){
         $('.search-holder .open-box .open-cont').slideToggle();
         $(this).toggleClass('open');
      });
   }
   
   
   function initChatCustomize(){
      $(document).on("netroxinit", function(event, data) {
         if(nsc_Visitor.isMobile()){
            $('#nsc_wnd').hide();
         }
      });
      
      $('.open-chat').click(function() {
         if (typeof nsc_Visitor != 'undefined'){
            //$('#nsc_wnd').show();
            //nsc_Visitor.open();
            if(nsc_Visitor.__ecu != ''){
               window.open(nsc_Visitor.__ecu);
            }
         }
         return false;
      });
/*
      $(document).on("netroxclose", function(event) {
         if(nsc_Visitor.isMobile()){
            $('#nsc_mobnote').hide();
         }
      });   

      $(document).on( "touchstart", '#nsc_mobclose', function(e){ 
         if(nsc_Visitor.isMobile()){
            $('#nsc_wnd').hide();
         }
         return false;
      });
*/
   }
   

   function initPlanPopup(){
      var pathname = window.location.pathname.split('/');
      
      
      if(pathname[1]!=''){
         $.magnificPopup.open({items: {src: pathname[1] + '-inner.php'}, type: 'iframe'});   
      }
     
      $('.plan-img-link').magnificPopup({
         type: 'iframe',
         callbacks: {
            elementParse: function(item) {
               // Function will fire for each target element
               // "item.el" is a target DOM element (if present)
               // "item.src" is a source that you may modify
               
               item.src = item.el.attr('href') + '-inner.php';
            },
            open: function() {
               history.pushState(null, null, this.st.el.attr('href'));
               //history.pushState(null, null, window.location.pathname + this.st.el.attr('href'));
            },
            close: function() {
            // Will fire when popup is closed
            }
         }
      });
   }
   
var getPage = function getUrlParameter() {
    var sURL = window.location.pathname,
        sURLVariables = sURL.split('\/');

        
    return sURLVariables[1];
};

   //alert(getPage());

   function initMenuClick (){
      $('.nav a').click(function() {

         //ga('send', 'event', 'goal_menu_s2', 'click');
         //yaCounter41621814.reachGoal('goal_menu_s2');
         
         return true;
      });
   }
   
   // function initCallFormClick (){
   //    $('.recall-open-popup, .recall-open-popup2, .recall-open-popup3').click(function() {
         
   //       ga('send', 'event', 'goal_call_form_s2', 'click');
   //       yaCounter41621814.reachGoal('goal_call_form_s2');
         
   //       return true;
   //    });
   // }
   
   function initPlanirovkaClick (){
      $('.tabs-nav a').click(function() {
         
         //ga('send', 'event', 'goal_planirovka_s2', 'click');
         //yaCounter41621814.reachGoal('goal_planirovka_s2');
         
         return true;
      });
   }
   
   function initDocsClick (){
      $('.docs-open-popup').click(function() {
         
         //ga('send', 'event', 'goal_documents_s2', 'click');
         //yaCounter41621814.reachGoal('goal_documents_s2');
         
         return true;
      });
   }
   
   // function initLiderClick (){
   //    $('.docs-open-popup').click(function() {
         
   //       ga('send', 'event', 'goal_documents_s2', 'click');
   //       yaCounter41621814.reachGoal('goal_documents_s2');
         
   //       return true;
   //    });
   // }
   
   
	$('input, textarea').placeholder();

	$("select").selecter();

	$(window).on('load resize', function(){
		$('.choose-list .box').matchHeight(); // СЧИТАТЬ ВЫСОТУ

	});


	$('.main-slider').slick({
		arrows: false,
		dots:true,
		autoplay: true,
		autoplaySpeed: 4000,
		responsive: [
			{
				breakpoint: 901,
					settings: {
					dots: false
					}
			}
		]
	});
	$(window).on('load resize', function(){
		$('.main-slider .bg').each(function(){
			var _src = $(this).attr('src');
			$(this).closest('.slick-slide').css({
				'background-image':'url('+_src+')'
			});
		});
	});
	$('.plan-slider').slick({
		arrows: true,
		dots:true,
		autoplay: true,
		autoplaySpeed: 4000,
		responsive: [
			{
				breakpoint: 1001,
					settings: {
					arrows: false,
					}
			}
		]
	});
	$('.partners-list').slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		infinite: false,
		arrows: false,
		dots:true,
		autoplay: true,
		autoplaySpeed: 4000,
		responsive: [
			{
				breakpoint: 1101,
					settings: {
					slidesToShow: 6,
					dots:true,
					}
			},
			{
				breakpoint: 1101,
					settings: {
					slidesToShow: 5,
					dots:true,
					}
			},
			{
				breakpoint: 901,
					settings: {
					slidesToShow: 5,
					dots:true,
					}
			},
			{
				breakpoint: 801,
					settings: {
					slidesToShow: 4,
					dots:true,
					}
			},
			{
				breakpoint: 701,
					settings: {
					slidesToShow: 3,
					dots:true,
					}
			},
			{
				breakpoint: 501,
					settings: {
					slidesToShow: 2,
					}
			}
		]
	});


// INPUT MASK
(function () {
	if ($("input.phone").size()) $("input.phone").mask("+7 (999) 999-99-99", {
		placeholder: "_"
	});
}());

// ACCARDION START
	$(".accordion .content").hide();
	$(".accordion .title").click(function() {
		if($(this).next("div").is(":visible")){
			$(this).next("div").slideUp("slow");
		} else {
			$(".accordion .content").slideUp("slow");
			$(this).next("div").slideToggle("slow");
		}
	});
// ACCARDION END


// ИНИЦИАЛИЗАЦИЯ POPUP START
	initPopups ();
	function initPopups (){
		$('body')
			.popup({
				"opener":".docs-open-popup",
				"popup_holder":"#docs-popup",
				"popup":".popup",
				"close_btn":".close-popup"
			})
			.popup({
				"opener":".recall-open-popup",
				"popup_holder":"#recall-popup",
				"popup":".popup",
				"close_btn":".close-popup"
			})
			.popup({
				"opener":".recall-open-popup2",
				"popup_holder":"#recall-popup2",
				"popup":".popup",
				"close_btn":".close-popup"

			})
			.popup({
				"opener":".recall-open-popup3",
				"popup_holder":"#recall-popup3",
				"popup":".popup",
				"close_btn":".close-popup"
			})
			.popup({
				"opener":".tnx-open-popup",
				"popup_holder":"#tnx-popup",
				"popup":".popup",
				"close_btn":".close-popup"
			})
			.popup({
				"opener":".text-open-popup",
				"popup_holder":"#text-popup",
				"popup":".popup",
				"close_btn":".close-popup"
			})

            .popup({
                "opener":".about-project-open-popup",
                "popup_holder":"#about-project-popup",
                "popup":".popup",
                "close_btn":".close-popup"
            })

	}
// ИНИЦИАЛИЗАЦИЯ POPUP END

// ИНИЦИАЛИЗАЦИЯ ТАБОВ START
	initTabs ();
	function initTabs (){
		$('.tabset').makeTabset({
			control: '.tabs-nav a',
			add_parent_active : 'li',
			tab : '.tab',
			hash : false
		});
	}
// ИНИЦИАЛИЗАЦИЯ ТАБОВ END


// scroll
	var block = $('.item');
	var navHeight = $('#nav').height();
	var _t;

   
   
   /*
	$(window).scroll(function(){
		var _delta = -$('.header').height()-15;
		var _sections = [];
		var wS = $(window).scrollTop();
		block.each(function(){
			_sections.push($(this).offset().top+_delta);
		});
		$.each(_sections, function(i, val){
			if (i>0){
				if (i==_sections.length-1){
					if (wS>=val){
						$('#nav li').removeClass('active');
						$('#nav li').eq(i).addClass('active');
						$('.header').removeClass('burger-open');
					}
				} else {
					if ((wS>=val)&&(wS<_sections[i+1])){
						$('#nav li').removeClass('active');
						$('#nav li').eq(i).addClass('active');
						$('.header').removeClass('burger-open');
					}
				}
			} else {
				if ((wS>=0)&&(wS<_sections[i+1])){
					$('#nav li').removeClass('active');
					$('#nav li').eq(i).addClass('active');
					$('.header').removeClass('burger-open');
				}
			}
		});
	});
   */
	$('#nav a').click(function(e){
      if($(this).data('scroll')!==''){
         
         // close menu         
         $('.header').removeClass('burger-open');
         
         var id = '#' + $(this).data('scroll');
         
         var offset = $( id ).offset().top - 20, // 20 - отступ от контента просто для красоты
             offset = offset - $('.header').outerHeight();
             
         if($('.header').hasClass('burger-open')){
            offset = offset - $('#nav').outerHeight();
         }
        
         $('html, body').animate({scrollTop: offset}, 600);
      }
      /*
      if($(this).data('scroll')!==''){
         $('html, body').animate({scrollTop:$('#search').offset().top}, 600);
      }else{
		   $('html, body').animate({scrollTop:block.eq($(this).parent().index()).offset().top - $('.header').height()-15}, 600);
      }
      */
		e.preventDefault();
	});

	//scroll-----------------------------------------------------
	$(".scroll_btn").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top-150;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});
	//scrolle-end--------------------------------------------------

	$('.burger').on('click', function(){
		$(this).closest('.header').toggleClass('burger-open');
		return false;
	});



$( function() {
	$( "#slider-range" ).slider({
	range: true,
	min: 2,
	max: 8,
	values: [ 2, 8 ],
	slide: function( event, ui ) {
		$( ".amount" ).val(  ui.values[ 0 ]);
		$( ".amount2" ).val(  ui.values[ 1 ]);
	}
	});
		$( ".amount" ).val( $( "#slider-range" ).slider( "values", 0 ));
		$( ".amount2" ).val( $( "#slider-range" ).slider( "values", 1 ));
	});

$( function() {
	$( "#slider-range2" ).slider({
		range: true,
		min: 2,
		max: 18,
		values: [ 2, 18 ],
		slide: function( event, ui ) {
			$( ".amount3" ).val(  ui.values[ 0 ]);
			$( ".amount4" ).val(  ui.values[ 1 ]);
		}
	});
		$( ".amount3" ).val( $( "#slider-range2" ).slider( "values", 0 ));
		$( ".amount4" ).val( $( "#slider-range2" ).slider( "values", 1 ));
	} );


}); // READY END____________________________________________________________


function initFixedMenu() {
		var navTop;
		$(window).on('load resize', function() {
			var classes = $("#fixed").attr('class');
			$("#fixed").attr('class', '');
			navTop = $("#fixed").offset().top;
			$("#fixed").attr('class', classes);
		});
		$(window).on('load resize scroll', function(){
			if ($(window).scrollTop() > navTop){
				$("#fixed").addClass("fixed");
			} else {
				$("#fixed").removeClass("fixed");
			}
		});
	}





function initMap(){
	if(!$('#map_yandex').size())return;
		ymaps.ready(init);
		function init() {
			myMap = new ymaps.Map("map_yandex", {
			center: [55.921403, 37.663487],
			zoom: 15
		});
		myPlacemark = new ymaps.Placemark([55.921391, 37.663544], {}, {
			iconImageHref: 'images/marker.png',
			iconImageSize: [122, 78],
			iconImageOffset: [-57, -48]
		});
		myMap.geoObjects.add(myPlacemark);
	}
}


// POPUP FUNCTION START
$.fn.popup = function(o){
		var o = $.extend({
			"opener":".call-back a",
			"popup_holder":"#call-popup",
			"popup":".popup",
			"close_btn":".btn-close",
			"close":function(){},
			"beforeOpen": function(popup) {
			 $(popup).css({
				'left': 0,
				'top': 0
			 }).hide();
		}
	},o);
	return this.each(function(){
		var container=$(this),
		opener=$(o.opener,container),
		popup_holder=$(o.popup_holder,container),
		popup=$(o.popup,popup_holder),
		close=$(o.close_btn,popup),
		bg=$('.bg',popup_holder);
		popup.css('margin',0);
		opener.click(function(e){
			o.beforeOpen.apply(this,[popup_holder]);
			popup_holder.css('left',0);
			popup_holder.fadeIn(400);
			alignPopup();
			bgResize();
			e.preventDefault();
		});
		function alignPopup(){
			var deviceAgent = navigator.userAgent.toLowerCase();
			var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/i);
			if(agentID){
				if(popup.outerHeight()>window.innerHeight){
					popup.css({'top':$(window).scrollTop(),'left': ((window.innerWidth - popup.outerWidth())/2) + $(window).scrollLeft()});
				return false;
				}
				popup.css({
					'top': ((window.innerHeight-popup.outerHeight())/2) + $(window).scrollTop(),
					'left': ((window.innerWidth - popup.outerWidth())/2) + $(window).scrollLeft()
				});
				} else {
					if(popup.outerHeight()>$(window).outerHeight()){
						popup.css({'top':$(window).scrollTop(),'left': (($(window).width() - popup.outerWidth())/2) + $(window).scrollLeft()});
						return false;
					}
				popup.css({
					'top': (($(window).height()-popup.outerHeight())/2) + $(window).scrollTop(),
					'left': (($(window).width() - popup.outerWidth())/2) + $(window).scrollLeft()
				});
			}
		}
		function bgResize(){
			var _w=$(window).width(),
			_h=$(document).height();
			bg.css({"height":_h,"width":_w+$(window).scrollLeft()});
		}
		$(window).resize(function(){
			if(popup_holder.is(":visible")){
				bgResize();
				alignPopup();
			}
		});
		if(popup_holder.is(":visible")){
			bgResize();
			alignPopup();
		}
		close.add(bg).click(function(e){
			var closeEl=this;
			popup_holder.fadeOut(400,function(){
				o.close.apply(closeEl,[popup_holder]);
			});
			e.preventDefault();
		});
		$('body').keydown(function(e){
			if(e.keyCode=='27'){
				popup_holder.fadeOut(400);
			}
		})
	});
};
// POPUP FUNCTION END



function initPlayerForm(){
	$('form').each(function(){
      var form=$(this),
      input=form.find('input:text');
  		form.find('.required').blur(function(){
            var val=$(this).val();
            if((/^[a-zA-Zа-яА-ЯіІєЄїЇ\s-]{1,40}$/ig).test(val)){
                $(this).closest('.row').removeClass('error');
                $(this).removeClass('error');
            }
            else{
                $(this).closest('.row').addClass('error');
                $(this).addClass('error');
            }
        });
        form.on('keyup keydown', '.required.error', function(){
            var val=$(this).val();
            if((/^[a-zA-Z0-9а-яА-ЯіІєЄїЇ\s-\(\)\+]{1,40}$/ig).test(val)){
                $(this).closest('.row').removeClass('error');
                $(this).removeClass('error');
            }
            else{
                $(this).closest('.row').addClass('error');
                $(this).addClass('error');
            }
        });
		 form.find('.phone').blur(function(){
            var val=$(this).val();
             if((/^[0-9\s-\(\)\+]{18}$/ig).test(val)){
                $(this).closest('.row').removeClass('error');
                $(this).removeClass('error');
            }
            else{
                $(this).closest('.row').addClass('error');
                $(this).addClass('error');
            }
        });
        form.on('keyup keydown', '.phone.error', function(){
            var val=$(this).val();
            if((/^[0-9\s-\(\)\+]{18}$/ig).test(val)){
                $(this).closest('.row').removeClass('error');
                $(this).removeClass('error');
            }
            else{
                $(this).closest('.row').addClass('error');
                $(this).addClass('error');
            }
        });
      form.find('.emailv').blur(function(){
          var val=$(this).val();
          if((/^[-\._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/ig).test(val) && val.length<=30){
              $(this).closest('.row').removeClass('error');
              $(this).removeClass('error');
          }
          else{
              $(this).closest('.row').addClass('error');
              $(this).addClass('error');
          }
      });
      form.on('keyup keydown', '.emailv.error', function(){
          var val=$(this).val();
          if((/^[-\._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/ig).test(val) && val.length<=30){
              $(this).closest('.row').removeClass('error');
              $(this).removeClass('error');
          }
          else{
              $(this).closest('.row').addClass('error');
          }
      });
      form.submit(function(e){
          input.trigger('blur');
          if(form.find('.error').size()){

			return false;
		} else {
			_url = form.attr('action');
			values = $(this).serialize();
			console.log();
/*         
         order_type = form.find('[name="order_type"]');
         if(order_type.length){
            alert(order_type.val());
         }
   */     
   
         var name =  form.find("[name='name']").val();
         var phone =  form.find("[name='phone']").val();
         
			$.ajax({
				url: _url,
				type: "post",
				data: values,
				success: function(){
					$('.close-popup').click();
					$('.tnx-open-popup').click();
					setTimeout(function() {
						$('.close-popup').click();
					}, 5000);
					//console.log('Sent');
               
               ga('send', 'event', 'goal_call_order_s2', 'click');
               yaCounter41621814.reachGoal('goal_call_order_s2');
               
               Comagic.push(['addOfflineRequest', {name: name, phone: phone}]);

               /*
               if(order_type.val()=='Заказ звонка'){
                  ga('send', 'event', 'goal_call_order_s2', 'click');
                  yaCounter41621814.reachGoal('goal_call_order_s2');
               }else if(order_type.val()=='Записаться на просмотр'){
                  ga('send', 'event', 'goal_call_form_s2', 'click');
                  yaCounter41621814.reachGoal('goal_call_form_s2');
               }else if(order_type.val()=='Записаться на просмотр'){
                  
               }
               */
				},
				error:function(){
					console.log('Send Fail');
				}
			});
			return false;
		}
      });
  });
};




/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function ($) {

  // Detect touch support
  $.support.touch = 'ontouchend' in document;

  // Ignore browsers without touch support
  if (!$.support.touch) {
    return;
  }

  var mouseProto = $.ui.mouse.prototype,
      _mouseInit = mouseProto._mouseInit,
      _mouseDestroy = mouseProto._mouseDestroy,
      touchHandled;

  /**
   * Simulate a mouse event based on a corresponding touch event
   * @param {Object} event A touch event
   * @param {String} simulatedType The corresponding mouse event
   */
  function simulateMouseEvent (event, simulatedType) {

    // Ignore multi-touch events
    if (event.originalEvent.touches.length > 1) {
      return;
    }

    event.preventDefault();

    var touch = event.originalEvent.changedTouches[0],
        simulatedEvent = document.createEvent('MouseEvents');
    
    // Initialize the simulated mouse event using the touch event's coordinates
    simulatedEvent.initMouseEvent(
      simulatedType,    // type
      true,             // bubbles                    
      true,             // cancelable                 
      window,           // view                       
      1,                // detail                     
      touch.screenX,    // screenX                    
      touch.screenY,    // screenY                    
      touch.clientX,    // clientX                    
      touch.clientY,    // clientY                    
      false,            // ctrlKey                    
      false,            // altKey                     
      false,            // shiftKey                   
      false,            // metaKey                    
      0,                // button                     
      null              // relatedTarget              
    );

    // Dispatch the simulated event to the target element
    event.target.dispatchEvent(simulatedEvent);
  }

  /**
   * Handle the jQuery UI widget's touchstart events
   * @param {Object} event The widget element's touchstart event
   */
  mouseProto._touchStart = function (event) {

    var self = this;

    // Ignore the event if another widget is already being handled
    if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
      return;
    }

    // Set the flag to prevent other widgets from inheriting the touch event
    touchHandled = true;

    // Track movement to determine if interaction was a click
    self._touchMoved = false;

    // Simulate the mouseover event
    simulateMouseEvent(event, 'mouseover');

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');

    // Simulate the mousedown event
    simulateMouseEvent(event, 'mousedown');
  };

  /**
   * Handle the jQuery UI widget's touchmove events
   * @param {Object} event The document's touchmove event
   */
  mouseProto._touchMove = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Interaction was not a click
    this._touchMoved = true;

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');
  };

  /**
   * Handle the jQuery UI widget's touchend events
   * @param {Object} event The document's touchend event
   */
  mouseProto._touchEnd = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Simulate the mouseup event
    simulateMouseEvent(event, 'mouseup');

    // Simulate the mouseout event
    simulateMouseEvent(event, 'mouseout');

    // If the touch interaction did not move, it should trigger a click
    if (!this._touchMoved) {

      // Simulate the click event
      simulateMouseEvent(event, 'click');
    }

    // Unset the flag to allow other widgets to inherit the touch event
    touchHandled = false;
  };

  /**
   * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
   * This method extends the widget with bound touch event handlers that
   * translate touch events to mouse events and pass them to the widget's
   * original mouse event handling methods.
   */
  mouseProto._mouseInit = function () {
    
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.bind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse init method
    _mouseInit.call(self);
  };

  /**
   * Remove the touch event handlers
   */
  mouseProto._mouseDestroy = function () {
    
    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.unbind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse destroy method
    _mouseDestroy.call(self);
  };

})(jQuery);