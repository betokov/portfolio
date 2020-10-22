<?php
require_once 'SwiftMailer/vendor/autoload.php';

$name = $_POST['name'];
$email = $_POST['email'];
$sendmessage = "<b>Имя: </b>".$name.".<br>"."<b>Email: </b>".$email.".<br>"."<b>Сообщение: </b>".$_POST['message'];

try {

	$transport = (new Swift_SmtpTransport('smtp.mail.ru', 465, 'ssl'))
	->setUsername('betokov93@mail.ru')
	->setPassword('w5]4=^R0')
	;

	$mailer = new Swift_Mailer($transport);

    // Создание сообщения
	$message = (new Swift_Message('Сообщение с сайта sabr.su'))//Заголовок сообщения

	->setFrom(['betokov93@mail.ru' => 'Betokov Barasbi'])//От кого (должен совпадать с setUsername)
	->setTo(['web_masters_07@mail.ru' /*,'amra_sk@mail.ru'*/ => 'Барасби'])//Куда придет сообщение(можно указать несколько)
	->setBody($sendmessage, 'text/html')//Тело сообщения (или переменную или текст)
	;


	//Отправка файлов
	//$message->attach(Swift_Attachment::fromPath($_FILES['files']['tmp_name'])->setFilename($_FILES['files']['name']));


    // Отправка сообщения
	$mailer->send($message);

}
catch (Exception $ex) {
    //Получить текст ошибки
	echo $ex ->getMessage();
}

echo $name;