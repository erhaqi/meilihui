require(['config'],function(){
	
	require(['jquery','lunbo','fangda','ajax','huiding','danwin','common'],function($,lunbo,fangda,ajax,huiding,danwin,common){
	   //显示会员名
	    member();
	    
		//调用轮播图插件
		$('.lunbo').lxCarousel({
				imgs:['img/lun1.jpg','img/lun2.jpg','img/lun3.jpg','img/lun1.jpg'],
				width:window.innerWidth-20,
				height:500
				
			});
			ajax.ajax();
			
			//鼠标移入事件
				$(".today .left").on("mouseenter",'div',function(){
					
					$(this).find('dt').css("visibility","visible");
					
					
				});
				$(".today .left").on("mouseleave",'div',function(){
					
					$(this).find('dt').css("visibility","hidden");
					
				});
		    //回顶事件
		    huiding.huiding();
		    //弹窗
		    danwin.danwin();
		
	})
})
