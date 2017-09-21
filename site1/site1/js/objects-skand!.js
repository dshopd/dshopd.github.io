var objects = {

   form: $('.search-form'),
   items_per_page: 10,
   current_page: 1,
   sort: 'section',
   sort_direction: 'down',
   is_opened: false,
   dform: $('#send-popup'),
   pform: $('.print_container'),
   aform: $('#view-popup'),
   checked_option: '',
   selected_row: '',   


   init: function(items_per_page) {
      objects.items_per_page = items_per_page;
   },
   buildViewForm: function(object_row) {
      var   output
            values = [];

           
      options=['section','rooms','floor','area','price'];
      $.each(options, function( i, option ) {
         values[option] = object_row.find('.object-' + option).html();
      })

      output = 'Заявка на просмотр квартиры: ';
      output = output + values['section'] + ', ';
      output = output + 'комнат ' + values['rooms'] + ', ';
      output = output + 'этаж ' + values['floor'] + ', ';
      output = output + 'площадь ' + values['area'] + ' кв. м, ';
      output = output + 'стоимость  ' + values['price'];
      

      objects.aform.find('.inner-text').html(output);
      objects.aform.find('[name="object"]').val(output);
   },
   sendForm: function() {

      $.ajax({
         url: 'feedback.php',
         method: "POST",
         data: objects.aform.serialize(),
         dataType: "json",
         success: function (data){
            $('.close-popup').click();
         },
      });
   },
   buildDescriptionModal: function(isPrintCallback) {
      var object_row = objects.selected_row;

      options=['section','rooms','floor','area','price'];
      $.each(options, function( i, option ) {
         objects.dform.find('.print_' + option).html( object_row.find('.object-' + option).html() );
      })

      // image
      var print_image_src = object_row.find('.object-image').data('object-image');

      objects.dform.find('.print_image').attr('src',print_image_src);

      if(isPrintCallback){
         objects.dform.find('.print_image').bindImageLoad(function () {
            window.print();
         });
      }
   },
   buildPrint: function() {
      objects.buildDescriptionModal(true);
   },
   sorting: function(sort,sort_direction) {
      objects.sort = sort;
      objects.sort_direction = sort_direction;
      objects.get(objects.current_page);
   },
   paginationClear: function() {
      objects.form.find('.pg-list').html('');
   },
   paginationBuild: function(length) {

      var   pagination_point = objects.form.find('.pg-list'),
            page_count = parseInt(length/objects.items_per_page),
            active_attr = '';

      // clear previous                       
      pagination_point.find(' > *').remove();


      if(objects.current_page > 1){
         var prev_page = objects.current_page-1;
         $('<li class="prev"><a href="#" data-page="'+ prev_page +'">&#60; Предыдущая</a></li>').appendTo(pagination_point);
      }
      for (i = 1; i <= page_count+1; ++i) {

         if(i==objects.current_page){
            active_attr=' class="active"';
         }else{
            active_attr='';
         }
         $('<li' + active_attr + '><a href="#" data-page="'+ i +'">'+ i +'</a></li>').appendTo(pagination_point);
      }
      if(objects.current_page < page_count+1){
         var next_page = objects.current_page+1;
         $('<li class="new"><a href="#" data-page="' + next_page +'">Следующая &#62;</a></li>').appendTo(pagination_point);
      }
      

   },
   get: function(seek_page_num) {
       //alert(page);
      objects.current_page = seek_page_num;

      if (!objects.is_opened){
         objects.form.find('.hide-content').slideDown();
         objects.is_opened = true;
      }
      objects.form.find('[name="current_page"]').val(objects.current_page);
      objects.form.find('[name="items_per_page"]').val(objects.items_per_page);
      objects.form.find('[name="sort"]').val(objects.sort);
      objects.form.find('[name="sort_direction"]').val(objects.sort_direction);


//alert(objects.form.serialize());
      $.ajax({
         url: 'objects-skand.php' ,
         method: "POST",
         data: objects.form.serialize(),
         dataType: "json",
         beforeSend: function() {
            $('body').addClass('is-search-form__loading');
         },

         success: function (data){

            $('body').removeClass('is-search-form__loading');

            // clear previous rows
            $('.object-row').remove();

            if(isMobile.state){
               var table_point = objects.form.find('.table-cont .product-list .object-holder');
            }else{
               var table_point = objects.form.find('.table-cont .table .object-holder');
            }
            
                  

            
            if(data.objects.length>0){

               // remove no result note
               objects.form.find('.object-row-no-result').remove();

               // clear previous rows
               $('.object-row').remove();

               // desktop
               $.each(data.objects, function( i, item ) {


                  //var object_row = table_point.find('.object-holder').clone();
                  var object_row = table_point.clone();

                  object_row.find('.object-section').html(item.building_section);
                  object_row.find('.object-floor').html(item.floor);
                  object_row.find('.object-rooms').html(item.rooms);
                  object_row.find('.object-price').html(item.price+' руб.');
                  object_row.find('.object-area').html(item.area);
                  object_row.find('.object-image').attr('data-object-image',item.image);
                  if(item.is_facing == 1){
                     if(isMobile.state){
                        object_row.find('.object-facing').html('<span class="img"><img src="images/img38.png" alt=""></span><span class="text">с отделкой</span>');
                     }else{
                        object_row.find('.object-facing').html('<img src="images/img38.png" alt="">');
                     }
                  }


                  object_row.removeClass('object-holder').addClass('object-row');

                  table_point.before(object_row);

               });

               //$('.object-image-link').magnificPopup({type: 'image'});

               // build pagination
               objects.paginationBuild(data.length);

/*

               $('body')
                  .popup({
                     "opener":".application-open-popup",
                     "popup_holder":"#application-popup",
                     "popup":".popup",
                     "close_btn":".close-popup"
               });
*/
               $('body').popup({
                  "opener":".send-open-popup",
                  "popup_holder":"#send-popup",
                  "popup":".popup",
                  "close_btn":".close-popup"
               })
               .popup({
                  "opener":".view-open-popup",
                  "popup_holder":"#view-popup",
                  "popup":".popup",
                  "close_btn":".close-popup"
               })

            }else{
               // add no result note desktop
               if(isMobile.state){
                  // add no result note mobile
                  table_point_mobile.after('<li class="object-row object-row-no-result"><div class="params-box" style="text-align:center">По вашему запросу ничего не найдено</div></li>');   
               }else{
                  objects.form.find('.table').after('<div class="object-row object-row-no-result">По вашему запросу ничего не найдено</div>');
               }
               

               objects.paginationClear();
            }

            // objects count
            objects.form.find('.all_sh span').html(data.length);
         },
      });
   },
}

$(document).ready(function(){

   initObjects();

   
   function initObjects (){

      // search submit
      $('.search-form .btn').on('click', function(){
         objects.init(10);
         objects.get(1);
         return false;
      });

      // result table: thead click
      $('.search-form .table-cont .thead .th > span').on('click', function(){

         if(typeof $(this).data('sort') !== 'undefined'){

            objects.sorting($(this).data('sort'),$(this).attr('class'));

            $(this).toggleClass('up').toggleClass('down');
         }
         return false;
      });


      // mobile sort click
      $('.top-list .type1 select').on('change', function(){
         var   sort = $(this).find('option:selected').val(),
               sort_direction = $(this).parents('.top-list').find('.type2 .selecter-element option:selected').val();
         objects.sorting(sort,sort_direction);
      });

      // mobile sort-direction click
      $('.top-list .type2 select').on('change', function(){
         var   sort = $(this).parents('.top-list').find('.type1 .selecter-element option:selected').val(),
               sort_direction = $(this).find('option:selected').val();
         objects.sorting(sort,sort_direction);
      });


      // result table: pagination click
      $(document).on( "click", '.search-form .pg-list a', function(e){ 
         objects.get($(this).data('page'));
         return false;
      });

      // result table: description form
      $(document).on( "click", '.search-form .send-open-popup', function(e){ 
         objects.selected_row = $(this).parents('.object-row')
         objects.buildDescriptionModal();
      });

      // result table: description form - view-open-popup
      $(document).on( "click", '#send-popup .btn', function(e){ 
         $(".close-popup").click();
         objects.selected_row.find('.view-open-popup').click();
         return false;
      });


      // result table:  view form
      $(document).on( "click", '.search-form .view-open-popup', function(e){ 
         objects.buildViewForm($(this).parents('.object-row'));
      });

      // result table: open-print-dialog
      $(document).on( "click", '.search-form .js-open-print-dialog', function(e){ 
         objects.selected_row = $(this).parents('.object-row')
         objects.buildPrint();         
         return false;
      });

      // result table: more filter
      $('.search-holder .radio-list input[type="radio"]').on('change', function(){
         objects.get(1);
         return false;
      });



      // application form submit
      $('.application-form .btn').on('click', function(){
         objects.sendForm();
         return false;
      });

      // filter: appartment click
      $('.search-list .radio-list input[type="radio"] ').on('click', function(){

         if(objects.checked_option != $(this).val()){
            objects.checked_option = $(this).val();

         }else{
            $(this).prop('checked',false);
            objects.checked_option = '';
         }
      });
      
      // filter: is_facing click
      $('.search-holder .open-box .checks-holder input[name="is_facing"] ').on('click', function(){
         objects.get(1);
      });
   }
});