
<?php
    header('Access-Control-Allow-Origin:*');
    header('Content-type:text/json');
    $userName=isset($_GET["username"])?$_GET["username"]:"未发送username";
    $userPassword=isset($_GET["userPassword"])?$_GET["userPassword"]:"未发送userPassword";
    $person=array(
        "username"=>$userName,
        "userPassword"=>$userPassword
    );
    echo json_encode($person);
?>