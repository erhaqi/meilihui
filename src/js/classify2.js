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
				
	//洗盘导航
	xi();
	//导航弹窗
	dan();
			
		
	//价格排序
	$('.jiage').on('click',function(){
		console.log(arr);
		
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
		
		
});

   //购物菜单盒子
	hezi();
//点击图片跳转
	$('.show .list').on('click','img',function(){
		var num=$(this).parent().find('p').text();
		console.log(num);
	    location.href='../html/details.html?'+num;
	});
});
	
	
});