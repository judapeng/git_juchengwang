<?php



$conn=mysqli_connect("127.0.0.1",'root','123','userbase',8889);

if(!$conn){
	echo "连接失败";
}

#设置后续sql语句所用字符串
$sql="set names utf8";
$res=mysqli_query($conn,$sql);
if($res){
	echo "执行成功";
}else{
	echo "执行失败";
}
$sql="select * from usertable";
$res=mysqli_query($conn,$sql);
 echo json_encoded($res);
//	$servername = "127.0.0.1";
//	$username = "root";
//	$password = "";
//	$dbname = "rrr"; //选中数据库;
//	// 创建连接
//	$conn = mysqli_connect("127.0.0.1:8888", "root", "","rrr",3306);
//	
//	$sql="set names utf8";
//	echo $sql;
//	$res=mysqli_query($conn,$sql);
//	if($res){
//		echo "连接成功";
//	}else{
//		echo "连接失败";
//	}
	// 检测连接
//	if ($conn->connect_error) {
//	    die("连接失败: " . $conn->connect_error);
//	}	
//	echo "连接成功"
//echo "进入";

?>