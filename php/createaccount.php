<?php
$con=mysqli_connect("localhost","root","","OnlineExamForm");
if(mysqli_connect_error()){
    echo "Connection Error!";
}
else{
    $a=$_POST['f_n'];
    $b=$_POST['l_n'];
    $c=$_POST['email'];
    $d=$_POST['contact'];
    $e=$_POST['about'];
    $f=$_POST['pass'];
    $g=$_POST['country'];
    $h=$_POST['city'];
    $i=$_POST['work'];
    $j=$_POST['inst'];
    $k=$_POST['photo'];
    $l=$_POST['about'];
    $sql1="insert into user_info(first_name,last_name,Email,contact,password) values ('$a','$b','$c','$d','$f')";
    mysqli_query($con,$sql1);
    $sql2="insert into user_details(Email,country,city,profession,institude,photo,about) values ('$d','$g','$h','$i','$j','$k','$l') ";
    mysqli_query($con,$sql2);
    include 'recommended.html';
}
?>