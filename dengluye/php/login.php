<?php
    require("./_connect.php");
    //echo $conn;
    $username = @$_POST["username"];
    $pwd = @$_POST["password"];
    if($username == "" || $pwd == ""){
       // die("0");
    }
    $sql = "SELECT uname,upwd  FROM user" ;
    $result = $conn ->query($sql);

    //echo $result->num_rows;
    if($result->num_rows <= 0){
        die("0");
    }
    while($row = $result->fetch_assoc()){
        //echo json_encode($row);
        if($row["uname"] == $username && $row["upwd"] == $pwd){
            die(json_encode($row));
        }
    }
    die("0")
?>