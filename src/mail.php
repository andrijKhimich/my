<?php
    error_reporting(0);
    $from = "Повідомлення-із-сайту";
    $recepient = 'me@khimich.dev';
    $sitename = 'khimich.dev';
  if (isset($_POST['name'])) {
    if (!empty($_POST['name'])){
    $name = strip_tags($_POST['name']);
    }
  }
  if (isset($_POST['email'])) {
    if (!empty($_POST['email'])){
    $email = strip_tags($_POST['email']);
    }
  }
  if (isset($_POST['message'])) {
    if (!empty($_POST['message'])){
    $text = strip_tags($_POST['message']);
    }
  }
    $pagetitle = 'Повідомлення з сайту ';
    $pagetitle .=  $sitename;
    $message = '<p><strong>Name:</strong>' . $name . '</p>
    <p><strong>Email:</strong>' . $email . '</p>
    <p><strong>Message:</strong>' . $text. '</p>';
    
  mail($recepient, $pagetitle, $message, "From: $from\nContent-type: text/html; charset=utf-8 \r\n"); 
?>