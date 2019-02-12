$(document).ready(function(){
    $("#fullpage").fullpage({
        scrollingSpeed:500,
        anchors:["page1","page2","page3","page4"],
        menu:"#menu",
        navigation:true,      
        navigationPosition:"right",
        navigationTooltips:["page1","page2","page3","page4"],
        afterLoad:function(anchorLink, index){
            window.onresize=MJ;
            $(".a3").eq(index-1).removeClass("animated zoomOutDown").addClass("animated zoomInDown");
            $(".a4").eq(index-1).removeClass("animated zoomOutDown").addClass("animated zoomInDown");
            $(".a5").eq(index-1).removeClass("animated zoomOutUp").addClass("animated zoomInUp");
            $(".a6").eq(index-1).removeClass("animated zoomOutUp").addClass("animated zoomInUp");
        },
        onLeave: function(index, nextIndex, direction){
            $(".a3").eq(index-1).removeClass("animated zoomInDown").addClass("animated zoomOutDown");
            $(".a4").eq(index-1).removeClass("animated zoomInDown").addClass("animated zoomOutDown");
            $(".a5").eq(index-1).removeClass("animated zoomInUp").addClass("animated zoomOutUp");
            $(".a6").eq(index-1).removeClass("animated zoomInUp").addClass("animated zoomOutUp"); 
        }
    });
})
var mj=0,
num;
window.onload=function(){
    window.onresize=MJ;
    MJ();
}
function MJ(){
    mj=window.innerWidth;
    var a1=window.innerHeight;
    a1=parseInt(a1);
    document.getElementById("aa1").style.height=a1*1.06100796+"px";
    document.getElementById("aa2").style.height=a1*1.06100796+"px";
    document.getElementById("aa3").style.height=a1*1.06100796+"px";
    document.getElementById("aa4").style.height=a1*1.06100796+"px";
}