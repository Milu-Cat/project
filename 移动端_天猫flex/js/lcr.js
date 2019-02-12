        window.onresize=r;
        function r(){
            var x=window.innerWidth;
            document.getElementsByTagName("html")[0].style.fontSize=x*0.15625+"px";
   
        };
        r();
        // banner
        var n=0;
       $(function(){
           function ss(){
            if(n<2){
              $(".bae").animate({"left":"-=6.4rem"},1500);
              n++;
             }else{
                $(".bae").animate({"left":"0rem"},1);
                n=0;
             }
           }  
           setInterval(ss,2000);
       })