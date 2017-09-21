$(document).ready(function(){

   function serverTime() { 
      var time = null; 
        $.ajax({url: 'http://skandinavskiy.ru/serverTime.php', 
            async: false, dataType: 'text', 
            success: function(text) { 
                time = new Date(text); 
            }, error: function(http, message, exc) { 
                time = new Date(); 
        }}); 
        return time; 
   }

   var timeX = new Date(2017, 6, 19, 0, 0, 0); 
   
   $('#countdown').countdown({
       until: timeX, 
       serverSync: serverTime,
		//labels: ['Лет','Месяцев','Недель','Дней','Часов','Минут','Секунд'],
		//labels1: ['Год','Месяц','Неделя','День','Час','Минута','Секунда'],
		//labels2: ['Года','Месяца','Недели','Дня','Часа','Минуты','Секунды'],
        // The display texts for the counter
       //format: 'Dh',
   })
});