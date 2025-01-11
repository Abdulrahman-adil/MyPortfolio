<?php 
 // Connect to database  
 $servername = "localhost";
 $username = "u400292749_abdo";
 $password = "Admin6000";
 $database = "u400292749_products";
 // stablish connection 
 $connection = new mysqli($servername, $username, $password,$database);

 // Check Connection
 if ($connection->connect_error){
   die("Connection failed: " . $connection->connect_error);
 }
?>