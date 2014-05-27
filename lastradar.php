<?php
header("Content-Type: image/png");
if (time() - filemtime("cache.png") < 60 && filesize("cache.png") != 0) {
  readfile("cache.png");
  die();
}

$data = file_get_contents("http://www.weather.gov.hk/wxinfo/radars/radar_256_kml/server_Radar_256.kml");
preg_match("/<href>(\d+)_rad_256\.png<\/href>/", $data, $matches);
$img = file_get_contents("http://www.weather.gov.hk/wxinfo/radars/radar_256_kml/".$matches[1]."_rad_256.png");
$date = DateTime::createFromFormat("YmdHis", $matches[1]);
$gd = imagecreatefromstring($img);
$white = imagecolorallocate($gd, 255, 255, 255);
imagestring($gd, 3, 2, 2, "Hong Kong Observatory 256km weather radar", $white);
imagestring($gd, 3, 2, 18, "Time: ".$date->format("Y-m-d H:i:s")." HKT", $white);
imagestring($gd, 3, 594, 706, "Time: ".$date->format("Y-m-d H:i:s")." HKT", $white);
imagestring($gd, 3, 510, 722, "Hong Kong Observatory 256km weather radar", $white);
imagesavealpha($gd, true);
imagepng($gd, "cache.png");
readfile("cache.png");
?>