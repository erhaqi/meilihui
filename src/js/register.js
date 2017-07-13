require(['config'],function(){
	require(['jquery','common'],function($){
		
		
		//表单验证
		var name=false;
		var password=false;
		var ensure=false;
		var code=false;
		var Name='';
		var Password='';
		var userarr=localStorage.getItem('name');
		//userarr=userarr?JSON.parse(localStorage.getItem('name')):[];
		//账户名验证
		
		$('#name').on('blur',function(){
			if(/^[\w\-\.]+@[\da-z\-]+(\.[a-z]{2,})+$/.test($('#name').val()) || /^1[34578]\d{9}$/.test($('#name').val())){
			name=true;
			Name=$('#name').val();
			$('.table .hint').eq(0).css('visibility','visible').text('用户名合法');
			//匹配用户名是否存在
			$.ajax({
				url:"../api/finduser.php",
				dataType:'json',
				success:function(res){
					   console.log(res);
					    $.each(res,function(idx,ming){
						if(ming.name==$('#name').val()){
							$('.table .hint').eq(0).css('visibility','visible').text('用户名已存在');
							name=false;
						}
							 
						
					})
				}
				
			});	
			
			
			$('.table .hint').eq(0).css('visibility','visible').text('合法的用户名');
		}else{
			name=false;
			$('.table .hint').eq(0).css('visibility','visible').text('不合法的用户名');
		}
		});
		//密码验证
		$('#password').on('blur',function(){
			if(/^[^\s]{6,20}$/.test($('#password').val())){
			$('.table .hint').eq(1).css('visibility','visible').text('密码可用');
			password=true;
			Password=$('#password').val();
		}else{
			$('.table .hint').eq(1).css('visibility','visible').text('密码不可用');
			password=false;
		}
			
			
		});
		//密码确认
		$('#ensure').on('blur',function(){
			if($(this).val()==$('#password').val()){
				ensure=true;
				$('.table .hint').eq(2).css('visibility','visible').text('两次密码一致');
			}else{
				ensure=false;
			$('.table .hint').eq(2).css('visibility','visible').text('两次密码不一致');
			}
		});
		//验证码
		var code='1234567890qwertyuiopasdfghjklzxcvbnm';
		var ma='';
		for(var i=0;i<4;i++){
		         ma+=code[parseInt(Math.random()*36)];
		}
		$('.coded').text(ma);
		$('#code').on('blur',function(){
			code=true;
			if($(this).val()==$('.coded').text()){
				$('.code .hint').eq(0).css('visibility','visible').text('验证码正确');
			}else{
				code=false;
				$('.code .hint').eq(0).css('visibility','visible').text('验证码不一致');
			}
		});
		
		//提交信息
		
		$('.btn button').on('click',function(){
			if(name==true && password==true && ensure==true && code==true){

                
                
               parent.location.href='../index.html',
				
				$.ajax({
					url:'../api/user.php',
					data:{Name:Name,Password:Password},
					dataType:'json',
					success:function(res){
						console.log(123);
					}
					
				})
			}
			sessionStorage.setItem('name',Name);
			
			
		});
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	});
	
	
	
	
	
	
});
