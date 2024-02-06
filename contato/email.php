<?php

if (isset($_POST['email']) && !empty($_POST['email'])) {
    $nome = addslashes($_POST['name']);
    $email = addslashes($_POST['email']);
    $mensagem = addslashes($_POST['mesage']);

 $to = "devmateuslima@outlook.com"
 $subject = "Contato - Bridge A.D"
 $body = "Nome:".$nome."\n"
         "Email:".$email."\n"
         "Mensagem:".$mensagem."\n"


$header = "From:mateu.slima@outlook.com"."\r"\n
."Reply-to:".$email."\e\n"
."X=Mailer:PHP/".phpversion();

if(mail($to,$subject,$body,$header)){

    echo("Email enviado com sucesso");
}else{
    echo("o Emailnão pode ser enviado ");
}

}

?>
