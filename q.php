<?php
   header("Access-Control-Allow-Origin: *");

   $hn      = '162.241.2.158';
   $un      = 'tlaqueb1_API';
   $pwd     = 'Tlaquebache!2018';
   $db      = 'tlaqueb1_tlaquebache';
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
            if( isset($_GET["user"]) && isset($_GET["pass"]) ){
               $user = md5($_GET["user"]);
               $pass = md5($_GET["pass"]);
               try {
                  $stmt = $pdo->query("SELECT USER_ID,TYPE FROM users WHERE USR='$user' AND PSS = '$pass'");
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
                  if( $pdo->query("INSERT INTO users (USR, PSS) VALUES ('$user', '$pass')") === TRUE){
                     $stmt = $pdo->query("SELECT USER_ID FROM users WHERE USR = '$user' AND password = '$pass'");
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
            
         break;
         case 'getReport':
            $userID = $_GET["userID"];
            if(is_numeric( $userID )){
               try {
                  $stmt = $pdo->query('SELECT * FROM reportes WHERE USERID ='.$userID);
                  while($row  = $stmt->fetch(PDO::FETCH_OBJ)) 
                     $data[] = $row;
                  echo json_encode($data);
               }
               catch(PDOException $e){
                  echo $e->getMessage();
               }
            }
         break;
            case 'getWorkerReport':
            $userID = $_GET["userID"];
            $idEquipo = 0;
            if(is_numeric( $userID )){
               try {
                  foreach ($pdo->query("SELECT ID_EQUIPO FROM obreros WHERE USERID=$userID") as $row) {
                     $idEquipo = str_replace('{"ID_EQUIPO":','',strval(json_encode($row)));
                     $idEquipo = str_replace('}','',$idEquipo);
                  }
                  $stmt = $pdo->query("SELECT * FROM reportes WHERE STATUS='A' AND ID_EQUIPO='$idEquipo'");
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
            $USERID = $_GET["USERID"];
            $CALLE = $_GET["CALLE"];
            $CRUCE1 = $_GET["CRUCE1"];
            $CRUCE2 = $_GET["CRUCE2"];
            $COLONIA = $_GET["COLONIA"];
            $TIPO_SUELO = $_GET["TIPO_SUELO"];
            $VIALIDAD = $_GET["VIALIDAD"];
            #aqui fue donde joel con crueldad absoluta y total indiferencia sacrifico
            # el proyecto undiendo a belen para salbar su propia materia con la frace "y lo volveria a haer"
            foreach ($pdo->query("SELECT PESO FROM reportes WHERE CALLE='$CALLE' and CRUCE1='$CRUCE1' and CRUCE2='$CRUCE2' and COLONIA='$COLONIA' and TIPO_SUELO='$TIPO_SUELO'") as $row) {
               $PESO = str_replace('{"ID_EQUIPO":','',strval(json_encode($row)));
               $PESO = (int)str_replace('}','',$PESO)+1;
            }
            if( $PESO > 0 ){
               if( $pdo->query("UPDATE reportes set PESO='$PESO' where CALLE='$CALLE' and CRUCE1='$CRUCE1' and CRUCE2='$CRUCE2' and COLONIA='$COLONIA'") === TRUE){
                  echo json_encode('{done}');
               }
            }else
               try {
                  if( $pdo->query("INSERT INTO reportes (USERID,CALLE,CRUCE1,CRUCE2,COLONIA,TIPO_SUELO,PESO,VIALIDAD) VALUES ('$USERID','$CALLE','$CRUCE1','$CRUCE2','$COLONIA','$TIPO_SUELO',1,'$VIALIDAD')") === TRUE){
                     echo json_encode('{done}');
                  }
               }
               catch(PDOException $e){
                  echo $e->getMessage();
               }
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