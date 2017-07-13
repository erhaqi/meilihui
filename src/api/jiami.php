<?php
    
	//前端数据
	$psw=isset($_GET['Password'])?$_GET['Password']:'';
	//前端返回密码加密匹配
	
	$psw=md5($psw);

    echo $psw;







?>