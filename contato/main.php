<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $assunto = $_POST["assunto"];
    $mensagem = $_POST["mensagem"];

    $to = "contato@bridgeassessoria.com"; 
    $subject = "Novo Formulário de Contato - $assunto";
    $message = "Nome: $nome\n";
    $message .= "E-mail: $email\n";
    $message .= "Assunto: $assunto\n\n";
    $message .= "Mensagem:\n$mensagem";

    $headers = "From: $email";

    // Use a função mail() para enviar o e-mail
    if (mail($to, $subject, $message, $headers)) {
        echo "E-mail enviado com sucesso!";
    } else {
        echo "Erro ao enviar o e-mail.";
    }
}
