<?php
if(isset($_POST['submit'])){
    $to = "michal.ryciak@gmail.com"; // this is your Email address
    $from = $_POST['user_email']; // this is the sender's Email address
    $first_name = $_POST['user_name'];
    $subject = "Wiadomość z formularza strony Matplaneta";
    $message = $first_name . " napisał/a:" . "\n\n" . $_POST['user_message'];
    
    $naglowki .= "Reply-to:  ".$from."   ".PHP_EOL;
    $naglowki .= "From: biuro@maplaneta.pl ;".PHP_EOL;
    $naglowki .= "MIME-Version: 1.0".PHP_EOL;
    $naglowki .= "Content-type: text/html; charset=utf-8".PHP_EOL; 
    mail($to,$subject,$message,$naglowki);
    mail($from, $subject, $message,$naglowki);
    }
?>