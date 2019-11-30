$(document).ready(function(){
  $("body").addClass("body");
    var  winHeight = window.screen.height;
    $(".navLong").css({"height":winHeight+"px"})
    // $(".lookBigPhoto").css({"height":winHeight+"px"})
    $("#nav").click(function(){
    $(".navLong").slideToggle("slow");
    }); 
  });

  function divHeight(_widthAndPercent,divId){
    let Id =document.getElementById(divId)
    let winWidth = Id.offsetWidth;
    let divHeight = winWidth/_widthAndPercent;
      Id.style.height = divHeight+"px";
  }
  var swiper = new Swiper('#focus3', {
    direction : 'horizontal',
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next',
      });