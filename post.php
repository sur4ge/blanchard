<?php
$name = $_POST['name'];
$tel = $_POST['tel'];
$name = htmlspecialchars($fio);
$tel = htmlspecialchars($email);
$name = urldecode($fio);
$tel = urldecode($email);
$name = trim($fio);
$tel = trim($email);
if (mail("midpitbull1488@Gmal.com", "Заявка с сайта", "Имя:".$name.". Телефон: ".$tel ,"From: midpitbull1488@Gmail.com \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>