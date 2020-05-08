<?php 

if (isset($_POST['submit'])) {
 $name = $_POST['SendFormName'];
 $mailFrom = $_POST['SendFormEmail'];
 $message = $_POST['SendFormMessage'];

 $mailTo = "ajg162@pitt.edu";
 $headers = "From: ".$mailFrom;
 $txt = 'You have received an e-mail from '.$name.".\n\n".$message;

 mail($mailTo, $txt, $headers);
 header('Location: index.php?mailsend');
}