<?php

    $usname = $_POST["username"];
    $pwd   = $_POST["password"];
    $type  = $_POST["type"];
    //echo $type;
   if($type !== login && $type !== register){
        $res = array("error" =>"请写你要做什么");
        die(json_encode($res));
    }
    require("./_connect.php");
    $pwd = md5($pwd);
  
        $sql_login = "SELECT uname,upwd FROM user";

        $sql_register = "INSERT user(
            uname,upwd)
            VALUES
            ('{$usname}','{$pwd}')
            "; 
    
    $result_login = $conn->query($sql_login);
    $result_register = $conn->query($sql_register);
    $hasuser = FALSE;
    $select_res =FALSE;
    $haspwd = FALSE;
   // echo json_encode($result);
        while($row = $result_login->fetch_assoc()){
            if($row["uname"] == $usname){
                $hasuser = TRUE;
                if($type == "register"){
                    break;
                }
                    if($row["upwd"] == $pwd){ 
                        $select_res =json_encode($row);
                        $haspwd = TRUE;
                        break;
                }
            }

            //echo json_encode($row);
        }
        if($type == "login" && $haspwd == TRUE){
          die($select_res);
        }else if($type == "login"){
            die("0");
        }
        
        if($type == "register" && $hasuser == TRUE){
            echo "2";
        }else if($hasuser == FALSE && $result_register == TRUE){
            echo "1";
        }
?>