//Welcome page button
$(document).ready(function(){
    $(".btn1").click(function(){
        $(".wtext").hide();
        $(".btn2").click(function(){
        $(".wtext").show();
    });
});
});


//index page fade
/*
$(document).ready(function(){
   function loop(){
      $(".active w-100 same").each(function(index){
      $(this).delay(2000*index).fadeIn(2000).fadeOut(2000, function(){
       loop();
   });
     }); 

 }
                   loop(); 
 }); 
*/


//Bio pages fade

 $(document).ready(function(){
   function loop(){
      $(".same").each(function(index){
      $(this).delay(3000*index).fadeIn(3000).fadeOut(3000, function(){
       loop();
   });
     }); 

 }
                   loop(); 
 }); 
 
 $("#dust > img:gt(0)").hide(); //hides all img with an index greater than 0
var myInterval= setInterval(function() { 
  $('#dust > img:first').fadeOut(1000).next().fadeIn(1000).end().appendTo('#dust');
},  3000);
/*The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).*/
//In this example it says call this function every 3 seconds
//Syntax for setInterval. setInterval(function, milliseconds);
