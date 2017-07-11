<?php
	/*
		分页获取数据：
	    * pageNo=1    
	    该地址请求多条微博信息，分页获取，pageNo指定获取第几页的数据

	    json_encode():把数组转成json字符串
	    * php5.4+ 使用JSON_UNESCAPED_UNICODE防止中文转义
	 */
	$page_no = isset($_GET['pageNo']) ? $_GET['pageNo'] : 1;

	// 每页显示数
	$qty = isset($_GET['qty']) ? $_GET['qty'] : 10;


	$file_url = '../data/mysql.json';

	// 打开文件
	$myfile = fopen($file_url, 'r');

	// 读取打开的文件
	$content = fread($myfile, filesize($file_url));

	// 把读取到的内容转成数组
	$arr_data = json_decode($content);
	//排序
    $sort=true;
	if($sort){
		rsort($arr_data);
	}
	// 根据分页截取数据
	// 1:array($arr,0,10)
	// 2:array($arr,10,10)
	// 3:array($arr,20,10)
	// 公式：($pageNo-1)*$qty,$qty
	$res = array(
		'data'=>array_slice($arr_data, ($page_no-1)*$qty,$qty),
		'qty'=>$qty,
		'total'=>count($arr_data)
	);
    
	
	// 输出json字符串
	// {"data":[],"total":29}
	echo json_encode($res,JSON_UNESCAPED_UNICODE);

	fclose($myfile);
?>