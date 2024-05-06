<?php
include 'LogIn.html';
$con=mysqli_connect("localhost","id19484510_fahad","+VCk4lJLy>kEE|WJ","id19484510_onlinexam");
if(mysqli_connect_error()){
    echo "Connection Error!";
}
else{
    $p=$_POST['pass'];
    $e=$_POST['email'];
    if(!empty($e)&&!empty($p)){
    $sql1="select* from web_user_info where Email='$e' and password='$p'";
    $res=mysqli_query($con,$sql1);
    if(mysqli_num_rows($res)>0){
        $row=mysqli_fetch_assoc();
        $user=$row['Email'];  
        include 'people.html';    
    }
    else{
        echo 'password or Email is Invalid.'
    }
}
else{
    echo 'Fillup all';
}
}
?>