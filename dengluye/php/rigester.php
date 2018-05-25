<?php
    $usname = $_POST["username "];
    $pwd = $_POST["password"];

    require("./_connect.php");
    $pwd = md5($pwd);
    $sql = "INSERT INTO user (uname, upwd) VALUES ('{$usname}','{$pwd}')";
    echo $sql;
    $result = $conn ->query($sql);
    
?>