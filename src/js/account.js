require(['config'],function(){
	require(['jquery'],function($){
		//吸盘导航
		xi();
		//购物盒子
		hezi();
		//导航弹窗
		dan();
		var arr=localStorage.getItem('list');
		arr=arr?JSON.parse(arr):[];
		
		
//生成购物车列表
	  var cost=0;
	 for(var i=0;i<arr.length;i++){
	 	 $('.list').append($('<div></div>'));
	 	 $('.list div').eq(i).append($("<input type='checkbox' checked='checked' />"));
	 	 $('.list div').eq(i).append($('<img/>').attr('src',arr[i].imgurl));
	 	 $('.list div').eq(i).append($('<dl></dl>').html("<span>"+arr[i].brand+"</span><br/><span>"+arr[i].name+"</span>"));
	 	 $('.list div').eq(i).append($("<dt class='price'></dt>").text(arr[i].pricce));
	 	 $('.list div').eq(i).append($("<dd></dd>").html("<span class='jian'>-</span><span class='num'>"+arr[i].num+"</span><span class='jia'>+</span>"));
	 	 $('.list div').eq(i).append($('<b/>').text('￥0.00'));
	 	 $('.list div').eq(i).append($("<p class='xiaoji'></>").text('￥'+ arr[i].num*arr[i].pricce.substring(1)));
	 	 $('.list div').eq(i).append($('<button></button>').text('删除'));
	 	 cost+=arr[i].num*arr[i].pricce.substring(1);
	 	 
	 }
//商品计算
       $('.pay .cost').text('￥'+ cost);
	 //加加减减
	 $('.jia').on('click',function(){
	 	var index=$(this).parent().parent().index();
	 	var cost2=0;
	 	var num=$(this).parent().find('.num');
	 	var xiaoji=$(this).parent().parent().find('.xiaoji');
	 	var price=$(this).parent().parent().find('.price');
	 	num.text(parseInt(num.text())+1);
	 	xiaoji.text('￥'+ parseInt(num.text())*parseInt(price.text().substring(1)));
	 	console.log($('.list div').eq(0).find('.xiaoji').text())
	 	for(var i=0;i<arr.length;i++){
	 		cost2+=parseInt($('.list div').eq(i).find('.xiaoji').text().substring(1));
	 		
	 	}
	 	$('.pay .cost').text('￥'+cost2);
	    arr[index].num=parseInt(num.text());
	    localStorage.setItem('list',JSON.stringify(arr));
	 });
	 
	 
	 $('.jian').on('click',function(){
	 	var cost3=0;
	 	var index=$(this).parent().parent().index();
	 	var num=$(this).parent().find('.num');
	 	var xiaoji=$(this).parent().parent().find('.xiaoji');
	 	var price=$(this).parent().parent().find('.price');
	 	num.text(parseInt($(this).parent().find('.num').text())-1);
	 	if(parseInt(num.text())<1){
	 		num.text(1);
	 	}
	 	xiaoji.text('￥'+ parseInt(num.text()*price.text().substring(1)));
	 	for(var i=0;i<arr.length;i++){
	 		cost3+=parseInt($('.list div').eq(i).find('.xiaoji').text().substring(1));
	 		
	 	}
	 	$('.pay .cost').text('￥'+cost3);
	 	arr[index].num=parseInt(num.text());
	    localStorage.setItem('list',JSON.stringify(arr));
	 });
	 //删除列表
	 $('.list button').on('click',function(){
	 	var index=$(this).parent().index();
	 	var cost4=0;
	 	console.log(index);
	 	$(this).parent().remove();
	 	for(var i=0;i<arr.length-1;i++){
	 		cost4+=parseInt($('.list div').eq(i).find('.xiaoji').text().substring(1));
	 		console.log(cost4);
	 	}
	 	$('.pay .cost').text('￥'+cost4);
	 	
	 	arr.splice(index,1);
	 	localStorage.setItem('list',JSON.stringify(arr));
	 	
	 });
	 //是否选中商品
	 $('.list input').on('click',function(){
	 	if($('.list input').prop('checked')==true){
	 		$('.all').prop('checked',true);
	 	}
        
	 	 var xiaoji=parseInt($(this).parent().find('.xiaoji').text().substring(1));
	 	 console.log(xiaoji);
	 	
	 	 if($(this).prop('checked')==false){
	 		$('.all').prop('checked',false);
	 		$('.pay .cost').text('￥'+(parseInt($('.pay .cost').text().substring(1))-xiaoji));
	 	}else{
	 		
	 		$('.pay .cost').text('￥'+(parseInt($('.pay .cost').text().substring(1))+xiaoji));
	 	}
	 	
	 });
	 //全选或反选
	 $('.all').on('click',function(){
	 	var cost6=0;
	 	if($(this).prop('checked')==true){
	 		$('.list input').prop('checked',true);
	 		for(var i=0;i<arr.length;i++){
	 		cost6+=parseInt($('.list div').eq(i).find('.xiaoji').text().substring(1));
	 	
	 	}
	 	$('.pay .cost').text('￥'+cost6);
	 		
	 	}else{
	 		$('.list input').prop('checked',false);
	 		$('.pay .cost').text('￥'+0.00);
	 	}
	 });
	 
	});
	
})
