<?php
   header("Access-Control-Allow-Origin: *");
   // Define database connection parameters
   $hn      = '50.62.209.50';
   $un      = 'API';
   $pwd     = 'Tlaquebache!2018';
   $db      = 'tlaquebache';
   $cs      = 'utf8';

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
            $user = $_GET["user"];
            $pass = md5($_GET["pass"]);
            try {
               $stmt = $pdo->query("SELECT id FROM users WHERE username = '$user' AND password = '$pass'");
               while($row  = $stmt->fetch(PDO::FETCH_OBJ))
                  $data[] = $row;
               echo json_encode($data);
            }
            catch(PDOException $e){
               echo $e->getMessage();
            }
         break;
         case 'getReport':
            $userID = $_GET["userID"];
            if(is_numeric( $userID )){
               try {
                  $stmt = $pdo->query('SELECT * FROM reportes WHERE ciudadano_id ='.$userID);
                  while($row  = $stmt->fetch(PDO::FETCH_OBJ)) 
                     $data[] = $row;
                  echo json_encode($data);
               }
               catch(PDOException $e){
                  echo $e->getMessage();
               }
            }
         break;
         case 'setReport':
         break;
         case 'setUser':
         break;
         default:
         break;
      }
   }else{
      echo 'Me hakiatis wee!!';
   }
?>