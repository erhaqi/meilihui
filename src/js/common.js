var arr=localStorage.getItem('list');
arr=arr?JSON.parse(localStorage.getItem('list')):[];
//用户名显示
function member(){
	if(sessionStorage.getItem('name')){
	    $('.top-in .left li').eq(0).html('欢迎您的到来&nbsp;&nbsp;').css('color','red');
	    $('.top-in .left li').eq(1).html(sessionStorage.getItem('name'));
	    $('.top-in .left li').eq(2).html('&nbsp;&nbsp;用户');
	     $('.top-in .left li').css('line-height','30px');
	    }
}


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
						
						$('.nav ul li a .dan').append($('<ol/>'));
						$.each(res[index-1].name,function(idx,title){
							
							$('.nav ul li a .dan ol').append($('<li></li>'));
							$('.nav ul li a .dan ol li').eq(idx).text(title);
						});
						
					}
				});
			}
			}).on('mouseleave',function(){
				var index=$(this).parent().index();
				if(index>0 && index<7){
				$(this).find($('div')).remove(); 
				}
				
  });
  
}

//吸盘菜单
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
	//重新刷新本地储存
	arr=JSON.parse(localStorage.getItem('list'));
		$('.hezi').html('');
		for(var i=0;i<arr.length;i++){
			$('.hezi').append($("<li class='xing'></li>"));
			$('.hezi .xing').eq(i).append($('<img />').attr('src',arr[i].imgurl));
			$('.hezi .xing').eq(i).append($('<dl/>').html("<span>"+arr[i].name+"</span><span>"+arr[i].num +'*'+arr[i].pricce.substring(1)+"</span>"));
			$('.hezi .xing').eq(i).append($('<dt/>').text("删除"));
		}
		$('.hezi').slideDown();
		
	}).on("mouseleave",function(){
		$('.hezi').slideUp();
		$('.hezi').html('');
		
		
	});
}