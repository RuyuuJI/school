<?php
$user = $_POST['user'];
$password = $_POST['password'];
if($user =='gap' && $password=='123'){
    echo'("result":true")';
}else{
    echo'("result":false)'
}
