require(['config'],function(){
	
	require(['jquery','lunbo','fangda','ajax'],function($,lunbo,fangda,ajax){
	
		//调用轮播图插件
		
		$('.lunbo').lxCarousel({
				imgs:['img/lun1.jpg','img/lun1.jpg','img/lun1.jpg','img/lun1.jpg'],
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
					
				})
		
		
	})
})
