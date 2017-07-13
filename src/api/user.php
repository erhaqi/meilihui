<?php
	$servername='localhost';
	$username='root';
	$password='';
	$database='commodity';
	
	$conn=new mysqli($servername,$username,$password,$database);
	
	$char=$conn->set_charset('utf8');
	
	$name=isset($_GET['Name'])?$_GET['Name']:'';
	$psw=isset($_GET['Password'])?$_GET['Password']:'';
	$cart=isset($_GET['cart'])?$_GET['cart']:'';
	//加密
	$psw=md5($psw);
	//插入用户信息
	$sql="insert into user(name,password,cart) values('$name','$psw','$cart')";
	
	//执行sql语句
	$result=$conn->query($sql);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	?>