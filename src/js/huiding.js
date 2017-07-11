define(['jquery'],function(){
	return{
	     huiding:function(){
	     	$(window).on('scroll',function(){
	     		if($(window)[0].scrollY>400){
	     			$('.box').css("visibility","visible");
	     		}else{
	     			$('.box').css("visibility","hidden");
	     		}
	     	});
	     	//洗盘菜单
	        $(window).on('scroll',function(){
		if(window.scrollY>120){
			$('.nav').addClass('fixed');
		}else{
			$('.nav').removeClass('fixed');
		}
	});
	     	$('.fanhui').on("click",function(){
	     		var timer=setInterval(function(){
	     			var scrollTop=$(window)[0].scrollY;
	     			var speed=Math.ceil(scrollTop/10);
	     			scrollTop-=speed;
	     			if(scrollTop<=0 || speed===0){
	     				clearInterval(timer);
	     				scrollTop=0;
	     			}
	     			$(window)[0].scrollTo(0 ,scrollTop)
	     		},20)
	     		
	     	});
	     	
	     	
	     }
	}
});