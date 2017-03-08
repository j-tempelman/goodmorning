<?php
$hours = date('H');
$minutes = date('i');
$seconds = date('s');

/* Achtergrond regel */
                if ($hours >= 00 && $hours < 06) $background = "bgnight";
                else if ($hours >= 06 && $hours < 12) $background = "bgmorning";
                else if ($hours >= 12 && $hours < 18) $background = "bgafternoon" ;
                else $background = "bgevening";
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Raleway:600,700|Ubuntu:500,700" rel="stylesheet">
</head>

<body class="<?php echo $background; ?>">
 <div class="message">
        <?php
        echo"<span id='daytime'></span>";
        echo"<div class='time'>Het is nu <span id='hours'></span>:<span id='minutes'></span><span id='seconds'></span></div>";
        ?>
    </div>


 <script>
     <?php echo"var hours = $hours;";
           echo"var minutes = $minutes;";
           echo"var seconds = $seconds;";?>
 </script>
 <script src="js/time.js"></script>
</body>


</html>


