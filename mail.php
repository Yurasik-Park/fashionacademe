<?php

$recepient = "Swivt888@gmail.com";
$sitename = "FASHIONACADEME.com";

$name = trim($_POST["name"]);
$surname = trim($_POST["surname"]);
$birth = trim($_POST["birth"]);
$height = trim($_POST["height"]);
$bust = trim($_POST["bust"]);
$waist = trim($_POST["waist"]);
$hips = trim($_POST["hips"]);
$hair = trim($_POST["hair"]);
$eyes = trim($_POST["eyes"]);
$country = trim($_POST["country"]);
$city = trim($_POST["city"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$socials = trim($_POST["socials"]);
$choose = trim($_POST["choice"]);

$message = "Имя: $name \nФамилия: $surname \nДата Рождения: $birth \nРост: $height
            \nБюст: $bust \nТалия: $waist \nБедра: $hips \nЦвет волос: $hair
            \nГлаза: $eyes \nСтрана: $country \nГород: $city \nТел: $phone
            \nПочта: $email \nСоц сети: $socials \nВыбор: $choose";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
