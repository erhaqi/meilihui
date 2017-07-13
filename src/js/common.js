var arr=localStorage.getItem('list');
arr=arr?JSON.parse(localStorage.getItem('list')):[];


//导航弹窗
function dan(){
		$('.nav ul li a').on('mouseenter',function(){
				
				var index=$(this).parent().index();
				if(index>0 && index<7){
				
				$(this).append($("<div class='dan'></div>").append($('<h6/>').text('热卖活动')));
				$.ajax({
					type:"get",
					url:"../data/dan.json",
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
				
				
  });
  
}

//洗盘菜单
    function xi(){
    	$(window).on('scroll',function(){
		if(window.scrollY>120){
			$('.nav').addClass('fixed');
		}else{
			$('.nav').removeClass('fixed');
		}
	});
}
    
//购物盒子
function hezi(){
$('.nav ul li a').eq(8).on('mouseenter',function(){
		$(this).append($("<div class='hezi'></div>"));
		for(var i=0;i<arr.length;i++){
			$('.hezi').append($("<li class='xing'></li>"));
			$('.hezi .xing').eq(i).append($('<img />').attr('src',arr[i].imgurl));
			$('.hezi .xing').eq(i).append($('<dl/>').html("<span>"+arr[i].name+"</span><span>"+arr[i].num +'*'+arr[i].pricce.substring(1)+"</span>"));
			$('.hezi .xing').eq(i).append($('<dt/>').text("删除"));
		}
		console.log($('.hezi').html());
		
	}).on("mouseleave",function(){
		$(this).find('div').html('');
		$(this).find('div').remove();
	});
}