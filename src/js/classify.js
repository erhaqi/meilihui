require(['config'],function(){
	var pageNo = 1;
	var lastPage = 1;
	var num=7;
	require(['jquery'],function($){
		
		$.ajax({
			type:"get",
			url:"../api/page.php",
			data:{pageNo:pageNo,qty:8},
			async:true,
			dataType:'json',
			success:function(res){
				
				$.each(res.data, function(idx,pg) {
					  
                     $('<div></div>').appendTo($('.list'));
                     $('.list div').eq(idx).append($('<img/>').attr('src',pg.imgUrl));
                     $('.list div').eq(idx).append($('<dl></dl>').text(pg.brand));
                     $('.list div').eq(idx).append($('<dt></dt>').text(pg.name));
                     $('.listdiv').eq(idx).append($('<dd></dd>').text('￥'+pg.price));
                     $('.list div').eq(idx).append($("<span/>").text('￥'+pg.original));
                     $('.slistdiv').eq(idx).append($("<button/>").text('加入购物车'));
				});
				pageNo++;
				//移入边框
				$('.list').on('mouseenter','div',function(){
					$(this).find('button').css('visibility','visible');
//					$(this).css('border','1px solid red');
				}).on('mouseleave','div',function(){
					$(this).find('button').css('visibility','hidden');
//					$(this).css('border','none');
				});
				
			}
		
		});
		// 滚动更多
			$(window).on('scroll',function(){
				//吸盘菜单
				if(window.scrollY>120){
					$('.nav').addClass('fixed');
				}else{
					$('.nav').removeClass('fixed');
				}
				
				
				
				var scrollTop = $(window).scrollTop();
				var winHeight = $(window).height();
				var scrollHeight = $('html').outerHeight();

				// 如何判断滚动到最底部
				if(scrollTop >= scrollHeight - winHeight - 100){
					
					if(pageNo == lastPage) return;
					$.ajax({
						url:'../api/page.php',
						data:{pageNo:pageNo,qty:4},

						// 设定返回数据类型
						dataType:'json',
						success:function(res){
	
							$.each(res.data, function(idx,pg) {
					         num++;
                     $('<div></div>').appendTo($('.list'));
                     $('.list div').eq(num).append($('<img/>').attr('src',pg.imgUrl));
                     $('.list div').eq(num).append($('<dl></dl>').text(pg.brand));
                     $('.list div').eq(num).append($('<dt></dt>').text(pg.name));
                     $('.list div').eq(num).append($('<dd></dd>').text('￥'+pg.price));
                     $('.list div').eq(num).append($("<span/>").text('￥'+pg.original));
                     $('.list div').eq(num).append($("<button/>").text('加入购物车'));
                     
				});

							pageNo++;
							 
						}
					});

					// 更新lastPage
					lastPage = pageNo;
					//底部
					$('.foot').css("margin-top",$(".show").innerHeight()+350);
				    $('.foot').css('visibility','visible');
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
	$('.sort').on('click',function(){
		console.log('123')
	})
	
	})
	
	
	
	
})
