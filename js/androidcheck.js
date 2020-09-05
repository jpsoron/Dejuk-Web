$(document).ready(function(){

    var userAgent = navigator.userAgent.toLowerCase(); 
    var Android = userAgent.indexOf("android") > -1;

    if(Android){
        $("#navbar").addClass("minimized");
        $("#mainbody").css("visibility","hidden");
        scrollTo("#section1");
    }
})