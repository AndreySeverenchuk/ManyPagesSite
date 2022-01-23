<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-6.5.3/srs/Exception.php';
require 'PHPMailer-6.5.3/srs/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'PHPMailer-6.5.3/language/');
$mail->IsHTML(true);

$mail->setFrom('severandy21@gmail.com', 'Mailer');
$mail->addAddress('severandy21@gmail.com', 'AndySever');
$mail->Subject = 'с сайта ManyPagesSite';

$body = '<h1>Письмо с сайта ManyPagesSite</h1>'
if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>;
}
if(trim(!empty($_POST['email']))){
    $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>;
}
if(trim(!empty($_POST['text']))){
    $body.='<p><strong>Сообщение:</strong> '.$_POST['text'].'</p>;
}

$mail->Body = $body;

if(!$mail->send()) {
    $message = 'Ошибка';
}
else {
    $message = 'Данные отправлены';
}

$response = ['message' => $message];
header('Content-type: application/json');
echo json_encode($response);