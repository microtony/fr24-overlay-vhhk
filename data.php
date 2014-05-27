<?php
$callback = $_GET['callback'];
if (!preg_match('/^[a-zA-z0-9_]+$/', $callback)) die();
header("Content-Type: application/javascript");
if (time() - filemtime("cache.txt") < 300 && filesize("cache.txt") != 0) {
  echo $callback.file_get_contents("cache.txt");
  die();
}

$atis = file_get_contents("http://www.weather.gov.hk/aviat/atis.htm");
$a = strpos($atis, "A-TITLE");
$b = strpos($atis, "D-ACK");
$c = $b - $a;
$substr = substr($atis, $a, $c);
$r07 = substr_count($substr, "07L") + substr_count($substr, "07R");
$r25 = substr_count($substr, "25L") + substr_count($substr, "25R");
if ($r07 >= $r25) {
    if ((time()+3600)%86400 > 57600) {
        $runway = "2";
    } else {
        $runway = "1";
    }
} else {
    $runway = "3";
}

$icecast = file_get_contents("http://localhost:8000/status.xsl");
preg_match_all('/Mount Point \/(\d\d\d\d\d\d)\\.mp3/m', $icecast, $matches);
$return = "({\"runway\":$runway,\"atc\":[".implode(",",$matches[1])."]});";
file_put_contents("cache.txt", $return);
echo $callback.$return;
?>