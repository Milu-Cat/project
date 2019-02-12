
var swiper1=new Swiper(".swiper-container",{
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})
//nav 点击改变高度 实现隐藏和显示
var mj=0,
num;
window.onresize=MJ;
function MJ(){
    mj=window.innerWidth;
    var a4=document.getElementById("a4"),
    buju1=document.getElementById("buju1"),
    a5=document.getElementsByClassName("a5"),
    c6a=document.getElementsByClassName("c6a"),
    c6=document.getElementsByClassName("c6"),
    c1=document.getElementsByClassName("c1"),
    c2=document.getElementsByClassName("c2");
    for(var i=0;i<c6a.length;i++){
        c6a[i].style.width="100%";
        c6a[i].style.height="100%";
        c6[i].style.width="100%";
        c6[i].style.height="100%";
        c1[i].style.width="100%";
        c1[i].style.height="100%";
        c2[i].style.width="100%";
        c2[i].style.height="100%";
    }
    if(mj<900){
        buju1.style.height=1.024*mj+"px";
        a4.style.height="284px";
        a4.style.width="220px";
        a4.style.position="absolute";
        a4.style.top="50%";
        a4.style.left="50%";
        a4.style.marginTop="-142px";
        a4.style.marginLeft="-110px";
        a4.style.fontSize="50px";
        a4.style.paddingTop="40px";
        for(var i=0;i<a5.length;i++){
            a5[i].style.fontSize="50px";
            a5[i].style.lineHeight="45px";
        }
    }else{
        buju1.style.height=0.56111*mj+"px";
        a4.style.height="465px";
        a4.style.width="360px";
        a4.style.position="absolute";
        a4.style.top="50%";
        a4.style.left="50%";
        a4.style.marginTop="-232.5px";
        a4.style.marginLeft="-180px";
        a4.style.paddingTop="70px";
        for(var i=0;i<a5.length;i++){
            a5[i].style.fontSize="90px";
            a5[i].style.lineHeight="90px";
        }
    }
}
MJ();
$(function() {
    var k=0;
  $("#aa").click(function(){
      if(k==0){
          $('#row1').stop().slideDown(500);
          k=1;
      }else{
          $('#row1').stop().slideUp(500);
          k=0;
      } 
  });
  $(".c3a").hover(function(){
      var num1=parseInt($(this).attr("data-i"));
    //   $(".c6").eq(num1).animate({"width":"+=20px","left":"-=20px","top":"-=20px"},300);
      $(".c2").stop(false,true).eq(num1).animate({"height":"-=40px","width":"-=40px","left":"+=20px","top":"+=20px","opacity":"1"},400).css("display","block");
      $(".c1").eq(num1).animate({"height":"-=0px"},300).css("display","block");
  },function(){
      var num1=parseInt($(this).attr("data-i"));
    //   $(".c6").eq(num1).animate({"width":"-=20px","left":"+=20px","top":"+=20px"},300);
      $(".c2").stop(false,true).eq(num1).animate({"height":"+=40px","width":"+=40px","left":"-=20px","top":"-=20px","opacity":"0"},400);
      $(".c1").eq(num1).animate({"height":"+=0px"},300).css("display","none");
  })
});