$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>0){
            $("#navbar, #dejuklogo").addClass("minimized");
        }
        else{
            $("#navbar, #dejuklogo").removeClass("minimized");
        }
    })
})