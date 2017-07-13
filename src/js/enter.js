require(['config'],function(){
	require(['jquery','common'],function($){
		
		$('#foot').load('../html/foot.html',function(){
			
		});
		
		
		
		var mima='';
		//登录密码返回后台加密
		$('#password').on("blur",function(){
		 var Password=$('#password').val();
		  $.ajax({
		  	url:"../api/jiami.php",
		    data:{Password:Password},
		    success:function(res){
		    	mima=res;
		    }
		  });
		
		
		});
		
		
		
		
	//会员登录
	$('.btn').on('click',function(){
		var Name=$('#name').val();
		$.ajax({
			url:"../api/finduser.php",
			dataType:'json',
			success:function(res){
				$.each(res,function(idx,xinxi){
					if(xinxi.name==$('#name').val() && xinxi.password==mima){
						
						$('.table .hint').eq(0).css('visibility','hidden');
						sessionStorage.setItem('name',Name);
						setTimeout(function(){
							parent.location.href='../index.html';
						},2000);
						$('.table .hint').eq(0).css('visibility','visible').text('正在进行页面跳转...');
					   return false;
					}else{
						$('.table .hint').eq(0).css('visibility','visible').text('用户不存或密码不正确');
					}
						
					
					
				})
			}
			
		});
		
		
	});
	
	
		
		
		
		
		
	});
	
	
	
	
})
