require(['config'],function(){
       require(['jquery'],function($){
       	var arr=localStorage.getItem('list');
        arr=arr?JSON.parse(localStorage.getItem('list')):[];
       	//吸盘导航
		xi();
		//购物盒子
		hezi();
		//导航弹窗
		dan();
//     	console.log(location.search);
//     	if(location.search.substring(1)=='40'){
//     		console.log('123');
//     	}
       	//加载选中商品
       	var search=parseInt(location.search.substring(1));
       	$.ajax({
       		url:'../api/commodity.php',
       		dataType:'json',
       		success:function(res){
       			var mydate=new Date();
     			console.log(mydate.toLocaleDateString());
       			$.each(res,function(idx,mate){
       				if(mate.id==search){
       					console.log(mate.color)
       				 $('.path span').eq(4).text(mate.name);
       				 $('.information .left img').attr('src',mate.imgUrl);
       				 $('.information .right .brand').text(mate.brand);
       				 $('.information .right .name').text(mate.name);
       				 $('.information .right .price').text('￥'+ mate.price);
       				 $('.information .right .original').text('￥'+mate.original);
       				 $('.information .right .color .color_').text(mate.color);
       				 $('.information .right .pte img').attr('src',mate.imgUrl);
       				 $('.information .right .shipments span').eq(1).text(mydate.getFullYear()+'/'+(mydate.getMonth()+1)+'/'+(mydate.getUTCDate()+1));                                   
       				}
       			})
       		}
       	});
       	
   
       
       
       
       });
	
});
