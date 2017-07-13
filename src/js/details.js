require(['config'],function(){
       require(['jquery','fangda','common'],function($){
       	var goods={};
       	var arr=localStorage.getItem('list');
        arr=arr?JSON.parse(localStorage.getItem('list')):[];
        //显示会员名
	    member();
       	//吸盘导航
		xi();
		//购物盒子
		hezi();
		//导航弹窗
		dan();

       	//加载选中商品
       	var search=parseInt(location.search.substring(1));
       	$.ajax({
       		url:'../api/commodity.php',
       		dataType:'json',
       		success:function(res){
       			var mydate=new Date();//预计出货日期
       			
       			
     			
       			$.each(res,function(idx,mate){
       				if(mate.id==search){
       					
       				 $('.path span').eq(4).text(mate.name);
       				 $('.information .left img').attr('src',mate.imgUrl);
       				 $('.information .left img').attr('data-big',mate.daimg);
       				 $('.information .right .brand').text(mate.brand);
       				 $('.information .right .name').text(mate.name);
       				 $('.information .right .price').text('￥'+ mate.price);
       				 $('.information .right .original').text('￥'+mate.original);
       				 $('.information .right .color .color_').text(mate.color);
       				 $('.information .right .pte img').attr('src',mate.imgUrl);
       				 $('.information .right .shipments span').eq(1).text(mydate.getFullYear()+'/'+(mydate.getMonth()+1)+'/'+(mydate.getUTCDate()+1));
       				 $('.information .xiaotu img').eq(0).attr('src',mate.imgUrl);
       				 //商品信息
       				  goods={
       				 	 id:search,
       				 	 brand:$('.information .right .brand').text(),
       				 	 name:$('.information .right .name').text(),
       				 	 pricce:$('.information .right .price').text(),
       				 	 imgurl:$('.information .left img').attr('src'),
       				 	 num:1
       				 }
       				 
       				 //放大镜
                     $('.information .left').gdsZoom();
       				 //商品倒计时
       				 var timer=setInterval(function(){
       				 	var mytime=new Date("2017/08/15");//结束时间
       			        var newtime=new Date();//现在的时间
       			        var residue=mytime.getTime()-newtime.getTime();//总共剩余时间
       			        var day=Math.floor(residue/(1000*60*60*24));//剩余天数
       			        var hour=Math.floor(residue/(1000*60*60))%24;//小时
       			        var minute=Math.floor(residue/(1000*60))%60;//分钟
       			        var second=Math.floor(residue/(1000))%60;//秒
       			        var second_=Math.floor(residue/100)%60;//拆分秒
       			        if(residue>=0){
       			        	$('.count_down .day').text(day);
       			        	$('.count_down .hour').text(hour);
       			        	$('.count_down .minute').text(minute);
       			        	$('.count_down  .second').text(second);
       			        	if(day<10){
       			        		$('.count_down .day').text('0'+day);
       			        	}
       			        	if(hour<10){
       			        		$('.count_down .hour').text('0'+hour);
       			        	}
       			        	if(minute<10){
       			        		$('.count_down .minute').text('0'+minute);
       			        	} 
       			        	if(second<10){
       			        		$('.count_down  .second').text('0'+second);
       			        	}
       			        	
       			        	
       			        }else{
       			        	clearInterval(timer);
       			        }
       				 },1000);
       				 
       				}
       			});
       		}
       	});
       	
         //加加减减
         $('.jia').on("click",function(){
         	$('.number').text(parseInt($('.number').text())+1);
         	goods.num+=1;
         	
         });
         
         $('.jian').on('click',function(){
         	$('.number').text(parseInt($('.number').text())-1);
         	goods.num-=1;
         	if(parseInt($('.number').text())<1){
         		$('.number').text('1');
         		goods.num=1;
         	}
         	
         });
         //加入到购物车
         $('.shop button').on('click',function(){
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
        //弹出购物盒子
        $('.hezi').html('');
        for(var i=0;i<arr.length;i++){
			$('.hezi').append($("<li class='xing'></li>"));
			$('.hezi .xing').eq(i).append($('<img />').attr('src',arr[i].imgurl));
			$('.hezi .xing').eq(i).append($('<dl/>').html("<span>"+arr[i].name+"</span><span>"+arr[i].num +'*'+arr[i].pricce.substring(1)+"</span>"));
			$('.hezi .xing').eq(i).append($('<dt/>').text("删除"));
		}
		 $('.hezi').slideDown(2000).slideUp(1000);
        
        
         });
       
       
       });
	
});
