// var trampTwo = "http://www.ranesplayground.com/images/ThePower/tramp-2.png";
// var trampOne = "http://www.ranesplayground.com/images/ThePower/tramp-1.png";
// var cuntTwo = "http://www.ranesplayground.com/images/ThePower/cunt-2.png";
// var cuntOne = "http://www.ranesplayground.com/images/ThePower/cunt-1.png";
// var katieTwo = "http://www.ranesplayground.com/images/ThePower/katie-2.png";
// var katieOne = "http://www.ranesplayground.com/images/ThePower/katie-1.png";
// var kimTwo = "http://www.ranesplayground.com/images/ThePower/kim-2.png";
// var kimOne = "http://www.ranesplayground.com/images/ThePower/kim-1.png";
// var kratzTwo = "http://www.ranesplayground.com/images/ThePower/kratz-2.png";
// var kratzOne = "http://www.ranesplayground.com/images/ThePower/kratz-1.png";



/* Kanye hath but one face, that of a very sad man */

$(".tramp").hover(
  function(){
    $(".tramp img").attr("src",trampTwo)
  }, function(){
  $(".tramp img").attr("src",trampOne);
});

$(".hunt").hover(
  function(){
    $(".hunt img").attr("src",cuntTwo)
  }, function(){
  $(".hunt img").attr("src",cuntOne);
});

$(".katie").hover(
  function(){
    $(".katie img").attr("src",katieTwo)
  }, function(){
  $(".katie img").attr("src",katieOne);
});

$(".kim").hover(
  function(){
    $(".kim img").attr("src",kimTwo)
  }, function(){
  $(".kim img").attr("src",kimOne);
});

$(".kratz").hover(
  function(){
    $(".kratz img").attr("src",kratzTwo)
  }, function(){
  $(".kratz img").attr("src",kratzOne);
});







$(".image, .image1").hover(function(){
    if ($ (this).hasClass("tramp") ) {    
    $(".name").html("<p>DONALD TRUMP</p>");
    } 
    else if ($ (this).hasClass("hunt") ) {    
    $(".name").html("<p>JEREMY HUNT</p>");
    } 
    else if ($ (this).hasClass("katie") ) {    
    $(".name").html("<p>KATIE HOPKINS</p>");
    } 
    else if ($ (this).hasClass("kanye") ) {    
    $(".name").html("<p>KANYE WEST</p>");
    }
 
    else if ($ (this).hasClass("kim") ) {    
    $(".name").html("<p>KIM KARDASHIAN</p>");
    } 
    else if ($ (this).hasClass("kratz") ) {    
    $(".name").html("<p>KEN KRATZ</p>");
    } 
}); 




$( ".image,.image1" ).click( function() {
   
    if  ($ (this).hasClass("tramp") ) {
       $(this).hide(3000);

    } else if  ($ (this).hasClass("hunt") ) {
      $(this).effect("explode", 1000);
    } 
    
    else if  ($ (this).hasClass("kanye") ) {
      $(this).hide(3000);
    } 
  
   
  
    else if  ($ (this).hasClass("katie") ) {
      $(this).effect("explode", 1000);
    } 
  
    else if  ($ (this).hasClass("kim") ) {
        $(this).hide(3000);

    } 
 
  else if  ($ (this).hasClass("kratz") ) {
      $(this).effect("explode", 1000);
    } 
          
   
  
});
  



  $(".tramp").click(function() {
  audioTramp.play();
});
  
  $(".hunt").click(function() {
  audioHunt.play();
});

 $(".kanye").click(function() {
  audioKanye.play();
});

 $(".kim").click(function() {
  audioKim.play();
});

 $(".kratz").click(function() {
  audioKratz.play();
});

 $(".katie").click(function() {
  audioKatie.play();
});


  
  
  
   