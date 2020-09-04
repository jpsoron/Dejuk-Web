$(document).ready(function(){
    $("#mainbody").css("visibility","hidden");
    $(window).scroll(function(){
        if($(this).scrollTop()>0){
            $("#mainbody").css("visibility","visible");
            $("#navbar, #dejuklogo").addClass("minimized");
            $("#override a.navbarlink").removeClass("largelink");
            $("#navchevron").css("opacity","0");
        }
        else{
            $("#navbar, #dejuklogo").removeClass("minimized");
            $("#override a.navbarlink").addClass("largelink");
            $("#navchevron").css("opacity","1");
        }
    })
})
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});