require(['config'],function(){
	var pageNo = 1;
	var lastPage = 1;
	var num=-1;
	var arr=localStorage.getItem('list');
	arr=arr?JSON.parse(localStorage.getItem('list')):[];
	console.log(arr)
	require(['jquery',],function($,){
		
		$.ajax({
			type:"get",
			url:"../api/page.php",
			data:{pageNo:pageNo,qty:16},
			dataType:'json',
			async:true,
			success:function(res){
				var pageLen=Math.ceil(res.total/res.qty);
				$('.show .list').html(''); 
				$.each(res.data, function(idx,pg) {
					
					num++;
                     $('<div></div>').appendTo($('.show .list'));
                     $('.list div').eq(num).append($('<img/>').attr('src',pg.imgUrl));
                     $('.list div').eq(num).append($('<dl></dl>').text(pg.brand));
                     $('.list div').eq(num).append($('<dt></dt>').text(pg.name));
                     $('.list div').eq(num).append($('<dd></dd>').text('￥'+pg.price));
                      $('.list div').eq(num).append($('<p/>').text(pg.id));
                     $('.list div').eq(num).append($("<span/>").text('￥'+pg.original));
                     $('.list div').eq(num).append($("<button/>").text('加入购物车'));
                     $('.list div').eq(parseInt(Math.random()*16)).append($('<b></b>').text('买手推荐'));
				});
				
				//生成分页
				for(var i=1;i<=pageLen;i++){
					
				$('.show .ye').append($("<span class='sp'></span>").text(i));
				if(i===pageNo){
					$('.show .ye .active ').addClass('active').siblings().removeClass('active');
				}
				
			}
		}
			
	
		
	});	
			//切换分页
	$('.show').on('click','.sp',function(){
       pageNo=$(this).text();
       num=-1;
       $.ajax({
       	type:"get",
			url:"../api/page.php",
			data:{pageNo:pageNo,qty:16},
			dataType:'json',
			async:true,
			success:function(res){
				var pageLen=Math.ceil(res.total/res.qty);
				$('.show .list').html('');
				$.each(res.data, function(idx,pg) {
					num++;
                     $('<div></div>').appendTo($('.show .list'));
                     $('.list div').eq(num).append($('<img/>').attr('src',pg.imgUrl));
                     $('.list div').eq(num).append($('<dl></dl>').text(pg.brand));
                     $('.list div').eq(num).append($('<dt></dt>').text(pg.name));
                     $('.list div').eq(num).append($('<dd></dd>').text('￥'+pg.price));
                     $('.list div').eq(num).append($("<span/>").text('￥'+pg.original));
                     $('.list div').eq(num).append($('<p/>').text(pg.id));
                     $('.list div').eq(num).append($("<button/>").text('加入购物车'));
                     $('.list div').eq(parseInt(Math.random()*16)).append($('<b></b>').text('买手推荐'));
                     
				});
				
		}
       	
       });
	});
	//移入边框
				$('.list').on('mouseenter','div',function(){
					$(this).find('button').css('visibility','visible');
//					$(this).css('border','1px solid red');
				}).on('mouseleave','div',function(){
					$(this).find('button').css('visibility','hidden');
//					$(this).css('border','none');
				});
				
	//洗盘菜单
	$(window).on('scroll',function(){
		if(window.scrollY>120){
			$('.nav').addClass('fixed');
		}else{
			$('.nav').removeClass('fixed');
		}
	});
	//导航弹窗
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
			
		
	//价格排序
	$('.jiage').on('click',function(){
		console.log(arr);
		
	});
	
	//购物菜单盒子
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
	//加入购物车
	
	$('.show .list').on('click','button',function(){
		
		var goods={
			id:$(this).parent().find($('p')).text(),
			brand:$(this).parent().find($('dl')).text(),
			name:$(this).parent().find($('dt')).text(),
			imgurl:$(this).parent().find($('img')).attr('src'),
			pricce:$(this).parent().find($('dd')).text(),
			num:1
		};
		var number=0;
         	if(arr.length==0){
         		arr.push(goods);
         	}else{
         	for(var i=0;i<=arr.length-1;i++){
         			if(arr[i].id==goods.id){
         				
         				goods.num+=arr[i].num;
         				arr.splice(i,1);
         			}
         			
         	}
         	arr.unshift(goods);
         }		
         		
         		
         localStorage.setItem('list',JSON.stringify(arr));
		console.log(arr);
		
});
		
	});
	
})