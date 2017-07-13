<?php
	$servername='localhost';
	$username='root';
	$password='';
	$database='commodity';
	
	$conn=new mysqli($servername,$username,$password,$database);
	
	$char=$conn->set_charset('utf8');
	
	//查找用户信息
	$sql="select name,password,cart from user";
	
	$result=$conn->query($sql);
	
	$res=$result->fetch_all(MYSQLI_ASSOC);
	
	echo json_encode($res,JSON_UNESCAPED_UNICODE);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	?>