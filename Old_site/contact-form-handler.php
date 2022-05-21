<?php
  $name = $_Post['name'];
  $visitor_email = $_Post['email'];
  $message = $_Post['message'];


  $email_from = 'contacto@juanpaulo.xyz';

  $email_subject = "$name wants to contact with you";

  $email_body = "$name wrote: \n \n $message \n Conact info: $visitor_email";


  $to = "maclenn77@gmail.com";

  $headers = "From: $email_from \r\n";

  $headers .= "Reply-To: $visitor_email \r\n";

  mail($to, $email_subject, $email_body,$headers);

  header("Location: index.html");

  if ($mail) {
    echo "<h4> Message sent!</h4>";
  }

?>
