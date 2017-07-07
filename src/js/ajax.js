define(['jquery'],function($){
	return  {
		ajax:function(){
			//ajax请求
			//今日新品
		$.ajax({
			type:"get",
			url:"../data/home.json",
			async:true,
			success:function(res){
				var $oDiv=$("<div>123</div>");
				$.each(res, function(idx,xin) {
					$(".bot").append($("<div></div>"));
					$(".bot div").eq(idx).append($("<img/>").attr("src",xin.imgurl));
					$(".bot div").eq(idx).append($("<span>").text(xin.name));
					$(".bot div").eq(idx).append($("<b>").text(xin.cost));
					$(".bot div").eq(idx).append($("<dd>").text('折起'));
					$(".bot div").eq(idx).append($("<dt>").hide().text('123'));
					
				});
				//鼠标移入事件
				$(".bot ").on("mouseenter",'div',function(){
					$(this).find('dt').show();
					
					
				});
				$(".bot ").on("mouseleave",'div',function(){
					$(this).find('dt').hide();
					
				})
				
			}
		});
		//热门商品
		$.ajax({
			type:"get",
			url:"../data/hot.json",
			async:true,
			success:function(res){
				
				$.each(res, function(idx,xin) {
					$(".hot-tu").append($("<div></div>"));
					$(".hot-tu div").eq(idx).append($("<img/>").attr("src",xin.imgurl));
					$(".hot-tu div").eq(idx).append($("<span>").text(xin.name));
					$(".hot-tu div").eq(idx).append($("<b>").text(xin.cost));
					$(".hot-tu div").eq(idx).append($("<dd>").text('折起'));
					$(".hot-tu div").eq(idx).append($("<dt>").hide().text('123'));
					
             
					
					
				});
				//鼠标移入事件
				$(".hot-tu ").on("mouseenter",'div',function(){
					console.log('123')
					$(this).find('dt').show();
					
					
				});
				$(".hot-tu ").on("mouseleave",'div',function(){
					$(this).find('dt').hide();
					
				})
			}
			
		});
		//女士用品
		$.ajax({
			type:"get",
			url:"../data/woman.json",
			async:true,
			success:function(res){
				
				$.each(res, function(idx,xin) {
					
					$(".woman .right").append($("<div></div>"));
					$(".woman .right div").eq(idx).append($("<img/>").attr("src",xin.imgurl));
					$(".woman .right div").eq(idx).append($("<span>").text(xin.name));
					$(".woman .right div").eq(idx).append($("<b>").text(xin.cost));
					$(".woman .right div").eq(idx).append($("<dd>").text('折起'));
					$(".woman .right div").eq(idx).append($("<dt>").hide().text('123'));
					
             
					
					
				});
				//鼠标移入事件
				$(".woman .right").on("mouseenter",'div',function(){
					
					$(this).find('dt').show();
					
					
				});
				$(".woman .right ").on("mouseleave",'div',function(){
					$(this).find('dt').hide();
					
				});
			}
			
		});
		
		$.ajax({
			type:"get",
			url:"../data/man.json",
			async:true,
			success:function(res){
				
				$.each(res, function(idx,xin) {
					
					$(".man .right").append($("<div></div>"));
					$(".man .right div").eq(idx).append($("<img/>").attr("src",xin.imgurl));
					$(".man .right div").eq(idx).append($("<span>").text(xin.name));
					$(".man .right div").eq(idx).append($("<b>").text(xin.cost));
					$(".man .right div").eq(idx).append($("<dd>").text('折起'));
					$(".man .right div").eq(idx).append($("<dt>").hide().text('123'));
					
             
					
					
				});
				//鼠标移入事件
				$(".man .right").on("mouseenter",'div',function(){
					
					$(this).find('dt').show();
					
					
				});
				$(".man .right ").on("mouseleave",'div',function(){
					$(this).find('dt').hide();
					
				});
			}
			
		});
		
		}
	}
	
	
});