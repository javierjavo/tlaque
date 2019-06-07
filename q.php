<?php
   header("Access-Control-Allow-Origin: *");
   // Define headers & database connection parameters
   use PHPMailer\PHPMailer\PHPMailer;
   use PHPMailer\PHPMailer\Exception;

   require '<path/to/PHPMailer/src/Exception.php';
   require 'path/to/PHPMailer/src/PHPMailer.php';
   require 'path/to/PHPMailer/src/SMTP.php';

   $hn      = '162.241.2.158';
   $un      = 'tlaqueb1_API';
   $pwd     = 'Tlaquebache!2018';
   $db      = 'tlaqueb1_tlaquebache';
   $cs      = 'utf8';

   $mail = new PHPMailer(true);
   $mail->SMTPDebug = 3; 
   $mail->isSMTP("mail.tlaquebache.com.mx"); 
   $mail->Username = 'Tu correo de admin aqui'; 
   $mail->Password = 'Mala practica pero tu contraseña de admin aqui';
   $mail->SMTPSecure = 'tls';
   $mail->Port = 587;
   $mail->setFrom('Tlaquebache System recovery', 'Account Manager');

   $dsn 	= "mysql:host=" . $hn . ";port=3306;dbname=" . $db . ";charset=" . $cs;
   $opt 	= array(
               PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
               PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ,
               PDO::ATTR_EMULATE_PREPARES   => false,
            );
   $pdo 	= new PDO($dsn, $un, $pwd, $opt);
   $data = array();
   
   if(isset( $_GET["key"] )){
      switch($_GET["key"]){
         case 'login':
            if( isset($_GET["user"]) && isset($_GET["pass"]) ){
               $user = md5($_GET["user"]);
               $pass = md5($_GET["pass"]);
               try {
                  $stmt = $pdo->query("SELECT USER_ID FROM USER WHERE username = '$user' AND password = '$pass'");
                  while($row  = $stmt->fetch(PDO::FETCH_OBJ))
                     $data[] = $row;
                  echo json_encode($data);
               }
               catch(PDOException $e){
                  echo $e->getMessage();
               }
            }
         break;
         case 'addUser':
            if( isset($_GET["user"]) && isset($_GET["pass"]) ){
               $user = md5($_GET["user"]);
               $pass = md5($_GET["pass"]);
               try {
                  if( $pdo->query("INSERT INTO USER (USR, PSS) VALUES ('$user', '$pass')") === TRUE){
                     $stmt = $pdo->query("SELECT USER_ID FROM USER WHERE USR = '$user' AND password = '$pass'");
                     while($row  = $stmt->fetch(PDO::FETCH_OBJ))
                        $data[] = $row;
                     echo json_encode($data);
                  }
               }
               catch(PDOException $e){
                  echo $e->getMessage();
               }
            }
         break;
         case 'getPriority':
            $peso = 0;
            $daytime = 1;
            $peso = (($daytime/7)*$peso)+$peso;
         break;
         case 'recoverPassword':

         break;
         case 'changePassword':
            $token = chr(rand(65,90)) . chr(rand(65,90)) . chr(rand(65,90)) . chr(rand(65,90)) . chr(rand(65,90));
            /* 
               Algotrithm:
               Ask for user account (mail)
               Send mail with token for recovery
               Redirect from mail to a recover page
               Show form with 3 boxes (Enter token, Enter new pass and Retype new pass)
               Submit button
               Redirect to a login form
            */
            $pdoMail->query("SELECT USR FROM USER WHERE USR = ".$user);
            $mail->addAddress($user);
            $mail->Subject = 'Password Reset Request';
            $mail->Body = '<div style="top: 20%; left: 20%;">This is your token requested to reset your password</div>
                           <div style="top: 30%; left: 20%;">'.$token.'</div>';
            $mail->AltBody = 'This is your token requested to reset your password, in case you have not made this request just ignore this mail';
         break;
         case 'getReport':
            $userID = $_GET["userID"];
            if(is_numeric( $userID )){
               try {
                  $stmt = $pdo->query('SELECT * FROM REPORTES WHERE USERID ='.$userID);
                  while($row  = $stmt->fetch(PDO::FETCH_OBJ)) 
                     $data[] = $row;
                  echo json_encode($data);
               }
               catch(PDOException $e){
                  echo $e->getMessage();
               }
            }
         break;
         case 'addReport':
            
         break;
         case 'sql':
            $query = $_GET["query"];
            try {
               if(strpos($query,'select')){
                  $stmt = $pdo->query($query);
                  while($row  = $stmt->fetch(PDO::FETCH_OBJ)) 
                     $data[] = $row;
                  echo json_encode($data);
               }else{
                  if( $pdo->query($query) === TRUE){
                     echo json_encode('done');
                  }
               }
            }
            catch(PDOException $e){
               echo $e->getMessage();
            }
         break;
         default:
         break;
      }
   }else{
      echo 'Me hakiatis wee!!';
   }
?>