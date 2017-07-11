define(['jquery'],function(){
	return{
		danwin:function(){
			$('.nav ul li a').on('mouseenter',function(){
				console.log('aaaaaaaaaaaaa')
				var index=$(this).parent().index();
				if(index>0 && index<7){
				console.log(index)
				$(this).append($("<div class='dan'></div>").append($('<h6/>').text('热卖活动')));
				$.ajax({
					type:"get",
					url:"data/dan.json",
					async:true,
					success:function(res){
						
						$('.nav ul li a div').append($('<ol/>'));
						$.each(res[index-1].name,function(idx,title){
							
							$('.nav ul li a div ol').append($('<li></li>'));
							$('.nav ul li a div ol li').eq(idx).text(title);
						});
						
					}
				});
			}
			}).on('mouseleave',function(){
				$(this).find($('div')).remove(); 
				
				
			})
			
		}
	}
	
	
});