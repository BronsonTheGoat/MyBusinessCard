$(document).ready(function(){
    $("#btn1").click(function(){
        $(".about-me").hide();
        $(".business-card").animate({width: '0vw', height: '0vh'},"slow");
        $(".contact").animate({width: '100vw', height: '100vh'});
        $(".contact").show(500);
    });
  $("#btn2").click(function(){
        $(".contact").hide(200);
        $(".contact").animate({width: '0vw', height: '0vh'},"slow");
        $(".business-card").animate({width: '100vw', height: '100vh'}, "slow");
        $(".about-me").show();
    });
});