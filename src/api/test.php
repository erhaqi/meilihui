<?php
	
	$servername='localhost';
	$username="root";
	$password='';
	$database='commodity';
	
	
	$conn = new mysqli($servername,$username,$password,$database);
	
	
	$conn->set_charset('utf8');
	
    $sql="select id,name,imgUrl,price,original,brand,kinds from picture";
    
    $result=$conn->query($sql);
   
    $row = $result->fetch_all(MYSQLI_ASSOC);
    $res = json_encode($row,JSON_UNESCAPED_UNICODE);
	echo $res;

?>